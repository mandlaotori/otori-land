import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet } from 'lucide-react';

const MarketStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Wallet className="h-8 w-8 text-yellow-500" />,
      value: 12.5,
      label: 'Billion USD',
      description: 'Total Bitcoin Startup Funding',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      value: 1.6,
      label: 'Trillion USD',
      description: 'Bitcoin Market Cap',
    },
  ];

  return (
    <div className="py-24 bg-default dark:bg-blue-950">
      <div className="container mx-auto px-4">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white dark:text-white mb-4">
            The Bitcoin Ecosystem Opportunity
          </h2>
          <p className="text-white dark:text-blue-400 max-w-2xl mx-auto text-xl">
          Capitalize on Bitcoin's momentum across both established markets and emerging innovations.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12"
        >

          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 bg-blue-950 rounded-xl"
            >
              <div className="flex justify-center">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimal="."
                    decimals={1}
                    prefix="$"
                  />
                )}
                <span className="text-xl ml-2 text-yellow-500">{stat.label}</span>
              </div>
              <p className="text-blue-200">{stat.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarketStats;
