import "./Contact.css";

const Contact = () => {
  return (
      <div className="contact-container">
      <div className="grid-top">
        <div className="map-container">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7190273306924!2d-58.442355785261284!3d-34.585975380464106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f2ccacaeb1%3A0xf70477b3206c27e!2sUnder%20Club!5e0!3m2!1ses-419!2sar!4v1665092399767!5m2!1ses-419!2sar"
            // width="600"
            // height="450"
            // style="border:0;"
            style={{width:"600px", height:"450px"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> 
        </div>
        <div className="grid-right"></div>
      </div>
      <div className="grid-bottom"></div>
    </div>
  );
};

export default Contact;
