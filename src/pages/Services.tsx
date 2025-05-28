
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "speech-therapy",
      title: "Speech Therapy",
      description: "Comprehensive speech and language therapy for children with communication difficulties.",
      icon: "🗣️",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600",
      benefits: [
        "Language development and vocabulary building",
        "Articulation and pronunciation improvement",
        "Fluency and stammering therapy",
        "Social communication skills",
        "Voice therapy and vocal hygiene",
        "Swallowing and feeding difficulties"
      ],
      conditions: ["Autism Spectrum Disorder", "Developmental delays", "Hearing impairments", "Cerebral palsy"]
    },
    {
      id: "pediatric-physiotherapy",
      title: "Pediatric Physiotherapy",
      description: "Physical therapy designed to improve movement, strength, and coordination in children.",
      icon: "🏃",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600",
      benefits: [
        "Gross motor skill development",
        "Strength and endurance building",
        "Balance and coordination training",
        "Postural correction and alignment",
        "Pain management techniques",
        "Mobility and gait training"
      ],
      conditions: ["Cerebral palsy", "Muscular dystrophy", "Spina bifida", "Developmental delays"]
    },
    {
      id: "occupational-therapy",
      title: "Occupational Therapy",
      description: "Supporting children in daily activities and fine motor skill development.",
      icon: "✋",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600",
      benefits: [
        "Fine motor skills development",
        "Handwriting and drawing skills",
        "Daily living activities training",
        "Sensory processing support",
        "Cognitive skill development",
        "Adaptive equipment training"
      ],
      conditions: ["ADHD", "Learning disabilities", "Sensory processing disorders", "Autism"]
    },
    {
      id: "autism-aba-therapy",
      title: "Autism & ABA Therapy",
      description: "Evidence-based Applied Behavior Analysis therapy for children with autism spectrum disorders.",
      icon: "🧩",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600",
      benefits: [
        "Behavioral intervention and support",
        "Social skills development",
        "Communication enhancement",
        "Academic skills training",
        "Adaptive behavior teaching",
        "Family training and support"
      ],
      conditions: ["Autism Spectrum Disorder", "Pervasive developmental disorders", "Behavioral challenges"]
    },
    {
      id: "sensory-integration",
      title: "Sensory Integration Therapy",
      description: "Helping children process and respond to sensory information more effectively.",
      icon: "👂",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600",
      benefits: [
        "Sensory processing improvement",
        "Attention and focus enhancement",
        "Emotional regulation skills",
        "Motor planning abilities",
        "Self-organization skills",
        "Reduced sensory sensitivities"
      ],
      conditions: ["Sensory processing disorder", "ADHD", "Autism", "Learning difficulties"]
    },
    {
      id: "developmental-screening",
      title: "Developmental Screenings",
      description: "Comprehensive assessments to identify developmental needs and create personalized treatment plans.",
      icon: "📋",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600",
      benefits: [
        "Early developmental assessments",
        "Comprehensive evaluations",
        "Individualized treatment planning",
        "Progress monitoring and tracking",
        "Family consultation and guidance",
        "Referral coordination services"
      ],
      conditions: ["Developmental delays", "Learning concerns", "Behavioral issues", "Motor difficulties"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our Specialized Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive therapy services designed to support your child's development. 
            Our expert team provides evidence-based treatments tailored to each child's unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <Card key={service.id} className="border-2 border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-primary-50">
                    <img 
                      src={service.image}
                      alt={`${service.title} at Pediatric Therapy Centre Ahmedabad`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conditions Treated */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Conditions We Treat:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.conditions.map((condition, idx) => (
                        <span key={idx} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-6">
                        Book Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full px-6">
                        Ask Questions
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-primary-50 rounded-3xl p-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contact us today to schedule a consultation and learn more about how we can help your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3 text-lg">
                Book Free Consultation
              </Button>
            </Link>
            <Button variant="outline" className="border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full px-8 py-3 text-lg">
              Call: +91-9876543210
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
