import React from 'react';
import s from './contacts.module.scss'
import generalContainer from "../../common/styles/container.module.scss";
import {useForm} from "react-hook-form";
import axios from 'axios'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const instance = axios.create({baseURL: 'https://node-portfolio-three.vercel.app/', withCredentials: false})

const Contacts = () => {

    const schema = yup
        .object({
            email: yup.string().email().required(),
        })
        .required();


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {

        instance.post('sendMessage', data)
            .then(() => {
                alert('Thank you for your interest. I will contact you shortly.')
            })
            .catch((e) => {
                alert(e.message)
            })

    }


    return (
        <div className={s.contactsBlock} id={'hire'}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                    <input placeholder={errors.email ? errors.email.message : 'Enter email...'} {...register("email", {required: true})}
                           className={s.emailInput}/>
                        <p style={{color:"red"}}>{errors.email ? errors.email.message : ''}</p>
                    <input placeholder={'What`s your name?'} {...register("name", {required: true})}
                           className={s.emailInput}/>
                    <input type="text" placeholder={"Type something..."}
                           className={s.textInput} {...register("text", {required: true})}/>
                    <input type="submit" className={s.inputSubmitStyle}/>
                </form>
            </div>
        </div>
    )
};

export default Contacts;