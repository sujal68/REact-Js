type Props = {
    isOpen: boolean
    openImg: string
    closeImg: string
}

export default function ChestImage({ isOpen, openImg, closeImg }: Props) {

    return (

        <img
            src={isOpen ? openImg : closeImg}
            className="w-[400px] transition duration-300 hover:scale-110"
        />

    )

}