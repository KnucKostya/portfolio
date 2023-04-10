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
                    <input placeholder={'Enter email...'} {...register("email", {required: true})}
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