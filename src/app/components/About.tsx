import { motion } from 'motion/react';
import { Code2, Database, Server, Boxes, Cloud, Lock, Zap, GitBranch } from 'lucide-react';

export function About() {
  const skills = [
    { icon: Server, name: 'REST APIs', color: 'from-cyan-400 to-blue-500' },
    { icon: Database, name: 'Databases', color: 'from-blue-500 to-purple-600' },
    { icon: Code2, name: 'Backend Logic', color: 'from-purple-600 to-pink-600' },
    { icon: Cloud, name: 'Cloud Services', color: 'from-pink-600 to-red-500' },
    { icon: Lock, name: 'Security', color: 'from-red-500 to-orange-500' },
    { icon: Zap, name: 'Performance', color: 'from-orange-500 to-yellow-500' },
    { icon: Boxes, name: 'Microservices', color: 'from-yellow-500 to-green-500' },
    { icon: GitBranch, name: 'Version Control', color: 'from-green-500 to-cyan-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/5 dark:border-cyan-500/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/5 dark:border-blue-500/10 rounded-full"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* About Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
        >
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a <span className="text-cyan-600 dark:text-cyan-400 font-semibold">backend-focused software developer</span> passionate about 
              building robust, scalable systems that power modern applications. My expertise lies in crafting efficient APIs, 
              designing database architectures, and implementing complex business logic that just works.
            </p>
            <p>
              With a strong foundation in <span className="text-blue-600 dark:text-blue-400 font-semibold">server-side development</span>, I specialize 
              in creating secure, high-performance backends that handle real-world challenges. From microservices architecture to 
              RESTful API design, I focus on writing clean, maintainable code that scales with your business.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and sharing my 
              knowledge through technical writing. I believe in continuous learning and staying ahead of the curve in this 
              ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 text-center group hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} p-3 shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Stack</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Languages',
                items: ['Python', 'JavaScript/TypeScript', 'Java', 'Go'],
              },
              {
                title: 'Frameworks',
                items: ['Node.js', 'Express', 'Django', 'FastAPI'],
              },
              {
                title: 'Databases & Tools',
                items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}