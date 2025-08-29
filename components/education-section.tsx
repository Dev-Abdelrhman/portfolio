"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const education = {
    degree: "Computer Science",
    institution: "Thebes Academy",
    period: "October 2022 – June 2026 (expected)",
    status: "Currently pursuing",
  }

  return (
    <section className="py-20 px-4 bg-purple-900/10">
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
            whileInView={{
              scale: [0.9, 1.02, 1],
              y: [0, -5, 0],
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.p
            className="text-lg text-purple-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Building a strong foundation in computer science and software development
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover="hover"
        >
          <Card className="bg-gray-900/50 border-purple-700/50 hover:border-purple-600 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-purple-800/30 rounded-lg"
                  whileHover={{
                    rotate: [0, 10, -10, 0],
                    scale: 1.1,
                    backgroundColor: "rgba(107, 33, 168, 0.5)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="h-8 w-8 text-purple-300" />
                </motion.div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white">{education.degree}</CardTitle>
                  <CardDescription className="text-purple-300 font-medium text-lg">
                    {education.institution}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Badge variant="outline" className="border-purple-600 text-purple-300">
                        {education.period}
                      </Badge>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Badge variant="secondary" className="bg-purple-800/50 text-purple-300">
                        {education.status}
                      </Badge>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
