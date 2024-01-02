import React, { FC, ReactNode } from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    varient?:"containd"|"outline"|"text"
    children:ReactNode
}
const Button:FC<ButtonProps> =({children,varient,...restprops})=>{
    const ButtonStyls ={
        containd:'text-slate-50 hover:bg-blue-600 active:bg-blue-900 bg-blue-400 border-none',
        outline:'border-blue-700 border-2 bg-transparent text-blue-500 hover:bg-blue-300 hover:text-black hover:border-blue-700 active:border-blue-800',
        text:' bg-slate-100'
    }
    return(
        <button 
        {...restprops}
        className={`${ButtonStyls[varient ?? "text"]} py-2 px-5  outline-none w-full rounded-3xl ${restprops.className} `}>
            {children}</button>

    )
}
export default Button