import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  gradient: string;
  onClick?: () => void;
}

export function BlogCard({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  tags,
  gradient,
  onClick 
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group relative backdrop-blur-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 overflow-hidden cursor-pointer"
    >
      {/* Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-cyan-600 dark:text-cyan-400" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-cyan-600 dark:text-cyan-400" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <motion.div 
          className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          Read More
          <ArrowRight size={18} />
        </motion.div>
      </div>

      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />
    </motion.article>
  );
}