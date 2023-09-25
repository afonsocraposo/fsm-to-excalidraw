export const parsePython = (definition) => {
  // let mermaid: string = "graph TD;";
  const transitions_map = {};
  let state_transitions = {};
  let state_name = "";

  const lines = definition.split("\n");
  for (const line of lines.reverse()) {
    // check if line is a state
    const state = line.match(/def (.*)\(/);
    if (state) {
      state_transitions = {};
      state_name = state[1];
    } else {
      // check if line is a transition
      const transition = line.match(/@transition\((.*)\)/);
      if (transition) {
        const regex =
          /@transition\s*\(\s*(?:trigger\s*=\s*)?['"]?([^'"\s,]+)['"]?,\s*(?:target\s*=\s*)?['"]?([^'"\s,]+)['"]?\)/g;
        const match = regex.exec(line);
        if (!match) {
          throw new Error(`Invalid transition: ${line}`);
        }
        const trigger = match[1];
        const target = match[2];
        state_transitions[trigger] = target;
      } else {
        if (state_name) {
          transitions_map[state_name] = state_transitions;
        }
      }
    }
  }
  return transitions_map;
};

function getHash(string) {
  let hash = 0;
  if (string.length === 0) {
    return hash;
  }

  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }

  // Apply a bitwise AND operation with a mask to ensure non-negativity
  return hash >>> 0;
}

export const generateMermaid = (transitions_map) => {
  const getCircle = (state) => `h${getHash(state)}((${state}))`;
  const getArrow = (trigger) => ` -- ${trigger} --> `;

  let mermaidTxt = "graph TD;\n";
  for (const [state, transitions] of Object.entries(transitions_map)) {
    for (const [trigger, target] of Object.entries(transitions)) {
      let transition = "";

      transition += getCircle(state);
      if (trigger !== "None") {
        transition += getArrow(trigger);
      } else {
        transition += " --> ";
      }

      transition += getCircle(target);

      mermaidTxt += `\t${transition};\n`;
    }
  }

  return mermaidTxt;
};

const FOUR_SPACES = "    ";

export function parseExcalidraw(elements) {
  const transitionsMap = {};
  const transitionElements = elements.filter(
    (element) => element.type === "arrow"
  );

  const idToText = elements
    .filter((element) => element.type === "text")
    .reduce((acc, element) => {
      // get text and remove new line characters
      acc[element.id] = element.text.replace(/(\n)/gm, "");
      return acc;
    }, {});

  const idToState = elements
    .filter((element) => element.type === "ellipse")
    .reduce((acc, element) => {
      acc[element.id] = element;
      return acc;
    }, {});

  const idToStateName = {};
  for (const [stateId, state] of Object.entries(idToState)) {
    let stateNameId = null;
    for (const boundElement of state.boundElements) {
      if (boundElement.type === "text") {
        stateNameId = boundElement.id;
        break;
      }
    }
    const stateName = idToText[stateNameId] || stateId;
    idToStateName[stateId] = stateName;
  }

  for (const transition of transitionElements) {
    const stateId = transition.startBinding.elementId;
    const targetId = transition.endBinding.elementId;
    let triggerId = null;
    for (const element of transition.boundElements || []) {
      if (element.type === "text") {
        triggerId = element.id;
        break;
      }
    }
    if (!transitionsMap[stateId]) {
      transitionsMap[stateId] = {};
    }
    transitionsMap[stateId][triggerId] = targetId;
  }

  for (const [stateId, stateTransitions] of Object.entries(transitionsMap)) {
    for (const [triggerId, targetId] of Object.entries(stateTransitions)) {
      const trigger = idToText[triggerId];
      const target = idToStateName[targetId];
      if (target) {
        stateTransitions[triggerId] = target;
      }
      if (trigger) {
        stateTransitions[trigger] = stateTransitions[triggerId];
      } else {
        stateTransitions.None = stateTransitions[triggerId];
      }
      delete stateTransitions[triggerId];
    }
    const stateName = idToStateName[stateId];
    if (stateName) {
      transitionsMap[stateName] = transitionsMap[stateId];
      delete transitionsMap[stateId];
    }
  }

  return transitionsMap;
}

export function generatePython(transitionsMap, className = "FSM") {
  let code = `class ${className}:\n`;
  for (const [state, transitions] of Object.entries(transitionsMap).reverse()) {
    for (let [trigger, target] of Object.entries(transitions)) {
      if (trigger && trigger !== "None") {
        trigger = `'${trigger}'`;
      }
      if (target) {
        target = `'${target}'`;
      }
      code += `${FOUR_SPACES}@transition(trigger=${trigger}, target=${target})\n`;
    }
    code += `${FOUR_SPACES}def ${state}():\n`;
    code += `${FOUR_SPACES}${FOUR_SPACES}// TODO: Implement the state logic\n`;
    code += `${FOUR_SPACES}\n`;
  }

  return code.slice(0, -2);
}
