import { FC } from "react"
import Textfield from "../Components/Textfield"
import Button from "../Components/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const LoginSchema = yup.object({
  email:yup.string().required().email(),
  password:yup.string().required()  
})
const LogIn:FC = ()=>{
  const {register,handleSubmit,formState:{errors}}= useForm({
    resolver:yupResolver(LoginSchema)
  })
    return(
        <div>
        <img className="mt-[-50px]"  src="public/health.jpg" alt="" />
        <div className="pb-14">
            <p className="text-center text-3xl mt-[-90px]  font-bold">Login to Your Account</p>
        </div>
        <form onSubmit={handleSubmit((data)=>{console.log(data)})} >
        <Textfield 
        type="email"
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
      </svg>}
        placeholder="Email"
        helperText={<>{errors.email?.message??''}</>}
        validation={register('email')}
        />
        <Textfield
        type="password"
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-lock" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
      </svg>}
      placeholder="Password"
      helperText={<>{errors.password?.message??''}</>}
      validation={register('password')}
        />
<div className="flex items-center mb-4 ">
    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded   dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
</div>

<Button className="mt-4 mb-2" varient="containd">{"Sign in"}</Button>

</form>
        </div>
    )
}
export default LogIn