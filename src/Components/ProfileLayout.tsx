import  { FC } from "react"
import { Outlet } from 'react-router-dom';

const ProfileLayout:FC = ()=>{
    return(
<main className="max-w-lg mx-auto mt-2">
<Outlet/>
</main>
    )
}
export default ProfileLayout