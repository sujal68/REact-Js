import chest from './assets/chest.png';
import close_chest from './assets/close-chest.png';

export default function App() {
    const open = () => {
        
    }

    return <>
        <img src={close_chest} alt="" width={500} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-15" onClick={open}>
            open
        </button>
    </>
}