import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="Fitness Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Body & Mind with Expert Certified Coaches
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands who have already transformed their lives through our proven<br></br>
            fitness & Nutrition programs and expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-800 transition-colors inline-flex items-center"
            >
              Start Your Transformation
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/tools"
              className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Free Tools
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50k+</div>
              <div className="text-gray-300">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-gray-300">Workout Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10k+</div>
              <div className="text-gray-300">Diet & Nutrition Programs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}