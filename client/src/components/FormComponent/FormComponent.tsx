import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./FormComponent.module.css";

export const FormComponent = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gvkblak",
        "template_hdn2izp",
        form.current,
        "6mATXsPnieIECtTTa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Set the state to indicate successful submission
          form.current.reset(); // Reset the form input values
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.form}>
      <label>Имя</label>
      <input type="text" name="user_name" />
      <label>Электронная почта</label>
      <input type="email" name="user_email" />
      <label>Текст сообщения</label>
      <textarea name="message" />
      <input className={style.textareaField} type="submit" value="Отправить" />

      {isSubmitted && (
        <div className={style.messageContainer}>
          <p>Сообщение отправлено!</p>
          <button onClick={() => setIsSubmitted(false)}>Закрыть</button>
        </div>
      )}
    </form>
  );
};
