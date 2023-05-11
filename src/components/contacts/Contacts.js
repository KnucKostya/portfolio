import React from 'react';
import s from './contacts.module.scss'
import generalContainer from "../../common/styles/container.module.scss";
import {useForm} from "react-hook-form";
import axios from 'axios'

const instanse = axios.create({baseURL:'https://node-portfolio-three.vercel.app/', withCredentials: false})

const Contacts = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        
        instanse.post('sendMessage', data)
        .then (()=>{
                alert('Thank you for your interest. I will contact you shortly.') 
        })
        .catch((e)=>{
            alert(e.message)
        })

    }
//test commit

    return (
        <div className={s.contactsBlock} id={'hire'}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                    <input placeholder={'Enter email...'} {...register("email", {required: true})}
                           className={s.emailInput} />
                    <input placeholder={'What`s your name?'} {...register("name", {required: true})}
                           className={s.emailInput} />
                    <input type="text" placeholder={"Type something..."}
                           className={s.textInput} {...register("text", {required: true})}/>
                    <input type="submit" className={s.inputSubmitStyle}/>
                </form>
            </div>
        </div>
    )
};

export default Contacts;