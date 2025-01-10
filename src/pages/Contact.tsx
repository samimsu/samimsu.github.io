import RootLayout from "../layouts/RootLayout";
import ContactForm from "../components/ContactForm";
import Heading2 from "../components/Heading2";

const Contact = () => {
  return (
    <RootLayout>
      <div className="page-container w-full animate-slidein opacity-0 [--slidein-delay:300ms]">
        <Heading2>Contact</Heading2>
        <div className="flex items-center md:items-start md:justify-between flex-col md:flex-row space-x-0 md:space-x-6 space-y-4 md:space-y-0 mt-6">
          <div className="md:text-left text-gray-900 dark:text-white">
            <div className="text-4xl mb-4">Get in Touch</div>
            <div>
              Feel free to use the form or email me at{" "}
              <a
                href="mailto:mohammadsamimsu@gmail.com"
                className="text-blue-500"
              >
                mohammadsamimsu@gmail.com
              </a>
              .
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </RootLayout>
  );
};

export default Contact;
