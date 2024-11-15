import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coins, Percent, BarChart } from 'lucide-react';

const steps = [
  {
    icon: <Coins className="h-12 w-12 text-yellow-500" />,
    title: 'Fund Tokens',
    description:
      'Receive tokenized shares representing your investment in the fund, enabling seamless trading and transfer.',
  },
  {
    icon: <Percent className="h-12 w-12 text-yellow-500" />,
    title: 'Private Round Discounts',
    description:
      'Get exclusive access to private investment rounds at preferential rates before public listings.',
  },
  {
    icon: <BarChart className="h-12 w-12 text-yellow-500" />,
    title: 'Automated NAV Reflection',
    description:
      'Smart contracts automatically adjust token value to reflect the Net Asset Value of the fund.',
  },
];

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 bg-white dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">
            How Otori Works
          </h2>
          <p className="text-blue-600 dark:text-blue-400 max-w-2xl mx-auto">
            Our innovative approach combines traditional fund management with blockchain
            technology for maximum efficiency and transparency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 bg-blue-50 dark:bg-blue-800/50 rounded-xl text-center space-y-4"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;