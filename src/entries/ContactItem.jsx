import React from 'react';

const ContactItem = ({ imgPath, alt, href, text }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center">
    <img src={imgPath} alt={alt} className='img-fluid' />
    <a href={href} className="btn btn-link">{text}</a>
  </div>
);

export default ContactItem;