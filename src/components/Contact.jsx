function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center px-8 py-20">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-400 text-lg mb-12 text-center max-w-xl">
         Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      <div className="flex flex-col gap-4 items-center mb-10">
        <a href="mailto:rubinarekic2@gmail.com" className="text-gray-300 hover:text-purple-400 transition">
          📧 rubinarekic2@gmail.com
        </a>
        <a href="mailto:rrekic1@etf.unsa.ba" className="text-gray-300 hover:text-purple-400 transition">
          🎓 rrekic1@etf.unsa.ba
        </a>
        <span className="text-gray-300">📞 060 320 9897</span>
      </div>

      <div className="flex gap-8">
        <a
          href="https://github.com/rubina-rekic"
          target="_blank"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rubina-rekić-4a5164288/"
          target="_blank"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact