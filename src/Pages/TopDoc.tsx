import { FC, useState } from "react"
import Button from "../Components/Button"
import {  useNavigate } from "react-router-dom";

const TopDoc:FC = () =>{
    const navigate = useNavigate()
    const handelClick =()=>{
        navigate("/home/homepage")
    }
    const handelClick1 =()=>{
        navigate("/home/info")
    }
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);

    return(
        <>    
         <div className="flex items-center gap-6">
            <div className="rounded-full h-10 w-10 bg-slate-50 pt-[8.9px] pl-2.5">
        <svg onClick={handelClick}  xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi cursor-pointer bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
            </div>
<p className="text-2xl font-semibold">Top Doctor</p>
        </div>
        <div className="flex justify-between  pt-6 gap-4">
<Button varient="outline">{"All"}</Button>
<Button varient="outline">{"General"}</Button>
<Button varient="outline">{"Dentist"}</Button>
<Button varient="outline">{"Nutritionist"}</Button>
        </div>
        <div className=" cursor-pointer bg-slate-50 rounded-lg w-auto h-auto mt-8 flex ">          
            <div className="p-6 ">
        <img className="rounded-lg h-24  w-24 object-cover  " src="/doc3.jpg" />
            </div>
            <div className="pt-6 w-full">
        <div className="flex justify-between  items-center pr-10">       
        <p onClick={handelClick1} className="text-lg font-medium ">Dr.randy Parker</p>
        <div onClick={() => setIsClicked(!isClicked)}>
        {isClicked ?      
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF2222" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
:
        <svg                
 xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#48B1F9" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg> 
}
        </div>       
            </div>
            <p className="text-base text-slate-500 pt-3">Cardiologist  | The Vally Hospital</p>
            <div className="flex items-center gap-5 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#48B1F9" className="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>
<p>4.8</p>
<p>{"(345 reviews)"}</p>
            </div>
        </div>       
        </div>
        <div className="bg-slate-50 cursor-pointer rounded-lg w-auto h-auto mt-8 flex ">
            
            <div className="p-6 ">
        <img className="rounded-lg h-24  w-24 object-cover  " src="/doc2.jpg" />
            </div>
            <div className="pt-6 w-full">
        <div className="flex justify-between items-center pr-10">
        <p className="text-lg font-medium ">Dr.Tom Rice</p>
        <div onClick={() => setIsClicked1(!isClicked1)}>
        {isClicked1 ?      
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF2222" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
: 
        <svg                
 xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#48B1F9" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg> 
}
        </div>
            </div>
            <p className="text-base text-slate-500 pt-3">Immunologist  | Chirist Hospital</p>
            <div className="flex items-center gap-5 pt-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#48B1F9" className="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>
<p>4.4</p>
<p>{"(225 reviews)"}</p>
            </div>
        </div>     
        </div>
        <div className="bg-slate-50 cursor-pointer rounded-lg w-auto h-auto mt-8 flex ">           
            <div className="p-6 ">
        <img className="rounded-lg h-24  w-24 object-cover  " src="/doc5.jpg" />
            </div>
            <div className="pt-6 w-full">
        <div className="flex justify-between items-center pr-10">
        <p className="text-lg font-medium ">Dr.Harry Kane</p>
        <div onClick={() => setIsClicked2(!isClicked2)}>
        {isClicked2 ?      
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF2222" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
 :
        <svg                
 xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#48B1F9" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
}
        </div>
            </div>
            <p className="text-base text-slate-500 pt-3">Neurologist  | Frankline Hospital</p>
            <div className="flex items-center gap-5 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#48B1F9" className="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>
<p>4.8</p>
<p>{"(832 reviews)"}</p>
            </div>
        </div>      
        </div>
        <div className="bg-slate-50 cursor-pointer rounded-lg w-auto h-auto mt-8 flex ">            
            <div className="p-6 ">
        <img className="rounded-lg h-24  w-24 object-cover  " src="/doc.jpg" />
            </div>
            <div className="pt-6 w-full">
        <div className="flex justify-between items-center pr-10">
        <p className="text-lg font-medium ">Dr.Robert wood</p>
        <div onClick={() => setIsClicked3(!isClicked3)}>
        {isClicked3 ?     
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF2222" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
:
         <svg                
 xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#48B1F9" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg> 
}
        </div>
            </div>
            <p className="text-base text-slate-500 pt-3">Allergist  | JFK Medical Hospital</p>
            <div className="flex items-center gap-5 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#48B1F9" className="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>
<p>4.7</p>
<p>{"(214 reviews)"}</p>
            </div>
        </div>      
        </div>
        </>
    )
}
export default TopDoc