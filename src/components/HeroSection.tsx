
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-gray-800 leading-tight">
                Empowering Children with 
                <span className="text-primary-600"> Therapy & Care</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Speech, physiotherapy, autism support & more—designed just for kids. 
                Professional care at our Juhapura and Navrangpura centers in Ahmedabad.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-primary-500" />
                <span className="font-semibold text-gray-700">500+ Happy Families</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary-500" />
                <span className="font-semibold text-gray-700">Expert Therapists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary-500" />
                <span className="font-semibold text-gray-700">5+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  className="border-primary-300 text-primary-600 hover:bg-primary-50 rounded-full px-8 py-3 text-lg"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-2">
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=800" 
                  alt="Child therapy session - Speech therapy in Ahmedabad"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                {/* Floating card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Free Consultation Available</span>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
