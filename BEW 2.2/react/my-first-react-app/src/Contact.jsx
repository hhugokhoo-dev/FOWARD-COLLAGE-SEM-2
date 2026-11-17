import Phonenumber from "./Phonenumber";
import "./Contact.css";

const Contact = () => {
  const contactElement = (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>Email: s.m.zai.shang.mian@gmail.com</p>

      <Phonenumber />
    </div>
  );
  return contactElement;
};

export default Contact;
