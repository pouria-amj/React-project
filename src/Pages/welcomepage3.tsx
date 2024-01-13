import { FC } from "react"
import Button from "../Components/Button"
import {  useNavigate } from "react-router-dom";




const WelcomPage3:FC = ()=>{
    const navigate = useNavigate()
    const handelClick3 =()=>{
        navigate("/welcome4")
    }  
    return(<>
    <img className="rounded-lg" src="public/doc3.jpg" alt="" />
    <div className="bg-white rounded-t-3xl relative bottom-12">
        <div className="flex justify-center pb-16">
        <p className="pt-16 text-3xl text-center w-4/5 text-blue-500 font-bold ">Health checks & cunsultation easily anywhere any time.</p>
        </div>
      
<Button onClick={handelClick3} varient="containd">{"Next"}</Button>
    </div>
    
    
    
    </>

    )
}

export default WelcomPage3