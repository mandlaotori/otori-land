import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send, Sparkles } from "lucide-react";
import { db } from "../../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";


const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        await addDoc(collection(db, "waitlist"), {
          email,
          timestamp: Timestamp.now()
        });

        toast.success("Thank you for your interest! We'll be in touch soon.");
        setEmail("");
      } catch (error) {
        console.error("Error adding email:", error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="relative py-32 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-blue-900">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-700 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-xl mx-auto"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>

          <div className="relative bg-white/50 dark:bg-blue-950/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl dark:shadow-blue-900/20">
            <div className="text-center space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-6 w-6 text-yellow-500" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
                  Get Early Access
                </h2>
              </div>
              <p className="text-lg text-blue-700 dark:text-blue-300 font-medium">
                Skip the queue. Get updates first!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 pl-4 pr-4 text-lg bg-white dark:bg-blue-900/50
            border-2 border-blue-100 dark:border-blue-800 rounded-lg
            focus:ring-2 focus:ring-yellow-500 focus:border-transparent
            transition-all duration-200"
            required
            disabled={isLoading}
          />
        </div>

        <Button
          type="submit"
          className="w-full h-14 bg-gradient-to-r from-yellow-400 to-yellow-500
          hover:from-yellow-500 hover:to-yellow-600 text-blue-900
          rounded-lg transform transition-all duration-200 hover:scale-[1.02]
          hover:shadow-lg active:scale-[0.98] group"
          disabled={isLoading}
        >
          <span className="text-lg font-semibold">
            {isLoading ? "Joining..." : "Join the Waitlist"}
          </span>
          <Send className="ml-2 h-5 w-5 transform transition-transform
          duration-200 group-hover:translate-x-1" />
        </Button>
      </form>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EarlyAccessForm;
