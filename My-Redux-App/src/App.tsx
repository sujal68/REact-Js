import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "./app/store";
import { decrement, increment, reset } from "./features/counter/CounterSlice";
import { themeChanger } from "./features/theme/ThemeSlice";
import Header from "./components/Header";

export default function App() {

  const myCounter = useSelector((state: RootState) => state.counterReducer);
  const { theme } = useSelector((state: RootState) => state.themereducer);
  const dark = theme === 'dark';

  const dispatch = useDispatch();

  return <>
    <Header dark={dark} onToggle={() => dispatch(themeChanger())} />

    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-gray-50'}`}>
      <div className={`border rounded-3xl px-14 py-12 text-center transition-colors duration-300 ${dark ? 'bg-[#1a1a1a] border-[#2e2e2e]' : 'bg-white border-gray-200 shadow-sm'}`}>

        <span className={`inline-block text-xs tracking-widest border rounded-full px-4 py-1 mb-8 font-mono ${dark ? 'text-[#555] border-[#333] bg-[#252525]' : 'text-gray-400 border-gray-200 bg-gray-100'}`}>
          redux store
        </span>

        <p className={`text-xs font-bold tracking-[0.18em] uppercase font-mono mb-2 ${dark ? 'text-[#444]' : 'text-gray-400'}`}>
          Count
        </p>

        <h1 className={`text-9xl font-extrabold font-mono mb-10 ${dark ? 'text-[#f0f0f0]' : 'text-[#111]'}`}>
          {myCounter.counter}
        </h1>

        <div className="flex gap-4 justify-center items-center">
          <button onClick={() => dispatch(decrement())} className={`w-14 h-14 rounded-full border active:scale-90 text-3xl font-mono transition-all ${dark ? 'border-[#333] bg-[#252525] hover:bg-[#2e2e2e] hover:border-[#444] text-[#ccc] hover:text-white' : 'border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'}`}>
            −
          </button>

          <button onClick={() => dispatch(reset())} className={`h-14 px-5 rounded-full border active:scale-95 text-[11px] tracking-[0.12em] uppercase font-mono transition-all ${dark ? 'border-[#3a2020] bg-[#2a1a1a] text-[#a05050] hover:bg-[#3a1f1f] hover:border-[#6b3333] hover:text-[#e07070]' : 'border-red-200 bg-red-50 text-red-400 hover:bg-red-100 hover:border-red-300 hover:text-red-600'}`}>
            reset
          </button>

          <button onClick={() => dispatch(increment())} className={`w-14 h-14 rounded-full border active:scale-90 text-3xl font-mono transition-all ${dark ? 'border-[#333] bg-[#252525] hover:bg-[#2e2e2e] hover:border-[#444] text-[#ccc] hover:text-white' : 'border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'}`}>
            +
          </button>
        </div>

      </div>
    </div>
  </>
}