import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coins, LineChart } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 bg-blue-50 dark:bg-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* About OTORI */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Coins className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-blue-900 dark:text-white">
                About OTORI
              </h2>
            </div>
            <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
              OTORI is the world's first tokenized BTC fund platform built for exclusive
              access to early-stage Web3 investments. We combine transparency and security,
              opening doors to high-potential startups in an efficient and accessible way,
              transforming traditional VC investment through decentralized, transparent tools.
            </p>
          </div>

          {/* OTORI Vision Tokens */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <LineChart className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-blue-900 dark:text-white">
                Otori Vision Tokens
              </h2>
            </div>
            <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
              OTORI Vision Token (OVT) represents holdings within the OTORI portfolio,
              offering investors a clear, on-chain view of asset value. OVT price tracks
              the Net Asset Value (NAV) of the fund, making it possible to view portfolio
              performance seamlessly with a single token.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;