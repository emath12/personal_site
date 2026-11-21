import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Distributed Cache System",
      description:
        "High-performance caching layer with consistent hashing and replication across multiple nodes",
      year: "2024",
      link: "#",
    },
    {
      title: "Graph Algorithm Visualizer",
      description:
        "Interactive tool for visualizing pathfinding and graph traversal algorithms",
      year: "2023",
      link: "#",
    },
    {
      title: "Compiler Optimization Framework",
      description:
        "LLVM-based optimization passes for improving code generation efficiency",
      year: "2023",
      link: "#",
    },
  ];

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Research Labs",
      period: "2022—Present",
    },
    {
      title: "Systems Developer",
      company: "Distributed Computing Inc.",
      period: "2020—2022",
    },
    {
      title: "Algorithm Engineer",
      company: "Data Sciences Corp.",
      period: "2018—2020",
    },
  ];

  const [showTerminal, setShowTerminal] = useState(false);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);

  const handleCommand = (command) => {
    // Simulate command execution
    const output = `Executed: ${command}`;
    //@ts-ignore
    setCommandHistory([...commandHistory, { input: command, output }]);
    setCurrentCommand("");
  };

  return (
    <div className="min-h-screen bg-gray-900 font-mono text-green-400">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8">
        {/* Hero */}
        <section className="py-20 border-b border-gray-700">
          <div className="mb-4">
            <span className="text-gray-500">$</span>{" "}
            <span className="text-blue-400">whoami</span>
          </div>
          <h1 className="text-5xl font-normal leading-tight mb-4 text-green-400">
            Alex Johnson
          </h1>
          <div className="mb-8">
            <span className="text-gray-500">role:</span>{" "}
            <span className="text-blue-400">"Software Engineer"</span>
          </div>
          <p className="text-lg leading-relaxed text-gray-300 max-w-2xl font-sans">
            // Building distributed systems and solving algorithmic challenges
            <br />
            // with clean, performant code
          </p>
          <div className="flex space-x-8 mb-12">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Interactive Terminal */}
          <div className="mt-8">
            <button
              onClick={() => setShowTerminal(!showTerminal)}
              className="bg-gray-800 border border-gray-700 px-4 py-2 rounded text-cyan-400 hover:border-cyan-400 transition-colors"
            >
              {showTerminal ? "Hide Terminal" : "Open Terminal"}
            </button>

            {showTerminal && (
              <div className="mt-4 bg-black border border-gray-700 rounded p-4 max-w-2xl">
                <div className="text-gray-400 text-sm mb-2">
                  Interactive Terminal - Type 'help' for commands
                </div>

                {/* Command History */}
                <div className="space-y-1 mb-2 max-h-48 overflow-y-auto">
                  {commandHistory.map((entry, index) => (
                    <div key={index}>
                      <div className="text-cyan-400">$ {entry.input}</div>
                      <div className="text-gray-300 ml-2">{entry.output}</div>
                    </div>
                  ))}
                </div>

                {/* Input Line */}
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">$</span>
                  <input
                    type="text"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleCommand(currentCommand);
                      }
                    }}
                    className="bg-transparent text-blue-400 outline-none flex-1"
                    placeholder="Type a command..."
                    autoFocus
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* About */}
        <section className="py-16 border-b border-gray-700">
          <h2 className="text-2xl font-normal mb-8 text-cyan-400">
            <span className="text-gray-500">// </span>About
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-800 p-6 rounded border border-gray-700 font-mono text-sm">
              <div className="text-blue-400 mb-4">const engineer = {`{`}</div>
              <div className="ml-4 text-gray-300">
                <div className="mb-2">
                  experience: <span className="text-cyan-400">"5+ years"</span>,
                </div>
                <div className="mb-2">
                  focus:{" "}
                  <span className="text-cyan-400">
                    ["distributed systems", "algorithms", "performance"]
                  </span>
                  ,
                </div>
                <div className="mb-2">
                  interests:{" "}
                  <span className="text-cyan-400">
                    ["machine learning", "systems programming", "theory"]
                  </span>
                  ,
                </div>
                <div>
                  passion:{" "}
                  <span className="text-cyan-400">
                    "solving complex problems with elegant solutions"
                  </span>
                </div>
              </div>
              <div className="text-blue-400 mt-4">{`}`}</div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 border-b border-gray-700">
          <h2 className="text-2xl font-normal mb-12 text-cyan-400">
            <span className="text-gray-500">// </span>Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="flex justify-between items-start bg-gray-800 p-4 rounded border border-gray-700"
              >
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-gray-300">{job.company}</p>
                </div>
                <span className="text-sm text-cyan-400 font-mono">
                  {job.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 border-b border-gray-700">
          <h2 className="text-2xl font-normal mb-12 text-cyan-400">
            <span className="text-gray-500">// </span>Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group bg-gray-800 p-6 rounded border border-gray-700 hover:border-cyan-400 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-blue-400 group-hover:text-cyan-400 transition-colors">
                    <a href={project.link} className="flex items-center">
                      {project.title}
                      <ExternalLink
                        size={16}
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </h3>
                  <span className="text-sm text-cyan-400 font-mono">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed font-sans">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 border-b border-gray-700">
          <h2 className="text-2xl font-normal mb-8 text-cyan-400">
            <span className="text-gray-500">// </span>Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <h3 className="text-sm font-medium text-blue-400 uppercase tracking-wide mb-4 font-mono">
                LANGUAGES
              </h3>
              <p className="text-gray-300 font-sans">
                C++, Python, Rust, Go, Java
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <h3 className="text-sm font-medium text-blue-400 uppercase tracking-wide mb-4 font-mono">
                SYSTEMS
              </h3>
              <p className="text-gray-300 font-sans">
                Linux, Docker, Kubernetes, AWS, GCP
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <h3 className="text-sm font-medium text-blue-400 uppercase tracking-wide mb-4 font-mono">
                DOMAINS
              </h3>
              <p className="text-gray-300 font-sans">
                Algorithms, Distributed Systems, ML, Compilers
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <h2 className="text-2xl font-normal mb-8 text-cyan-400">
            <span className="text-gray-500">// </span>Contact
          </h2>
          <div className="bg-gray-800 p-6 rounded border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-6 font-sans">
              // Always interested in new challenges and interesting projects
            </p>
            <div className="font-mono">
              <span className="text-blue-400">const</span>{" "}
              <span className="text-cyan-400">email</span> =
              <a
                href="mailto:alex@example.com"
                className="text-cyan-400 hover:text-blue-300 transition-colors ml-2"
              >
                "alex@example.com"
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-sm text-gray-500 font-mono">© 2025 Alex Johnson</p>
        </div>
      </footer>
    </div>
  );
}
