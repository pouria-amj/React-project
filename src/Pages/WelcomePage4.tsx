import { FC } from "react"
import Button from "../Components/Button"
import {  useNavigate } from "react-router-dom";




const WelcomPage4:FC = ()=>{
    const navigate = useNavigate()
    const handelClick4 =()=>{
        navigate("/Register")
    }
    return(<>
    <img className="rounded-lg" src="public/doc4.jpg" alt="" />
    <div className="bg-white rounded-t-3xl relative bottom-12">
        <div className="flex justify-center pb-16">
        <p className="pt-16 text-3xl text-center w-2/3 text-blue-500 font-bold ">Lets start living healthy and well whit us righy now!</p>
        </div>
      
<Button onClick={handelClick4} varient="containd">{"Get Started"}</Button>
    </div>
    
    
    
    </>

    )
}

export default WelcomPage4