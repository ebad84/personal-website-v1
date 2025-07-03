import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "TechCorp Solutions",
      location: "Tehran, Iran",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 100K+ daily users",
        "Designed and implemented RESTful APIs using Django REST Framework",
        "Optimized database queries reducing response time by 40%",
        "Mentored 3 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines using Docker and Kubernetes"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS"]
    },
    {
      title: "Backend Developer",
      company: "StartupHub",
      location: "Tehran, Iran",
      period: "2020 - 2022",
      description: [
        "Built scalable web applications using Flask and FastAPI",
        "Integrated third-party payment gateways and APIs",
        "Developed automated testing suite achieving 85% code coverage",
        "Collaborated with frontend team to deliver full-stack solutions",
        "Participated in system architecture design decisions"
      ],
      technologies: ["Python", "Flask", "FastAPI", "MySQL", "Celery", "Docker"]
    },
    {
      title: "Junior Python Developer",
      company: "WebDev Agency",
      location: "Tehran, Iran",
      period: "2019 - 2020",
      description: [
        "Developed web applications using Django framework",
        "Created data processing scripts and automation tools",
        "Maintained and updated existing codebases",
        "Participated in agile development processes",
        "Learned best practices in software development"
      ],
      technologies: ["Python", "Django", "SQLite", "Git", "Linux"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-gray-300">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-white mb-2">{exp.company}</p>
                  <div className="flex items-center text-gray-400 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-700 text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}