import React from 'react'
import { useForm } from "react-hook-form"


const Form = () => {

    const { register, handleSubmit } = useForm()
    

    function onSubmits (data){
        console.log("Data is fetched",data)
    }


  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmits)}>
            <div>
                <label htmlFor="">Full Name</label>
                <input type="text" {...register("firstName" , { required: true, maxLength: 5 }) }  />
            </div>
            <br />
            
            <div>
                <label htmlFor="">Email</label>
                <input type="email" {...register("email")} />
            </div>
            <br />

            <div>
                <label htmlFor="">Password</label>
                <input type="password" {...register("password"),{ required: true, maxLength: 20 }} />
            </div>
            <br />
            <div>
                <input type="submit" />
            </div>
        </form>


    </div>
  )
}

export default Form