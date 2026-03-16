type Props = {
    money: number | null
}

export default function Reward({ money }: Props) {

    if (money === null) return null

    return (

        <h1 className="text-yellow-400 text-3xl font-bold mt-6">
            🎉 You won ₹{money}
        </h1>

    )

}