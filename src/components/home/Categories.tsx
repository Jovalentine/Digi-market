import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brush, LineChart, GraduationCap, Building, ShoppingCart } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  count: number;
}

export const Categories: React.FC = () => {
  // Sample categories data
  const categories: Category[] = [
    {
      id: 'development',
      name: 'Development',
      description: 'Code libraries, plugins, and development tools',
      icon: <Code size={24} />,
      count: 45
    },
    {
      id: 'design',
      name: 'Design',
      description: 'UI kits, templates, and graphics resources',
      icon: <Brush size={24} />,
      count: 67
    },
    {
      id: 'marketing',
      name: 'Marketing',
      description: 'SEO tools, social media kits, and guides',
      icon: <LineChart size={24} />,
      count: 38
    },
    {
      id: 'courses',
      name: 'Courses',
      description: 'Online courses and educational content',
      icon: <GraduationCap size={24} />,
      count: 51
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Business plans, financial models, and strategies',
      icon: <Building size={24} />,
      count: 29
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      description: 'Online store templates and tools',
      icon: <ShoppingCart size={24} />,
      count: 33
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of digital products across various categories to find exactly what you need for your next project
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              to={`/categories/${category.id}`} 
              key={category.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-bl-full transition-all duration-300 group-hover:bg-primary-200" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-100 transition-colors">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-3 text-sm">
                  {category.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium text-primary-400">{category.count}</span>
                  <span className="ml-1">products</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};