import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const mailtoLink = `mailto:ayoubcv100@gmail.com?subject=Portfolio Contact&body=Name: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0AMessage: ${formData.get('message')}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:text-center"
        >
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl">Contact Me</h2>
          <p className="mt-4 max-w-2xl text-xl text-text/70 lg:mx-auto">
            Let's work together! Feel free to reach out.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="ml-4 text-text">ayoubcv100@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="ml-4 text-text">Available upon request</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="ml-4 text-text">Setif, Algeria</span>
                </div>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-border bg-card text-text focus:border-primary focus:ring-primary" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-border bg-card text-text focus:border-primary focus:ring-primary" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  className="mt-1 block w-full rounded-md border-border bg-card text-text focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-primary text-background px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}