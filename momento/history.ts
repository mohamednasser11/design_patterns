import HistoryState from "./historyState";

export default class History {
    public stateList: HistoryState[] = [];


    public addHistoryState(state: HistoryState) {
        this.stateList.push(state);
    }

    public removeHistoryState(): HistoryState {
        const lastElement = this.stateList.pop();
        if(lastElement && lastElement instanceof HistoryState ) {
            console.log(`>>>>>>>> lastElement ==> ${JSON.stringify(lastElement)}`);
            console.log(`>>>>>>>> stateList ==> ${JSON.stringify(this.stateList)}`);
           return lastElement;
        } else {
            throw new Error('No More Content!!');
        }
    }
} 