import { Arrowhead, ExcalidrawTextElement } from "@excalidraw/excalidraw/types/element/types.js";
import { Edge, Graph, SubGraph, Vertex } from "../interfaces.js";
import { ExcalidrawVertexElement } from "../types.js";
import { Mutable } from "@excalidraw/excalidraw/types/utility-types.js";
/**
 * Compute groupIds for each element
 */
export declare const computeGroupIds: (graph: Graph) => {
    getGroupIds: (elementId: string) => string[];
    getParentId: (elementId: string) => string | null;
};
interface ArrowType {
    startArrowhead?: Arrowhead;
    endArrowhead?: Arrowhead;
}
export declare const computeExcalidrawArrowType: (mermaidArrowType: string) => ArrowType;
export declare const getText: (element: Vertex | Edge | SubGraph) => string;
/**
 * Compute style for vertex
 */
export declare const computeExcalidrawVertexStyle: (style: Vertex["containerStyle"]) => Partial<Mutable<ExcalidrawVertexElement>>;
/**
 * Compute style for label
 */
export declare const computeExcalidrawVertexLabelStyle: (style: Vertex["labelStyle"]) => Partial<Mutable<ExcalidrawTextElement>>;
export {};
