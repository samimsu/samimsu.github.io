import RootLayout from "../layouts/RootLayout";
import ContactForm from "../components/ContactForm";
import Heading2 from "../components/Heading2";

const Contact = () => {
  return (
    <RootLayout>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Heading2>Contact</Heading2>
        <ContactForm className="mt-6" />
      </div>
    </RootLayout>
  );
};

export default Contact;
