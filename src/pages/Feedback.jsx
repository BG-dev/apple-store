import React, { useRef } from "react";
import { useFormik } from 'formik'
import emailjs from 'emailjs-com'
import {Button} from '../components'

function Feedback(){

    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
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