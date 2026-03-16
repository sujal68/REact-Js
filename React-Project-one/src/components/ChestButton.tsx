type Props = {
    isOpen: boolean
    toggleChest: () => void
}

export default function ChestButton({ isOpen, toggleChest }: Props) {

    return (

        <button
            onClick={toggleChest}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white rounded-lg font-semibold shadow-lg">

            {isOpen ? "Reset" : "Open Chest"}

        </button>

    )

}