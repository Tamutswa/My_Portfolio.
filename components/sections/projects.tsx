"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Smart Hanger System",
    description:
      "Optimized for fashion retail, the Smart Hanger System improves inventory visibility, speeds up item retrieval through RGB-guided lighting, and streamlines store organization via a secure, role-based web dashboard.",
    image: "/images/smart-hanger-system.png",
    tags: ["IoT", "AI", "React", "Node.js", "HTML", "CSS", "Bootstrap", "JavaScript"],
    liveUrl: "https://github.com/users/Tamutswa/projects/3",
    githubUrl: "https://github.com/Tamutswa/Smart_Hanger_System",
    featured: true,
  },
  {
    id: 2,
    title: "E_Learning Platform",
    description:
      "A comprehensive e-learning platform with dashboard, course management, assignments tracking, and progress visualization. Features include calendar integration, discussion forums, and personalized learning paths.",
    image: "/images/e-learning-platform.png",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
    liveUrl: "https://github.com/Tamutswa/Edu_Learning_Platform",
    githubUrl: "https://github.com/Tamutswa/Edu_Learning_Platform",
    featured: true,
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description:
      "A modern, responsive developer portfolio built with Next.js and Tailwind CSS featuring smooth animations and a dark theme.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://tamutswa.dev",
    githubUrl: "https://github.com/tamutswa/portfolio",
    featured: false,
  },
  {
    id: 4,
    title: "E-commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer analytics with real-time data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Redux", "D3.js", "Firebase"],
    liveUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/tamutswa/ecommerce-dashboard",
    featured: false,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all" ? projects : filter === "featured" ? projects.filter((project) => project.featured) : projects

  return (
    <section id="projects" className="section-padding bg-black/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span> My Projects <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work showcasing my skills in web development and AI integration.
          </p>

          <div className="flex justify-center mt-6 space-x-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
              className="rounded-full"
            >
              Featured
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden h-56">
                  {project.id === 1 || project.id === 2 ? (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <Button asChild size="sm" variant="outline" className="rounded-full">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
