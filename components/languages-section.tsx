"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LanguagesSection() {
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
            Languages
          </motion.h2>
          <p className="text-slate-400 text-lg">Communication capabilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <Card className="bg-gray-900/50 border-purple-700/50 hover:border-purple-600 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">Arabic</CardTitle>
                <CardDescription className="text-purple-300">Native Speaker</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-purple-900/30 rounded-full h-2">
                  <motion.div
                    className="bg-purple-500 h-2 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 2,
                      }}
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: -5 }}
          >
            <Card className="bg-gray-900/50 border-purple-700/50 hover:border-purple-600 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">English</CardTitle>
                <CardDescription className="text-purple-300">Intermediate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-purple-900/30 rounded-full h-2">
                  <motion.div
                    className="bg-purple-400 h-2 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 2.2,
                      }}
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
