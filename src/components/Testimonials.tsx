import { Card } from "@/components/ui/card";
import { Quote, Award, Target, Zap } from "lucide-react";

const testimonials = [
  {
    quote: "Abhishek's user-centered approach and design thinking transformed our legacy applications. His design system work has become the foundation for our entire product suite, improving consistency and development velocity.",
    author: "Sarah Mitchell",
    role: "Product Design Lead",
    company: "Dassault Systèmes"
  },
  {
    quote: "Exceptional designer who elevated our financial platform's UX to enterprise standards. His research insights, attention to accessibility, and data-driven design decisions made a huge impact on user satisfaction and conversion rates.",
    author: "David Chen",
    role: "Head of Product",
    company: "Deloitte"
  }
];

const achievements = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "User Satisfaction",
    description: "Achieved 92% user satisfaction through research-driven design decisions"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Business Impact",
    description: "Designed experiences for 50K+ daily users, increasing conversion by 60%"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Design Systems",
    description: "Created scalable design systems reducing development time by 40%"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies to deliver user-centered design solutions with measurable results
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card shadow-elegant border-border relative">
              <Quote className="h-12 w-12 text-accent/20 absolute top-4 right-4" />
              <p className="text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary font-medium mt-1">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Company Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-muted-foreground mb-8">Designed for industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <div className="text-2xl font-bold tracking-tight">Dassault Systèmes</div>
            <div className="text-2xl font-bold tracking-tight">Deloitte</div>
            <div className="text-2xl font-bold tracking-tight">Zomato</div>
          </div>
        </div>
        
        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-card border-border card-hover text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-accent text-white mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
