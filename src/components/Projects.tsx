import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:text-center"
        >
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl">Projects</h2>
          <p className="mt-4 max-w-2xl text-xl text-text/70 lg:mx-auto">
            Here are some of my recent projects that showcase my skills.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text">{project.title}</h3>
                <p className="mt-2 text-text/70">{project.description}</p>
                <div className="mt-4 flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center text-text/70 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center text-text/70 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}