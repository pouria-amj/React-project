import  { FC } from "react"
import { Outlet } from 'react-router-dom';

const Layout:FC = ()=>{
    return(
<main className="max-w-lg mx-auto mt-2">
<Outlet/>
</main>
    )
}
export default Layout