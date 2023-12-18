import { FC } from "react"
import Textfield from "../Components/Textfield"

const HomePage:FC=()=>{
    return(
        <div>
        <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Wellcome</p>
            <div className="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
            </div>
        </div>
        <div className="pt-7">

        <Textfield type="search" 
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>}
      placeholder="Search"
      />
      </div>
      <div className="bg-blue-300 rounded-3xl w-auto h-auto flex">
        <div className="pt-8 pl-5 text-white w-1/2">

<p className=" text-2xl font-medium ">Medical Checks!</p>
<p className="">Check your health condition regulary to mimimize the incidence of disease in the futuer.</p>
<button className="bg-white rounded-3xl text-blue-800 px-4 py-2 text-sm mt-6">Check Now </button>
        </div>
<div className="w-1/2">

      <img className="rounded-lg h-60 pb-2 " src="/wepik-export-20231218155540QWIT.png" />
</div>
      </div>
      <div className="flex justify-between pt-3 items-center ">
        <p className="text-lg font-medium">Doctor Speciality</p>
        <p className="text-sm font-medium text-blue-800">See All</p>
      </div>
      <div className="flex justify-between pt-2 pb-3">
<div>

      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
      <svg  xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#48B1F9" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
        </div>
      </div>
      <p className="text-[10px] font-medium">General</p>
      </div>
<div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="23" height="23" x="0" y="0" viewBox="0 0 511.998 511.998"   className=""><g><path d="M292.749 16.905c-23.012 11.931-50.491 11.928-73.501 0C119.821-34.64.538 37.98.538 150.02c0 70.51 58.455 361.978 149.849 361.978 32.059 0 61.235-32.705 89.198-99.983 6.045-14.544 26.783-14.548 32.828 0 27.963 67.278 57.138 99.983 89.198 99.983 90.498 0 149.849-289.225 149.849-361.978-.002-112.003-119.243-184.682-218.711-133.115zm68.86 468.412c-18.961 0-42.491-30.449-64.556-83.543-15.163-36.478-66.94-36.496-82.109.002-22.064 53.091-45.595 83.541-64.556 83.541-58.446 0-123.166-252.499-123.166-335.295 0-92.19 98.156-151.721 179.746-109.427 30.702 15.916 67.36 15.916 98.062 0 81.506-42.253 179.744 17.15 179.744 109.427.001 82.44-64.676 335.295-123.165 335.295z" fill="#48b1f9" opacity="1" data-original="#000000" className=""></path><path d="M435.855 136.679c-7.368 0-13.342 5.972-13.342 13.342 0 22.275-9.158 85.64-29.516 156.764-2.028 7.082 2.071 14.47 9.154 16.496 7.053 2.028 14.464-2.049 16.497-9.154 21.069-73.606 30.546-140.273 30.546-164.105.003-7.37-5.971-13.343-13.339-13.343zM150.388 62.434c-48.295 0-87.588 39.291-87.588 87.586 0 7.37 5.974 13.342 13.342 13.342s13.342-5.972 13.342-13.342c0-33.582 27.32-60.902 60.904-60.902 7.368 0 13.342-5.972 13.342-13.342s-5.974-13.342-13.342-13.342z" fill="#48b1f9" opacity="1" data-original="#000000" className=""></path></g></svg>        </div>
      </div>
      <p className="text-[10px] font-medium">Dentist</p>
      </div>
      <div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#48B1F9" className="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg>         </div>
      </div>
      <p className="text-[10px] font-medium">Ophthal</p>
      </div>
      <div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#48B1F9" className="bi bi-egg-fill" viewBox="0 0 16 16">
  <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10"/>
</svg></div>
      </div>
      <p className="text-[10px] font-medium">Nutrition</p>
      </div>
      </div>
      <div className="flex justify-between ">
      <div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="23" height="23" x="0" y="0" viewBox="0 0 512.001 512"  className=""><g><path d="M485.184 174.922c.312-.652.55-1.336.714-2.043 5.516-23.797-5.699-39.777-15.359-47.348-2.191-17.847-19.016-29.265-32.785-34.777-1.402-16.813-7.785-30.465-19.031-40.656-18.407-16.676-44.778-18.926-57.672-18.926h-.395c-12.562-21.473-41.308-22.465-58.07-19.352-9.832-3.36-19.746-6.03-29.5-7.957-5.434-1.07-10.719 2.461-11.793 7.903-1.074 5.437 2.465 10.718 7.906 11.793 9.684 1.914 19.567 4.644 29.36 8.117a9.992 9.992 0 0 0 5.652.312c.336-.078 33.465-7.61 40.73 12.84 1.543 4.332 5.848 7.059 10.426 6.629.317-.031 31.934-2.809 49.934 13.574 6.332 5.766 10.242 13.203 11.84 22.567-13.543.648-34.668 5.406-45.664 27.18a10.04 10.04 0 0 0 8.949 14.566c3.668 0 7.203-2.016 8.969-5.512 9.257-18.32 32.261-16.48 36.437-15.98 3.711 1.218 25.723 9.066 24.836 22.52a10.037 10.037 0 0 0 5.414 9.577c.035.016 3.598 2.02 6.688 6.227 4.058 5.523 5.39 12.308 3.976 20.191l-.676.899c-15.582 1.71-39.015 11.515-42.215 40.5-.605 5.511 3.368 10.472 8.88 11.082.374.039.745.058 1.113.058 5.05 0 9.398-3.8 9.965-8.937 2.027-18.367 17.8-22.02 24.601-22.739 43.988 32.266 12.938 107.512 10.883 112.336-10.89 20.82-24.559 31.473-41.692 32.446-7.343-6.137-26.57-19.782-60.171-27.832-5.395-1.293-10.813 2.03-12.106 7.422-1.289 5.394 2.031 10.812 7.426 12.101 28.71 6.879 45.101 18.18 51.148 23.04a37.484 37.484 0 0 1-1.109 8.12c-7.14 28.367-45.535 43.246-85.59 33.16-6.629-1.671-13.05-3.972-19.086-6.843a10.04 10.04 0 0 0-14.313 8.184c-1.148 12.995-.59 25.515 1.653 37.35l-26.36 4.384c-1.124-3.993-2.253-8.66-3.476-13.735-5.89-24.394-14.398-59.586-39.414-88.46 20.824-5.071 40.86-8.419 59.742-9.97 5.528-.453 9.64-5.3 9.184-10.824-.453-5.527-5.305-9.632-10.824-9.183-24.957 2.047-51.715 7.039-79.543 14.832-25.512 3.453-43.38 2.07-45.38 1.894-43.515-6.539-55.667-32.832-52.84-53.39a10.041 10.041 0 0 0-12.327-11.121l-7.278 1.78c-12.691-.628-44.414-5.542-58.691-22.167-6.203-7.227-8.578-15.953-7.254-26.68a10.037 10.037 0 0 0-5.281-10.105c-.043-.024-4.317-2.598-5.367-7.133-1.25-5.402 2.375-11.871 5.636-16.344a10.043 10.043 0 0 0 1.313-9.367c-.078-.21-7.48-21.566.973-39.293 4.703-9.863 13.718-17.137 26.8-21.613 3.79-1.297 6.438-4.653 6.75-8.645.012-.129 1.29-12.86 10.563-19.773 6.406-4.774 15.648-5.996 27.465-3.633 2.68.531 5.457-.043 7.699-1.602s3.754-3.96 4.183-6.66c.036-.218 4.532-21.11 43.7-21.851 5.941 8.113 19.05 29.43 9.324 48.527-2.516 4.941-.547 10.988 4.39 13.504a10.044 10.044 0 0 0 13.504-4.39 51.754 51.754 0 0 0 5.625-21.11c5.418-2.305 13.856-4.781 20.59-2.777 4.38 1.296 7.746 4.476 10.297 9.71a10.037 10.037 0 0 0 9.035 5.645 10 10 0 0 0 4.39-1.02c4.985-2.425 7.056-8.437 4.626-13.421-5.012-10.282-12.836-17.254-22.633-20.164-10.433-3.098-21.05-1.121-28.906 1.527-2.621-8.961-6.742-16.746-10.367-22.477 4.726-2.058 11.11-4.457 18.968-6.523 5.364-1.406 8.57-6.898 7.16-12.258-1.41-5.367-6.902-8.566-12.261-7.16-15.867 4.168-26.738 9.59-31.559 12.281-40.66.008-56.379 17.77-62.297 29.27-14.011-1.324-25.812 1.578-35.171 8.66-10.91 8.254-15.38 20.133-17.176 27.469-15.426 6.46-26.453 16.48-32.824 29.84-9.247 19.394-5.684 40.261-3.243 49.71-6.14 9.91-8.199 19.47-6.113 28.47 1.766 7.632 6.129 12.94 9.805 16.23-.465 13.906 3.699 26.074 12.422 36.234 21.625 25.176 64.726 28.695 73.238 29.148 2.191 27.997 23.504 55.622 70.457 62.57.148.024.3.044.453.06.418.042 5.617.55 14.402.55 7.977 0 18.922-.422 31.926-2 27.696 26.18 36.285 61.707 42.61 87.914 2.304 9.54 4.293 17.781 6.886 24.133a10.037 10.037 0 0 0 10.942 6.106l45.425-7.56c2.829-.472 5.32-2.128 6.848-4.554s1.945-5.39 1.145-8.144c-2.477-8.543-3.82-17.64-4.02-27.18 2.945.984 5.942 1.855 8.969 2.617 24.082 6.063 48.601 4.746 69.047-3.71 21.476-8.884 36.008-24.516 40.918-44.016a57.704 57.704 0 0 0 1.43-8.207c17.136-2.383 37.765-12.582 53.581-43.047.094-.18.18-.36.262-.543.434-.973 10.664-24.2 13.656-52.524 3.696-35.004-5.273-62.601-26.007-80.523zm0 0" fill="#48b1f9" opacity="1" data-original="#000000" ></path><path d="M233.52 145.422c.105.582 2.714 14.418 12.312 27.996a67.81 67.81 0 0 0 8.484 9.863c-1.804 10.313-17.578 15.957-17.949 16.086a10.043 10.043 0 0 0 3.238 19.547c1.067 0 2.149-.172 3.211-.531 9.282-3.13 22.766-10.922 28.73-23.446 7.806 3.524 17.216 5.805 28.517 5.805.718 0 1.449-.012 2.183-.027 5.543-.145 9.922-4.75 9.777-10.293-.136-5.457-4.601-9.785-10.03-9.785-.087 0-.173.004-.259.004-40.28 1.011-48.132-37.11-48.472-38.86-1.012-5.433-6.23-9.035-11.672-8.035-5.453.992-9.067 6.223-8.07 11.676zM355.914 233.57c17.43-30.457 10.547-54.007 1.707-68.402-9.34-15.2-22.797-23.207-23.363-23.54-4.77-2.796-10.875-1.202-13.695 3.548-2.82 4.754-1.247 10.902 3.492 13.746.101.058 10.175 6.183 16.8 17.324 8.364 14.063 7.563 29.992-2.37 47.352-2.755 4.812-1.083 10.945 3.73 13.699a9.956 9.956 0 0 0 4.972 1.328c3.489 0 6.872-1.813 8.727-5.055zM462.316 257.035c4.512-3.223 5.559-9.492 2.336-14.004s-9.492-5.558-14.004-2.336c-9.789 6.992-18.695 9.621-26.472 7.809-11.719-2.723-18.375-14.754-18.531-15.035-2.579-4.88-8.614-6.762-13.516-4.207-4.918 2.566-6.824 8.629-4.258 13.543.395.754 9.094 17.078 26.465 23.64-3.11 12.282-5.09 33.953 13.059 49.13a9.999 9.999 0 0 0 6.433 2.34c2.871 0 5.719-1.228 7.707-3.599 3.555-4.254 2.992-10.586-1.262-14.144-11.078-9.266-7.964-24.469-5.78-31.352 9.066-1.11 18.378-5.039 27.823-11.785zM166.762 192.563c-.696-5.5-5.719-9.387-11.223-8.696-5.5.696-9.394 5.723-8.695 11.223 1.742 13.738-9.035 23.738-15.418 28.375-16.067-7.953-34.059-4.922-34.953-4.766-5.442.961-9.063 6.14-8.125 11.586.937 5.445 6.125 9.106 11.574 8.195.172-.03 17.117-2.746 27.258 6.043 5.789 5.02 8.59 13.415 8.32 24.95-.129 5.543 4.262 10.14 9.805 10.27.078.003.156.003.238.003 5.434 0 9.902-4.34 10.031-9.805.317-13.5-2.558-24.609-8.554-33.171 9.84-8.168 22.43-23.012 19.742-44.208zM72.355 139.934c-1.09 2.609-2.746 4.945-4.835 7.07-5.446 5.55-12.282 7.613-12.54 7.691-5.312 1.473-8.449 6.957-7.011 12.29 1.207 4.476 5.261 7.425 9.683 7.425.868 0 1.746-.113 2.625-.351.633-.172 13.243-3.692 22.98-14.52 6.704 4.977 14.579 7.574 23.208 7.574 2.402 0 4.86-.199 7.367-.605 11.375-1.832 19.895-7.196 20.828-7.801 4.653-3.016 5.98-9.23 2.965-13.883-3.016-4.652-9.23-5.98-13.887-2.965-.054.036-5.898 3.664-13.097 4.828-7.235 1.168-12.946-.48-17.653-5.152 2.274-8.652 2-18.293-.855-28.805-1.45-5.351-6.961-8.511-12.317-7.058-5.351 1.453-8.511 6.965-7.058 12.316 2.305 8.5 2.242 15.61-.215 21.508l-.188.438zM307.293 54.535c-16.957-10.058-36.445-4.863-37.266-4.637-5.343 1.473-8.484 7-7.011 12.344 1.468 5.344 7.004 8.48 12.343 7.016.118-.035 12.149-3.117 21.688 2.543 5.676 3.367 9.594 9.511 11.652 18.258 1.09 4.625 5.211 7.742 9.766 7.742.762 0 1.531-.09 2.305-.27 5.398-1.27 8.746-6.676 7.472-12.07-3.355-14.262-10.402-24.668-20.949-30.926zM270.926 243.816c-7.153 12.29-17.489 18.871-30.715 19.563-10.625.55-19.383-2.875-19.598-2.965a10.034 10.034 0 0 0-13.074 5.453c-2.121 5.125.313 10.996 5.434 13.113 1.18.489 11.367 4.54 24.851 4.54.828 0 1.672-.016 2.528-.051 14.332-.543 34.285-6.114 47.93-29.555 2.788-4.789 1.163-10.937-3.63-13.726-4.789-2.79-10.937-1.165-13.726 3.628zM343.617 302.695c-2.37-3.535-6.808-5.23-10.949-4.113-4.004 1.074-6.969 4.586-7.39 8.707-.426 4.164 1.921 8.277 5.699 10.055 3.683 1.73 8.175 1.054 11.148-1.742 3.555-3.34 4.195-8.868 1.492-12.907zM222.188 13.855c1.593 3.86 5.582 6.391 9.75 6.192 4.082-.2 7.707-2.938 9.019-6.805 1.332-3.91.063-8.355-3.129-10.98-3.371-2.774-8.308-3.024-11.937-.594-3.926 2.629-5.512 7.809-3.703 12.187zm0 0" fill="#48b1f9" opacity="1" data-original="#000000" ></path></g></svg>
</div>
      </div>
      <p className="text-[10px] font-medium">Neurlol</p>
      </div>
      <div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#48B1F9" className="bi bi-person-arms-up" viewBox="0 0 16 16">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.492 1.492 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.72.72 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.72.72 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
</svg></div>
      </div>
      <p className="text-[10px] font-medium">Pediatric</p>
      </div>
      <div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="23" height="23" x="0" y="0" viewBox="0 0 66 66"  className=""><g><path d="M33 1C15.4 1 1 15.3 1 33c0 17.6 14.4 32 32 32s32-14.4 32-32C65 15.3 50.6 1 33 1zm0 58C18.7 59 7 47.3 7 33 7 18.6 18.7 7 33 7s26 11.6 26 26c0 14.3-11.7 26-26 26z" fill="#48b1f9" opacity="1" data-original="#000000" ></path><path d="M24.4 33v-.2h-8.8c-1.1 0-2 .9-2 1.9 0 5.3 2.6 10.7 7.1 14.4.8.7 2.1.5 2.8-.3l6.7-8.6c-3.1-1.1-5.4-3.9-5.8-7.2zM50.4 32.8h-8.8v.2c-.4 3.4-2.7 6.2-5.8 7.3l6.7 8.6c.7.9 1.9 1 2.8.3 4.5-3.7 7.1-9.1 7.1-14.4-.1-1.2-1-2-2-2zM27.3 25.6c1.5-1.4 3.6-2.1 5.7-2.1 1.8 0 3.6.6 5.1 1.7l3.4-7c.5-1 .1-2.2-.9-2.6-5.3-2.4-11.3-2.3-16.1 0-1 .5-1.4 1.7-.9 2.6z" fill="#48b1f9" opacity="1" data-original="#000000" ></path><path d="M39.6 32.7V32c0-2-.9-3.9-2.4-5.1-1.2-1-2.6-1.5-4.2-1.5-1.9 0-3.6.8-4.8 2-1.1 1.2-1.8 2.8-1.8 4.6v.7c.3 2.8 2.4 5.1 5.2 5.7.5.1.9.1 1.4.1s1 0 1.4-.1c2.8-.6 4.9-2.8 5.2-5.7z" fill="#48b1f9" opacity="1" data-original="#000000" ></path></g></svg>
</div>
      </div>
      <p className="text-[10px] font-medium">Radiology</p>
      </div>
      <div>
      <div className="bg-slate-200 rounded-full w-10 h-10 content-center">
        <div className="pt-[8.9px] pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#48B1F9" className="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg></div>
      </div>
      <p className="text-[10px] font-medium pl-2">More</p>
      </div>
      </div>
      
      <div className="flex justify-between pt-3 items-center ">
        <p className="text-lg font-medium">Top Dotors</p>
        <p className="text-sm font-medium text-blue-800">See All</p>
      </div>
      <div className="flex justify-between pt-3">
<div className="rounded-2xl w-auto h-auto px-8 py-2 active:bg-blue-800 hover:bg-blue-500 hover:border-none border border-blue-600">All</div>
<div className="rounded-2xl w-auto h-auto px-8 py-2 active:bg-blue-800 hover:bg-blue-500 hover:border-none border border-blue-600">General</div>
<div className="rounded-2xl w-auto h-auto px-8 py-2 active:bg-blue-800 hover:bg-blue-500 hover:border-none border border-blue-600">Dentist</div>
<div className="rounded-2xl w-auto h-auto px-8 py-2 active:bg-blue-800 hover:bg-blue-500 hover:border-none border border-blue-600">Nutrituinist</div>

      </div>
        </div>
    )
}
export default HomePage