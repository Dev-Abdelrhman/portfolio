"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Developed and maintained scalable APIs for product management, user authentication, and order processing using Node.js, Express.js, and MongoDB",
      tech: ["Node.js", "Express.js", "MongoDB", "Git", "Authentication"],
      github: "https://github.com/abdelrhmanfawzy",
    },
    {
      title: "API Development Projects",
      description:
        "Built various REST APIs with proper authentication, data validation, and error handling following best practices",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Validation"],
      github: "https://github.com/abdelrhmanfawzy",
    },
    {
      title: "Database Management Systems",
      description: "Designed and optimized database schemas for both SQL and NoSQL databases with focus on performance",
      tech: ["PostgreSQL", "MongoDB", "Database Design", "Optimization"],
      github: "https://github.com/abdelrhmanfawzy",
    },
  ]

  return (
    <section className="py-20 px-4 bg-purple-900/10">
      <div className="max-w-6xl mx-auto">
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
              rotateZ: [0, 1, 0],
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-slate-400 text-lg">Backend systems I've architected and built</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                rotateY: 2,
                transition: {
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                },
              }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-purple-700/50 hover:border-purple-600 transition-all duration-300 h-full group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 border-2 border-purple-600/20 rounded-lg"
                  animate={{
                    borderColor: ["rgba(147, 51, 234, 0.2)", "rgba(168, 85, 247, 0.4)", "rgba(147, 51, 234, 0.2)"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-balance text-white group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </CardTitle>
                    <motion.div
                      whileHover={{
                        rotate: [0, 15, -15, 0],
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 text-purple-400 hover:text-purple-300" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                  <CardDescription className="text-purple-200 text-pretty">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -10, scale: 0 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                          delay: techIndex * 0.1 + index * 0.2,
                          duration: 0.3,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="outline" className="bg-purple-800/20 border-purple-600/50 text-purple-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
