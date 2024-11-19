import { motion } from 'framer-motion';
import { FC } from 'react';

interface RoadmapItemProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
}

const RoadmapItem: FC<RoadmapItemProps> = ({ number, title, description, icon, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >
      {!isLast && (
        <div className="absolute left-[50%] top-24 h-32 w-0.5 border-l-2 border-dashed border-white/20" />
      )}

      <div className="flex items-start gap-6">
        <div className="text-4xl font-bold text-white/80 w-12">{number}</div>

        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={icon} alt="" className="w-8 h-8" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-white/70 ml-20">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface RoadmapData {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const VisionRoadmap: FC = () => {
  const roadmapItems: RoadmapData[] = [
    {
      number: "1",
      title: "OTORI VETS & INVESTS",
      description: "OTORI identifies and invests in early-stage Bitcoin-related startups at the pre-seed stage to grow our collective portfolio.",
      icon: "/icons/search.svg"
    },
    {
      number: "2",
      title: "INVESTORS BUY OVT",
      description: "Investors purchase OVT tokens. Each OVT represents a share of the total OTORI portfolio, providing clear ownership.",
      icon: "/icons/chip.svg"
    },
    {
      number: "3",
      title: "NAV REFLECTION",
      description: "Cryptographically secured protocols automatically adjust token value to reflect the total portfolio value of the OTORI fund.",
      icon: "/icons/diamond.svg"
    },
    {
      number: "4",
      title: "FLEX TRADING",
      description: "Investors can effortlessly track portfolio performance through their OVT holdings and trade tokens anytime—with no lockup periods.",
      icon: "/icons/handshake.svg"
    },
    {
      number: "5",
      title: "BENEFITS",
      description: "Access private round investments with the liquidity of public markets. Your bridge to high-potential startups.",
      icon: "/icons/bridge.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1e3a8a] p-8 md:p-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-2xl font-light text-white tracking-wider mb-2">OTORI</h1>
        <h2 className="text-5xl font-bold text-white">VISION TOKEN</h2>
      </motion.div>

      {/* Roadmap Container */}
      <div className="max-w-4xl mx-auto space-y-16">
        {roadmapItems.map((item, index) => (
          <RoadmapItem
            key={index}
            {...item}
            isLast={index === roadmapItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default VisionRoadmap;
