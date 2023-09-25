import { MermaidOptions } from "./index.js";
import { Graph, GraphImage, MermaidToExcalidrawResult } from "./interfaces.js";
export declare const graphToExcalidraw: (graph: Graph | GraphImage, options?: MermaidOptions) => MermaidToExcalidrawResult;
