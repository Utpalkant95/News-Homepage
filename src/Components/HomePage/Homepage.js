import Asideparas from "../Asideparas/Asideparas";
import Homecontent from "../Homecontent/Homecontent";
function Homepage(){
    return(
        <div className="container m-5">
            <div className="content flex">
                <div className="img mr-5">
                    <img src="images/image-web-3-desktop.jpg"></img>
                    <div className="flex justify-between mt-5">
                        <div className="para1">
                            <h1 className="text-5xl font-bold">The Bright<br></br> Future of<br></br> Web 3.0?</h1>
                        </div>
                        <div className="para2 text-gray-400 mr-5">
                            <p>We dive into the next evolution of the web that<br></br> cliams to put the power of the platforms back<br></br> into the hands of the people. But is it really<br></br> fulfilling its promise?</p>
                            <button className="text-white tracking-widest bg-red-500 mt-4 px-4 py-1 hover:bg-[#00001a]">READ MORE</button>
                        </div>
                    </div>
                </div>
                    <aside className="aside-content bg-[#00001a]">
                        <h2 className="text-4xl font-bold text-orange-400 ml-5 mt-8">New</h2>

                        <Asideparas heading="Hydrogen vs Electric Cars" para="Will hydrogen-fueled cars ever catch up EVs?"/>
                        
                        <Asideparas heading="The Downsides of AI Artistry" para="What are the possible adverse effects of on-demand AI image generation?"/>
                        
                        <Asideparas heading="Is VC Funding Drying Up?" para="Private funding by VC firms id down 50% YOY.We take a look at what that means."/>
                    </aside>

            </div>
            <div className="content flex">
                    <Homecontent num="01" heading="Reviving Retro PCs" para="What happens when old PCs are given modern upgrades?" img="images/image-retro-pcs.jpg"/>

                    <Homecontent num="02" heading="Top 10 Laptop of 2022" para="Our best picks for various needs and budgets." img="images/image-top-laptops.jpg" className="ml-5"/>

                    <Homecontent num="03" heading="The Growth of Gaming" para="How the pandemic has sparked fresh opportunities." img="images/image-gaming-growth.jpg" className="ml-5"/>

            </div>
        </div>
    )
}

export default Homepage