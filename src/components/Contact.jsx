import React, { useEffect, useState } from 'react';
import ContactItem from './../entries/ContactItem';
import contactData from './../data/contactData.json'; // Importa el archivo JSON

function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Simula una llamada a un API o carga de datos
    setContacts(contactData);
  }, []);
  
  return (
    <section className="container text-center">
      <div className="row">
        {contacts.map((contact, index) => (
          <ContactItem 
            key={index} 
            imgPath={contact.image} 
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