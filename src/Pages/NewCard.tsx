import { FC } from "react";
import Textfield from "../Components/Textfield";
import Button from "../Components/Button";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const LoginSchema = yup.object({
  name:yup.string().required(),
  cardnumber:yup.number().required(),
  cvv:yup.number().required().lessThan(4),
  date:yup.string().required(),

})
const AddCard: FC = () => {
  const {register,handleSubmit,formState:{errors}}= useForm({
    resolver:yupResolver(LoginSchema)
  })
  return (
    <>
      <div className="flex justify-between items-center pb-7 ">
        <div className="flex items-center gap-6">
          <div className="rounded-full h-10 w-10 bg-slate-50 pt-[8.9px] pl-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </div>
          <p className="text-2xl font-semibold">Add New Card</p>
        </div>
      </div>
      <div className="flex justify-center py-5 ">
        <img className="" src="/Card 1.jpg" />
      </div>
<form onSubmit={handleSubmit((data)=>{console.log(data)})} >
      <Textfield
        type="text"
        label="Card Name"
        placeholder="Enter your Card Name"
        helperText={<>{errors.name?.message??''}</>}
        validation={register('name')}
      />
      <Textfield
        type="text"
        label="Card Number"
        placeholder="Enter your Card Number"
        helperText={<>{errors.cardnumber?.message??''}</>}
        validation={register('cardnumber')}
      />
      <div className="flex gap-5">
        <Textfield type="date" label="Expiry Date" 
             helperText={<>{errors.date?.message??''}</>}
             validation={register('date')}
        />
        <Textfield type="text" label="CVV" 
             helperText={<>{errors.cvv?.message??''}</>}
             validation={register('cvv')}
        />
      </div>
      <Button className="mt-16 mb-5" varient="containd">
        {"Next"}
      </Button>
      </form>
    </>
  );
};
export default AddCard;
