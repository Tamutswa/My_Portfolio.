"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Python", level: 80 },
      { name: "TensorFlow", level: 70 },
      { name: "OpenAI API", level: 85 },
      { name: "Natural Language Processing", level: 75 },
      { name: "Computer Vision", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Skills & Expertise <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit spans web development and artificial intelligence, allowing me to build comprehensive
            solutions from frontend to backend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="terminal-effect"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-800" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">My Development Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/30 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-primary">Clean Code</h4>
              <p className="text-gray-400">
                I write maintainable, well-documented code that follows best practices and design patterns.
              </p>
            </div>
            <div className="p-6 bg-gray-900/30 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-primary">User-Centered</h4>
              <p className="text-gray-400">
                I prioritize user experience, creating intuitive interfaces and accessible applications.
              </p>
            </div>
            <div className="p-6 bg-gray-900/30 rounded-lg">
              <h4 className="text-xl font-bold mb-3 text-primary">Continuous Learning</h4>
              <p className="text-gray-400">
                I stay updated with the latest technologies and constantly expand my skill set.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
