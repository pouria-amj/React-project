import  { FC } from "react";
import Button from "../Components/Button";
import {  useNavigate } from "react-router-dom";

const WelcomPage: FC = () => {
    const navigate = useNavigate()
    const handelClick1 =()=>{
        navigate("/welcome2")
    }
  return <div>
    
<img src="public/doc.jpg" alt="" />    
    <h1 className="text-blue-500 text-4xl flex justify-center font-bold pt-4">Welcom to Medica! &#x1F44B;
</h1>
<div className="flex justify-center pt-9 pb-8">

    <p className=" w-2/3 text-center text-lg font-medium">The best online dotor apointment & consultation app of the centry for your healt and medical needs</p>
</div>
<Button onClick={handelClick1}  varient="containd">{"Next"}</Button>
  </div>;
};
export default WelcomPage;
