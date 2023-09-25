import {
  BinaryFiles,
  ExcalidrawImperativeAPI,
} from "@excalidraw/excalidraw/types/types.js";
import { ExcalidrawElementSkeleton } from "@excalidraw/excalidraw/types/data/transform.js";
import { parseExcalidraw, generatePython } from "../src/parsePython.js";

interface ExcalidrawWrapperProps {
  elements: ExcalidrawElementSkeleton[];
  files?: BinaryFiles;
}

const { Excalidraw, convertToExcalidrawElements } = ExcalidrawLib;
const ExcalidrawWrapper = (props: ExcalidrawWrapperProps) => {
  const excalidrawRef = React.useRef(null);

  const handleButtonClick = () => {
    if (excalidrawRef.current) {
      const elements = (
        excalidrawRef.current as ExcalidrawImperativeAPI
      ).getSceneElements();
      if (elements) {
        const transitionsMap = parseExcalidraw(elements);
        const pythonCode = generatePython(transitionsMap);
        const pythonInput = document.getElementById(
          "python-input"
        ) as HTMLInputElement;
        pythonInput.value = pythonCode;
      }
    }
  };
  const myButton = document.getElementById("generate-excalidraw-btn");
  if (myButton) {
    myButton.onclick = handleButtonClick;
  }

  React.useEffect(() => {
    if (!props.elements || !excalidrawRef.current) {
      return;
    }

    const excalidrawAPI = excalidrawRef.current as ExcalidrawImperativeAPI;
    excalidrawAPI.updateScene({
      elements: convertToExcalidrawElements(props.elements),
    });
    excalidrawAPI.scrollToContent(excalidrawAPI.getSceneElements(), {
      fitToContent: true,
    });
  }, [props.elements]);

  React.useEffect(() => {
    if (!props.files || !excalidrawRef.current) {
      return;
    }

    const excalidrawAPI = excalidrawRef.current as ExcalidrawImperativeAPI;
    excalidrawAPI.addFiles(Object.values(props.files));
  }, [props.files]);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        className: "excalidraw-wrapper",
      },
      React.createElement(Excalidraw, {
        initialData: {
          appState: {
            viewBackgroundColor: "#fafafa",
            currentItemFontFamily: 1,
          },
        },
        ref: excalidrawRef,
      })
    )
  );
};

export default ExcalidrawWrapper;
