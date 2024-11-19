import { Link } from "react-scroll";
import { BarChart2, HelpCircle, Info, Sparkles, Home} from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const navItems = [
    {
      to: "hero",
      icon: <Home className="h-6 w-6" strokeWidth={2.5} />,
      activeIcon: (
        <Home className="h-6 w-6" strokeWidth={2.5} fill="currentColor" />
      ),
    },
    {
      to: "market-stats",
      icon: <BarChart2 className="h-6 w-6" strokeWidth={2.5} />,
      activeIcon: (
        <BarChart2 className="h-6 w-6" strokeWidth={2.5} fill="currentColor" />
      ),
    },
    {
      to: "how-it-works",
      icon: <HelpCircle className="h-6 w-6" strokeWidth={2.5} />,
      activeIcon: (
        <HelpCircle className="h-6 w-6" strokeWidth={2.5} fill="currentColor" />
      ),
    },
    {
      to: "about",
      icon: <Info className="h-6 w-6" strokeWidth={2.5} />,
      activeIcon: (
        <Info className="h-6 w-6" strokeWidth={2.5} fill="currentColor" />
      ),
    },
    {
      to: "early-access",
      icon: <Sparkles className="h-6 w-6" strokeWidth={2.5} />,
      activeIcon: (
        <Sparkles className="h-6 w-6" strokeWidth={2.5} fill="currentColor" />
      ),
    },
  ];

  const desktopLabels = {
    "market-stats": "The Market",
    "how-it-works": "How It Works",
    about: "About",
    "early-access": "Early Access",
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm dark:bg-blue-950/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center md:justify-between items-center">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="OTORI Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-bold text-blue-900 dark:text-white">
                OTORI
              </span>
            </Link>

            <div className="hidden md:flex space-x-8">
              {Object.entries(desktopLabels).map(([key, label]) => (
                <Link
                  key={key}
                  to={key}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-blue-900 hover:text-blue-800 cursor-pointer font-medium dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white dark:bg-blue-950 shadow-lg md:hidden z-50"
      >
        <div className="flex justify-around items-center py-3 px-4">
          {navItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <motion.div
                whileTap={{ scale: 0.85 }}
                className={`p-2 text-blue-900 dark:text-blue-400 hover:text-blue-600
          dark:hover:text-blue-300 transition-colors
          ${index === navItems.length - 1 ? "pr-2" : ""}`}
              >
                <div className="stroke-[2.5px]">{item.icon}</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
