import React from 'react';
import { Users, Dumbbell, Heart, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "One-on-One Online Coaching",
      description: "Personalized guidance tailored to your fitness goals, including custom training plans, nutrition strategies, and continuous support to help you achieve your dream physique. Stay accountable and progress effectively with a plan designed just for you!",
      icon: Users,
      price: "15k/3 months",
      link: "https://forms.gle/oPL9fbkmpk1HQtWh7"
    },
    {
      title: "Personalized Training and Diet & Nutrition",
      description: "Get a customized workout and nutrition plan tailored to your specific goals, lifestyle, and preferences. Designed to maximize results, this plan ensures a sustainable and effective approach to achieving your fitness and health targets",
      icon: Dumbbell,
      price: "6k/2 months",
      link: "https://forms.gle/yYgZhZBaXCttrLvQ8"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Transform your life with our expert-led programs</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-violet-600 dark:text-violet-500 mb-4" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <p className="text-violet-600 dark:text-violet-500 font-bold">{service.price}</p>
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 w-full bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-800 transition-colors">
                    Book Now
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