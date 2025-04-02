import { useState } from 'react';
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  ShoppingCart,
  Zap,
  Code,
  LineChart,
  Layers
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const websiteProducts = [
  {
    id: 1,
    title: "Basic Business Website",
    originalPrice: 14999,
    discountedPrice: 7999,
    features: [
      "5 Custom Pages",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO",
      "3 Revisions"
    ],
    icon: Globe,
    popular: false
  },
  {
    id: 2,
    title: "E-Commerce Store",
    originalPrice: 24999,
    discountedPrice: 14999,
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Gateway",
      "Admin Dashboard",
      "Order Management",
      "5 Revisions"
    ],
    icon: ShoppingCart,
    popular: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    originalPrice: 16999,
    discountedPrice: 7999,
    features: [
      "3-5 Pages",
      "Project Showcase",
      "Contact Form",
      "Animations",
      "3 Revisions"
    ],
    icon: Layers,
    popular: false
  },
  {
    id: 4,
    title: "Custom Web App",
    originalPrice: 39999,
    discountedPrice: 29999,
    features: [
      "Custom Functionality",
      "User Authentication",
      "Database Integration",
      "Admin Dashboard",
      "API Integration",
      "7 Revisions"
    ],
    icon: Code,
    popular: false
  },
  {
    id: 5,
    title: "Business Analytics Website",
    originalPrice: 29999,
    discountedPrice: 19999,
    features: [
      "Dashboard",
      "Data Visualization",
      "Custom Reports",
      "User Roles",
      "5 Revisions"
    ],
    icon: LineChart,
    popular: false
  },
  {
    id: 6,
    title: "Premium Website Package",
    originalPrice: 34999,
    discountedPrice: 24999,
    features: [
      "10+ Custom Pages",
      "Premium Design",
      "SEO Optimization",
      "Content Management System",
      "Social Media Integration",
      "Performance Optimization",
      "10 Revisions"
    ],
    icon: Zap,
    popular: false
  }
];

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCustomQuote = () => {
    navigate('/#contact');
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="section-container pt-28">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Our Website Solutions
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  High-quality, custom-built websites optimized for performance and user experience
                </motion.p>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {websiteProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className={`glass-panel relative overflow-hidden ${
                      product.popular ? "ring-2 ring-vortex-vivid" : ""
                    }`}
                    variants={item}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {product.popular && (
                      <div className="absolute top-0 right-0">
                        <Badge className="bg-vortex-vivid font-medium m-2">Most Popular</Badge>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vortex-purple/20 mr-4">
                          <product.icon className="h-6 w-6 text-vortex-vivid" />
                        </div>
                        <h3 className="text-xl font-bold">{product.title}</h3>
                      </div>

                      <div className="mb-6">
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

                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-vortex-vivid mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full group"
                        onClick={handleCustomQuote}
                      >
                        <span>Get Custom Quote</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <div 
                      className={`absolute inset-0 bg-gradient-to-r from-vortex-purple/10 to-vortex-vivid/10 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex items-center justify-center ${
                        hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="section-container bg-vortex-darkest/30">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need Something Custom?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We create tailor-made solutions for unique business requirements.
                Contact us for a personalized quote.
              </p>
              <Button size="lg" onClick={handleCustomQuote}>
                Get Custom Quote
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
