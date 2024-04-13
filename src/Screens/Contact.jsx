import { ContactAnimation } from "../Assets/AssetsList";
import ContactForm from "../Components/ContactForm";
import LottieAnimationCard from "../Components/LottieAnimationCard";
import Title from "../Components/Title";
;

const Contact = () => {
  return (
    <section
      className="my-10 mt-20  flex justify-center items-center flex-col"
      id="contact"
    >
      <Title text="Contact" id="contact" />
      <div className=" flex justify-center items-center gap-5 flex-col-reverse lg:flex-row  px-10 ">
        <LottieAnimationCard AnimationSrc={ContactAnimation} />
        <ContactForm />
      </div>
      
    </section>
  );
};

export default Contact;


