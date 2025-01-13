import React from 'react';
import { MessageSquare, Users, Star, YoutubeIcon, InstagramIcon } from 'lucide-react';

export default function Community() {
  const testimonials = [
    {
      name: "Neethan",
      text: "I have purchased the tool, it's super user friendly and very helpful to customize my meal plans. Thansk for giving it in this affordable price range.",
      image: "https://ui-avatars.com/api/?name=Neethan&background=0D8ABC&color=fff",
      rating: 5
    },
    {
      name: "Puval",
      text: "Thx for this tool, it's very helpful for me to track my daily meals and calories. Very very affordable🎉",
      image: "https://ui-avatars.com/api/?name=Puval&background=0D8ABC&color=fff",
      rating: 5
    },
    {
      name: "FitFleSports",
      text: "The way you approach fitness is the best! not much content creators in the fitness industry are like you. Keep up the good work and the tool is amazing looking for more features!",
      image: "https://ui-avatars.com/api/?name=FitFleSports&background=0D8ABC&color=fff",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Join Our Community</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Connect, share, and grow with like-minded fitness enthusiasts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <a href="https://youtube.com/@hustlewithraja?si=OtEm4eukulmBArn3" target="_blank" rel="noopener noreferrer" className="hover:bg-violet-500 dark:hover:bg-violet-500 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-color">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <YoutubeIcon className="w-12 h-12 text-violet-600 dark:text-violet-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">8,000+</h3>
                <p className="text-gray-600 dark:text-gray-400">Subscribers</p>
              </div>
            </a>
            <a href="https://www.instagram.com/hustlewithraja?igsh=a21uZzBjczBid3Rq&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:bg-violet-500 dark:hover:bg-violet-500 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-color">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <InstagramIcon className="w-12 h-12 text-violet-600 dark:text-violet-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">25k+</h3>
                <p className="text-gray-600 dark:text-gray-400">Followers</p>
              </div>
            </a>

            <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDU2OTE5NTk4OTg0MDc0?story_media_id=3539459870405877365&igsh=MThlc3k3Z21jZnZkcQ==" target="_blank" rel="noopener noreferrer" className="hover:bg-violet-500 dark:hover:bg-violet-500 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-color">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <Star className="w-12 h-12 text-violet-600 dark:text-violet-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">40+</h3>
                <p className="text-gray-600 dark:text-gray-400">Success Stories</p>
              </div>
            </a>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Community Success Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a href="https://nas.io/hustlers-" target="_blank" rel="noopener noreferrer">
              <button className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-800 transition-colors">
                Join Our Community
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}