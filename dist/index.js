import { graphToExcalidraw } from "./graphToExcalidraw.js";
import { parseMermaid } from "./parseMermaid.js";
const parseMermaidToExcalidraw = async (definition, options = {}) => {
    const parsedMermaidData = await parseMermaid(definition, options);
    const excalidrawElements = graphToExcalidraw(parsedMermaidData, options);
    return excalidrawElements;
};
export { parseMermaidToExcalidraw };
