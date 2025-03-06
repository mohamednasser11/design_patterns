import History from "./momento/history";
import { Originator } from "./momento/originator";
import { SingletonWithCache } from "./Singleton/singleton.cached";
import { Canvas } from "./state/canvas";
import { PaintPrush } from "./state/tools/paint_brush";
import { SelectionTool } from "./state/tools/selection_tool";

//singleton
// const additionCalculator = new SingletonWithCache();

// additionCalculator.addNumber(5)
// const value = additionCalculator.getTotal(); 
// console.log(`>>>>>>> value before ==>`, value);

//momento
// const originator = new Originator();
// const history = new History();

// originator.setContent('1');
// history.addHistoryState(originator.createState());
// originator.setContent('2');
// history.addHistoryState(originator.createState());
// originator.restore(history.removeHistoryState());

// console.log(`>>>>> content ==> ${originator.content}`);

//state
// >>> this pattern can be greatly abused beware of that (bad practice)
//const canvas = new Canvas(new PaintPrush());
//canvas.setTool(new SelectionTool);
// canvas.mouseUp()
// canvas.mouseDown();