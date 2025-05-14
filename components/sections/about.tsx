"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Cpu, Globe, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span> About Me <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-72 md:w-80 md:h-96 overflow-hidden rounded-xl border-4 border-primary/20">
              <Image
                src="/images/profile-new.jpeg"
                alt="Tamutswa Matondo"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                <h3 className="text-white text-xl font-bold">Tamutswa Matondo</h3>
                <p className="text-gray-200 text-sm">Web Developer & AI Enthusiast</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate web developer and AI enthusiast with a knack for creating elegant, user-friendly
              applications. My journey in tech began with a curiosity about how digital experiences are built, and has
              evolved into a career focused on crafting innovative solutions that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-6">
              With expertise in both frontend and backend technologies, I enjoy the full process of bringing ideas to
              life—from concept and design to implementation and deployment. I'm particularly interested in the
              intersection of web development and artificial intelligence, exploring ways to create smarter, more
              intuitive digital experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-gray-900/30 border-gray-800">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Code className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Clean Code</h4>
                    <p className="text-sm text-gray-400">Writing maintainable, efficient code is my priority</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/30 border-gray-800">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Cpu className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">AI Integration</h4>
                    <p className="text-sm text-gray-400">Leveraging AI to create smarter applications</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/30 border-gray-800">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Responsive Design</h4>
                    <p className="text-sm text-gray-400">Creating experiences that work on any device</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/30 border-gray-800">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Problem Solver</h4>
                    <p className="text-sm text-gray-400">Finding creative solutions to complex challenges</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
