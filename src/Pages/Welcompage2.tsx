import { FC } from "react"
import Button from "../Components/Button"
import {  useNavigate } from "react-router-dom";




const WelcomPage2:FC = ()=>{
    const navigate = useNavigate()
    const handelClick2 =()=>{
        navigate("/welcome3")
    }   
     return(<>
    <img className="rounded-lg" src="public/doc2.jpg" alt="" />
    <div className="bg-white rounded-t-3xl relative bottom-12">
        <div className="flex justify-center pb-16">
        <p className="pt-16 text-3xl text-center w-3/4 text-blue-500 font-bold ">Thousands of doctors & experts to help your health.</p>
        </div>
      
<Button onClick={handelClick2} varient="containd">{"Next"}</Button>
    </div>
    
    
    
    </>

    )
}

export default WelcomPage2