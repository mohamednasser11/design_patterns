import History from "./history";
import HistoryState from "./historyState";


export class Originator {
    public content: string = '';

    public createState(): HistoryState {
        return new HistoryState(this.content);
    }
    
    public setContent(content: string) {
        this.content = content;
    }

    public restore(state: HistoryState) {
        this.content = state.getState();
    }

}