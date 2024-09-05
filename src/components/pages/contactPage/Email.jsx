import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cxdrtnc",
        "template_54mhlbs",
        form.current,
        "sEjeQX83YxYpQUxMo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex justify-center mb-8">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col border border-gray-300 rounded-lg p-6 bg-gray-300 shadow-lg w-full max-w-md"
      >
        <label className="mb-2 text-gray-800">Ime</label>
        <input
          type="text"
          name="name"
          className="mb-4 p-2 border border-gray-300 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="mb-2 text-gray-800">Email</label>
        <input
          type="email"
          name="email"
          className="mb-4 p-2 border border-gray-300 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="mb-2 text-gray-800">Poruka</label>
        <textarea
          name="message"
          className="mb-4 p-2 border border-gray-300 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Pošalji"
          className="btn btn-primary mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        />
      </form>
    </div>
  );
};
