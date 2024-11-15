import { 
  Twitter,
  MessagesSquare,
  Send,
  Facebook,
  Mail 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'X (Twitter)' },
    { icon: <MessagesSquare className="h-5 w-5" />, href: '#', label: 'Discord' },
    { icon: <Send className="h-5 w-5" />, href: '#', label: 'Telegram' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Mail className="h-5 w-5" />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-blue-900 dark:bg-blue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-blue-300 hover:text-yellow-500 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-blue-400 text-sm text-center">
            © {new Date().getFullYear()} OTORI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;