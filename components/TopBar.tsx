import Link from "next/link";

const TopBar = () => {
    return (
        <header className="flex justify-between p-5 bg-slate-900">
            <div className="flex space-x-5">
                <Link href="/">
                    <h1 className="text-white text-4xl font-semibold">LOGO</h1>
                </Link>
                
                <button className="text-white font-semibold hover:text-cyan-500">Features</button>
                <button className="text-white font-semibold hover:text-cyan-500">Enterprise</button>
                <button className="text-white font-semibold hover:text-cyan-500">Pricing</button>
                <button className="text-white font-semibold hover:text-cyan-500">Contact</button>
                
            </div>
            <div className="flex justify-between space-x-5">
                <button className="text-white font-semibold hover:text-cyan-500">Sign In</button>
                <button className="text-white font-semibold px-4 rounded-full border border-cyan-500 hover:text-cyan-500">Sign Up</button>
            </div>
        </header>
    )
}

export default TopBar;