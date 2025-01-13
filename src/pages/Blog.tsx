import { Calendar } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "10 Tips for Building Muscle",
      excerpt: "Learn the fundamental principles of muscle growth and how to optimize your training.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      category: "Training",
      link: "https://www.menshealth.com/fitness/a19534499/10-muscle-building-tips/"
    },
    {
      title: "The Ultimate Guide to Meal Prep",
      excerpt: "Save time and stay on track with these meal preparation strategies and recipes.",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      category: "Nutrition",
      link: "https://www.inka.world/blogs/the-lunch-club/how-to-meal-prep-the-ultimate-guide-for-beginners"
    },
    {
      title: "Understanding Macronutrients",
      excerpt: "A comprehensive guide to proteins, carbohydrates, and fats in your diet.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      category: "Nutrition",
      link: "https://www.healthline.com/nutrition/what-are-macronutrients"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Fitness Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Latest tips, guides, and insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-violet-600 dark:text-violet-500" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-white-600">{post.date}</span>
                  </div>
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-violet-600 dark:text-violet-500 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-800 transition-colors">
                      Read More →
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