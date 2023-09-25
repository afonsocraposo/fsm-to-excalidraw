import { CONTAINER_STYLE_PROPERTY, LABEL_STYLE_PROPERTY, } from "../interfaces.js";
import { removeMarkdown } from "@excalidraw/markdown-to-text";
/**
 * Compute groupIds for each element
 */
export const computeGroupIds = (graph) => {
    // Parse the diagram into a tree for rendering and grouping
    const tree = {};
    graph.subGraphs.map((subGraph) => {
        subGraph.nodeIds.forEach((nodeId) => {
            tree[subGraph.id] = {
                id: subGraph.id,
                parent: null,
                isLeaf: false,
            };
            tree[nodeId] = {
                id: nodeId,
                parent: subGraph.id,
                isLeaf: graph.vertices[nodeId] !== undefined,
            };
        });
    });
    const mapper = {};
    [...Object.keys(graph.vertices), ...graph.subGraphs.map((c) => c.id)].forEach((id) => {
        if (!tree[id]) {
            return;
        }
        let curr = tree[id];
        const groupIds = [];
        if (!curr.isLeaf) {
            groupIds.push(`subgraph_group_${curr.id}`);
        }
        while (true) {
            if (curr.parent) {
                groupIds.push(`subgraph_group_${curr.parent}`);
                curr = tree[curr.parent];
            }
            else {
                break;
            }
        }
        mapper[id] = groupIds;
    });
    return {
        getGroupIds: (elementId) => {
            return mapper[elementId] || [];
        },
        getParentId: (elementId) => {
            return tree[elementId] ? tree[elementId].parent : null;
        },
    };
};
/**
 * Convert mermaid edge type to Excalidraw arrow type
 */
const MERMAID_EDGE_TYPE_MAPPER = {
    arrow_circle: {
        endArrowhead: "dot",
    },
    arrow_cross: {
        endArrowhead: "bar",
    },
    double_arrow_circle: {
        endArrowhead: "dot",
        startArrowhead: "dot",
    },
    double_arrow_cross: {
        endArrowhead: "bar",
        startArrowhead: "bar",
    },
    double_arrow_point: {
        endArrowhead: "arrow",
        startArrowhead: "arrow",
    },
};
export const computeExcalidrawArrowType = (mermaidArrowType) => {
    return MERMAID_EDGE_TYPE_MAPPER[mermaidArrowType];
};
// Get text from graph elements, fallback markdown to text
export const getText = (element) => {
    let text = element.text;
    if (element.labelType === "markdown") {
        text = removeMarkdown(element.text);
    }
    return removeFontAwesomeIcons(text);
};
/**
 * Remove font awesome icons support from text
 */
const removeFontAwesomeIcons = (input) => {
    const fontAwesomeRegex = /\s?(fa|fab):[a-zA-Z0-9-]+/g;
    return input.replace(fontAwesomeRegex, "");
};
/**
 * Compute style for vertex
 */
export const computeExcalidrawVertexStyle = (style) => {
    const excalidrawProperty = {};
    Object.keys(style).forEach((property) => {
        switch (property) {
            case CONTAINER_STYLE_PROPERTY.FILL: {
                excalidrawProperty.backgroundColor = style[property];
                excalidrawProperty.fillStyle = "solid";
                break;
            }
            case CONTAINER_STYLE_PROPERTY.STROKE: {
                excalidrawProperty.strokeColor = style[property];
                break;
            }
            case CONTAINER_STYLE_PROPERTY.STROKE_WIDTH: {
                excalidrawProperty.strokeWidth = Number(style[property]?.split("px")[0]);
                break;
            }
            case CONTAINER_STYLE_PROPERTY.STROKE_DASHARRAY: {
                excalidrawProperty.strokeStyle = "dashed";
                break;
            }
        }
    });
    return excalidrawProperty;
};
/**
 * Compute style for label
 */
export const computeExcalidrawVertexLabelStyle = (style) => {
    const excalidrawProperty = {};
    Object.keys(style).forEach((property) => {
        switch (property) {
            case LABEL_STYLE_PROPERTY.COLOR: {
                excalidrawProperty.strokeColor = style[property];
                break;
            }
        }
    });
    return excalidrawProperty;
};
