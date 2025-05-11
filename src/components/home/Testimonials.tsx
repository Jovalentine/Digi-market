import React from 'react';
import { Quote } from 'lucide-react';
import { Rating } from '../ui/Rating';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Sarah Johnson',
      role: 'Web Designer',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'The UI kit I purchased was exactly what I needed for my client project. The components are well-designed and highly customizable. Saved me weeks of development time!',
      rating: 5
    },
    {
      id: 't2',
      name: 'Michael Chen',
      role: 'Software Developer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'The developer toolkit has completely transformed my workflow. The code quality is excellent, and the documentation is comprehensive. Highly recommended!',
      rating: 5
    },
    {
      id: 't3',
      name: 'Emily Rodriguez',
      role: 'Marketing Specialist',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: 'I took the SEO course and it was incredibly valuable. The strategies I learned helped me double my website traffic within just two months. Worth every penny!',
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about their experience with our products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 text-gray-200" size={32} />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <Rating value={testimonial.rating} size="sm" className="mb-3" />
              
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};