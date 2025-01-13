import React from 'react';
import { FileText, Video, Download } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: "Hybrid Training + Skills Guide",
      type: "PDF Guide",
      description: "A comprehensive guide for those starting their fitness journey to become Hybrid athlete.",
      icon: FileText,
      link: "https://nas.io/hustlers-/products/brrg"
    },
    {
      title: "Coordination & Stabilty Training",
      type: "Video Course",
      description: "Build a strong foundation for your fitness journery with these workouts.",
      icon: Video,
      link: "https://nas.io/hustlers-/products/mlwc/view?preview=6781066562e23ec5f11abcfa"
    },
    {
      title: "100+ Diet & Workout Plans",
      type: "PDF Download",
      description: "Get access to 100+ sample diet and workout plans to support your fitness goals.",
      icon: Download,
      link: "https://docs.google.com/document/d/1VM21Ycqwj0-K3gOdyDxSHDvKDCoZq0Ks-8I67j86Blw/export?format=pdf"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Free Resources</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Download free guides and tools to support your fitness journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <article key={resource.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <resource.icon className="w-8 h-8 text-violet-600 dark:text-violet-500" />
                    <span className="ml-2 text-sm font-semibold text-violet-600 dark:text-violet-500">{resource.type}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{resource.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-800 transition-colors">
                      Download Now
                    </button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}