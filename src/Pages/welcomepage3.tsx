import { FC } from "react"
import Button from "../Components/Button"




const WelcomPage3:FC = ()=>{
    return(<>
    <img className="rounded-lg" src="public/doc3.jpg" alt="" />
    <div className="bg-white rounded-t-3xl relative bottom-12">
        <div className="flex justify-center pb-16">
        <p className="pt-16 text-3xl text-center w-4/5 text-blue-500 font-bold ">Health checks & cunsultation easily anywhere any time.</p>
        </div>
      
<Button varient="containd">{"Next"}</Button>
    </div>
    
    
    
    </>

    )
}

export default WelcomPage3