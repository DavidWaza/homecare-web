"use client";
import React from "react";
import { motion, AnimatePresence, delay } from "framer-motion";

interface IPageProps {
  children: React.ReactNode;
}
const PageWrapper: React.FC<IPageProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.65 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
