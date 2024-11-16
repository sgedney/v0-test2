'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export function ElegantLandingPageComponent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, TechCorp',
      content: 'This product has revolutionized our workflow. Highly recommended!',
      image: '/placeholder.svg?height=100&width=100'
    },
    {
      name: 'Jane Smith',
      title: 'Marketing Director, InnovateCo',
      content: 'The elegance and functionality of this service is unmatched. A game-changer!',
      image: '/placeholder.svg?height=100&width=100'
    },
    {
      name: 'Alex Johnson',
      title: 'Freelance Designer',
      content: 'I\'ve tried many solutions, but this one stands out for its simplicity and power.',
      image: '/placeholder.svg?height=100&width=100'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Professional background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 text-white max-w-3xl ml-8 sm:ml-16 lg:ml-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Elegance Redefined</h1>
          <p className="text-xl sm:text-2xl mb-8">Experience the perfect blend of style and functionality</p>
          <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-classic-blue">About Our Vision</h2>
          <p className="text-lg mb-8 text-gray-700">
            We believe in creating products that not only meet your needs but exceed your expectations. Our commitment to
            elegance and innovation drives everything we do.
          </p>
          <button className="bg-classic-blue text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
            Explore Our Story
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-classic-blue">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Intuitive Design', description: 'User-friendly interface that\'s easy to navigate' },
              { title: 'Powerful Analytics', description: 'Gain insights with our advanced analytics tools' },
              { title: 'Seamless Integration', description: 'Effortlessly connects with your existing systems' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-classic-blue">
                <h3 className="text-xl font-bold mb-2 text-classic-blue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-classic-blue">What Our Clients Say</h2>
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h3>
                <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">{testimonials[currentTestimonial].content}</p>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-classic-blue text-white rounded-full p-2 hover:bg-opacity-90 transition duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-classic-blue text-white rounded-full p-2 hover:bg-opacity-90 transition duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-classic-blue text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>123 Elegance Street, Suite 100, City, State 12345</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md text-gray-900"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md text-gray-900"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md text-gray-900"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-white text-classic-blue font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}