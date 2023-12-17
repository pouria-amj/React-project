import React, { FC } from 'react';
import Textfield from '../Components/Textfield';
import Button from '../Components/Button';
const Profile:FC =()=> {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
  
    const handleImageUpload = (e: { target: { files: [any]; }; }) => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
        <>
        <p className='text-3xl font-bold pb-12'>Fill Your Profile</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none"
          }}
        />
        <div
          style={{
            height: "96px",
            width: "96px",
            border: "1px  black"
          }}
          onClick={() => imageUploader.current.click()}
        >
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png?ga=GA1.2.107597156.1682110036" alt="" />
          <img
            ref={uploadedImage}
            className='h-[98px] mt-[-98px] rounded-full '
        //     style={{
        //    height:"81px",
        //    width:"81px",
           
        //       position: "absolute"
        //     }}
          />
        </div>
        <div className='pl-20 mt-[-13px]'
                  onClick={() => imageUploader.current.click()}
                  >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>        </div>
        
      </div>
      <form className='pt-16 pb-9'>
      <Textfield   type='text' placeholder='Full name'/>
      <Textfield type='text' placeholder='Nickname'/>
      <Textfield type='date' label='Date of Birth'/>
      <div className='flex bg-slate-100 items-center px-1 py-3 mb-10 focus-within:border-2 border-2 rounded-md border-transparent focus-within:border-blue-500'>

      <label htmlFor="gender">Gender:</label>
  <select className='bg-inherit pr-72 focus-visible:outline-none' name="gender">
    <option value="">Please select one…</option>
    <option value="female">Female</option>
    <option value="male">Male</option>      
    </select>
      </div>

<Button varient='containd' >{"Continue"}</Button>
    </form>
      </>

    );
  }
export default Profile