import { useState } from 'react';
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, X, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

function PaymentModal({ isOpen, onClose, total }: PaymentModalProps) {
  const handlePayment = () => {
    toast.success("Payment successful!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] glass-panel border-vortex-purple/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Complete Your Purchase</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="p-4 bg-vortex-purple/10 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total Amount</span>
              <span className="text-2xl font-bold">₹{total.toLocaleString()}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              By proceeding with the payment, you agree to our terms and conditions.
            </p>
          </div>
          <Button
            className="w-full group"
            onClick={handlePayment}
          >
            <span>Proceed to Payment</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Cart() {
  const { items, updateQuantity, removeItem, total } = useCart();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleQuantityChange = (id: number, change: number, currentQuantity: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-8">
                <ShoppingCart className="h-6 w-6 mr-3" />
                <h1 className="text-3xl font-bold">Your Cart</h1>
              </div>

              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="glass-panel p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                            <p className="text-2xl font-bold text-vortex-vivid">
                              ₹{item.price.toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="flex items-center space-x-3">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, -1, item.quantity)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="text-lg font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, 1, item.quantity)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="glass-panel p-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-medium">Total</span>
                      <span className="text-3xl font-bold">₹{total.toLocaleString()}</span>
                    </div>
                    <Button
                      className="w-full group"
                      onClick={() => setIsPaymentModalOpen(true)}
                    >
                      <span>Proceed to Pay</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </main>
        <Footer />
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          total={total}
        />
      </div>
    </ThemeProvider>
  );
} 