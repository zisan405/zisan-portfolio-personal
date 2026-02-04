import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Scalable API Gateway',
      description: 'High-performance API gateway built with Node.js and Redis, handling 100k+ requests/minute with intelligent rate limiting and caching.',
      techStack: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Microservices Platform',
      description: 'Distributed microservices architecture with service discovery, load balancing, and automated deployment using Docker and Kubernetes.',
      techStack: ['Python', 'FastAPI', 'Docker', 'Kubernetes'],
      githubUrl: '#',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Real-time Analytics Engine',
      description: 'Real-time data processing pipeline with WebSocket support, processing and analyzing millions of events per day.',
      techStack: ['Go', 'WebSocket', 'MongoDB', 'RabbitMQ'],
      githubUrl: '#',
      liveUrl: '#',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Authentication Service',
      description: 'Secure OAuth2 authentication service with JWT tokens, multi-factor authentication, and role-based access control.',
      techStack: ['Node.js', 'JWT', 'PostgreSQL', 'Redis'],
      githubUrl: '#',
      gradient: 'from-pink-600 to-red-500',
    },
    {
      title: 'E-commerce Backend',
      description: 'Complete e-commerce backend with payment processing, inventory management, and order tracking systems.',
      techStack: ['Django', 'PostgreSQL', 'Celery', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Event-Driven System',
      description: 'Event-driven architecture using message queues for asynchronous processing and inter-service communication.',
      techStack: ['Node.js', 'RabbitMQ', 'MongoDB', 'Docker'],
      githubUrl: '#',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of backend systems and APIs I've built, showcasing scalable architecture and clean code.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 backdrop-blur-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-cyan-500/50 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}