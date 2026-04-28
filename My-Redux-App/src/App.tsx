import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "./app/store";
import { decrement, increment, reset } from "./features/counter/CounterSlice";

export default function App() {

  const myCounter = useSelector((state: RootState) =>
    state.counterReducer);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
      <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-3xl px-14 py-12 text-center">

        <span className="inline-block text-xs tracking-widest text-[#555] border border-[#333] bg-[#252525] rounded-full px-4 py-1 mb-8 font-mono">
          redux store
        </span>

        <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#444] font-mono mb-2">
          Count
        </p>

        <h1 className="text-9xl font-extrabold font-mono text-[#f0f0f0] mb-10">
          {myCounter.counter}
        </h1>

        <div className="flex gap-4 justify-center items-center">
          <button onClick={() => dispatch(decrement())} className="w-14 h-14 rounded-full border border-[#333] bg-[#252525] hover:bg-[#2e2e2e] hover:border-[#444] text-[#ccc] hover:text-white active:scale-90 text-3xl font-mono transition-all">
            −
          </button>

          <button onClick={() => dispatch(reset())} className="h-14 px-5 rounded-full border border-[#3a2020] bg-[#2a1a1a] text-[#a05050] hover:bg-[#3a1f1f] hover:border-[#6b3333] hover:text-[#e07070] active:scale-95 text-[11px] tracking-[0.12em] uppercase font-mono transition-all">
            reset
          </button>

          <button onClick={() => dispatch(increment())} className="w-14 h-14 rounded-full border border-[#333] bg-[#252525] hover:bg-[#2e2e2e] hover:border-[#444] text-[#ccc] hover:text-white active:scale-90 text-3xl font-mono transition-all">
            +
          </button>
        </div>

      </div>
    </div>
  )
}