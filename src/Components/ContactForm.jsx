import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Button from "./Button";
import { BiMailSend } from "react-icons/bi";
import Circles from "./Circles";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ContactForm = () => {
  const [msg, setMsg] = useState();
  const form = useRef();
  const ref = useRef();
  let successText = (
    <>
      <h1 className="text-center font-semibold text-lg md:text-xl">
        Messaged sent successfully{" "}
      </h1>
      <FaCheckCircle className="text-fadeMainTheme text-xl" />
    </>
  );
  let errorText = (
    <>
      <h1 className="text-center font-semibold text-lg md:text-xl">
        Message failed to send
      </h1>
      <FaTimesCircle className="text-red-500 text-xl" />
    </>
  );
  const isInView = useInView(ref, { once: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_ID
      );
      setMsg(successText);
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      form.current.reset();
      setMsg(errorText);
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="py-20 lg:py-[120px] overflow-hidden relative z-10 px-10 lg:w-2/5 w-full"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <motion.div
        className="container w-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        <motion.div
          className="flex flex-wrap lg:justify-between items-center -mx-4 w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          <motion.div
            className="w-full px-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
          >
            <motion.div
              className="bg-white relative rounded-xl p-8 sm:p-12 shadow-lg border border-fadeMainTheme"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
            >
              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    required
                    name="email"
                    autoComplete="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    name="message"
                    placeholder="Your Message"
                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border resize-none outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="w-full flex justify-center items-center text-3xl">
                  <Button
                    btnText="Submit"
                    btnIcon={<BiMailSend className="text-2xl font-semibold" />}
                  />
                </div>
              </form>
              {msg && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full flex justify-center items-center mt-10 gap-5"
                >
                  {msg}
                </motion.div>
              )}
              <Circles />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
