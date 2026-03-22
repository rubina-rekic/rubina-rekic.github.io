function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center px-8 py-20">
      <h2 className="text-4xl font-bold mb-12">About Me</h2>
      <div className="max-w-3xl text-center">
        <p className="text-gray-400 text-lg mb-12">
          I'm a final year Computer Science student with a passion for building
          modern web applications and exploring the world of AI. I enjoy working
          with Node.js and Express on the backend, and I'm currently expanding
          my frontend skills with React. I have a strong foundation in
          object-oriented programming and design patterns through C#, and I love
          diving into Python, neural networks, and machine learning.
        </p>
        <h3 className="text-2xl font-bold mb-8">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Kotlin', 'Java', 'React', 'JavaScript', 'Node.js', 'Express',
            'C#', 'Python', 'HTML/CSS', 'Git', 'SQL', 'LaTeX', 'C++','C'
            ,'OOP', 'Android Studio'].map((skill) => (
            <span
              key={skill}
              className="bg-purple-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About