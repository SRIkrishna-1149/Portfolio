import { Lightbulb, Rocket, Target, Users, Zap, Brain, Code, Shield } from "lucide-react";

const Ideas = () => {
  const approaches = [
    {
      icon: Brain,
      title: "Strategic Thinking",
      description: "Every project begins with deep analysis and strategic planning to ensure optimal outcomes.",
      color: "text-neon-cyan"
    },
    {
      icon: Code,
      title: "Clean Code Philosophy",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
      color: "text-tech-green"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Implementing robust security measures from the ground up in every solution.",
      color: "text-electric-purple"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Focusing on user experience and intuitive interfaces that delight and engage.",
      color: "text-neon-blue"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "Understanding your vision, requirements, and challenges through comprehensive analysis.",
      icon: Target
    },
    {
      number: "02", 
      title: "Strategy & Planning",
      description: "Developing a roadmap with clear milestones, timelines, and technical architecture.",
      icon: Brain
    },
    {
      number: "03",
      title: "Design & Prototype",
      description: "Creating intuitive designs and interactive prototypes for validation and feedback.",
      icon: Lightbulb
    },
    {
      number: "04",
      title: "Development & Testing",
      description: "Building robust solutions with rigorous testing and quality assurance processes.",
      icon: Code
    },
    {
      number: "05",
      title: "Launch & Optimize",
      description: "Deploying solutions and continuously optimizing for performance and user satisfaction.",
      icon: Rocket
    }
  ];

  const innovations = [
    {
      title: "AI-Powered Solutions",
      description: "Integrating artificial intelligence to automate processes and enhance user experiences.",
      icon: "🤖"
    },
    {
      title: "Blockchain Integration",
      description: "Leveraging blockchain technology for secure, transparent, and decentralized applications.",
      icon: "⛓️"
    },
    {
      title: "IoT Ecosystems",
      description: "Creating connected device networks for smart homes, offices, and industrial applications.",
      icon: "🌐"
    },
    {
      title: "Progressive Web Apps",
      description: "Building web applications that provide native app-like experiences across all devices.",
      icon: "📱"
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
              My <span className="text-primary animate-glow-pulse">Approach</span>
            </h1>
            <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-10">
              Transforming ideas into reality through innovative thinking, 
              strategic planning, and cutting-edge technology solutions.
            </p>
          </div>
        </div>

        {/* Core Philosophy */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {approaches.map((approach, index) => (
            <div
              key={approach.title}
              className="cyber-border rounded-xl p-4 md:p-6 text-center hover-lift group animate-slide-in-right hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300 section-spacing"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <approach.icon 
                  className={`${approach.color} group-hover:animate-pulse-slow`} 
                  size={48} 
                />
              </div>
              <h3 className="font-rajdhani text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{approach.title}</h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
            Development <span className="text-primary">Process</span>
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="cyber-border rounded-lg p-4 md:p-6 hover-lift animate-slide-in-left hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300 section-spacing">
                    <div className="flex items-center gap-4 mb-3">
                      {index % 2 === 0 ? (
                        <>
                          <div>
                            <h3 className="font-rajdhani text-lg md:text-xl font-semibold hover:text-primary transition-colors">{step.title}</h3>
                            <p className="font-inter text-sm md:text-base text-muted-foreground mt-2">{step.description}</p>
                          </div>
                          <step.icon className="text-primary flex-shrink-0" size={28} />
                        </>
                      ) : (
                        <>
                          <step.icon className="text-primary flex-shrink-0" size={28} />
                          <div>
                            <h3 className="font-rajdhani text-lg md:text-xl font-semibold hover:text-primary transition-colors">{step.title}</h3>
                            <p className="font-inter text-sm md:text-base text-muted-foreground mt-2">{step.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center neon-glow z-10">
                  <span className="font-tech-mono text-lg font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Areas */}
        <div className="mb-16">
          <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
            Innovation <span className="text-primary">Focus</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {innovations.map((innovation, index) => (
              <div
                key={innovation.title}
                className="cyber-border rounded-xl p-6 md:p-8 hover-lift group animate-slide-in-right hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300 section-spacing"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-6">
                  <div className="text-4xl animate-float">{innovation.icon}</div>
                  <div>
                    <h3 className="font-rajdhani text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {innovation.title}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center cyber-border rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <Zap className="text-primary animate-pulse-slow" size={48} />
          </div>
          <h2 className="font-orbitron text-3xl font-bold mb-6">
            Building the <span className="text-primary">Future</span>
          </h2>
          <p className="font-rajdhani text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            My vision is to create technology solutions that not only meet today's needs 
            but anticipate tomorrow's challenges. By combining innovative thinking with 
            proven methodologies, I help businesses transform their digital presence 
            and achieve sustainable growth.
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-gradient-cyber rounded-full px-6 py-3 border border-primary/30">
              <span className="font-tech-mono text-sm text-primary">Innovation Driven</span>
            </div>
            <div className="bg-gradient-cyber rounded-full px-6 py-3 border border-primary/30">
              <span className="font-tech-mono text-sm text-primary">Quality Focused</span>
            </div>
            <div className="bg-gradient-cyber rounded-full px-6 py-3 border border-primary/30">
              <span className="font-tech-mono text-sm text-primary">Future Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;