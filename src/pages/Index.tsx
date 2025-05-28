
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Phone, Mail } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import LocationsMap from '@/components/LocationsMap';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <ServicesOverview />

      {/* About Preview */}
      <section className="py-16 bg-accent-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6">
                Personalized Care for Every Child
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Pediatric Therapy Centre, we believe every child deserves the best possible start in life. 
                Our team of experienced therapists provides comprehensive, evidence-based treatments tailored 
                to each child's unique needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Certified and experienced therapists</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Individualized treatment plans</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Family-centered approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Modern equipment and techniques</span>
                </li>
              </ul>
              <Link to="/about">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-primary-50 rounded-3xl p-8 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800" 
                  alt="Child therapy session at Pediatric Therapy Centre"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Locations Map */}
      <LocationsMap />

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            Book a free consultation today and discover how we can help your child reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg">
                Book Free Consultation
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary-600 rounded-full px-8 py-3 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-9876543210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
