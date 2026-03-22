function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center z-10">
      <h1 className="text-xl font-bold">Rubina Rekić</h1>
      <ul className="flex gap-8">
        <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar