import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

interface Project {
  title: string;
  role: string;
  company: string;
  timeline: string;
  description: string;
  impact: string;
  impactValue: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    title: "PLM Design System Modernization",
    role: "UI/UX Design Co-op",
    company: "Dassault Systèmes",
    timeline: "Jan 2025 - Present",
    description: "Led redesign of 4+ legacy applications with unified design system and component library. Conducted usability testing with 50+ users, creating design tokens and interaction patterns that improved workflow efficiency.",
    impact: "Task Completion Speed",
    impactValue: "85%",
    technologies: ["Figma", "Design Systems", "User Testing", "Prototyping", "Design Tokens", "Accessibility"],
    metrics: [
      { label: "Task Time Reduction", value: "8min → 1.2min" },
      { label: "User Satisfaction", value: "+92%" },
      { label: "Design Consistency", value: "95%" }
    ]
  },
  {
    title: "FinTech Transaction Platform Redesign",
    role: "Product Designer",
    company: "Deloitte",
    timeline: "May 2022 - Dec 2023",
    description: "Redesigned financial services platform serving 50K+ daily users. Led discovery workshops, created journey maps, designed high-fidelity prototypes, and implemented design system reducing development time by 40%.",
    impact: "Conversion Rate Increase",
    impactValue: "60%",
    technologies: ["Figma", "User Research", "Wireframing", "Prototyping", "Usability Testing", "Analytics"],
    metrics: [
      { label: "Daily Active Users", value: "50K+" },
      { label: "User Errors", value: "-73%" },
      { label: "Mobile Adoption", value: "+85%" }
    ]
  },
  {
    title: "Food Delivery Search & Tracking UX",
    role: "UX Designer Intern",
    company: "Zomato",
    timeline: "May 2020 - Sep 2020",
    description: "Redesigned search experience and real-time order tracking interface. Conducted A/B testing, user interviews with 100+ customers, and iterative design refinements that improved search accuracy and user satisfaction.",
    impact: "Search Success Rate",
    impactValue: "92%",
    technologies: ["Sketch", "User Research", "A/B Testing", "Mobile Design", "Prototyping"],
    metrics: [
      { label: "Search Speed", value: "-30%" },
      { label: "Search Success", value: "65% → 92%" },
      { label: "User Retention", value: "+28%" }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable impact through scalable architecture and modern technologies
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 card-hover bg-card shadow-elegant hover:shadow-hover border-border"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.company}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{project.role}</p>
                <p className="text-xs text-muted-foreground">{project.timeline}</p>
              </div>
              
              {/* Impact Badge */}
              <div className="bg-gradient-accent rounded-lg p-4 mb-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">{project.impact}</span>
                </div>
                <div className="text-3xl font-bold text-white">{project.impactValue}</div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-muted/50 rounded p-2 text-center">
                    <div className="text-xs font-semibold text-primary">{metric.value}</div>
                    <div className="text-[10px] text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;