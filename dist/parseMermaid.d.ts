import { Graph, GraphImage } from "./interfaces.js";
import { MermaidOptions } from "./index.js";
export declare const parseMermaid: (definition: string, options?: MermaidOptions) => Promise<Graph | GraphImage>;
