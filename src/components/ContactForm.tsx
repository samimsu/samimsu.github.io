import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Required = () => {
  return <span className="text-red-500">*</span>;
};

const ContactForm = ({ className = "" }: { className?: string }) => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    if (state.succeeded) {
      resetForm();
    }
  }, [state.succeeded]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col max-w-sm mx-auto text-left w-96 ${className}`}
    >
      <div className="mb-5">
        <label
          htmlFor="full-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name <Required />
        </label>
        <input
          type="text"
          id="full-name"
          name="full name"
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email <Required />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Message <Required />
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="resize-none"
          placeholder="Leave a message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        ></textarea>
      </div>
      <div className="flex items-center space-x-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-400 disabled:dark:bg-blue-500 disabled:cursor-not-allowed"
        >
          Submit
        </button>
        {state.submitting && <Loading />}
        {state.succeeded && (
          <div className="dark:text-slate-200 text-sm">
            Submitted successfully!
          </div>
        )}
        {state.errors && (
          <div className="dark:text-slate-200 text-sm">
            Oops! Something went wrong, and we couldn't send your message.
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
