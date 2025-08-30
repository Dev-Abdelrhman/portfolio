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

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Developed and maintained scalable APIs for product management, user authentication, and order processing using Node.js, Express.js, and MongoDB",
      tech: ["Node.js", "Express.js", "MongoDB", "Git", "Authentication"],
      github: "https://github.com/Eyadfezex/e-commerce",
    },
    {
      title: "Real-Time Task Management System (Backend)",
      description:
        "Developed the backend for a full-featured, real-time task management system with authentication, role-based access, file uploads, real-time communication, and secure scalable APIs.",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Socket.IO",
        "Passport.js",
        "Cloudinary",
        "Nodemailer",
        "JWT",
        "OAuth2",
        "MVC Architecture",
        "Security Middleware",
      ],
      github: "https://github.com/Dev-Abdelrhman/Task-Management",
    },
  ];

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
              rotateZ: [0, 1, 0],
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-slate-400 text-lg">
            Backend systems I've architected and built
          </p>
        </motion.div>

        {projects.length > 3 ? (
          <div className="relative">
            <Swiper
              spaceBetween={32}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 2.5 },
              }}
              className="!overflow-visible"
            >
              {projects.map((project, index) => (
                <SwiperSlide
                  key={`${project.title}-${index}`}
                  className="!h-auto"
                >
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex justify-center">
            <div
              className={`grid gap-8 ${
                projects.length === 1
                  ? "grid-cols-1 max-w-lg"
                  : projects.length === 2
                  ? "grid-cols-1 sm:grid-cols-2 max-w-3xl"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl"
              }`}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={`${project.title}-${index}`}
                  project={project}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const handleCardClick = () => {
    window.open(project.github, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3, type: "spring" },
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <Card
        className="bg-gray-900/50 border-purple-700/50 hover:border-purple-600 transition-all duration-300 h-[320px] min-w-[320px] group relative overflow-hidden flex flex-col cursor-pointer"
        onClick={handleCardClick}
      >
        <CardHeader className="relative z-10 flex-shrink-0 pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg text-white group-hover:text-purple-200 transition-colors leading-tight">
              {project.title}
            </CardTitle>
          </div>
          <CardDescription className="text-purple-200 leading-relaxed text-sm mt-2 overflow-hidden line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 flex-1 flex flex-col justify-end pt-0 pb-4">
          <div className="relative overflow-hidden h-[50px] bg-gradient-to-r from-transparent via-purple-900/10 to-transparent rounded-lg p-3 flex items-center">
            <motion.div
              className="flex gap-2 absolute whitespace-nowrap"
              animate={{
                x: [0, -150],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...project.tech, ...project.tech].map(
                (tech: string, index: number) => (
                  <Badge
                    key={`${tech}-${index}`}
                    variant="outline"
                    className="bg-purple-800/20 border-purple-600/50 text-purple-300 whitespace-nowrap text-xs py-1 px-2"
                  >
                    {tech}
                  </Badge>
                )
              )}
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
