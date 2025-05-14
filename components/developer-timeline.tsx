"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

type TimelineEntry = {
  id: number
  title: string
  date: string
  description: string
  tags?: string[]
  githubUrl?: string
  projectUrl?: string
}

const timelineEntries: TimelineEntry[] = [
  {
    id: 1,
    title: "Started Learning Web Development",
    date: "2022",
    description:
      "Began my journey in web development, focusing on HTML, CSS, and JavaScript fundamentals. Built my first static websites and small interactive applications.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Smart Hanger System Project",
    date: "2023",
    description:
      "Led a team to develop an IoT-based inventory management system for retail stores, integrating hardware sensors with a web dashboard.",
    tags: ["IoT", "React", "Node.js"],
    githubUrl: "https://github.com/Tamutswa/Smart_Hanger_System",
    projectUrl: "https://github.com/users/Tamutswa/projects/3",
  },
  {
    id: 3,
    title: "E-Learning Platform Development",
    date: "2024",
    description:
      "Designed and built a comprehensive learning management system with course tracking, assignments, and progress visualization.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
    githubUrl: "https://github.com/Tamutswa/Edu_Learning_Platform",
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    date: "2024 - Present",
    description:
      "Working with clients to deliver custom web solutions, focusing on responsive design and modern web technologies.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Future Goals",
    date: "2025+",
    description:
      "Planning to expand skills in AI integration, blockchain technologies, and advanced web application architectures.",
    tags: ["AI", "Web3", "Cloud Architecture"],
  },
]

export default function DeveloperTimeline() {
  return (
    <div className="space-y-8">
      {timelineEntries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline connector */}
          {index < timelineEntries.length - 1 && (
            <div className="absolute left-4 top-8 h-full w-0.5 bg-gradient-to-b from-primary to-primary/10"></div>
          )}

          <div className="flex gap-6">
            {/* Timeline dot */}
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 ring-2 ring-primary">
              <span className="h-3 w-3 rounded-full bg-primary"></span>
            </div>

            {/* Content */}
            <div className="flex-1 rounded-lg border border-gray-800 bg-gray-900/50 p-5 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-white">{entry.title}</h3>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                  {entry.date}
                </span>
              </div>

              <p className="text-gray-400 mb-4">{entry.description}</p>

              {/* Tags */}
              {entry.tags && entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              {(entry.githubUrl || entry.projectUrl) && (
                <div className="flex flex-wrap gap-3">
                  {entry.githubUrl && (
                    <Button asChild variant="ghost" size="sm" className="h-8">
                      <a href={entry.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5 mr-1.5" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {entry.projectUrl && (
                    <Button asChild variant="ghost" size="sm" className="h-8">
                      <a href={entry.projectUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                        View Project
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
