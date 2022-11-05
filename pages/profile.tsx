import { AnimatePresence, motion } from "framer-motion";
import Profile from "../components/Profile";
import { getServerSideProps as gSSP } from "../lib/profile/utils";

export const getServerSideProps = gSSP;

export default function Prof() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <Profile />
      </motion.div>
    </AnimatePresence>
  );
}
