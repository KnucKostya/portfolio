import React from 'react';
import s from './contacts.module.scss'
import generalContainer from "../../common/styles/container.module.scss";
import {useForm} from "react-hook-form";


const Contacts = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={s.contactsBlock} id={'hire'}>
            <div className={`${generalContainer.container} ${s.container}`}>
                    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                        <input placeholder={'Enter your name / company'} {...register("name", {required: true})} />
                        <input placeholder={'Enter email'} {...register("email", {required: true})} />
                        <input type="text" placeholder={"Say something"}
                               className={s.textForm} {...register("text", {required: true})}/>
                        <input type="submit" className={s.inputStyle}/>
                    </form>
            </div>
</div>
 )};

export default Contacts;