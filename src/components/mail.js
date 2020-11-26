import React from "react";
import emailjs from "emailjs-com";

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
    <div className="contact" id="contact">
      <p>
        Whether you want to get in touch, talk about a project collaboration, or
        just say hi, I'd love to hear from you. Simply fill the from and send me
        an email.
      </p>

      <form className="form" onSubmit={sendEmail}>
        <p>
          <label className="label">Name</label>
          <br />
          <input type="text" name="user_name" required />
          <br />
          <br />
          <label className="label">Email</label>
          <br />
          <input type="text" name="user_email" required />
          <br />
          <br />
          <label className="label">Message</label>
          <br />
          <textarea id="text" rows="1" name="message" required></textarea>
          <br />
          <br />
          <br />
          <input className="submit-button" type="submit" value="Submit" />
        </p>
      </form>
      <hr />
      <footer className="footer">
        <a
          target="_blank"
          rel="noreferrer"
          className="link footer-link"
          href="https://github.com/abecus"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="link footer-link"
          href="https://www.linkedin.com/in/abdulsalamone/"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="link footer-link"
          href="https://medium.com/@sleepingFish"
        >
          Medium
        </a>
      </footer>
    </div>
  );
}
