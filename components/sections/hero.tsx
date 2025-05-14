"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Web Developer & AI Enthusiast"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h2 className="text-xl md:text-2xl text-gray-400">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 gradient-text">Tamutswa Matondo</h1>
              <div className="h-8 mt-4">
                <p className="text-xl md:text-2xl text-gray-300 typing-cursor">{text}</p>
              </div>
            </div>

            <p className="text-gray-400 text-lg max-w-xl">
              From sleek frontends to smart systems, I'm passionate about building tech that not only works—but wows. My
              mission: create meaningful solutions through the power of the web and AI.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="terminal-effect h-80 md:h-96 flex items-center justify-center relative overflow-hidden"
          >
            <pre className="text-primary text-xs md:text-sm overflow-auto p-4 w-full h-full">
              <code>{`// Tamutswa.js

class Developer {
  constructor() {
    this.name = "Tamutswa Matondo";
    this.role = "Web Developer & AI Enthusiast";
    this.location = "Global";
    this.languages = ["JavaScript", "TypeScript", "Python"];
    this.frameworks = ["React", "Next.js", "Node.js"];
    this.interests = ["AI", "Machine Learning", "Web3"];
  }

  sayHello() {
    console.log("Thanks for visiting my portfolio!");
    return this.startCoding();
  }

  startCoding() {
    return "Building the future, one line at a time...";
  }
}

const tamutswa = new Developer();
tamutswa.sayHello();`}</code>
            </pre>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#projects"
            className="text-gray-400 hover:text-primary transition-colors duration-300 animate-bounce"
          >
            <ArrowDown className="h-8 w-8" />
            <span className="sr-only">Scroll down</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
