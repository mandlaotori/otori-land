import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Coins, Percent, BarChart } from "lucide-react";

const steps = [
  {
    icon: <Coins className="h-12 w-12 text-yellow-500" />,
    title: "Fund Tokens",
    description:
      "Receive tokenized shares representing your investment in the fund.",
    keywords: ["Tokenized Ownership", "Easy Trading", "Secure Transfers"],
  },
  {
    icon: <Percent className="h-12 w-12 text-yellow-500" />,
    title: "Private Round Discounts",
    description: "Gain exclusive access to private investment rounds.",
    keywords: ["Early Access", "Preferential Rates", "Exclusive Opportunities"],
  },
  {
    icon: <BarChart className="h-12 w-12 text-yellow-500" />,
    title: "Automated NAV Reflection",
    description:
      "Smart contracts automatically adjust token value to reflect the Net Asset Value.",
    keywords: [
      "Transparency",
      "Real-Time Valuation",
      "Smart Contract Security",
    ],
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
            How OTORI Works
          </h2>
          <p className="text-black dark:text-blue-400 max-w-2xl mx-auto text-xl">
            Our innovative approach integrates traditional fund management with
            Bitcoin-related technology, ensuring maximum efficiency and
            transparency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 bg-blue-50 dark:bg-blue-800/50 rounded-xl text-center flex flex-col h-full"
            >
              <div className="flex-grow space-y-4">
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-black dark:text-blue-300">
                  {step.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-blue-200 dark:border-blue-700">
                <div className="flex flex-wrap gap-2 justify-center">
                  {step.keywords.map((keyword, kidx) => (
                    <span
                      key={kidx}
                      className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-200 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
