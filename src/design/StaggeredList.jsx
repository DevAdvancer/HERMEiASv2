import { motion } from "motion/react";

const listVariants = {
    hidden: { opacity: 0, filter: "blur(20px)" },
    show: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            staggerChildren: 0.2,
            delay: 0.2,
        },
    },
};

const listItemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const StaggeredList = () => {
    return (
        <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-100px", once: true }}
            className="pl-5 list-disc space-y-3 mb-3"
        >
            <motion.li variants={listItemVariants}>
                <p className="text-white/90">
                    <strong>Privacy is a Human Right</strong>: Every conversation you have, every idea you share, should remain your own. We will never compromise your privacy for profit.
                </p>
            </motion.li>
            <motion.li variants={listItemVariants}>
                <p className="text-white/90">
                    <strong>Transparency is Key</strong>: You deserve to know how your data is handled. Our systems are open, our policies are clear, and we commit to never selling your data to anyone.
                </p>
            </motion.li>
            <motion.li variants={listItemVariants}>
                <p className="text-white/90">
                    <strong>Encryption is Essential</strong>: From end-to-end encryption to cutting-edge security protocols, we ensure that your work stays private — even from us.
                </p>
            </motion.li>
            <motion.li variants={listItemVariants}>
                <p className="text-white/90">
                    <strong>Freedom from Ads</strong>: Our apps are built without the distractions of invasive ads. The only thing we'll ever ask for is your trust.
                </p>
            </motion.li>
            <motion.li variants={listItemVariants}>
                <p className="text-white/90">
                    <strong>Control is Yours</strong>: We provide you with the tools to manage your own security, customize your experience, and make informed choices about how you communicate.
                </p>
            </motion.li>
        </motion.ul>
    );
};

export default StaggeredList;
