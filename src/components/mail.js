import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Icon from "@material-ui/core/Icon";

function sendEmail(e) {
  e.preventDefault();
  console.log(e.target);

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

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: darkgreen;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: black;
    }
    &:hover fieldset {
      border-color: green;
    }
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;

export default function mail() {
  return (
    <div className="contact">
      <h2 className="secondary-text">Contact Me...</h2>
      <div className="contact__container" id="contact">
        <div className="contact__container__left-side">
          <form className="form" onSubmit={sendEmail}>
            <StyledTextField
              InputLabelProps={{ required: false }}
              required
              className="text_input"
              label="Name"
              name="user_name"
              variant="outlined"
            />
            <br />
            <StyledTextField
              InputLabelProps={{ required: false }}
              required
              className="text_input"
              label="Email Id"
              rows={2}
              name="user_email"
              type="email"
              variant="outlined"
            />
            <br />
            <StyledTextField
              InputLabelProps={{ required: false }}
              required
              className="text_input"
              label="Message"
              name="message"
              multiline
              variant="outlined"
            />
            <br />
            <br />
            <div className="button-container">
              <Button
                className="submit-button"
                variant="contained"
                type="submit"
              >
                Send
              </Button>
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
