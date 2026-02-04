import { motion } from 'motion/react';
import { BlogCard } from './BlogCard';
import { useState } from 'react';

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      title: 'Building Scalable REST APIs with Node.js and Express',
      excerpt: 'Learn how to design and build production-ready REST APIs that can handle millions of requests. We\'ll cover architecture patterns, error handling, authentication, and performance optimization.',
      date: 'Jan 20, 2026',
      readTime: '8 min read',
      tags: ['Node.js', 'REST API', 'Backend'],
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Microservices Architecture: A Practical Guide',
      excerpt: 'Dive deep into microservices architecture, exploring service decomposition, inter-service communication, and deployment strategies. Real-world examples and best practices included.',
      date: 'Jan 15, 2026',
      readTime: '12 min read',
      tags: ['Microservices', 'Architecture', 'Docker'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Database Optimization Techniques for High Traffic',
      excerpt: 'Discover advanced database optimization strategies including indexing, query optimization, connection pooling, and caching. Learn how to handle millions of database operations efficiently.',
      date: 'Jan 10, 2026',
      readTime: '10 min read',
      tags: ['Database', 'PostgreSQL', 'Performance'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Implementing JWT Authentication the Right Way',
      excerpt: 'A comprehensive guide to implementing secure JWT authentication in your backend applications. Covers token generation, validation, refresh tokens, and security best practices.',
      date: 'Jan 5, 2026',
      readTime: '7 min read',
      tags: ['Security', 'JWT', 'Authentication'],
      gradient: 'from-pink-600 to-red-500',
    },
    {
      title: 'Event-Driven Architecture with RabbitMQ',
      excerpt: 'Master event-driven architecture using RabbitMQ. Learn about message queues, publish-subscribe patterns, and building resilient asynchronous systems.',
      date: 'Dec 28, 2025',
      readTime: '9 min read',
      tags: ['RabbitMQ', 'Event-Driven', 'Async'],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Docker & Kubernetes: From Zero to Production',
      excerpt: 'Complete guide to containerization and orchestration. Learn how to containerize your applications with Docker and deploy them to Kubernetes clusters.',
      date: 'Dec 20, 2025',
      readTime: '15 min read',
      tags: ['Docker', 'Kubernetes', 'DevOps'],
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section id="blog" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/5 dark:bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl" />
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
            Latest <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on backend development, system design, and software engineering.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.title}
              {...post}
              onClick={() => setSelectedPost(index)}
            />
          ))}
        </div>

        {/* View All Button */}
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
            View All Blog Posts
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}