import { FC } from "react"
import Button from "../Components/Button"
import {  useNavigate } from "react-router-dom";

const Summary:FC = ()=>{
  const navigate = useNavigate()
  const handelClick =()=>{
      navigate("/home/homepage")
  }
  const handelClick1 =()=>{
    navigate("/home/payment")
}
    return(
        <>
           <div className="flex justify-between items-center pb-7 ">
        <div className="flex items-center gap-6">
          <div onClick={handelClick1} className="cursor-pointer rounded-full h-10 w-10 bg-slate-50 pt-[8.9px] pl-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </div>
          <p className="text-2xl font-semibold">Reviews Summary</p>
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg w-auto h-auto mt-8 flex ">
            <div className="p-6 ">
        <img className="rounded-lg h-24  w-24 object-cover  " src="/doc3.jpg" />
            </div>
            <div className="pt-6 w-full">
        <p className="text-lg font-medium ">Dr.Randy parker</p>
            <p className="text-base text-slate-500 pt-3">Immunologist</p> 
            <p className="text-base text-slate-500 pt-1">Chirist Hospital in Londen , UK</p> 
        </div>     
        </div>
        <div className="bg-slate-100 rounded-lg w-auto h-auto mt-5 py-5">
            <div className="flex justify-between px-6 ">
            <p className="text-slate-600 ">Date & Hour</p>
            <p className="font-semibold">Feb 23.2024 | 10.00 AM</p>
            </div>
            <div className="flex justify-between px-6 pt-5">
            <p className="text-slate-600 ">Duration</p>
            <p className="font-semibold">30 Minutes</p>
            </div>
        </div>
        <div className="bg-slate-100 rounded-lg w-auto h-auto mt-5 py-5">
            <div className="flex justify-between px-6 ">
            <p className="text-slate-600 ">Amount</p>
            <p className="font-semibold">$20</p>
            </div>
            <div className="flex justify-between px-6 pt-5">
            <p className="text-slate-600 ">{"Duration(30 Minutes)"}</p>
            <p className="font-semibold">{"1 × $20"} </p>
            </div>
        </div>
        <Button onClick={handelClick} className="cursor-pointer mt-28" varient="containd">{"Pay"}</Button>
        </>
    )
}
export default Summary