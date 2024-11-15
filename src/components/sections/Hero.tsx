import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
            Private Round Access.
            <br />
            Public Market Liquidity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-600 dark:text-blue-400 max-w-2xl mx-auto"
          >
            Get priority access to early-stage blockchain investments with
            transparent, on-chain insights and institutional-grade portfolio
            management
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
            >
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
