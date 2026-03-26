import { useState } from "react";
import chest from "./assets/chest.png";
import close_chest from "./assets/close-chest.png";

import ChestImage from "./components/ChestImage";
import ChestButton from "./components/ChestButton";
import Reward from "./components/Reward";

export default function App() {

    const [isOpen, setIsOpen] = useState(false);
    const [money, setMoney] = useState<number | null>(null);
    const [balance, setBalance] = useState(0);

    const openChest = () => {

        if (!isOpen) {

            const randomMoney = Math.floor(Math.random() * 500) + 50;

            setMoney(randomMoney);
            setBalance(balance + randomMoney);
            setIsOpen(true);

        } else {

            setIsOpen(false);
            setMoney(null);

        }
    };

    return (

        <div className="h-screen flex flex-col items-center justify-center bg-purple-950 relative">

            <div className="absolute top-6 right-6 bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold shadow-lg">
                Balance ₹{balance}
            </div>

            <ChestImage
                isOpen={isOpen}
                openImg={chest}
                closeImg={close_chest}
            />
            <Reward money={money} />

            <div className="mt-8">
                <ChestButton
                    isOpen={isOpen}
                    toggleChest={openChest}
                />
            </div>

        </div>

    );
}