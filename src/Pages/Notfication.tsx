import { FC } from "react"
import {  useNavigate } from "react-router-dom";

const NotificationPage:FC =()=>{
    const navigate = useNavigate()
    const handelClick =()=>{
        navigate("/home/homepage")
    }
    return(
        <>
        <div className="flex items-center gap-6">
            <div className="rounded-full h-10 w-10 bg-slate-50 pt-[8.9px] pl-2.5">

        <svg onClick={handelClick} xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi cursor-pointer bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
            </div>
<p className="text-2xl font-semibold">Notification</p>
        </div>
        <div>
        <div>
        <div className="flex gap-8 pt-8">
        <div className="rounded-full h-10 w-10 bg-slate-100">
            <div className="pt-[8.9px] pl-2.5">

        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F9FC37" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
            </div>
        </div>
            <div>
            <p className="text-xl font-semibold">New Service Available!</p>
<p className="text-xs text-slate-400">19 Dec , 2023 | 11:47 AM</p>
            
            </div>
        </div>
        <p className="text-slate-500 w-4/5 pt-7">You can now make multiple doctoral appointments at once. You can also cancel your apointment.</p>
        
        </div>
        <div>
        <div className="flex gap-8 pt-8">
        <div className="rounded-full h-10 w-10 bg-slate-100">
            <div className="pt-[8.9px] pl-2.5">

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#48B1F9" className="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"/>
</svg>
            </div>
        </div>
            <div>
            <p className="text-xl font-semibold">Credit Card Connected!</p>
<p className="text-xs text-slate-400">16 Dec , 2023 | 10:22 AM</p>
            
            </div>
        </div>
        <p className="text-slate-500 w-4/5 pt-7">Your credit cart has been successfuly linked whit Medica. Enjoy your service</p>
        
        </div>
        <div>
        <div className="flex gap-8 pt-8">
        <div className="rounded-full h-10 w-10 bg-slate-100">
            <div className="pt-[8.9px] pl-2.5">

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF254C" className="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
            </div>
        </div>
            <div>
            <p className="text-xl font-semibold">Appointment Canceld!</p>
<p className="text-xs text-slate-400">22 Dec , 2023 | 17:22 PM</p>
            
            </div>
        </div>
        <p className="text-slate-500 w-4/5 pt-7">You have successfuly canceld your appointment whit Dr.Jhon Watson on December 24, 2024, 13:00 PM. 80% of the funds will be returned to your account. </p>
        
        </div>
        </div>

        </>
    )
}
export default NotificationPage