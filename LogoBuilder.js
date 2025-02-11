import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import LogoCms from "@/components/layout/header/LogoCms";


const LogoBuilder = ({containerRef}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.div
      style={{ opacity: opacity }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="py-8 md:py-10 text-center mx-auto w-32 lg:hidden">
      <Link href="/">
        <span className="sr-only">{process.env.NEXT_PUBLIC_BRAND_NAME}</span>
        <LogoCms />
      </Link>
    </motion.div>
  );
};

export default LogoBuilder;
