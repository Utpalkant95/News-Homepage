import Homepage from "../HomePage/Homepage";

function Navbar(){
    return(
        <>
            <header className="site-header flex justify-between">
                <div className="site-identity">
                    <img src="images/logo.svg" className="m-5"></img>
                </div>
                <nav className="site-navigation">
                    <ul className="nav">
                        <li className="inline-block m-5 text-gray-400 hover:text-orange-500 cursor-pointer">Home</li>
                        <li className="inline-block m-5 text-gray-400 hover:text-orange-500 cursor-pointer">New</li>
                        <li className="inline-block m-5 text-gray-400 hover:text-orange-500 cursor-pointer">Popular</li>
                        <li className="inline-block m-5 text-gray-400 hover:text-orange-500 cursor-pointer">Trending</li>
                        <li className="inline-block m-5 text-gray-400 hover:text-orange-500 cursor-pointer">Categories</li>
                    </ul>
                </nav>
            </header>
            <Homepage />
        </>
    );
}

export default Navbar