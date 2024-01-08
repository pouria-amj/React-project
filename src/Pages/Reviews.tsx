import { FC } from "react"

const Reviews:FC = ()=>{
    return(
        <>
              <div className="flex justify-between items-center pb-7">
         <div className="flex items-center gap-6">
            <div className="rounded-full h-10 w-10 bg-slate-50 pt-[8.9px] pl-2.5">

        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
            </div>
<p className="text-2xl font-semibold">{"4.8 (4,324 reviews)"}</p>
        </div>
     
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
<p className="py-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat earum explicabo dolor odio ratione et consectetur libero, corrupti nesciunt?</p>
<div className="flex items-center gap-4">
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<p>759</p>
<p className="text-sm font-light">5 days ago</p>
</div>
<div className="flex justify-between pt-5">
    <div className="flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
<p className="pl-2 font-semibold">Alex morgan</p>
    </div>
    <div className="border-2  border-[#48B1F9] w-auto h-auto flex items-center py-0.5 px-3 rounded-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="#48B1F9" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<p className="pl-2 text-[#48B1F9]">5</p>
    </div>
</div>
<p className="py-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat earum explicabo dolor odio ratione et consectetur libero, corrupti nesciunt?</p>
<div className="flex items-center gap-4">
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<p>653</p>
<p className="text-sm font-light">4 days ago</p>
</div>
<div className="flex justify-between pt-5">
    <div className="flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
<p className="pl-2 font-semibold">Ricardo sterling</p>
    </div>
    <div className="border-2  border-[#48B1F9] w-auto h-auto flex items-center py-0.5 px-3 rounded-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="#48B1F9" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<p className="pl-2 text-[#48B1F9]">4</p>
    </div>
</div>
<p className="py-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat earum explicabo dolor odio ratione et consectetur libero, corrupti nesciunt?</p>
<div className="flex items-center gap-4">
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<p>593</p>
<p className="text-sm font-light">5 days ago</p>
</div>
<div className="flex justify-between pt-5">
    <div className="flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
<p className="pl-2 font-semibold">James arthur</p>
    </div>
    <div className="border-2  border-[#48B1F9] w-auto h-auto flex items-center py-0.5 px-3 rounded-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="#48B1F9" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<p className="pl-2 text-[#48B1F9]">5</p>
    </div>
</div>
<p className="py-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat earum explicabo dolor odio ratione et consectetur libero, corrupti nesciunt?</p>
<div className="flex items-center gap-4">
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<p>145</p>
<p className="text-sm font-light">2 days ago</p>
</div>
<div className="flex justify-between pt-5">
    <div className="flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
<p className="pl-2 font-semibold">Ashly cole</p>
    </div>
    <div className="border-2  border-[#48B1F9] w-auto h-auto flex items-center py-0.5 px-3 rounded-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="#48B1F9" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<p className="pl-2 text-[#48B1F9]">4</p>
    </div>
</div>
<p className="py-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat earum explicabo dolor odio ratione et consectetur libero, corrupti nesciunt?</p>
<div className="flex items-center gap-4">
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<p>338</p>
<p className="text-sm font-light">7 days ago</p>
</div>
        </>
    )
}
export default Reviews