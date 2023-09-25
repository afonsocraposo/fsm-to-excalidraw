import mermaid from "mermaid";
import { serializeAsJSON } from "@excalidraw/excalidraw";
import { parseMermaid } from "../src/parseMermaid.js";
import { renderExcalidraw } from "./initExcalidraw.js";
import { parsePython, generateMermaid } from "../src/parsePython.js";

const customTestEl = document.getElementById("custom-test")!;
const btn = document.getElementById("render-excalidraw-btn")!;
const btn_generate = document.getElementById("generate-excalidraw-btn")!;
const errorEl = customTestEl.querySelector("#error")!;

// Handle render to Excalidraw event
btn.addEventListener("click", async () => {
  errorEl.setAttribute("style", "display: none");

  try {
    const pythonInput = document.getElementById(
      "python-input"
    ) as HTMLInputElement;
    const fontSizeInput = document.getElementById(
      "font-size-input"
    ) as HTMLInputElement;

    const pythonDefinition = pythonInput.value;
    const transitions_map = parsePython(pythonDefinition);
    const diagramDefinition = generateMermaid(transitions_map);

    const customFontSize = Number(fontSizeInput.value);

    // Parse Mermaid diagram and render to Excalidraw
    const parsedData = await parseMermaid(diagramDefinition, {
      fontSize: customFontSize,
    });

    const parsedDataEl = document.getElementById("custom-parsed-data")!;
    parsedDataEl.parentElement!.style.display = "block";
    parsedDataEl.innerText = JSON.stringify(parsedData, null, 2);

    renderExcalidraw(JSON.stringify(parsedData), customFontSize);
  } catch (e) {
    errorEl.setAttribute("style", "display: block");
    errorEl.innerHTML = String(e);
    console.error("Custom Test Error:", e);
  }
});
