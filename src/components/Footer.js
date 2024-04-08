import React from "react";

function Footer() {
  return (
    <footer>
      <div className="wrapper footer">
        <div className="lorem block-footer">
          <div className="title">Task Manager</div>
          <br />
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            eligendi tempora alias vero est? Error atque id eaque doloribus
            architecto nulla laborum quis harum quae cum, consectetur nemo, ad
            minima?
          </p>
        </div>
        <div className="information block-footer">
          <div className="title">information</div>
          <br />
          <p>About Us</p>
          <p>Faq</p>
          <p>Terms & Conditions</p>
          <p> Contacts</p>
          <p>Help</p>
        </div>
        <div className="get_in_touch block-footer">
          <div className="title">Get In Touch</div>
          <br />
          <p>Shamshi Kaldayakova 70</p>
          <p>Kazakhstan, Astana</p>
          <p>abylaimuratbayev@gmail.com</p>
          <p>+7-778-355-0947</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
