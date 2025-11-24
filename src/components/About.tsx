import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a UI/UX Designer passionate about creating intuitive, user-centered digital experiences 
                that drive measurable business results. Currently pursuing my Master's in Computer 
                Software Engineering at Northeastern University, I bring hands-on design experience from 
                leading companies including Dassault Systèmes, Deloitte, and Zomato.
              </p>
              <p>
                My approach combines user research, data-driven design decisions, and technical understanding 
                to bridge the gap between user needs and business goals. I specialize in design systems, 
                interaction design, and creating seamless experiences for complex enterprise platforms.
              </p>
              <p>
                With experience designing for 50K+ daily users, I've increased conversion rates by 60% 
                and improved user satisfaction to 92%. I'm committed to empathetic design and following 
                best practices in accessibility and usability.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
          
          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-card shadow-elegant border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">MS in Computer Software Engineering</p>
                      <p className="text-sm text-muted-foreground">Northeastern University</p>
                      <p className="text-xs text-muted-foreground">2024 - 2026</p>
                    </div>
                    <div>
                      <p className="font-semibold">B.Tech in Mechanical Engineering</p>
                      <p className="text-sm text-muted-foreground">VIT University, India</p>
                      <p className="text-xs text-muted-foreground">2018 - 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card shadow-elegant border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Experience</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Dassault Systèmes</p>
                        <p className="text-sm text-muted-foreground">UI/UX Design Co-op</p>
                      </div>
                      <span className="text-xs text-muted-foreground">Current</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Deloitte</p>
                        <p className="text-sm text-muted-foreground">Product Designer</p>
                      </div>
                      <span className="text-xs text-muted-foreground">2022-2023</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Zomato</p>
                        <p className="text-sm text-muted-foreground">UX Designer Intern</p>
                      </div>
                      <span className="text-xs text-muted-foreground">2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-accent text-white shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/20">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  <p className="text-white/90">Boston, Massachusetts</p>
                  <p className="text-sm text-white/70 mt-1">Available for relocation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
