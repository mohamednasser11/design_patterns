export class SingletonWithCache {
    private initialValue: number = 0;

    addNumber(valueTobeAdded:number) {
        this.initialValue += valueTobeAdded;
    }

    getTotal() {
        return this.initialValue;
    }
}
