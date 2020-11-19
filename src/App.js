import useMobxStore from "./store/counter/useCounter";
import { Observer } from "mobx-react";

function App() {
  const { counterStore } = useMobxStore();

  const Test = () => (
    <div className="App">
      <header className="App-header">{counterStore.counter}</header>
      <button
        onClick={() => {
          counterStore.increase();
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          counterStore.decrease();
        }}
      >
        minus
      </button>
    </div>
  );

  return <Observer>{Test}</Observer>;
}

export default App;
