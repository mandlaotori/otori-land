import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coins, LineChart } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isTokensExpanded, setIsTokensExpanded] = useState(false);

  return (
    <div className="py-24 bg-blue-50 dark:bg-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* About OTORI */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Coins className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-blue-900 dark:text-white">
                About OTORI
              </h2>
            </div>
            <div>
              <p className="text-black dark:text-blue-300 text-lg leading-relaxed mb-2">
                OTORI is the world's first tokenized BTC fund platform built for exclusive
                access to early-stage Distributed Ledger Technology (DLT) investments.
              </p>

              <button
                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                className="text-yellow-500 hover:text-yellow-600 font-semibold transition-colors mb-2"
              >
                {isAboutExpanded ? 'Show Less' : 'Learn More'}
              </button>

              <motion.div
                initial={false}
                animate={{ height: isAboutExpanded ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-2">
                  <p className="text-black dark:text-blue-300 text-lg">
                    <span className="font-semibold">Pioneering Platform:</span> The first tokenized
                    BTC fund platform designed for exclusive early-stage DLT (like blockchain) investments.
                  </p>
                  <p className="text-black dark:text-blue-300 text-lg">
                    <span className="font-semibold">Transparency & Security:</span> Combines robust
                    security measures with transparent operations, ensuring investor trust.
                  </p>
                  <p className="text-black dark:text-blue-300 text-lg">
                    <span className="font-semibold">Efficient Access:</span> Simplifies early entry
                    into high-potential startups, making VC-level investments more accessible.
                  </p>
                  <p className="text-black dark:text-blue-300 text-lg">
                    <span className="font-semibold">Non-Custodial Tools:</span> Utilizes distributed
                    ledger technology to enhance the traditional investment landscape.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* OTORI Vision Tokens */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <LineChart className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-blue-900 dark:text-white">
                OTORI Vision Tokens (OVT)
              </h2>
            </div>
            <div>
              <p className="text-black dark:text-blue-300 text-lg leading-relaxed mb-2">
                The OTORI Vision Token (OVT) represents your stake in the OTORI portfolio,
                offering a transparent, on-chain view of asset value.
              </p>

              <button
                onClick={() => setIsTokensExpanded(!isTokensExpanded)}
                className="text-yellow-500 hover:text-yellow-600 font-semibold transition-colors mb-2"
              >
                {isTokensExpanded ? 'Show Less' : 'Learn More'}
              </button>

              <motion.div
                initial={false}
                animate={{ height: isTokensExpanded ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-2">
                  <p className="text-black dark:text-blue-300 text-lg">
                    <span className="font-semibold">Tokenized Holdings:</span> Each OVT represents
                    a share of the OTORI portfolio, providing clear ownership.
                  </p>
                  <p className="text-black dark:text-blue-300 text-lg">
                    <span className="font-semibold">NAV Tracking:</span> OVT prices directly
                    reflect the fund's Net Asset Value (NAV), ensuring accurate and real-time
                    valuation.
                  </p>
                  <p className="text-black dark:text-blue-300 text-lg">
                    <span className="font-semibold">Seamless Monitoring:</span> Investors can
                    effortlessly track portfolio performance through their OVT holdings.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
