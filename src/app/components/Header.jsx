import Link from "next/link"

const Header = () => {
    return (
        <header>
            <div className="flex justify-center flex-col bg-cyan-400 items-center">
                <p className="text-5xl font-bold">Learning Next</p>
                <div className="flex justify-center">
                    <Link className="m-3 hover:text-white" href='/'>Home</Link>
                    <Link className="m-3 hover:text-white" href='/about'>About</Link>
                    <Link className="m-3 hover:text-white" href='/about/team'>Team</Link>
                    <Link className="m-3 hover:text-white" href='/code/repos'>Codes</Link>

                </div>
            </div>
        </header>
        )
}

export default Header