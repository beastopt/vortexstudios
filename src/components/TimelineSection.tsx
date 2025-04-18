
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type TimelineItem = {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  skills?: string[];
};

const timelineItems: TimelineItem[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    organization: 'TechVortex Inc.',
    period: '2021 - Present',
    description: 'Led the development of interactive web applications using React and Three.js. Implemented complex animations and 3D visualizations that increased user engagement by 45%.',
    type: 'work',
    skills: ['React', 'Three.js', 'TypeScript', 'WebGL']
  },
  {
    id: '2',
    title: 'UX Designer & Developer',
    organization: 'Creative Dynamics',
    period: '2019 - 2021',
    description: 'Designed and developed user interfaces for various client projects. Created interactive prototypes and implemented frontend code for seamless user experiences.',
    type: 'work',
    skills: ['UI/UX Design', 'Figma', 'React', 'SCSS']
  },
  {
    id: '3',
    title: 'Master of Computer Science',
    organization: 'Tech University',
    period: '2017 - 2019',
    description: 'Specialized in Human-Computer Interaction and Interactive Systems. Thesis focused on immersive web experiences using WebGL and emerging web technologies.',
    type: 'education'
  },
  {
    id: '4',
    title: 'Frontend Developer',
    organization: 'WebSolutions Agency',
    period: '2016 - 2019',
    description: 'Developed responsive websites and web applications for various clients across different industries. Focused on creating engaging user experiences with modern web technologies.',
    type: 'work',
    skills: ['JavaScript', 'HTML/CSS', 'jQuery', 'Bootstrap']
  },
  {
    id: '5',
    title: 'Bachelor of Design',
    organization: 'Design Institute',
    period: '2013 - 2016',
    description: 'Studied digital design with a focus on interactive media and web design. Completed several projects combining visual design with frontend development.',
    type: 'education'
  },
];

export default function TimelineSection() {
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedIds.includes(id);

  return (
    <section id="experience" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience & Education
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My professional journey and academic background
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-border"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          ></motion.div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className={cn(
                  "relative flex flex-col md:flex-row md:items-center",
                  index % 2 === 0 ? "md:justify-end" : "md:flex-row-reverse"
                )}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline node */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-background bg-white dark:bg-vortex-darkest z-10 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2 + index * 0.1 
                  }}
                >
                  {item.type === 'work' ? (
                    <BriefcaseIcon className="w-4 h-4 text-vortex-purple" />
                  ) : (
                    <GraduationCapIcon className="w-4 h-4 text-vortex-orange" />
                  )}
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={cn(
                    "glass-panel ml-12 md:ml-0 md:w-5/12 transition-all duration-300 cursor-pointer",
                    isExpanded(item.id) ? "p-6" : "p-4 hover:shadow-lg",
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  )}
                  onClick={() => toggleExpanded(item.id)}
                  whileHover={{ scale: isExpanded(item.id) ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <motion.span 
                      className={cn(
                        "text-xs px-2 py-1 rounded",
                        item.type === 'work' 
                          ? "bg-vortex-purple/20 text-vortex-purple dark:bg-vortex-purple/30"
                          : "bg-vortex-orange/20 text-vortex-orange dark:bg-vortex-orange/30"
                      )}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {item.period}
                    </motion.span>
                    <span className="text-sm text-muted-foreground">{item.type === 'work' ? 'Work' : 'Education'}</span>
                  </div>

                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.organization}</p>

                  <motion.div 
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isExpanded(item.id) ? "mt-4 max-h-96" : "max-h-0"
                    )}
                    initial={false}
                    animate={{ 
                      height: isExpanded(item.id) ? "auto" : 0,
                      opacity: isExpanded(item.id) ? 1 : 0
                    }}
                  >
                    <p className="text-sm">{item.description}</p>
                    
                    {item.skills && item.skills.length > 0 && (
                      <motion.div 
                        className="mt-3 flex flex-wrap gap-1"
                        initial={false}
                        animate={{ 
                          y: isExpanded(item.id) ? 0 : 10,
                          opacity: isExpanded(item.id) ? 1 : 0
                        }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.skills.map(skill => (
                          <motion.span 
                            key={skill} 
                            className="text-xs px-2 py-0.5 bg-secondary rounded-full"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
