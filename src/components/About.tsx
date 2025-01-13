import React from 'react';
import { Award, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="src/assets/images/WebsiteAbout.jpg"
              alt="Fitness Coach"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in fitness and nutrition, I've helped thousands transform their lives through sustainable lifestyle changes. As a certified ISSA trainer and nutrition coach, I understand that every journey is unique.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Award className="text-violet-600 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Certified Professional</h3>
                  <p className="text-gray-600">ISSA, CPD, Diet & Nutrition Coach</p>
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
                  <p className="text-gray-600">10,000+ Success Stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}