import React from 'react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 90 },
        { name: "Bash/Shell", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Django", level: 95 },
        { name: "Flask", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Django REST Framework", level: 95 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "Git", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-300">
            Technologies I work with and my proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[
            "Python", "Django", "Flask", "PostgreSQL", "Redis", "Docker",
            "AWS", "Linux", "Git", "REST API", "GraphQL", "Celery"
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-slate-800 p-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300 hover:scale-105 transform"
            >
              <span className="text-white font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}