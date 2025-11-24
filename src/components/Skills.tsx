import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Box } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Design Tools",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "Protopie/Principle", level: 80 },
      { name: "Adobe Creative Suite", level: 85 },
    ]
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "UX Methodologies",
    skills: [
      { name: "User Research", level: 95 },
      { name: "Usability Testing", level: 90 },
      { name: "Journey Mapping", level: 90 },
      { name: "Information Architecture", level: 90 },
      { name: "Design Thinking", level: 95 },
    ]
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Design Systems & Dev",
    skills: [
      { name: "Design Systems", level: 95 },
      { name: "Component Libraries", level: 90 },
      { name: "HTML/CSS", level: 85 },
      { name: "React/Tailwind", level: 80 },
      { name: "Design Tokens", level: 90 },
    ]
  },
  {
    icon: <Box className="h-6 w-6" />,
    title: "Tools & Practices",
    skills: [
      { name: "Accessibility (WCAG)", level: 90 },
      { name: "A/B Testing", level: 85 },
      { name: "Analytics (GA, Mixpanel)", level: 85 },
      { name: "Agile/Design Sprints", level: 90 },
      { name: "Collaboration Tools", level: 95 },
    ]
  }
];

const industries = [
  { name: "FinTech", description: "Financial services & insurance platforms" },
  { name: "CAD/PLM", description: "Product lifecycle management systems" },
  { name: "Food Tech", description: "Real-time delivery & tracking platforms" },
];

const Skills = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            User-centered design expertise combining research, visual design, and technical implementation
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card shadow-elegant border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-accent text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-accent transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Industry Experience */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Industry Experience</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 text-center bg-muted/30 border-border card-hover">
                <h4 className="text-lg font-bold mb-2 text-primary">{industry.name}</h4>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;