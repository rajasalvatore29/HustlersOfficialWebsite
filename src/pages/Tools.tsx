import React from 'react';
import { Calculator, Scale, Clock, Target } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      title: "Hustler's Calorie Calci",
      description: "A dynamic calorie and macro calculator that updates in real time! Instantly see your personalized calorie needs and macronutrient percentages based on your fitness goal. Simplify your nutrition planning with precision and ease!",
      icon: Calculator,
      category: "Calorie & Macronutrient",
      link: "https://hustlerscaloriecalci.netlify.app/"
    },
    {
      title: "Hustler's SmartMeal Plani",
      description: "Get personalized meal plans based on your calories, macros, food preferences, allergies, vitamin needs, and dietary restrictions. Customize meals, swap options, track macros, and receive a grocery list—everything you need for unlimited meal planning to reach your goals!",
      icon: Scale,
      category: "Diet & Nutrition",
      link: "https://hustlersauth.netlify.app/"
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Fitness Tools</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Free calculators and tools to support your fitness journey</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {tools.map((tool) => (
              <div key={tool.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <tool.icon className="w-12 h-12 text-violet-600 dark:text-violet-500 mb-4" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tool.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
                <p className="text-violet-600 dark:text-violet-500 font-bold">{tool.category}</p>
                <a href={tool.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 w-full bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-800 transition-colors">
                    Launch Tool
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}