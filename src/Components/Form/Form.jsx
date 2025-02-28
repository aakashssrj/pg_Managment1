import React from 'react'
import { useForm } from "react-hook-form"
import "./Form.css"


const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
      } = useForm()
    
    

    async function onSubmits (data){
        await new Promise((resolve) => setTimeout(resolve,2000))
        console.log(data)
    }


  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmits)}>
            <div>
                <label htmlFor="">Full Name</label>

                <input className={errors.firstName ? "input-error" : ""}
                type="text" 
                {...register("firstName",
                
                    {
                    required: true, 
                    maxLength: {value:5, message:"You have to enter atleast more than 5units"}
                    }) 

                }/>
                    {errors.firstName && <p className='error-msg'>errors.message</p>}  
            </div>
            <br />
            
            <div>
                <label htmlFor="">Email</label>
                <input type="text" {...register("email")} />
                
            </div>
            <br />

            <div>
                <label htmlFor="">Password</label>
                <input type="password" {...register("password")} />
            </div>
            <br />
            <div>
                <input type="submit" disalbed={isSubmitting} value={isSubmitting ? 'Submitting' : 'Submit'} />
            </div>
        </form>


    </div>
  )
}

export default Form