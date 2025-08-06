import { Shield, Code, Database, Smartphone, Brain, Award } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Web Technology",
      description: "Expert in modern web development with HTML, CSS, JavaScript, and cutting-edge frameworks.",
      color: "text-neon-cyan"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Specialized in protecting digital assets and implementing security best practices.",
      color: "text-electric-purple"
    },
    {
      icon: Database,
      title: "MS Office",
      description: "Advanced proficiency in Microsoft Office suite for business solutions.",
      color: "text-tech-green"
    },
    {
      icon: Smartphone,
      title: "Mobile App Dev",
      description: "Creating responsive and innovative mobile applications for modern users.",
      color: "text-neon-blue"
    },
    {
      icon: Brain,
      title: "Data Structures & Algorithms",
      description: "Strong foundation in computer science fundamentals and problem-solving.",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section with Astro Tech Header */}
        <div className="text-center mb-20 relative">
          <div className="cyber-border rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 relative z-10">
              About <span className="text-primary animate-glow-pulse">Me</span>
            </h1>
            <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-10">
              A passionate tech innovator dedicated to crafting cutting-edge solutions 
              in web development, cybersecurity, and enterprise applications.
            </p>
          </div>
        </div>

        {/* Profile Section with Enhanced Spacing */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24 mt-8">
          {/* Left Column - Text Content with Slide Animation */}
          <div className="space-y-8 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="cyber-border rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
              <h2 className="font-orbitron text-3xl font-bold text-primary relative z-10 mb-4">
                Sai Santhosh Kumar Addala
              </h2>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed relative z-10">
                Sai Santhosh Kumar Addala is a hardworking and ambitious Computer Science student with a strong passion for technology. Currently pursuing a Computer Honours degree at Gayatri College of Science and Management, Sai is eager to contribute meaningfully to the tech industry. With skills in core Java development, advanced web development, cyber security, data structures & algorithms, and a completed PGDCA certification, Sai is ready to leverage these abilities to deliver high-quality web design services and enterprise solutions.
              </p>
              <div className="flex items-center gap-4 pt-6 relative z-10">
                <Award className="text-primary animate-glow-pulse" size={28} />
                <span className="font-rajdhani text-lg">Computer Science Student & Certified Professional</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Image with Enhanced Padding */}
          <div className="relative animate-slide-in-right px-8 py-8" style={{ animationDelay: "0.5s" }}>
            <div className="relative group flex justify-center">
              {/* Profile Photo Container with Flashing Cyber ASTRO Tech Effects */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 z-20 group-hover:scale-105 transition-all duration-700">
                {/* Enhanced Visible Cyber ASTRO Tech Background Effects */}
                <div className="absolute -inset-16 rounded-full bg-gradient-to-r from-neon-cyan via-aqua to-neon-blue blur-3xl animate-cyber-flash opacity-70"></div>
                <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-cyber-blue via-neon-cyan to-aqua blur-2xl animate-astro-pulse opacity-80"></div>
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-aqua via-cyber-blue to-neon-cyan blur-xl animate-glow-flash opacity-60"></div>
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-neon-blue via-aqua to-cyber-blue blur-lg animate-tech-blink opacity-90"></div>
                
                <img 
                  src="/lovable-uploads/41395578-0395-4af6-a338-a2f4819c13d4.png"
                  alt="Sai Santhosh Kumar Addala - Profile Photo"
                  className="w-full h-full object-cover transition-transform duration-500 relative z-30 rounded-full"
                />
                
                {/* Enhanced Visible Cyber Tech Shadow Effects */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_160px_40px_rgba(0,255,255,0.8),0_0_220px_60px_rgba(0,255,255,0.6),0_0_280px_80px_rgba(0,191,255,0.4)] pointer-events-none z-10 animate-shadow-flash"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid with Enhanced Header */}
        <div className="mb-20 relative">
          <div className="text-center mb-16">
            <div className="cyber-border rounded-xl p-6 max-w-2xl mx-auto relative overflow-hidden animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
              <h2 className="font-orbitron text-3xl font-bold relative z-10">
                <span className="text-primary animate-glow-pulse">Tech</span> Expertise
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="cyber-border rounded-xl p-6 hover-lift group animate-container-slide-in-right"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className={`${skill.color} group-hover:animate-pulse-slow`} size={32} />
                  <h3 className="font-rajdhani text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline with Enhanced Header */}
        <div className="text-center relative">
          <div className="mb-16">
            <div className="cyber-border rounded-xl p-6 max-w-2xl mx-auto relative overflow-hidden animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
              <h2 className="font-orbitron text-3xl font-bold relative z-10">
                My <span className="text-primary animate-glow-pulse">Journey</span>
              </h2>
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            <div className="space-y-12">
              {[
                { year: "2024", title: "Advanced Web Development", desc: "Mastering modern frameworks and technologies" },
                { year: "2023", title: "Cybersecurity Specialization", desc: "Focused on digital security and protection" },
                { year: "2022", title: "Mobile App Development", desc: "Creating innovative mobile solutions" },
                { year: "2021", title: "Foundation in Tech", desc: "Building core programming skills" }
              ].map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 animate-slide-in-bottom`}
                  style={{ animationDelay: `${1.4 + index * 0.2}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="cyber-border rounded-lg p-6 hover-lift relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-primary/3"></div>
                      <h3 className="font-rajdhani text-xl font-semibold text-primary relative z-10">{item.title}</h3>
                      <p className="font-inter text-muted-foreground mt-2 relative z-10">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center neon-glow z-10 border-4 border-primary/30">
                    <span className="font-tech-mono text-sm font-bold text-primary-foreground">{item.year}</span>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Spacing for Header Clearance */}
          <div className="h-16"></div>
        </div>
      </div>
    </div>
  );
};

export default About;