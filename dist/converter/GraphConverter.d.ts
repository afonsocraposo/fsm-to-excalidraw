import { MermaidOptions } from "../index.js";
import { Graph, MermaidToExcalidrawResult } from "../interfaces.js";
export declare class GraphConverter<T = Graph> {
    private converter;
    constructor({ converter, }: {
        converter: (graph: T, options: Required<MermaidOptions>) => MermaidToExcalidrawResult;
    });
    convert: (graph: T, options: MermaidOptions) => MermaidToExcalidrawResult;
}
