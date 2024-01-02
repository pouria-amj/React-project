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
        </>
    )
}
export default Reviews