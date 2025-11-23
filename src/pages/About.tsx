import { Award, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <a href="https://ibb.co/XZFz6YX7">
                <img src="https://i.ibb.co/svsFcWjK/IMG-7265-2.jpg" className="rounded-lg shadow-xl" alt="Hustler-Website-Post" />
              </a>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
              <p className="text-gray-600 mb-6">
                With years of dedication to fitness and nutrition, we specialize in helping individuals achieve their health and fitness goals.<br>
                </br> As international CPD-certified fitness and diet & nutrition coaches, we bring professional expertise and personalized strategies to every journey. Whether you're looking to build muscle, lose fat, Build an aesthetic physique or transform your lifestyle, we understand that every journey is unique.<br>
                </br> Our tailored, sustainable approach ensures you achieve long-lasting results while maintaining balance and well-being.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="text-violet-600 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold">Certified Professional</h3>
                    <p className="text-gray-600">CPD, Fitness Coach, Diet & Nutrition Coach</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Users className="text-violet-600 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold">Community Leader</h3>
                    <p className="text-gray-600">50,000+ Active Members</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Trophy className="text-violet-600 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold">Proven Results</h3>
                    <p className="text-gray-600">40+ Success Stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}