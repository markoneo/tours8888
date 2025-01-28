import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BookingForm from '../components/form/BookingForm';
import BookingSteps from '../components/BookingSteps';
import VehicleFleet from '../components/vehicles/VehicleFleet';
import PartnerSection from '../components/PartnerSection';
import BlogList from '../components/blog/BlogList';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div id="booking" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Book Your Private Transfer</h2>
            <p className="mt-2 text-gray-600">
              Fill out the form below and we'll send you a personalized offer
            </p>
          </div>
          
          <BookingForm />
        </div>

        <Features />
      </div>

      <VehicleFleet />
      <BookingSteps />
      <PartnerSection />
      <BlogList />
    </main>
  );
}