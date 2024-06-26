import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl mt-5">Kako do nas?</h1>
      </div>

      <div className="px-10 mt-10">
        <h3 className="text-3xl">Adresa</h3>
        <div>Zemun, Radoja Dakića 57</div>
        <div>Ponedeljak-Subota 08-21h</div>
        <div>Dostupan parking</div>
      </div>
      <div className="overflow-hidden pb-[56.25%] relative h-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.300731807886!2d20.4057069!3d44.8358086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65a2245f575d%3A0x552b746888392d12!2sRadoja%20Daki%C4%87a%2057%2C%20Beograd!5e0!3m2!1sen!2srs!4v1719340964440!5m2!1sen!2srs"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="responsive Google Map"
          className="absolute left-0 top-0  p-10 w-full h-full"
        ></iframe>
        <div></div>
      </div>
    </div>
  );
};

export default ContactPage;
