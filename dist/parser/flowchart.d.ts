import { Graph } from "../interfaces.js";
import { Diagram } from "mermaid/dist/Diagram.js";
export declare const parseMermaidFlowChartDiagram: (diagram: Diagram, containerEl: Element) => Graph;
