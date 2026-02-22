import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../../assets/zis_profile.png';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
                Software Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Zahidul Islam{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Zisan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Building <span className="text-cyan-600 dark:text-cyan-400 font-semibold">real, scalable software</span> that powers the future.
              Backend architecture specialist crafting robust APIs and seamless data flows.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, label: 'GitHub', target: '_blank', href: 'https://github.com/zisan405' },
                { icon: Linkedin, label: 'LinkedIn', target: '_blank', href: 'https://www.linkedin.com/in/zahidul-islam-zisan-779311293/' },
                { icon: Mail, label: 'Email', target: '_self', href: 'mailto:zisan7096@gmail.com' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.target}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  <social.icon size={20} />
                  
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('blog')}
                className="px-8 py-4 backdrop-blur-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-cyan-500/50 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
              >
                Read Blog
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl blur-2xl opacity-50"
              />
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-3xl p-1">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Zahidul Islam Zisan - Software Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-4 -left-4 px-6 py-3 backdrop-blur-xl bg-white/90 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-900 dark:text-white font-semibold">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}