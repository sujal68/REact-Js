import { useState } from "react";
import chest from "./assets/chest.png";
import close_chest from "./assets/close-chest.png";

export default function App() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleChest = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <center>
                <img src={isOpen ? chest : close_chest} alt="chest" width={500} />

                <br /><br />

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleChest}
                >
                    {isOpen ? "Close" : "Open"}
                </button>
            </center>
        </>
    );
}