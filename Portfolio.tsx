import { useState } from "react";
import { ExternalLink, Github, Code, Smartphone, Globe, Lock, Database, GraduationCap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Cybersecurity Dashboard",
      description: "Advanced security monitoring dashboard with real-time threat detection and analytics.",
      tech: ["React", "TypeScript", "D3.js", "Node.js"],
      category: "Security",
      icon: Lock,
      status: "Coming Soon",
      image: "🛡️",
      github: "https://github.com/dashboard",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      icon: Globe,
      status: "Coming Soon",
      image: "🛒",
      github: "https://github.com/dashboard",
      demo: "#"
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application with AI-powered workout recommendations.",
      tech: ["React Native", "Firebase", "TensorFlow", "Redux"],
      category: "Mobile Development",
      icon: Smartphone,
      status: "Coming Soon",
      image: "💪",
      github: "https://github.com/dashboard",
      demo: "#"
    },
    {
      id: 4,
      title: "Data Visualization Tool",
      description: "Interactive data visualization platform for complex dataset analysis and insights.",
      tech: ["D3.js", "Python", "FastAPI", "PostgreSQL"],
      category: "Data Science",
      icon: Code,
      status: "Coming Soon",
      image: "📊",
      github: "https://github.com/dashboard",
      demo: "#"
    },
    {
      id: 5,
      title: "Smart Office Suite",
      description: "Intelligent office management system with automation and productivity features.",
      tech: ["Microsoft Graph", "Power Platform", "Azure", "SharePoint"],
      category: "Enterprise",
      icon: Globe,
      status: "Coming Soon",
      image: "🏢",
      github: "https://github.com/dashboard",
      demo: "#"
    },
    {
      id: 6,
      title: "Algorithm Visualizer",
      description: "Interactive platform for visualizing data structures and algorithms in real-time.",
      tech: ["React", "Canvas API", "WebGL", "TypeScript"],
      category: "Education",
      icon: Code,
      status: "Coming Soon",
      image: "🧮",
      github: "https://github.com/dashboard",
      demo: "#"
    }
  ];

  const categories = [
    { name: "All", icon: Code, color: "text-primary" },
    { name: "Security", icon: Shield, color: "text-electric-purple" },
    { name: "Web Development", icon: Globe, color: "text-neon-cyan" },
    { name: "Mobile Development", icon: Smartphone, color: "text-neon-blue" },
    { name: "Data Science", icon: Database, color: "text-tech-green" },
    { name: "Enterprise", icon: Lock, color: "text-accent" },
    { name: "Education", icon: GraduationCap, color: "text-primary" }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen gradient-bg pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section with Astro Tech Header */}
        <div className="text-center mb-20 relative">
          <div className="cyber-border rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 relative z-10">
              My <span className="text-primary animate-glow-pulse">Portfolio</span>
            </h1>
            <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-10">
              Showcasing innovative projects that demonstrate technical excellence 
              and creative problem-solving across multiple domains.
            </p>
          </div>
        </div>

        {/* Interactive Category Filter - Enhanced */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
          {categories.map((category, index) => {
            const isActive = activeFilter === category.name;
            const getHoverColor = (categoryName: string) => {
              switch(categoryName) {
                case "All": return "hover:text-neon-cyan hover:border-neon-cyan";
                case "Security": return "hover:text-electric-purple hover:border-electric-purple";
                case "Web Development": return "hover:text-neon-blue hover:border-neon-blue";
                case "Mobile Development": return "hover:text-tech-green hover:border-tech-green";
                case "Data Science": return "hover:text-accent hover:border-accent";
                case "Enterprise": return "hover:text-primary hover:border-primary";
                case "Education": return "hover:text-neon-cyan hover:border-neon-cyan";
                default: return "hover:text-primary hover:border-primary";
              }
            };
            
            return (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`px-6 py-3 rounded-lg font-rajdhani font-medium transition-all duration-300 border-2 flex items-center gap-2 group ${
                  isActive 
                    ? "bg-neon-cyan text-background border-neon-cyan scale-105" 
                    : `${getHoverColor(category.name)} hover:scale-105`
                } animate-scale-in`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <category.icon size={16} className={`${
                  isActive 
                    ? "text-background" 
                    : `${category.color}`
                } transition-all`} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="border rounded-xl overflow-hidden hover-lift group animate-slide-in-left hover:border-neon-cyan transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-cyber flex items-center justify-center">
                <div className="text-6xl animate-float">{project.image}</div>
                <div className="absolute top-4 right-4">
                  <project.icon className="text-primary animate-pulse-slow" size={24} />
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-tech-mono">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button 
                      asChild
                      size="sm" 
                      variant="outline" 
                      className="neon-glow"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                    <Button 
                      asChild
                      size="sm" 
                      variant="outline" 
                      className="neon-glow"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Watch Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-rajdhani text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-tech-mono text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                
                <p className="font-inter text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-tech-mono text-xs bg-secondary px-2 py-1 rounded border border-border hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-rajdhani text-sm text-primary font-medium">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      asChild
                      size="sm" 
                      variant="ghost" 
                      className="hover-neon"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                    <Button 
                      asChild
                      size="sm" 
                      variant="ghost" 
                      className="hover-neon"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center cyber-border rounded-2xl p-12 animate-fade-in">
          <h2 className="font-orbitron text-3xl font-bold mb-4">
            Have a <span className="text-primary">Project</span> in Mind?
          </h2>
          <p className="font-rajdhani text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology 
            and innovative solutions.
          </p>
          <Button asChild size="lg" className="neon-glow font-rajdhani font-semibold mr-4">
            <a href="/contact">Start a Project</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="cyber-border hover-lift font-rajdhani font-semibold">
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;