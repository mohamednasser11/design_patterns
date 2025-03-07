import { Iterator } from "./iteratorInterface";
import { ListIterator } from "./listIterator";


export class BrowseHistory {
  private histroyList: string[] = [];

  public push(newHistory: string) {
    this.histroyList.push(newHistory);
  }

  public pop() {
    const lastIndex = this.histroyList.length - 1;

    return this.histroyList.splice(lastIndex, 1);
  }

  public getHistoryList() {
    return this.histroyList;
  }

  public createIterator(): Iterator<string> {
    return new ListIterator(this);
  }
}
