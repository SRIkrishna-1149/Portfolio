import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saisanthosh353@gmail.com",
      link: "mailto:saisanthosh353@gmail.com",
      color: "text-neon-cyan"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94928 61353",
      link: "tel:+919492861353",
      color: "text-tech-green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: "#",
      color: "text-electric-purple"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/SRIkrishna-1149",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      link: "https://www.linkedin.com/in/sai-santhosh-addala-a030512b6",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      link: "https://wa.me/919492861353",
      color: "text-foreground hover:text-primary"
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
              Get In <span className="text-primary animate-glow-pulse">Touch</span>
            </h1>
            <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-10">
              Ready to bring your ideas to life? Let's collaborate and create 
              something extraordinary together.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cyber-border rounded-2xl p-8 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-orbitron text-2xl font-bold mb-6 text-center">
              Send a <span className="text-primary">Message</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-rajdhani text-sm font-medium">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="cyber-border bg-background/50 font-inter"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-rajdhani text-sm font-medium">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="cyber-border bg-background/50 font-inter"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-rajdhani text-sm font-medium">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="cyber-border bg-background/50 font-inter"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-rajdhani text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, ideas, or how I can help..."
                  rows={6}
                  required
                  className="cyber-border bg-background/50 font-inter resize-none"
                />
              </div>
              
               <button
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full bg-neon-cyan text-black px-8 py-4 rounded-lg font-rajdhani font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50"
               >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send size={20} />
                    Send Message
                  </div>
                 )}
               </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
            <div className="cyber-border rounded-2xl p-8">
              <h3 className="font-orbitron text-xl font-bold mb-6 text-center">
                Contact <span className="text-primary">Information</span>
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-cyber">
                      <info.icon className={`${info.color} group-hover:animate-pulse-slow`} size={24} />
                    </div>
                    <div>
                      <p className="font-rajdhani font-medium text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-inter font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="cyber-border rounded-2xl p-8">
              <h3 className="font-orbitron text-xl font-bold mb-6 text-center">
                Connect <span className="text-primary">Online</span>
              </h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    className={`p-4 rounded-lg bg-gradient-cyber hover-lift ${social.color} transition-colors`}
                    title={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="cyber-border rounded-2xl p-8 text-center">
              <h3 className="font-orbitron text-xl font-bold mb-4">
                <span className="text-primary">Availability</span>
              </h3>
              <p className="font-rajdhani text-lg mb-4">
                Open for new projects and collaborations
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse-slow"></div>
                <span className="font-inter text-sm text-muted-foreground">
                  Available for freelance work
                </span>
              </div>
            </div>

            {/* Response Time */}
            <div className="cyber-border rounded-2xl p-8 text-center">
              <h3 className="font-orbitron text-xl font-bold mb-4">
                Response <span className="text-primary">Time</span>
              </h3>
              <p className="font-rajdhani text-lg text-muted-foreground">
                Typically respond within
              </p>
              <p className="font-tech-mono text-2xl font-bold text-primary">
                24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 cyber-border rounded-2xl p-12">
          <h2 className="font-orbitron text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-primary">Project</span>?
          </h2>
          <p className="font-rajdhani text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a clear vision or just an idea, I'm here to help you 
            transform it into a remarkable digital solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="cyber-border hover-lift font-rajdhani">
              Schedule a Call
            </Button>
            <Button className="neon-glow font-rajdhani">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;