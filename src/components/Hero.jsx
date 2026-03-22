import rubina from '../assets/rubina.png'

function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-center text-white px-4">
      <div className="overflow-hidden rounded-2xl mb-8 w-64 h-64">
        <img 
          src={rubina} 
          alt="Rubina Rekić" 
          className="w-64 h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Rubina 👋</h1>
      <p className="text-xl text-gray-400 mb-8">Computer Science Student & Aspiring Developer</p>
      <a 
        href="#projects" 
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition"
      >
        View My Work
      </a>
    </section>
  )
}

export default Hero