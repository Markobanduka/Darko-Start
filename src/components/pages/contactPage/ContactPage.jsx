import React from "react";
import { Email } from "./Email";
import { GiPathDistance } from "react-icons/gi";
import { CiDumbbell } from "react-icons/ci";
import { TbParkingCircle } from "react-icons/tb";
import { HiOutlinePhone } from "react-icons/hi2";

const ContactPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl mt-5">Kako do nas?</h1>
      </div>

      <div className="mt-7 mb-3 md:p-4 lg:p-6 lg:mb-0">
        <h3 className="text-3xl">Adresa</h3>
        <div className="flex items-center">
          Zemun, Radoja Dakića 57{" "}
          <span className="mx-3">
            <GiPathDistance />
          </span>
        </div>
        <div className="flex items-center">
          Ponedeljak-Subota 08-21h{" "}
          <span className="mx-2">
            <CiDumbbell />
          </span>
        </div>
        <div className="flex items-center">
          Dostupan parking{" "}
          <span className="mx-2">
            <TbParkingCircle />
          </span>
        </div>
        <div className="flex items-center underline">
          +381 64 4865787{" "}
          <span className="mx-2">
            <HiOutlinePhone />
          </span>
        </div>
      </div>
      <div className="relative overflow-hidden pb-[56.25%] h-0 md:pb-[75%] lg:pb-[50%] mb-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.300731807886!2d20.4057069!3d44.8358086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65a2245f575d%3A0x552b746888392d12!2sRadoja%20Daki%C4%87a%2057%2C%20Beograd!5e0!3m2!1sen!2srs!4v1719340964440!5m2!1sen!2srs"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Responsive Google Map"
          className="absolute left-0 top-0 w-full h-full  md:p-4 lg:p-6"
        ></iframe>
      </div>
      <div className="flex justify-center">
        <h2 className="font-extrabold text-4xl text-slate-500 mb-5">
          Kontaktiraj nas
        </h2>
      </div>
      <Email />
    </div>
  );
};

export default ContactPage;
