import React, { useState } from "react";
import "./style/contact.css";
import Telegram from "../../src/assets/telegram.png";
import Gmail from "../../src/assets/gmail.png";
import Whatsapp from "../../src/assets/whatsapp.png";

const Contact = () => {
  const [state, setState] = useState(true);
  const stateHandler = () => {
    return setState(!state);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1 className="contact__title">Contacts</h1>
        <p className="contact__subtitle">
          Want to know more or just chat? <br />
          You are welcome!
        </p>
        <a
          target="_blank "
          className="contact__btn"
          href="https://t.me/SATYLGANOVALINUR"
        >
          Send message
        </a>
        <div className="contact__icons">

          <a target="_blank" href="https://t.me/SATYLGANOVALINUR">
            <img className="contact__img" src={Telegram} alt="Telegram" />
          </a>
          <a target="_blank" href="https://wa.me/996702965650">
            <img className="contact__img" src={Whatsapp} alt="Whatsapp" />
          </a>
          <div className="contact__img-gmail">
            {state ? (
              <img
                onClick={() => stateHandler()}
                style={{ display: `${state ? "block" : "none"}` }}
                className="contact__img"
                src={Gmail}
                alt="Gmail"
              />
            ) : (
              <p className="contact__img gmail" onClick={() => stateHandler()}>
                alinursatylganov8@gmail.com
              </p>
            )}
          </div>
        </div>
        <div className="contact__chat">
          Write me on
          <br />
          <a
            className="contact__chat"
            target="_blank"
            href="https://t.me/SATYLGANOVALINUR"
          >
            {" "}
            Telegram
          </a>
          ,
          ,
          <a
            className="contact__chat"
            target="_blank"
            href="https://wa.me/996702965650"
          >
            {" "}
            Whatsapp
          </a>
          , Gmail.
        </div>
      </div>
    </section>
  );
};

export default Contact;
