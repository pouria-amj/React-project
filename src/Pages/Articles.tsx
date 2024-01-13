import { FC } from "react"
import Button from "../Components/Button"
import {  useNavigate } from "react-router-dom";

const Articles:FC = ()=>{
  const navigate = useNavigate()
  const handelClick =()=>{
    navigate("/home/homepage")
}
    return(<>
        <div className="flex justify-between items-center pb-7 ">
        <div className="flex items-center gap-6 ">
          <div className="rounded-full h-10 w-10 bg-slate-50 pt-[8.9px] pl-2.5">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="35" height="35" x="0" y="0" viewBox="0 0 64 64"   className=""><g><path d="M38 13h-3v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 4h-3a1 1 0 0 0-1 1v3h-2v-3a1 1 0 0 0-1-1h-3v-2h3a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h3ZM59.73 18.36a4.578 4.578 0 0 0 .03-.53 4.02 4.02 0 0 0-3.18-3.91 4.071 4.071 0 0 0-4.7 2.97l-4.4 12.66a1.632 1.632 0 0 0-.19.09l-8.84 5.18A9.017 9.017 0 0 0 34 42.58V52a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1v-2.2a3.039 3.039 0 0 1 1-2.24l6.76-6.01a4.931 4.931 0 0 0 1.52-2.45l4.34-16.23a3.955 3.955 0 0 0 .14-1.04 4.019 4.019 0 0 0-2.03-3.47Zm-5.94-.88a2.113 2.113 0 0 1 2.38-1.6 2 2 0 0 1 1.59 1.95v.02a4.1 4.1 0 0 0-3.89 3.06l-2.79 8.61a4.2 4.2 0 0 0-1.34-.38ZM47 60H35v-6h12Zm12.69-37.65-4.35 16.24a2.981 2.981 0 0 1-.9 1.46l-6.77 6.01A5.056 5.056 0 0 0 46 49.8V52H36v-9.42a7.052 7.052 0 0 1 3.46-6.04l8.83-5.17a2 2 0 0 1 2.74.73 2.06 2.06 0 0 1 .2 1.52 2 2 0 0 1-.94 1.21l-5.73 3.31a1 1 0 0 0 1 1.73l5.73-3.31a3.948 3.948 0 0 0 1.87-2.43 4.007 4.007 0 0 0-.4-3.03l-.06-.09 3.09-9.53a2.113 2.113 0 0 1 2.38-1.6 2 2 0 0 1 1.59 1.95 1.722 1.722 0 0 1-.07.52ZM30 52v-9.42a9.017 9.017 0 0 0-4.45-7.76l-8.84-5.19c-.06-.03-.13-.05-.19-.08l-4.37-12.59a4.107 4.107 0 0 0-4.73-3.04 4.02 4.02 0 0 0-3.18 3.91 4.578 4.578 0 0 0 .03.53 4.019 4.019 0 0 0-2.03 3.47 4.421 4.421 0 0 0 .13 1.04l4.35 16.22a4.916 4.916 0 0 0 1.52 2.46l6.75 6.01A3.012 3.012 0 0 1 16 49.8V52a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1ZM6.24 17.83a2 2 0 0 1 1.58-1.95 2.161 2.161 0 0 1 2.42 1.67l4.02 11.59a4.2 4.2 0 0 0-1.34.38l-2.77-8.56a4.149 4.149 0 0 0-3.91-3.11Zm10.08 28.23-6.76-6.01a2.965 2.965 0 0 1-.9-1.47L4.3 22.35a2.121 2.121 0 0 1-.06-.52 2 2 0 0 1 1.58-1.95 2.144 2.144 0 0 1 2.41 1.65l3.07 9.48-.06.09a4.007 4.007 0 0 0-.4 3.03 3.948 3.948 0 0 0 1.87 2.43l5.73 3.31a1 1 0 0 0 1-1.73l-5.73-3.31a2 2 0 0 1-.94-1.21 2.06 2.06 0 0 1 .2-1.52 2 2 0 0 1 2.73-.74l8.84 5.18A7.052 7.052 0 0 1 28 42.58V52H18v-2.2a5.03 5.03 0 0 0-1.68-3.74ZM29 60H17v-6h12Z" fill="#48b1f9" opacity="1" data-original="#000000" className=""></path><path d="M46.147 5.132A9.994 9.994 0 0 0 32 5.133a9.992 9.992 0 0 0-14.146 0 10.005 10.005 0 0 0 0 14.134l13.44 13.44a1 1 0 0 0 1.414 0l13.44-13.44a10.006 10.006 0 0 0-.001-14.135ZM32 30.586 19.267 17.853A8 8 0 0 1 24.93 4.2a7.916 7.916 0 0 1 5.653 2.347l.71.71a1 1 0 0 0 1.414 0l.712-.712a7.993 7.993 0 0 1 11.314 0 8 8 0 0 1 0 11.306Z" fill="#48b1f9" opacity="1" data-original="#000000" className=""></path></g></svg>        
  </div>
          <p className="text-2xl font-semibold">Articles</p>
        </div>
      </div>
      <div className="flex justify-between items-center pb-3">
        <p className="font-semibold text-2xl">Trending</p>
        <p className="text-[#48B1F9] font-semibold">See All</p>
      </div>
      <div className="flex ">   
      <div >       
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="#646464" className="bi bi-image-fill" viewBox="0 0 16 16">
  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quae!</p>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="#646464" className="bi bi-image-fill" viewBox="0 0 16 16">
  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quae!</p>
      </div>
      </div>
      <div className="flex justify-between items-center pb-3">
        <p className="font-semibold text-2xl">Articles</p>
        <p className="text-[#48B1F9] font-semibold">See All</p>
      </div>
      <div className="flex justify-between gap-3">
      <Button varient="outline">{"Newest"}</Button>
      <Button varient="outline">{"Healt"}</Button>
      <Button varient="outline">{"Covid-19"}</Button>
      <Button varient="outline">{"Life Style"}</Button>
      </div>
      <div className="flex gap-4 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="159" height="159" fill="#646464" className="bi bi-image-fill" viewBox="0 0 16 16">
  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg>
<div>
<p className="text-xs">Dec 22 . 2022</p>
<p className="text-xl w-2/3">Covid Was a Top of Cause of Death in 2020 and 2021 , Even For Youner People.</p>
<p className="text-xs text-[#48B1F9]">Covid-19</p>
      </div>
</div>
<div className="flex gap-4 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#646464" className="bi bi-image-fill" viewBox="0 0 16 16">
  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg>
<div>
<p className="text-xs">Dec 22 . 2022</p>
<p className="text-xl w-2/3">Study Finds Being Hangry is a Real Thing.</p>
<p className="text-xs text-[#48B1F9]">Covid-19</p>
      </div>
</div>
<div className="flex justify-between px-7 pt-9 border-t-2 pb-3 ">
        <div onClick={handelClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#48B1F9" className="bi cursor-pointer bi-house-door-fill " viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>
<p className="text-[10px] text-slate-500 ">Home</p>

        </div>
<div>
  <div className="pl-3">

<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#48B1F9" className="bi  cursor-pointer bi-calendar-date" viewBox="0 0 16 16">
  <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
  </div>
<p className="text-[10px] text-slate-500 ">Appointment</p>

</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#48B1F9" className="bi cursor-pointer bi-clock-history" viewBox="0 0 16 16">
  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483m.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535m-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
</svg>
<p className="text-[10px] text-slate-500 ">History</p>

</div>
<div >
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#48B1F9" className="bi cursor-pointer bi-file-earmark" viewBox="0 0 16 16">
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
</svg>
<p className="text-[10px] text-slate-500 ">Articles</p>
</div>
      </div>

    </>)
}
export default Articles