import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Gopi Krishna N</h1>
        <div className="space-x-4 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Krishna 👋</h1>
        <p className="text-xl text-gray-300 mb-6">
          Python Full Stack Developer Intern | Future AI Engineer
        </p>
        <button className="bg-blue-500 px-6 py-3 rounded-2xl hover:bg-blue-600 transition">
          View My Work
        </button>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am currently working as a Python Full Stack Developer Intern at Pantech eLearning in Jayanagar(banglore). I completed my studies at RR Institute of Technology (RRIT), Bangalore with a CGPA of 7.
        </p>
        <p className="text-gray-400 mt-4">
          I am passionate about building scalable web applications and continuously improving my skills. My long-term goal is to become an AI Developer, and I am actively learning machine learning, data science, and intelligent systems.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Python", "HTML", "CSS", "JavaScript", "Flask", "SQL", "Git","Prompting"].map((skill) => (
            <div key={skill} className="bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-700 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Resume Screening System - Updated with Live Demo Button */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">AI Resume Screening System</h3>
            <p className="text-gray-400">
              A smart system that analyzes resumes and suggests job matches using AI techniques. Built using Python, NLP, and Flask.
            </p>
            
            {/* Live Demo + GitHub Buttons */}
            <div className="flex gap-3 mt-6">
              <a 
                href="https://github.com/gofiiiiiii/ai-resume-screening-system" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl text-center transition font-medium"
              >
                GitHub
              </a>
              <a 
                href="https://ai-resume-screening-system-026r.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-center transition font-medium"
              >
                View Live Demo
              </a>
            </div>
          </div>

          {/* Full Stack Web App - Unchanged */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Full Stack Web App</h3>
            <p className="text-gray-400">
              Developed a complete web application with frontend and backend using Flask, JavaScript, and SQL.
            </p>
            
            {/* Optional: You can add buttons here later */}
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl text-center transition font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center py-10">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">📧 krishnagopi5600@gmail.com</p>
        <p className="text-gray-400">📞 8088337794</p>
        <p className="text-gray-500 mt-2">LinkedIn | GitHub (Add your links)</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-700 mt-10">
        © {new Date().getFullYear()} Krishna Gopi
      </footer>
    </div>
  );
}