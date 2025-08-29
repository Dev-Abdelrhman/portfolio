"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { User, Phone, Mail, MapPin, Github, Linkedin } from "lucide-react"

export function HeroSection() {
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-gray-900/50"></div>

      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0,
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-600 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.9, 0.4],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-1 h-1 bg-purple-300 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          whileHover="hover"
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 bg-purple-900/30 rounded-full flex items-center justify-center border border-purple-700 shadow-lg"
            animate={floatingAnimation}
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              borderRadius: ["50%", "40%", "50%"],
              transition: { duration: 0.6 },
            }}
            variants={pulseVariants}
          >
            <User className="h-16 w-16 text-purple-300" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-balance text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {"Abdelrhman Fawzy Ali".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.05,
                delay: 0.5 + index * 0.05,
              }}
              whileHover={{
                scale: 1.2,
                color: "#e2e8f0",
                transition: { duration: 0.2 },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-purple-400 mb-6 font-mono"
        >
          <motion.span
            animate={{
              opacity: [1, 0.5, 1],
              textShadow: ["0 0 0px #a855f7", "2px 0 0px #a855f7, -2px 0 0px #7c3aed", "0 0 0px #a855f7"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            Backend Developer || NodeJS
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto text-pretty"
        >
          {"Passionate Backend Developer specializing in Node.js with a strong foundation in JavaScript, OOP, and database management. Skilled in designing and maintaining scalable APIs using Express.js, MongoDB, and PostgreSQL."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.2 + index * 0.02,
                }}
                whileHover={{
                  color: "#f1f5f9",
                  transition: { duration: 0.2 },
                }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-400"
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: "#e2e8f0" }}
            transition={{ duration: 0.2 }}
          >
            <Phone className="h-4 w-4 text-slate-300" />
            +201092698326
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: "#e2e8f0" }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="h-4 w-4 text-slate-300" />
            abdelrhmanfawzy38@gmail.com
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: "#e2e8f0" }}
            transition={{ duration: 0.2 }}
          >
            <MapPin className="h-4 w-4 text-slate-300" />
            Egypt
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Mail className="h-4 w-4 mr-2 relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              borderColor: "#a855f7",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-300 hover:bg-purple-900/30 bg-transparent relative overflow-hidden"
              asChild
            >
              <a href="https://github.com/abdelrhmanfawzy" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="absolute inset-0 bg-purple-700/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Github className="h-4 w-4 mr-2 relative z-10" />
                <span className="relative z-10">GitHub</span>
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              borderColor: "#a855f7",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-300 hover:bg-purple-900/30 bg-transparent relative overflow-hidden"
              asChild
            >
              <a href="https://linkedin.com/in/abdelrhmanfawzy" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="absolute inset-0 bg-purple-700/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Linkedin className="h-4 w-4 mr-2 relative z-10" />
                <span className="relative z-10">LinkedIn</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
