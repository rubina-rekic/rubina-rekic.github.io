const projects = [
    {
    title: "Graph Theory for Neural Networks 📊",
    description: "Bachelor's thesis formalizing trained neural networks as directed weighted graphs — applying centrality, modularity, spectral and robustness analysis to compare three architectures of varying depth and width.",
    tech: ["Python", "PyTorch", "NetworkX", "NumPy", "Matplotlib"],
    github: "https://github.com/rubina-rekic/graph-theory-neural-network-modelling"
  },
  {
    title: "YourRide 🚗",
    description: "Full-stack ride-sharing web app with real-time SignalR notifications, role-based access control and MVC architecture.",
    tech: ["C#", "ASP.NET Core", "SignalR", "Entity Framework", "SQL Server"],
    github: "https://github.com/rubina-rekic/YourRide"
  },
  {
    title: "ScenarijPro ✍️",
    description: "Full-stack screenplay editor with collaborative editing, version control checkpoints and a REST API built across 4 development sprints.",
    tech: ["Node.js", "Express", "MySQL", "Sequelize", "JavaScript"],
    github: "https://github.com/rubina-rekic/ScenarijPro"
  },
  {
    title: "FilmMate QA 🎬",
    description: ".NET 9 movie recommendation app with focus on software testing — unit tests, TDD, code inspection and white/black-box testing.",
    tech: ["C#", ".NET 9", "MSTest", "NUnit", "Azure DevOps"],
    github: "https://github.com/rubina-rekic/FilmMate-QA"
  },
  {
    title: "Temperature Control IoT 🌡️",
    description: "Two-position temperature regulation system using Raspberry Pi Pico, MQTT communication and a Flask web interface for real-time monitoring.",
    tech: ["Python", "Flask", "MQTT", "MicroPython", "Raspberry Pi"],
    github: "https://github.com/rubina-rekic/temperature-control-iot"
  },
  {
    title: "Neural Networks as Graphs 🧠",
    description: "Research project modeling neural networks as directed graphs, analyzing structural resilience and simulating signal dynamics using graph theory.",
    tech: ["Python", "NetworkX", "NumPy", "Matplotlib", "Graph Theory"],
    github: "https://github.com/rubina-rekic/neural-networks-graph-analysis"
  },
  {
    title: "NewsFeed Android 📰",
    description: "Android app with real-time news fetching every 3 seconds, local Room database storage, category filtering and sorting.",
    tech: ["Kotlin", "Android Studio", "Room", "REST API"],
    github: "https://github.com/rubina-rekic/Newsfeed-Android-App"
  }
]

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8 py-20">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-purple-600 px-3 py-1 rounded-full text-xs">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              className="mt-auto text-purple-400 hover:text-purple-300 text-sm transition"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects