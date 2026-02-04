import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Blog } from '@/app/components/Blog';
import { Contact } from '@/app/components/Contact';
import { ThemeProvider } from '@/app/components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 transition-colors duration-500">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          {/* Blog Section */}
          <Blog />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-white/10">
          <div className="container mx-auto max-w-7xl text-center text-gray-600 dark:text-gray-400">
            <p>© 2026 Zahidul Islam Zisan. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with React, Tailwind CSS, and Motion
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}