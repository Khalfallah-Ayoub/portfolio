import { Code, Server, Palette, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function About() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "UI/UX Design", level: 75 }
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="lg:text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-extrabold text-text sm:text-4xl"
            >
              About Me
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 max-w-2xl text-xl text-text/70 lg:mx-auto"
            >
              Passionate about creating beautiful, functional, and user-friendly applications
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text">Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text">{skill.name}</span>
                    <span className="text-text/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-card rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-6">
              <h3 className="text-2xl font-bold text-text mb-4">What I Love</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-3 bg-card-hover rounded-lg"
                >
                  <Code className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-text">Clean Code</h4>
                    <p className="text-text/70">Writing maintainable and efficient code</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-3 bg-card-hover rounded-lg"
                >
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-text">User Experience</h4>
                    <p className="text-text/70">Creating intuitive and enjoyable interfaces</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-3 bg-card-hover rounded-lg"
                >
                  <Server className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-text">Problem Solving</h4>
                    <p className="text-text/70">Finding elegant solutions to complex problems</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {['Frontend Development', 'Backend Development', 'UI/UX Design'].map((service, index) => (
              <motion.div
                key={service}
                whileHover={{ y: -5 }}
                className="card p-6 flex flex-col items-center transition-shadow hover:shadow-xl"
              >
                {index === 0 && <Code className="h-12 w-12 text-primary" />}
                {index === 1 && <Server className="h-12 w-12 text-primary" />}
                {index === 2 && <Palette className="h-12 w-12 text-primary" />}
                <h3 className="mt-4 text-xl font-medium text-text">{service}</h3>
                <p className="mt-2 text-center text-text/70">
                  {index === 0 && 'Creating responsive and interactive user interfaces with React and modern CSS.'}
                  {index === 1 && 'Building scalable APIs and server-side applications with Node.js.'}
                  {index === 2 && 'Designing beautiful and intuitive user experiences.'}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}