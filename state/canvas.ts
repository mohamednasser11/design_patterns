import { Tool } from "./tool";

export class Canvas {
  private currentTool: Tool;
  constructor(currentTool: Tool) {
    this.currentTool = currentTool;
  }
  
  setTool(currentActiveTool: Tool) {
    this.currentTool = currentActiveTool;
  }
  
  mouseUp() {
    this.currentTool.mouseUp();
  }

  mouseDown() {
    this.currentTool.mouseDown();
  }
}
