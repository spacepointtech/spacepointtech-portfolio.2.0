import { motion } from "framer-motion";

const Title = ({ text, id, styles }) => {
    return (
        <motion.h1
            className={`font-black leading-none text-fadeMainTheme text-6xl my-3 font-bebas-neue text-center px-2 ${styles}`}
            id={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
        >
            {text}
        </motion.h1>

    )
}

export default Title