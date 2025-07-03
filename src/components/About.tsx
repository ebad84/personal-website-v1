import React from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    },
    {
      icon: <Server className="h-8 w-8 text-green-400" />,
      title: "API Design",
      description: "Building robust RESTful APIs and microservices"
    },
    {
      icon: <Database className="h-8 w-8 text-purple-400" />,
      title: "Database Expert",
      description: "Optimizing queries and designing efficient database schemas"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Performance",
      description: "Optimizing applications for speed and scalability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate back-end developer who loves creating efficient, scalable solutions. 
            With expertise in Python ecosystem and modern development practices, I help businesses 
            build robust digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300 text-center group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">My Journey</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Started my programming journey in 2018 with Python, quickly falling in love with its simplicity and power. 
            Over the years, I've worked with startups and established companies, building everything from simple web 
            applications to complex distributed systems. I'm passionate about clean architecture, test-driven development, 
            and continuous learning. When I'm not coding, you'll find me contributing to open-source projects or 
            mentoring junior developers.
          </p>
        </div>
      </div>
    </section>
  );
}