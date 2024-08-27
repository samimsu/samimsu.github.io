import RootLayout from "../layouts/RootLayout";
import ContactForm from "../components/ContactForm";
import Heading2 from "../components/Heading2";

const Contact = () => {
  return (
    <RootLayout>
      <div className="page-container w-full">
        <Heading2>Contact</Heading2>
        <ContactForm className="mt-6" />
      </div>
    </RootLayout>
  );
};

export default Contact;
