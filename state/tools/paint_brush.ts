import { Tool } from "../tool";

export class PaintPrush implements Tool {
  mouseUp(): void {
    console.log(`>>>>>>>>> selecting paint brush <<<<<<<<<`);
  }

  mouseDown(): void {
    console.log(`>>>>>>>>> painting with the prush <<<<<<<<<`);
  }
}
