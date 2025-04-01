
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
};

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Three.js', level: 75, category: 'frontend' },
  { name: 'UI/UX Design', level: 85, category: 'design' },
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'GraphQL', level: 70, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  { name: 'Framer Motion', level: 80, category: 'frontend' },
  { name: 'Figma', level: 85, category: 'design' },
  { name: 'Docker', level: 70, category: 'other' },
  { name: 'AWS', level: 65, category: 'other' },
];

type CategoryTab = 'all' | 'frontend' | 'backend' | 'design' | 'other';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('all');
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Filter skills based on active category
  useEffect(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);
      
      setVisibleSkills(filteredSkills);
      setIsAnimating(false);
    }, 300);
  }, [activeCategory]);

  const getBarColor = (category: string) => {
    switch(category) {
      case 'frontend': return '#9B87F5';
      case 'backend': return '#7E69AB';
      case 'design': return '#F97316';
      case 'other': return '#1EAEDB';
      default: return '#9B87F5';
    }
  };

  return (
    <section id="skills" className="section-container bg-secondary/50 dark:bg-secondary/20 rounded-3xl my-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visualization of technical proficiencies and creative capabilities.
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(['all', 'frontend', 'backend', 'design', 'other'] as CategoryTab[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all duration-300",
                activeCategory === category 
                  ? "bg-vortex-purple text-white shadow-md" 
                  : "bg-white/20 dark:bg-white/5 hover:bg-white/30 dark:hover:bg-white/10"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className={cn(
          "transition-opacity duration-300 glass-panel p-6",
          isAnimating ? "opacity-0" : "opacity-100"
        )}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={visibleSkills}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 80, bottom: 10 }}
              barCategoryGap={12}
              barGap={8}
            >
              <XAxis type="number" domain={[0, 100]} hide />
              <Bar
                dataKey="level"
                nameKey="name"
                label={(props) => {
                  const { x, width, y, value, name } = props;
                  return (
                    <>
                      <text
                        x={10}
                        y={y + 4}
                        textAnchor="start"
                        dominantBaseline="middle"
                        className="text-xs md:text-sm fill-current"
                      >
                        {name}
                      </text>
                      <text
                        x={width - 5}
                        y={y + 4}
                        textAnchor="end"
                        dominantBaseline="middle"
                        className="text-xs fill-current"
                      >
                        {value}%
                      </text>
                    </>
                  );
                }}
                radius={[0, 4, 4, 0]}
                className="animate-fade-in"
              >
                {visibleSkills.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={getBarColor(entry.category)} 
                    style={{ 
                      animation: `fade-in-right 0.6s ease-out ${index * 0.05}s`,
                      transform: isAnimating ? 'translateX(-20px)' : 'translateX(0)',
                      opacity: isAnimating ? 0 : 1
                    }} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
