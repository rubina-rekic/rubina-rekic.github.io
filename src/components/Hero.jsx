import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import rubina from '../assets/rubina.png'

const roles = [
  'Computer Science Graduate',
  'Full-stack Developer',
  'AI & Machine Learning Enthusiast',
  'Software Engineer',
  'QA & Software Testing',
]

function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white flex items-center px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left column - text */}
        <div>
          <p className="text-blue-400 font-medium mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Rubina Rekić</h1>

          <div className="h-10 mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Computer Science & Informatics graduate (GPA 8.8), with
            hands-on experience building full-stack apps, real-time
            systems, AI research, and IoT projects.
          </p>
          <p className="text-green-400 font-medium mb-6">
            🚀 Open to work & internship opportunities
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {['React', 'Node.js', 'Express', 'C# & .NET', 'Python & AI'].map((skill) => (
              <span
                key={skill}
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition font-medium"
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              className="border border-gray-500 hover:border-white text-white px-8 py-3 rounded-full transition font-medium"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right column - image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={rubina}
            alt="Rubina Rekić"
            className="w-full max-w-xs md:max-w-sm object-contain max-h-[70vh]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero