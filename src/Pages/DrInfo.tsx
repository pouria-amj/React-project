import { FC,useState } from "react"
import Button from "../Components/Button"
import {  useNavigate } from "react-router-dom";

const DrInfo:FC = ()=>{
  const navigate = useNavigate()
  const handelClick =()=>{
      navigate("/home/reviwes")
  }
  const handelClick1 =()=>{
    navigate("/home/top")
}
const handelClick2 =()=>{
  navigate("/home/payment")
}
const [isClicked, setIsClicked] = useState(false);

    return(
        <>
        <div className="flex justify-between items-center pb-7">
         <div className="flex items-center gap-6">
            <div onClick={handelClick1} className=" cursor-pointer rounded-full h-10 w-10 bg-slate-50 pt-[8.9px] pl-2.5">

        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
            </div>
<p className="text-2xl font-semibold">Dr.randy Parker</p>
        </div>
        <div onClick={() => setIsClicked(!isClicked)}>
        {isClicked ?      
 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FF2222" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
:
        <svg                
 xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#48B1F9" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg> 
}
        </div> 
</div>
<div className="flex w-auto h-auto p-4 bg-slate-50 rounded-xl">
    <div>
<img className="rounded-lg h-28  w-28 object-cover  " src="/doc3.jpg" />
    </div>
<div className="pl-20">
    <p className="text-xl pb-8 font-semibold">Dr.randy Parker</p>
    <p className="text-sm pb-1 font-normal">Cardiologist</p>
    <p className="text-sm font-normal">The Vally Hospital .UK</p>
</div>
</div>
<div className="flex justify-between px-14 pt-7">
<div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
      <svg  xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#48B1F9" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
        </div>
        <div className="pt-3 ">
        <p className="text-base text-[#48B1F9]">5,000+</p>
        <p className="text-xs">Patients</p>
        </div>
      </div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#48B1F9" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
</svg>
        </div>
        <div className="pt-3 pl-2">
        <p className="text-base text-[#48B1F9]">10+</p>
        <p className="text-xs">years experie...</p>
        </div>
      </div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#48B1F9" className="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>
        </div>
        <div className="pt-3 pl-2">
        <p className="text-base text-[#48B1F9]">4.8</p>
        <p className="text-xs">rating</p>
        </div>
      </div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#48B1F9" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
        </div>
        <div className="pt-3 ">
        <p className="text-base text-[#48B1F9]">4,376</p>
        <p className="text-xs">reviews</p>
        </div>
      </div>
</div>
<p className="pt-24 text-2xl font-semibold">About me</p>
<p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores inventore tenetur incidunt quas pariatur ad officia id blanditiis magni. Suscipit temporibus sed eos possimus assumenda at architecto eligendi. Magnam, architecto.
</p>
<p className="pt-5 text-2xl font-semibold">Working time</p>
<p className="pt-3">Monday - Friday , 8:00 Am - 20:00 Pm</p>
<div className="flex justify-between pt-7 items-center">
<p className=" text-2xl font-semibold ">Reviews</p>
<p onClick={handelClick} className="hover:text-blue-700 cursor-pointer text-[#48B1F9] font-semibold">See All</p>
</div>
<div className="flex justify-between pt-5">
    <div className="flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
<p className="pl-2 font-semibold">Charolete hanini</p>
    </div>
    <div className="border-2  border-[#48B1F9] w-auto h-auto flex items-center py-0.5 px-3 rounded-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="#48B1F9" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<p className="pl-2 text-[#48B1F9]">5</p>
    </div>
</div>
<p className="py-3 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat earum explicabo dolor odio ratione et consectetur libero, corrupti nesciunt?</p>
<Button onClick={handelClick2} className="mt-5 mb-3" varient="containd">{"Book Appointment"}</Button>
        </>
    )
}
export default DrInfo