"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  Globe,
  Shield,
  Database,
  Code,
  Zap,
  Cpu,
  Terminal,
} from "lucide-react";

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  };

  const technicalSkills = [
    {
      name: "Backend Development",
      icon: Server,
      description: "JavaScript, Node.js, Express.js, OOP principles",
    },
    {
      name: "Database Management",
      icon: Database,
      description: "MongoDB, PostgreSQL, database design & optimization",
    },
    {
      name: "REST API Development",
      icon: Globe,
      description: "Building & consuming APIs, RESTful architecture",
    },
    {
      name: "Authentication & Authorization",
      icon: Shield,
      description: "JWT, OAuth2, session-based authentication",
    },
    {
      name: "Web Security",
      icon: Shield,
      description:
        "CORS, CSRF, HTTPS/TLS implementation, XSS/SQL injection prevention",
    },
    {
      name: "Testing",
      icon: Code,
      description: "Jest, Mocha, Supertest for comprehensive testing",
    },
    {
      name: "Real-time Applications",
      icon: Zap,
      description: "WebSockets, Socket.IO for live communication",
    },
    {
      name: "Performance & Caching",
      icon: Cpu,
      description: "Redis, in-memory caching, scaling optimization",
    },
    {
      name: "API Testing",
      icon: Terminal,
      description: "Postman / Insomnia for API testing and documentation",
    },
    {
      name: "Version Control",
      icon: Terminal,
      description: "Git, GitHub for collaborative development",
    },
  ];

  const softSkills = [
    "Communication Skills",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
    "Critical Thinking",
    "Problem-Solving",
    "Analytical Thinking",
    "Attention to Detail",
    "Creativity",
    "Project Management",
    "Flexibility",
  ];

  return (
    <section className="py-20 px-4">
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
              y: [0, -5, 0],
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-purple-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technical skills and tools I use to build robust backend solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-purple-700/50 transition-all duration-300 h-full group relative overflow-hidden">
                <CardHeader className="text-center relative z-10">
                  <motion.div className="mx-auto p-3 bg-purple-800/30 rounded-lg w-fit mb-3 transition-colors">
                    <skill.icon className="h-8 w-8 text-purple-300" />
                  </motion.div>
                  <CardTitle className="text-lg text-white">
                    {skill.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-purple-200">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-900/50 border-purple-700/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">
                Soft Skills & Strengths
              </CardTitle>
              <CardDescription className="text-center text-purple-200">
                Personal qualities that drive successful collaboration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm bg-purple-800/50 text-purple-300"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
