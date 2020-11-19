import { observable, autorun } from "mobx";

const counterStore = observable({
  counter: 5,
  get getCounter() {
    return this.counter;
  },
  increase() {
    this.counter++;
  },
  decrease() {
    this.counter--;
  },
});

export default counterStore;
