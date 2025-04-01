
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Kinetic Portfolio",
    description: "An interactive portfolio with 3D elements and motion animations that create an immersive user experience. Built with React, Three.js and Framer Motion.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    links: {
      demo: "https://demo.vortexstudios.com/kinetic",
      github: "https://github.com/vortexstudios/kinetic-portfolio"
    }
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "A powerful AI-powered platform that generates custom content for blogs, social media, and marketing materials using advanced language models.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js", "OpenAI API", "Firebase", "TypeScript"],
    links: {
      demo: "https://ai-generator.vortexstudios.com",
      github: "https://github.com/vortexstudios/ai-content-generator"
    }
  },
  {
    id: 3,
    title: "Neuomorphic Dashboard",
    description: "A modern dashboard UI with neuomorphic design elements, dark mode support, and real-time data visualization capabilities.",
    image: "https://images.unsplash.com/photo-1614624532603-58483fc3bebb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Recharts", "Styled Components", "Redux"],
    links: {
      demo: "https://dashboard.vortexstudios.com",
      github: "https://github.com/vortexstudios/neuomorphic-dashboard"
    }
  },
];

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="section-container">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of interactive web experiences and digital solutions.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={cn(
                "glass-panel transition-all duration-500 ease-out overflow-hidden",
                expandedId === project.id 
                  ? "grid md:grid-cols-2 gap-6" 
                  : "cursor-pointer hover:shadow-lg"
              )}
              onClick={() => toggleExpanded(project.id)}
            >
              <div 
                className={cn(
                  "overflow-hidden",
                  expandedId === project.id ? "h-full" : "h-64"
                )}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    expandedId !== project.id && "hover:scale-105",
                    expandedId === project.id ? "rounded-l-2xl" : "rounded-t-2xl md:rounded-2xl"
                  )}
                />
              </div>

              <div className={cn(
                "p-6 flex flex-col",
                expandedId !== project.id && "md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-gradient-to-t md:from-black/70 md:to-transparent md:backdrop-blur-sm md:rounded-b-2xl"
              )}>
                <h3 className={cn(
                  "text-xl md:text-2xl font-bold",
                  expandedId !== project.id && "md:text-white"
                )}>
                  {project.title}
                </h3>

                {expandedId === project.id ? (
                  <>
                    <p className="mt-3 text-muted-foreground">{project.description}</p>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-vortex-purple/10 text-vortex-purple dark:bg-vortex-purple/20 dark:text-vortex-light-purple">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 flex gap-4">
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium hover:text-vortex-purple dark:hover:text-vortex-light-purple transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLinkIcon className="mr-2 h-4 w-4" />
                          View Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium hover:text-vortex-purple dark:hover:text-vortex-light-purple transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="mt-2 text-sm line-clamp-2 md:text-white/90">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
