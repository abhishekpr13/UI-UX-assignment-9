import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            I'm currently seeking full-time opportunities. Let's discuss how I can contribute to your team.
          </p>
        </div>
        
        <Card className="p-8 md:p-12 bg-card shadow-elegant border-border">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:abhishek139sharma@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">abhishek139sharma@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Boston, MA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links & CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">Connect on Social</h3>
                <div className="space-y-3">
                  <a 
                    href="https://www.linkedin.com/in/abhishek-prakash/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group border border-primary/20"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  
                  <a 
                    href="https://github.com/abhishek139"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group border border-primary/20"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <span className="font-medium">GitHub</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-accent hover:opacity-90 transition-opacity text-lg"
                  asChild
                >
                  <a href="mailto:abhishek139sharma@gmail.com">
                    Send Me an Email
                    <Mail className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;