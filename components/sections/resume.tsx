"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, FileText, FileSearch, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DeveloperTimeline from "@/components/developer-timeline"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Creative Web Studio",
    period: "2022 - Present",
    description:
      "Built complete websites and web apps from wireframe through deployment. Employed mobile‑first design (Bootstrap/Tailwind), JavaScript-driven interactivity, SEO best practices, and integrated third‑party services for polished, high‑performance experiences.",
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Freelance/ Self-Employed",
    period: "2023 - 2025",
    description:
      "Built full-stack web applications by developing RESTful APIs (Node.js/Express, Python/Flask) and integrating with MongoDB or PostgreSQL. Created dynamic frontends with React or Vue, using Redux for state management. Wrote testable code, set up CI/CD with GitHub Actions, and deployed on AWS or GCP. Collaborated remotely using Git, Docker, and Agile practices.",
  },
  {
    title: "Web Developer",
    company: "GitHub Projects / Remote",
    period: "2022 - Present",
    description:
      "Incorporated modern web technologies to design and develop responsive, user-friendly websites and applications. Using tools like HTML, CSS, JavaScript, React, Node.js, and MongoDB, I built custom solutions tailored to client needs. I also integrated services such as Stripe and Firebase, ensuring seamless functionality and secure user experiences, while managing deployments through Git and platforms like Heroku and Netlify.",
  },
]

const education = [
  {
    degree: "Remote Collaboration Skills",
    institution: "Industry: Freelance Web Development",
    period: "2024–Present",
    description:
      "Proficient in using tools like GitHub, Zoom, Trello, and Slack for seamless collaboration with remote teams. Experienced in managing tasks, maintaining version control, and communicating asynchronously. Skilled at adapting to time zones and ensuring transparency in progress for efficient, accountable work",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Science and Technology, Zimbabwe",
    period: "2023 - Expected Graduation: 2027",
    description:
      "Pursuing a Bachelor of Science in Computer Science at NUST, focused on Web Development, AI, and Embedded Systems. Skilled in HTML, CSS, JavaScript, and Bootstrap, with a passion for blending physical systems with digital solutions.",
  },
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-black/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Resume <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button asChild className="rounded-full">
              <a href="/resume.html" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                View Resume
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-full">
              <a href="/resume-ats.html" target="_blank" rel="noopener noreferrer">
                <FileSearch className="h-4 w-4 mr-2" />
                ATS-Friendly Version
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="h-6 w-6 mr-2 text-primary" />
              Work Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>
                      {edu.institution} | {edu.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-primary" />
              My Developer Timeline
            </h3>

            <DeveloperTimeline />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
