import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    title: string;
    originalPrice: number;
    discountedPrice: number;
    features: string[];
    icon: any;
    popular: boolean;
  };
}

export function ProductDetailsModal({ isOpen, onClose, product }: ProductDetailsModalProps) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handlePurchase = (price: number) => {
    addItem({
      id: product.id,
      title: product.title,
      price
    });
    toast.success("Added to cart!");
    onClose();
  };

  const handleCustomQuote = () => {
    navigate('/#contact');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] glass-panel border-vortex-purple/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vortex-purple/20">
                <product.icon className="h-6 w-6 text-vortex-vivid" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-muted-foreground line-through text-sm mr-2">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-2xl font-bold">
                    ₹{product.discountedPrice.toLocaleString()}
                  </span>
                </div>
                <span className="text-vortex-orange text-sm">
                  Save ₹{(product.originalPrice - product.discountedPrice).toLocaleString()}
                </span>
              </div>
            </div>
            {product.popular && (
              <div className="bg-vortex-vivid text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Features</h3>
            <div className="space-y-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-vortex-vivid mr-2" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Button
              className="w-full group"
              onClick={() => handlePurchase(product.discountedPrice)}
            >
              <span>Add to Cart</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleCustomQuote}
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 