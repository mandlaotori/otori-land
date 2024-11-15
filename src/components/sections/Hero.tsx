import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-blue-900 dark:text-white leading-tight"
          >
            Skip the Queue
            <br />
            with OTORI!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold text-yellow-600 dark:text-white leading-tight"
          >
            Private Round Access. Public Market Liquidity.
            <br />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-black dark:text-blue-400 max-w-2xl mx-auto"
          >
            Support and invest in early-stage Bitcoin-driven ventures with
            clear, on-chain transparency and professional portfolio management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
<Link
  to="early-access"
  spy={true}
  smooth={true}
  offset={-80}
  duration={500}
  className="inline-block"
>
  <button
    className="group relative inline-flex items-center justify-center px-6 py-3
    bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500
    hover:to-yellow-600 text-blue-900 font-semibold rounded-lg
    transform transition-all duration-200 hover:scale-[1.02]
    hover:shadow-lg active:scale-[0.98] active:shadow-sm"
  >
    <span className="relative">Get Early Access</span>
    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform
    duration-200 group-hover:translate-x-1" />
  </button>
</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
