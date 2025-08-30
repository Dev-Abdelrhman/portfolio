"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Briefcase } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "abdelrhmanfawzy38@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
          <p className="text-slate-400 text-lg">
            Let's discuss your next backend project
          </p>
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
                <CardDescription className="text-slate-300">
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 transition-colors"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 transition-colors"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-700 hover:bg-slate-600 text-white shadow-lg disabled:opacity-50"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-sm text-center"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center"
                    >
                      Failed to send message. Please try again or contact me
                      directly.
                    </motion.p>
                  )}
                </form>
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
              <h3 className="text-2xl font-bold mb-6 text-white">
                Connect With Me
              </h3>
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
                  href="https://wa.me/201092698326"
                  target="_blank"
                  className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-colors group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  rel="noreferrer"
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
                  href="https://github.com/Dev-Abdelrhman"
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
                  Dev-Abdelrhman
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/abdelrhman-fawzy-742a34262"
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
                  AbdElrhman Fawzy
                </motion.a>
              </div>
            </div>

            <motion.div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 transition-colors">
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
  );
}
