import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const EarlyAccessForm = () => {
  const [email, setEmail] = useState('');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for your interest! We\'ll be in touch soon.');
      setEmail('');
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl font-bold text-blue-900 dark:text-white">
            Get Early Access
          </h2>
          <p className="text-blue-600 dark:text-blue-400">
          Skip the QUEUE. Get Updates First!

          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900"
            >
              Join the Waitlist
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EarlyAccessForm;
