import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function sendEmail(e) {
  e.preventDefault();

  const mail_subject = `${e.target.user_name.value} sent you a mail using Portfolio`;
  const mail_body = `${e.target.message.value} \n\n\n was sent by ${e.target.user_email.value} (${e.target.user_name.value})`;

  fetch("http://abdulsalamone.pythonanywhere.com/mail", {
    method: "POST",
    body: JSON.stringify({
      key: "bababoeey",
      receiver: "abdulsalamone@gmail.com",
      subject: mail_subject,
      body: mail_body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      alert("Thanks for you message and visiting my website! :)");
      // response.json();
    })
    .catch((err) => {
      fetch("http://abdulsalamone.pythonanywhere.com/mail", {
        method: "POST",
        body: JSON.stringify({
          key: "bababoeey",
          receiver: "abdulsalamone@gmail.com",
          subject: "!!! Mailing is not working for portfolio",
          body: "subject",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).catch((err) => {});
    });
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
