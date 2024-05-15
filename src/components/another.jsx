import { FaReact} from "react-icons/fa"
const Another =()=>{
    return(
        <nav className=" h-screen text-white item-center  space-y-10 text-2xl px-4">
            <div className="py-3" >
                Logo
                <div className="space-x-5 text-right ">
                    <a href className="rounded-full px-3 hover:bg-orange-500">ABOUT</a>
                    <a href className=" rounded-full px-3 hover:bg-orange-500">NEWS</a>
                    <a href className=" rounded-full px-3 hover:bg-orange-500">PROJECTS</a>
                    <a href className=" rounded-full px-3 hover:bg-orange-500">CONTACT</a>
                </div>
            </div>
            <hr className="w-19 py-2"></hr>
            <div className="py-4  text-6xl font-bold" >
                Frontend Website 
                <p>Development</p>
            </div>
            <hr className="border-b w-40"></hr>
            <div className="font-thin  "> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore
                 quisquam minima tempora nostrum nisi dignissimos ex reprehenderit 
                rem perspiciatis, non libero enim, adipisci quas, harum at
                 incidunt nam omnis? Lorem, ipsum dolor sit amet consectetur 
                 adipisicing elit. Quaerat facere tenetur, est non veniam dignissimos 
                 assumenda inventore vero maxime magnam neque consequuntur
                 quia sint quidem praesentium cumque eos doloremque hic.

            
            </div>
            <div className="py-4 space-x-5">
                <button  className="bg-orange-500 px-4" type="submit">Explore</button>
                <button className="bg-orange-500 px-7">Start</button>
                </div>

                <div className="text-7xl px- text-cyan-400">
                    <FaReact/>
                </div>
        
            

        </nav>
    )
}
export default Another