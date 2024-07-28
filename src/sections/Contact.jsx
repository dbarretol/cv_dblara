import React from 'react';
import emailImg from './../assets/contact/email.png';
import mobileImg from './../assets/contact/mobile.png';
import placeImg from './../assets/contact/place.png';
import linkedinImg from './../assets/contact/linkedin.png';

const contactData = [
  {
    img: emailImg,
    alt: 'email',
    href: 'mailto:abc@gmail.com',
    text: 'abc@gmail.com',
  },
  {
    img: mobileImg,
    alt: 'mobile',
    href: '#',
    text: '--- --- ---',
  },
  {
    img: placeImg,
    alt: 'place',
    href: 'https://www.openstreetmap.org/#map=14/-12.0309/-77.0281',
    text: 'Rímac, Lima, Perú',
  },
  {
    img: linkedinImg,
    alt: 'linkedin',
    href: 'https://pe.linkedin.com/in/dbarretol',
    text: 'dbarretol',
  },
];

const ContactItem = ({ img, alt, href, text }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center">
    <img src={img} alt={alt} className='img-fluid' />
    <a href={href} className="btn btn-link">{text}</a>
  </div>
);

function Contact() {
  return (
    <section className="container text-center">
      <div className="row">
        {contactData.map((contact, index) => (
          <ContactItem 
            key={index} 
            img={contact.img} 
            alt={contact.alt} 
            href={contact.href} 
            text={contact.text} 
          />
        ))}
      </div>
    </section>
  );
}

export default Contact;


/*     // Datos de contacto
    <section className="mb-4">
      <div className="container">
        <h2>Datos de contacto</h2>
        <div className="d-flex justify-content-around flex-wrap">
          <div>Email: dbarretol@outlook.com</div>
          <div>Teléfono: 999 999 999</div>
          <div>Lugar: Rimac, Lima, Perú</div>
          <div>LinkedIn: /dbarretol</div>
        </div>
      </div>
    </section> */