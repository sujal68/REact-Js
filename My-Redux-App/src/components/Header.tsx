import React from 'react'

export default function Header({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
    const navLinks = ['Home', 'About', 'Projects', 'Contact']

    return (
        <nav className={`flex items-center justify-between px-8 h-16 border-b transition-colors duration-300 ${dark ? 'bg-[#1a1a1a] border-[#2e2e2e]' : 'bg-white border-gray-200'}`}>

            <div className={`flex items-center gap-2 font-mono font-bold text-base tracking-wider ${dark ? 'text-[#f0f0f0]' : 'text-[#111]'}`}>
                <span className="w-2 h-2 rounded-full bg-[#e07070]" />
                myapp
            </div>

            <ul className="flex items-center gap-1">
                {navLinks.map((item) => (
                    <li key={item}>

                        <a href="#"
                            className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all ${dark ? 'text-[#666] hover:bg-[#252525] hover:text-[#ccc]' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'}`}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-2.5">

                <button onClick={onToggle} className={`w-9 h-9 rounded-full border flex items-center justify-center text-base transition-all ${dark ? 'border-[#333] bg-[#252525] hover:border-[#555]' : 'border-gray-200 bg-gray-100 hover:border-gray-300'}`}>
                    {dark ? '☀️' : '🌙'}
                </button>

                <button className={`h-9 px-4 rounded-full border text-xs font-mono tracking-wider transition-all ${dark ? 'border-[#333] text-[#888] hover:border-[#555] hover:text-[#ccc] hover:bg-[#222]' : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50'}`}>
                    login
                </button>

                <button className={`h-9 px-4 rounded-full font-bold text-xs font-mono tracking-wider active:scale-95 transition-all ${dark ? 'bg-[#f0f0f0] hover:bg-white text-[#111]' : 'bg-[#111] hover:bg-[#333] text-white'}`}>
                    sign up
                </button>

                <div className={`w-9 h-9 rounded-full border flex items-center justify-center text-[11px] font-mono cursor-pointer transition-all ${dark ? 'bg-[#2a1a1a] border-[#3a2020] hover:border-[#6b3333] text-[#a05050]' : 'bg-red-50 border-red-200 hover:border-red-300 text-red-400'}`}>
                    AK
                </div>

            </div>
        </nav >
    )
}