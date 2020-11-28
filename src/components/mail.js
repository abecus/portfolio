import React from "react";
import emailjs from "emailjs-com";
import { FaGithub } from "react-icons/fa";

export default function mail() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_za8xfiy",
        "template_llglw1m",
        e.target,
        "user_u9kbKA9qD1pCitF7kXiPE"
      )
      .then(
        (result) => {
          console.log(result);
          alert("Massage Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact">
      <h2 className="secondary-text">Contact Me...</h2>
      <div className="contact__container" id="contact">
        <div className="contact__container__left-side">
          <form className="form" onSubmit={sendEmail}>
            <label className="label">Name</label>
            <br />
            <input type="text" name="user_name" required />
            <br />
            <br />
            <label className="label">Email</label>
            <br />
            <input type="email" name="user_email" required />
            <br />
            <br />
            <label className="label">Message</label>
            <br />
            <textarea id="text" rows="2" name="message" required></textarea>
            <br />
            <br />
            <div className="button-container">
              <button type="submit" className="submit-button" value="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="contact__container__right-side">
          <p>
            Whether you want to get in touch, talk about a project
            collaboration, or just say hi, I'd love to hear from you. Simply
            fill the from and send me an email.
          </p>
        </div>
      </div>
    </div>
  );
}
