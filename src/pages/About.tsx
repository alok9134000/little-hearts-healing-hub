
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Heart, Users, Star, ArrowRight } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      qualification: "PhD in Speech-Language Pathology",
      specialty: "Speech Therapy & Communication Disorders",
      experience: "8 Years",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400",
      quote: "Every child has a unique voice waiting to be heard. My goal is to help them find it."
    },
    {
      name: "Dr. Priya Sharma",
      qualification: "Masters in Pediatric Physiotherapy",
      specialty: "Pediatric Physical Therapy",
      experience: "6 Years",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400",
      quote: "Movement is medicine. I help children discover the joy of physical activity and independence."
    },
    {
      name: "Ms. Anjali Patel",
      qualification: "Masters in Occupational Therapy",
      specialty: "Occupational Therapy & Sensory Integration",
      experience: "7 Years",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400",
      quote: "I believe in empowering children to achieve independence in their daily activities."
    },
    {
      name: "Dr. Rajesh Kumar",
      qualification: "BCBA, Masters in Applied Behavior Analysis",
      specialty: "Autism & ABA Therapy",
      experience: "5 Years",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400",
      quote: "Every small step forward is a victory worth celebrating with our children and families."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families", icon: Heart },
    { number: "10+", label: "Expert Therapists", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "95%", label: "Success Rate", icon: Star }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            About Pediatric Therapy Centre
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to empowering children through comprehensive therapy services in Juhapura and Navrangpura, Ahmedabad.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-poppins font-bold text-gray-800">
                Our Mission & Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Pediatric Therapy Centre, we believe every child deserves the opportunity to reach their full potential. 
                Our mission is to provide comprehensive, evidence-based therapy services that support children's development 
                and help them achieve independence in their daily lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We take a family-centered approach, working closely with parents and caregivers to ensure that therapy 
                goals align with each family's values and priorities. Our team is committed to creating a supportive, 
                nurturing environment where children feel safe to explore, learn, and grow.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Individualized Care</h4>
                    <p className="text-gray-600">Personalized treatment plans tailored to each child's unique needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Evidence-Based Practice</h4>
                    <p className="text-gray-600">Utilizing the latest research and proven therapeutic techniques.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Family-Centered Approach</h4>
                    <p className="text-gray-600">Involving families in every step of the therapeutic process.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-50 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600"
                  alt="Child therapy session at Pediatric Therapy Centre"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-gray-100 rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{stat.number}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of certified therapists brings years of experience and passion for helping children succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-2 border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <img 
                        src={member.image}
                        alt={`${member.name} - ${member.specialty}`}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary-100"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-1">{member.qualification}</p>
                      <p className="text-gray-600 mb-2">{member.specialty}</p>
                      <div className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm mb-4">
                        {member.experience} Experience
                      </div>
                      <blockquote className="text-gray-600 italic text-sm leading-relaxed">
                        "{member.quote}"
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Personalized Treatment Section */}
        <section className="mb-16 bg-accent-100 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Personalized Treatment Plans
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We understand that every child is unique. That's why we create individualized treatment plans 
              that address each child's specific needs, strengths, and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation to understand your child's strengths and areas for improvement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Planning</h3>
              <p className="text-gray-600">
                Collaborative goal setting with families to create meaningful and achievable treatment objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Regular therapy sessions with ongoing monitoring and adjustment of treatment strategies.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary-500 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-primary-100 mb-8 text-lg max-w-2xl mx-auto">
            Our team is here to support your family every step of the way. Contact us today to schedule 
            a consultation and learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary-600 rounded-full px-8 py-3 text-lg"
            >
              Call: +91-9876543210
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
