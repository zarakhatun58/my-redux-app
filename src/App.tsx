import { RootState } from "./redux/store";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p> my redux app</p>
      <div>
        <div>
          <button className="..." onClick={() => dispatch(increment())}>
            Increment
          </button>
        </div>
        <div>{count}</div>
        <div>
          <button className="..." onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
        <div>
          <button
            className="..."
            onClick={() => dispatch(incrementByAmount(5))}
          >
            incrementByAmount
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
