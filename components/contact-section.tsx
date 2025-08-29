"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Github, Linkedin, Briefcase } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-white"
            whileInView={{ scale: [0.9, 1.02, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-slate-400 text-lg">Let's discuss your next backend project</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-slate-300">I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    placeholder="Your Name"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 transition-colors"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 transition-colors"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 transition-colors"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white shadow-lg">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:abdelrhmanfawzy38@gmail.com"
                  className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-colors group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-2 bg-purple-800/30 rounded-lg group-hover:bg-purple-700/40 transition-colors"
                    whileHover={{ rotate: 10 }}
                  >
                    <Mail className="h-5 w-5" />
                  </motion.div>
                  abdelrhmanfawzy38@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+201092698326"
                  className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-colors group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-2 bg-purple-800/30 rounded-lg group-hover:bg-purple-700/40 transition-colors"
                    whileHover={{ rotate: 10 }}
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  +201092698326
                </motion.a>
                <motion.a
                  href="https://github.com/abdelrhmanfawzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-colors group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-2 bg-purple-800/30 rounded-lg group-hover:bg-purple-700/40 transition-colors"
                    whileHover={{ rotate: 10 }}
                  >
                    <Github className="h-5 w-5" />
                  </motion.div>
                  GitHub Profile
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/abdelrhmanfawzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-colors group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-2 bg-purple-800/30 rounded-lg group-hover:bg-purple-700/40 transition-colors"
                    whileHover={{ rotate: 10 }}
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.div>
                  LinkedIn Profile
                </motion.a>
              </div>
            </div>

            <motion.div
              className="bg-slate-800/30 p-6 rounded-lg border border-slate-700"
              whileHover={{ scale: 1.02, borderColor: "#64748b" }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-white">
                <Briefcase className="h-5 w-5 text-slate-300" />
                Available for
              </h4>
              <ul className="text-slate-400 space-y-2 text-sm">
                {[
                  "Full-time backend positions",
                  "Freelance API development",
                  "Node.js consulting projects",
                  "Database design & optimization",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
