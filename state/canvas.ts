import { Tool } from "./tool";

export class Canvas {
  private currentTool: Tool;
  constructor(currentTool: Tool) {
    this.currentTool = currentTool;
  }

  mouseUp() {
    this.currentTool.mouseUp();
  }

  mouseDown() {
    this.currentTool.mouseDown();
  }
}
