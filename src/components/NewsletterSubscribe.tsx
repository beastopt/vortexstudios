
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our newsletter updates soon.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <motion.div 
      className="glass-panel p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-vortex-purple/20 flex items-center justify-center">
          <Mail className="h-6 w-6 text-vortex-vivid" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Subscribe to our Newsletter</h3>
          <p className="text-muted-foreground text-sm">Get the latest updates on our projects and services</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-wrap gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            className="flex-1 min-w-[200px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </motion.div>
  );
}
