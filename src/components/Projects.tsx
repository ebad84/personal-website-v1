import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "E-Commerce API Platform",
      description: "Comprehensive REST API for e-commerce platform with user management, product catalog, order processing, and payment integration. Supports 10K+ concurrent users.",
      technologies: ["Django", "PostgreSQL", "Redis", "Celery", "Docker", "AWS"],
      githubUrl: "https://github.com/mohammadrezaebadollah/ecommerce-api",
      liveUrl: "https://api.myecommerce.com",
      featured: true
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Fast API backend for real-time data processing and analytics. Processes millions of events daily with WebSocket connections for live updates.",
      technologies: ["FastAPI", "ClickHouse", "WebSockets", "Kafka", "Docker"],
      githubUrl: "https://github.com/mohammadrezaebadollah/analytics-backend",
      featured: true
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices system with service discovery, load balancing, and distributed logging. Built for a fintech startup handling financial transactions.",
      technologies: ["Flask", "MongoDB", "RabbitMQ", "Kubernetes", "Prometheus"],
      githubUrl: "https://github.com/mohammadrezaebadollah/fintech-microservices",
      featured: true
    },
    {
      title: "Task Management API",
      description: "RESTful API for project and task management with team collaboration features, file uploads, and notification system.",
      technologies: ["Django", "MySQL", "Celery", "S3", "SendGrid"],
      githubUrl: "https://github.com/mohammadrezaebadollah/task-manager-api"
    },
    {
      title: "Content Management System",
      description: "Headless CMS with multi-language support, role-based permissions, and automated content publishing workflows.",
      technologies: ["Flask", "PostgreSQL", "Elasticsearch", "Docker"],
      githubUrl: "https://github.com/mohammadrezaebadollah/headless-cms"
    },
    {
      title: "IoT Data Collector",
      description: "High-performance data collection system for IoT devices with real-time processing and anomaly detection capabilities.",
      technologies: ["Python", "InfluxDB", "MQTT", "Grafana", "Kubernetes"],
      githubUrl: "https://github.com/mohammadrezaebadollah/iot-collector"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300">
            Some of the projects I've built and contributed to
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-slate-900 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 hover:transform hover:scale-105 ${
                project.featured ? 'ring-2 ring-blue-400/50' : ''
              }`}
            >
              {project.featured && (
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400 font-medium text-sm">Featured Project</span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-slate-800 text-blue-300 rounded text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                  <span>Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}