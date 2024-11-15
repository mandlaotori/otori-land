import { Link } from 'react-scroll';

const OrigamiBirdLogo = () => (
  <svg
    viewBox="0 0 100 100"
    className="h-8 w-8"
    fill="currentColor"
  >
    <path d="M20 50 L40 20 L60 40 L80 20 L60 60 L80 80 L40 60 L20 80 Z"
          className="text-blue-600"
          strokeLinejoin="round"
    />
  </svg>
);

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm dark:bg-blue-950/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <OrigamiBirdLogo />
            <span className="text-2xl font-bold text-blue-900 dark:text-white">Otori</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { to: 'market-stats', label: 'The Market' },
              { to: 'how-it-works', label: 'How It Works' },
              { to: 'about', label: 'About' },
              { to: 'early-access', label: 'Early Access' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-blue-900 hover:text-blue-800 cursor-pointer font-medium dark:text-blue-400 dark:hover:text-blue-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
