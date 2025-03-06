import { Tool } from "../tool";

export class SelectionTool implements Tool {
  mouseUp(): void {
    console.log(`>>>>>>>>> selecting selection tool <<<<<<<<<`);
  }

  mouseDown(): void {
    console.log(`>>>>>>>>>>>> selecting with a rectangle <<<<<<<<<<`);
  }
}
