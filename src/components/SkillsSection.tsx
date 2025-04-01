
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', value: 90, color: '#61DAFB' },
  { name: 'JavaScript', value: 85, color: '#F7DF1E' },
  { name: 'TypeScript', value: 80, color: '#007ACC' },
  { name: 'Node.js', value: 75, color: '#339933' },
  { name: 'UI/UX Design', value: 85, color: '#FF7C7C' },
  { name: 'Three.js', value: 70, color: '#8B5CF6' },
];

const frontendSkills = [
  { category: 'Frontend', skill: 'React', level: 90 },
  { category: 'Frontend', skill: 'Next.js', level: 85 },
  { category: 'Frontend', skill: 'HTML/CSS', level: 95 },
  { category: 'Frontend', skill: 'Tailwind', level: 90 },
  { category: 'Backend', skill: 'Node.js', level: 80 },
  { category: 'Backend', skill: 'Express', level: 75 },
  { category: 'Backend', skill: 'PostgreSQL', level: 70 },
  { category: 'Design', skill: 'Figma', level: 85 },
  { category: 'Design', skill: 'UI/UX', level: 80 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel p-2">
        <p className="font-medium">{`${payload[0].payload.skill}`}</p>
        <p className="text-sm text-muted-foreground">{`Proficiency: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const CustomLabel = (props: any) => {
  const { x, y, width, value } = props;
  return (
    <text
      x={x + width - 5}
      y={y + 10}
      fill="#fff"
      textAnchor="end"
      dominantBaseline="middle"
      className="text-xs font-medium"
    >
      {value}%
    </text>
  );
};

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and skills I've mastered over the years
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Technology Breakdown</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={frontendSkills}
                  margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="skill" width={80} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="level" 
                    fill="#8B5CF6"
                    radius={[0, 4, 4, 0]}
                    className="fill-vortex-vivid"
                  >
                    <LabelList content={<CustomLabel />} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="glass-panel p-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Framer Motion", "Three.js", "WebGL", "GraphQL", "REST APIs", "Responsive Design", 
              "Animations", "Firebase", "AWS", "Docker", "CI/CD", "Git", "Figma", "Adobe XD"].map((skill) => (
              <motion.span
                key={skill}
                className={`px-4 py-2 rounded-full text-sm ${
                  hoveredSkill === skill
                    ? "bg-vortex-purple text-white"
                    : "bg-secondary text-foreground"
                } transition-all duration-300`}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
