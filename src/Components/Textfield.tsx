import React, { FC, ReactNode, useId } from 'react';

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?:ReactNode
  helperText?:ReactNode
  icon?:ReactNode
  validation?:any
}


const Textfield: FC<TextfieldProps> =({label,icon,validation, helperText, ...restProps})=>{
  const id =useId()
    return(
        <div className="w-full pb-5">
       { Boolean(label)&& <label className="text-slate-500 text-lg" htmlFor={id}>{label}</label>}
        <div className="flex bg-slate-100 items-center px-1 focus-within:border-2 border-2 rounded-md border-transparent focus-within:border-blue-500">
       { Boolean(icon)&& <span  className="fill-slate-600">
        {icon}
        </span>}
        <input className="w-full h-full px-2 py-3 bg-transparent outline-none border-none" 
        {...restProps}
        id={id}
        {...validation}
        />
        </div>
       { Boolean(helperText)&&<p className='text-slate-600 pt-.5 text-sm px-2'>{helperText}</p>}
      </div>

    )
}
export default Textfield


