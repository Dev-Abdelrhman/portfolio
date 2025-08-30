"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Github, Linkedin, Download } from "lucide-react";

export function HeroSection() {
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

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
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-gray-900/50"></div>

      <motion.div
        className="absolute top-16 sm:top-20 left-4 sm:left-10 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
          x: [0, 15, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0,
        }}
      />
      <motion.div
        className="absolute top-32 sm:top-40 right-8 sm:right-20 w-1 h-1 bg-purple-400 rounded-full"
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
        className="absolute bottom-24 sm:bottom-32 left-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-600 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.9, 0.4],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-purple-300 rounded-full"
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

      <div className="relative z-10 text-center w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          whileHover="hover"
        >
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-2 border-purple-700 shadow-lg"
            animate={floatingAnimation}
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              borderRadius: ["50%", "40%", "50%"],
              transition: { duration: 0.6 },
            }}
            variants={pulseVariants}
          >
            <img
              src="/image.png"
              alt="Abdelrhman Fawzy Ali"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance text-white"
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
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-purple-400 mb-4 sm:mb-6 md:mb-8 font-mono"
        >
          <motion.span
            animate={{
              opacity: [1, 0.5, 1],
              textShadow: [
                "0 0 0px #a855f7",
                "2px 0 0px #a855f7, -2px 0 0px #7c3aed",
                "0 0 0px #a855f7",
              ],
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto text-pretty px-2 sm:px-4 md:px-0"
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
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-xs sm:text-sm md:text-base text-slate-400 px-4 sm:px-6 md:px-0"
        >
          <motion.div
            className="flex items-center justify-center sm:justify-start gap-2"
            whileHover={{ scale: 1.05, color: "#e2e8f0" }}
            transition={{ duration: 0.2 }}
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-slate-300" />
            <span className="break-all sm:break-normal">+201092698326</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-center sm:justify-start gap-2"
            whileHover={{ scale: 1.05, color: "#e2e8f0" }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-slate-300" />
            <span className="break-all sm:break-normal">
              abdelrhmanfawzy38@gmail.com
            </span>
          </motion.div>
          <motion.div
            className="flex items-center justify-center sm:justify-start gap-2"
            whileHover={{ scale: 1.05, color: "#e2e8f0" }}
            transition={{ duration: 0.2 }}
          >
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-slate-300" />
            Egypt
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-0"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg relative overflow-hidden w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
              onClick={() =>
                window.open("mailto:abdelrhmanfawzy38@gmail.com", "_blank")
              }
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2 relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </Button>
          </motion.div>

          {/* <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white shadow-lg relative overflow-hidden w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
              asChild
            >
              <a href="#" download="Abdelrhman_Fawzy_CV.pdf">
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Download className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </a>
            </Button>
          </motion.div> */}

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              borderColor: "#a855f7",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-300 hover:bg-purple-900/30 bg-transparent relative overflow-hidden w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
              asChild
            >
              <a
                href="https://github.com/Dev-Abdelrhman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="absolute inset-0 bg-purple-700/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Github className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2 relative z-10" />
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
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-300 hover:bg-purple-900/30 bg-transparent relative overflow-hidden w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/abdelrhman-fawzy-742a34262"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="absolute inset-0 bg-purple-700/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2 relative z-10" />
                <span className="relative z-10">LinkedIn</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
