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
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
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

  const experience = [
    {
      role: "React.js Applications Development Track",
      company: "Digital Egypt Pioneers Initiative",
      period: "October 2024 – May 2025 (expected)",
      description:
        "Participating in comprehensive training program focusing on React and backend integrations, expanding full-stack development capabilities.",
    },
    {
      role: "AI Training Program",
      company: "University Training",
      period: "July 2023 – September 2023",
      description:
        "Completed comprehensive AI training program focusing on Python and Object-Oriented Programming. Gained hands-on experience in building AI algorithms and implementing OOP principles.",
    },
  ];

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
            Professional Experience
          </motion.h2>
          <p className="text-slate-400 text-lg">
            My journey in backend development and continuous learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-purple-700/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <motion.div className="p-3 bg-purple-800/30 rounded-lg">
                      <Briefcase className="h-6 w-6 text-purple-300" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl text-white">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-purple-300 font-medium">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="w-fit border-purple-600 text-purple-300"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200 text-pretty">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
