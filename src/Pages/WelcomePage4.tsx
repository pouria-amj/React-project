import { FC } from "react"
import Button from "../Components/Button"




const WelcomPage4:FC = ()=>{
    return(<>
    <img className="rounded-lg" src="public/doc4.jpg" alt="" />
    <div className="bg-white rounded-t-3xl relative bottom-12">
        <div className="flex justify-center pb-16">
        <p className="pt-16 text-3xl text-center w-2/3 text-blue-500 font-bold ">Lets start living healthy and well whit us righy now!</p>
        </div>
      
<Button varient="containd">{"Get Started"}</Button>
    </div>
    
    
    
    </>

    )
}

export default WelcomPage4