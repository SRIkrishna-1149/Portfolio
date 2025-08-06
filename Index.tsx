import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink, Code, Shield, Database, Smartphone, Brain, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TypingEffect from "@/components/TypingEffect";
import { useState } from "react";

const Index = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skills = [
    {
      icon: Code,
      title: "Web Technology",
      description: "Expert in modern web development with HTML, CSS, JavaScript, and cutting-edge frameworks.",
      color: "text-neon-cyan",
      bgColor: "hover:bg-neon-cyan/10",
      label: "Frontend & Backend Technologies"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Specialized in protecting digital assets and implementing security best practices.",
      color: "text-electric-purple",
      bgColor: "hover:bg-electric-purple/10",
      label: "Digital Security & Protection"
    },
    {
      icon: Database,
      title: "MS Office",
      description: "Advanced proficiency in Microsoft Office suite for business solutions.",
      color: "text-tech-green",
      bgColor: "hover:bg-tech-green/10",
      label: "Business Applications"
    },
    {
      icon: Brain,
      title: "Core Java Development",
      description: "Strong foundation in Java programming and object-oriented design.",
      color: "text-primary",
      bgColor: "hover:bg-primary/10",
      label: "Enterprise Java Solutions"
    },
    {
      icon: Award,
      title: "Data Structures & Algorithms",
      description: "Expert in computer science fundamentals and problem-solving techniques.",
      color: "text-accent",
      bgColor: "hover:bg-accent/10",
      label: "Algorithmic Problem Solving"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-muted/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-6">
                <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hello, I'm{" "}
                  <span className="text-primary animate-glow-pulse">
                    Sai Santhosh
                  </span>
                </h1>
                
                 <div className="font-rajdhani text-xl md:text-2xl lg:text-3xl text-muted-foreground min-h-[80px]">
                   I'm a <TypingEffect words={["Core Java Developer", "HTML Web Designer", "Frontend Developer", "Cyber Security Specialist", "Data Structures & Algorithms Expert", "Technology Innovator", "Creative Coder"]} />
                 </div>
              </div>

              <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Passionate tech innovator crafting cutting-edge solutions in web development, 
                cybersecurity, and enterprise applications with a focus on scalable architectures and modern technologies.
              </p>

               <div className="flex flex-col sm:flex-row gap-4 pt-6">
                 <button className="group flex items-center gap-3 bg-background text-neon-cyan px-8 py-4 rounded-lg font-rajdhani font-semibold text-lg hover:scale-95 transition-all duration-300 shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50">
                   <Download className="animate-bounce-gentle group-hover:animate-bounce-gentle transition-transform duration-300" size={24} />
                   Download CV
                 </button>
                 
                 <button className="group flex items-center gap-3 bg-neon-cyan text-black px-8 py-4 rounded-lg font-rajdhani font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50">
                   <Mail className="group-hover:scale-105 transition-transform duration-300 text-black" size={24} />
                   Get In Touch
                 </button>
               </div>

              <div className="flex items-center gap-6 pt-6">
                <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-neon">
                  <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/sai-santhosh-kumar-addala" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-neon">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="relative flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
              <div className="relative group">
                {/* Profile Photo Container with Flashing Cyber ASTRO Tech Effects */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/30 z-10 group-hover:scale-105 transition-all duration-700">
                   {/* Enhanced Visible Cyber ASTRO Tech Background Effects */}
                   <div className="absolute -inset-16 rounded-full bg-gradient-to-r from-neon-cyan via-aqua to-neon-blue blur-3xl animate-cyber-flash opacity-70"></div>
                   <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-cyber-blue via-neon-cyan to-aqua blur-2xl animate-astro-pulse opacity-80"></div>
                   <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-aqua via-cyber-blue to-neon-cyan blur-xl animate-glow-flash opacity-60"></div>
                   <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-neon-blue via-aqua to-cyber-blue blur-lg animate-tech-blink opacity-90"></div>
                  
                  <img 
                    src="/lovable-uploads/41395578-0395-4af6-a338-a2f4819c13d4.png"
                    alt="Sai Santhosh Kumar Addala - Profile Photo"
                    className="w-full h-full object-cover transition-transform duration-500 relative z-20 rounded-full"
                  />
                  
              {/* Enhanced Visible Cyber Tech Shadow Effects */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_160px_40px_rgba(0,255,255,0.8),0_0_220px_60px_rgba(0,255,255,0.6),0_0_280px_80px_rgba(0,191,255,0.4)] pointer-events-none z-10 animate-shadow-flash"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header with Astro Tech Effects */}
          <div className="text-center mb-20 relative">
            <div className="cyber-border rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
              <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 relative z-10">
                Tech <span className="text-primary animate-glow-pulse">Expertise</span>
              </h2>
              <p className="font-rajdhani text-xl text-muted-foreground max-w-2xl mx-auto relative z-10">
                Specialized in cutting-edge technologies and modern development practices
              </p>
            </div>
          </div>

          {/* Skills Grid with Enhanced Animations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className={`cyber-border hover-lift group expertise-card transition-all duration-500 animate-slide-in-bottom relative overflow-hidden ${skill.bgColor}`}
                style={{ animationDelay: `${1.2 + index * 0.15}s` }}
                onMouseEnter={() => setHoveredSkill(skill.title)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon Container with Enhanced Effects */}
                    <div className={`p-4 rounded-xl bg-background/50 group-hover:scale-125 transition-all duration-500 relative ${skill.color}`}>
                      <skill.icon 
                        className={`${skill.color} group-hover:animate-cyber-pulse transition-all duration-300`} 
                        size={40} 
                      />
                      {/* Glow effect for icon */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                           style={{ background: `var(--${skill.color.replace('text-', '')})` }}></div>
                    </div>
                    
                    <h3 className="font-rajdhani text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {skill.title}
                    </h3>
                    
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {skill.description}
                    </p>
                    
                    {/* Hover Label with Bottom-to-Top Animation */}
                    {hoveredSkill === skill.title && (
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium animate-slide-up whitespace-nowrap z-20 shadow-lg">
                        {skill.label}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                      </div>
                    )}
                  </div>
                </CardContent>
                
                {/* Card Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ boxShadow: `0 0 30px ${skill.color.includes('primary') ? 'var(--primary)' : 'var(--accent)'}/20` }}></div>
              </Card>
            ))}
          </div>
          
          {/* Bottom Spacing for Header Clearance */}
          <div className="h-16"></div>
        </div>
      </section>
    </div>
  );
};

export default Index;