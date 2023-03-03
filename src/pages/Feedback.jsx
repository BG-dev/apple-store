import React, { useRef } from "react";
import { useFormik } from 'formik'
import {Button} from '../components'

function Feedback(){

    const form = useRef();

    const sendEmail = () => {
        console.log("Feedback")
      };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            content: ''
        },
        onSubmit: values => {
            sendEmail();
            formik.resetForm();
        }
    })    

    return(
        <div className="feedback">
            <div className="container">
                <h2>Связаться с нами</h2>
                <form className="feedback__form" ref={form} onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>

                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>

                    <label htmlFor="content">Сообщение</label>
                    <textarea type="text" id="content" name="content" onChange={formik.handleChange} value={formik.values.content}/>

                    <Button><span>Отправить</span></Button>
                </form>
            </div>
        </div>
    );

}

export default Feedback;