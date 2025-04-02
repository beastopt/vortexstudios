import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";

export default function Profile() {
  const { currentUser } = useAuth();

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
              <Card className="glass-panel border-vortex-purple/30">
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full bg-vortex-purple/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-vortex-vivid">
                        {currentUser?.displayName?.[0] || currentUser?.email?.[0] || 'U'}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{currentUser?.displayName || 'User'}</h2>
                      <p className="text-muted-foreground">{currentUser?.email}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Account Information</h3>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Email Verified: {currentUser?.emailVerified ? 'Yes' : 'No'}</p>
                        <p className="text-sm text-muted-foreground">Account Created: {currentUser?.metadata.creationTime}</p>
                        <p className="text-sm text-muted-foreground">Last Sign In: {currentUser?.metadata.lastSignInTime}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-medium">Settings</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full">
                          Change Password
                        </Button>
                        <Button variant="outline" className="w-full">
                          Update Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
} 