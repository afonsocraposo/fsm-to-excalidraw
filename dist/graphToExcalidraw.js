import { FlowchartToExcalidrawSkeletonConverter } from "./converter/types/flowchart.js";
import { GraphImageConverter } from "./converter/types/graphImage.js";
export const graphToExcalidraw = (graph, options = {}) => {
    switch (graph.type) {
        case "graphImage": {
            return GraphImageConverter.convert(graph, options);
        }
        case "flowchart": {
            return FlowchartToExcalidrawSkeletonConverter.convert(graph, options);
        }
        default: {
            throw new Error(`graphToExcalidraw: unknown graph type "${graph.type}, only flowcharts are supported!"`);
        }
    }
};
