import {
  X,
  Linkedin,
  Send,
  Mail
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <X className="h-5 w-5" />, href: 'https://x.com/otori_one', label: 'X (Twitter)' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/otori-one', label: 'LinkedIn' },
    { icon: <Send className="h-5 w-5" />, href: 'https://t.me/OTORI_ONE', label: 'Telegram' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:community@otori.one', label: 'Email' },
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
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
