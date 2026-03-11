import logo from "./assets/logo.png";

export default function Navbar() {
    return <>
        <div className="container ">
            <nav className="navbar my-6">
                <ul className="flex justify-center items-center gap-20 font-semibold ">
                    <li>ABOUT</li>
                    <li>PROPERTIES</li>
                    <li>PROJECTS</li>
                    <li>
                        <img src={logo} alt="Logo" width={170} className="mx-12" />
                    </li>
                    <li>TESTIMONIALS</li>
                    <li>FQA</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
            <hr className="border-b-[0.2px] border-gray-200" />
        </div>
    </>
}