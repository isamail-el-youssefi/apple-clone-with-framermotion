import { motion } from "framer-motion";

type FadeInPropsType = {
  children: React.ReactNode;
};

export default function FadeIn({ children }: FadeInPropsType) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      //This property defines the margins around the viewport area where the animation should be active.
      // The top margin is set to 100% of the viewport height. This means the animation starts when the top of the element reaches the bottom of the viewport.
      viewport={{ margin: "100% 0px -300px 0px" }}
      transition={{ stiffness: 800, bounce: 800 }}
    >
      {children}
    </motion.div>
  );
}
