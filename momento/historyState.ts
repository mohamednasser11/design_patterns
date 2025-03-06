export default class HistoryState {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  public getState() {
    return this.content;
  }
}
