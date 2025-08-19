"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn more about my background, experience, and passion for data science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              Turning Data Into Insights, Insights Into Impact
            </h3>
            
            <p className="text-muted-foreground">
              With over 5 years of experience in data science and machine learning, I specialize in 
              building end-to-end ML solutions that drive business value. My expertise spans from 
              statistical analysis and predictive modeling to deploying production-ready ML systems.
            </p>

            <p className="text-muted-foreground">
              I hold a Master&apos;s degree in Data Science from Stanford University and have worked with 
              companies ranging from startups to Fortune 500 enterprises. I&apos;m passionate about using 
              data to solve complex real-world problems and making AI accessible to everyone.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">5+ Years</h4>
                <p className="text-sm text-muted-foreground">Experience in Data Science</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">50+ Projects</h4>
                <p className="text-sm text-muted-foreground">Completed Successfully</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">10+ Companies</h4>
                <p className="text-sm text-muted-foreground">Worked With</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">3 Patents</h4>
                <p className="text-sm text-muted-foreground">In ML & AI</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-muted to-secondary/50 flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary rounded-full animate-pulse delay-500" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}