"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("https://formspree.io/f/mgvabraa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitMessage("Thank you for your message! I will get back to you soon.")
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitMessage("Oops! There was an error sending your message. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Oops! There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)

      // Clear success message after 5 seconds
      if (submitMessage.includes("Thank you")) {
        setTimeout(() => {
          setSubmitMessage("")
        }, 5000)
      }
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Get In Touch <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? Feel free to reach out and I'll get back
            to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-900/50 border-gray-700 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-gray-900/50 border-gray-700 focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto rounded-full">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4 ml-2" />
              </Button>

              {submitMessage && (
                <div className={submitMessage.includes("Oops") ? "text-red-500 mt-4" : "text-green-500 mt-4"}>
                  {submitMessage}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Email</h4>
                      <a
                        href="mailto:tamutswamatondo04@gmail.com"
                        className="text-lg hover:text-primary transition-colors duration-300"
                      >
                        tamutswamatondo04@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Location</h4>
                      <p className="text-lg">Kwekwe, Midlands, Zimbabwe</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                      <p className="text-lg">Available upon request</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="terminal-effect p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Let's Connect</h3>
              <p className="text-gray-400 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <pre className="text-xs text-gray-500">
                <code>{`
// Quick response guaranteed
const response = await sendMessage({
  to: "tamutswa",
  subject: "Let's work together!",
  priority: "high"
});

// Output: "Message received! Will respond within 24 hours."
                `}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
