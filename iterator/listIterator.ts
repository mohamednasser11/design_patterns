import { BrowseHistory } from "./browseHistory";
import { Iterator } from "./iteratorInterface";

export class ListIterator implements Iterator<string> { 
    private index: number = 0;
    private history: BrowseHistory;

    constructor(browseHistory: BrowseHistory){
        this.history = browseHistory;
    }
    
    hasNext(): boolean {
        return (this.index < this.history.getHistoryList().length);
    }

    current(): string {
        return this.history.getHistoryList()[this.index];
    }

    next(): void {
        this.index++;
    }
}