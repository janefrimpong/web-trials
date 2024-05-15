import pic from "../assets/kevinRushProfile.jpg"
const Page=()=>{
    return (
        <div className="space-x-2">
          
                  
                  <div className="space-x-4 text-right text-white py-4 text-2xl px-3">
                    <a  className="rounded-full hover:bg-cyan-200 px-2  hover:text-black"  href="a">Home</a>
                    <a  className="rounded-full hover:bg-cyan-200 px-2 hover:text-black" href="a">About</a>
                    <a  className="rounded-full hover:bg-cyan-200 px-2 hover:text-black" href="a">Services</a>
                    <a  className="rounded-full hover:bg-cyan-200 px-2 hover:text-black" href="a">Portfolio</a>
                    <a  className="rounded-full hover:bg-cyan-200 px-2 hover:text-black" href="a">Contact</a>

                  </div>
                  <div className="text-cyan-200 text-6xl py-20 font-serif">
                    Web
                    <p> Development</p>
                    <p className="lg:w-1/2 lg:p-8">
                        <img className=" w-[400px]  rounded-full  p-2  float-right " src={pic}/>
                    </p>
                    <p className="text-white text-5xl py-3">Agency</p>
                    <p className=" text-white text-3xl py-3">We offer the best 
                    digital solutions for your business</p>
                    <button className="text-3xl border rounded-full px-3 p-2 text-black  bg-cyan-300 ">
                        Learn More
                    </button>
            
                  </div>
                  
          
        
            
        
        </div>
    )
}
export default Page