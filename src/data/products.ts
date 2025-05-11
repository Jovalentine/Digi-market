import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium UI Kit',
    price: 49,
    originalPrice: 69,
    description: 'A comprehensive UI kit with over 300 components, perfect for modern web applications and digital products.',
    features: [
      '300+ UI components',
      'Light and dark mode',
      'Figma source files',
      'Lifetime updates',
      'Premium support'
    ],
    imageUrl: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg',
    category: 'Design',
    subcategory: 'UI Kits',
    rating: 4.9,
    reviewCount: 124,
    tags: ['UI', 'Design', 'Frontend'],
    isFeatured: true,
    isBestSeller: true,
    isOnSale: true
  },
  {
    id: '2',
    name: 'Developer Toolkit Pro',
    price: 79,
    originalPrice: 99,
    description: 'The ultimate developer toolkit with everything you need to build robust applications faster than ever.',
    features: [
      'Code snippets for multiple languages',
      'VS Code extensions',
      'Docker templates',
      'CI/CD workflow helpers',
      'Performance optimization tools'
    ],
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
    category: 'Development',
    subcategory: 'Tools',
    rating: 4.8,
    reviewCount: 89,
    tags: ['Development', 'Tools', 'Productivity'],
    isFeatured: true,
    isOnSale: true
  },
  {
    id: '3',
    name: 'SEO Master Course',
    price: 129,
    originalPrice: 199,
    description: 'Learn everything about SEO in this comprehensive course. Boost your website ranking and drive more traffic.',
    features: [
      '10+ hours of video content',
      'Practical exercises',
      'SEO audit templates',
      'Keyword research tools',
      'Certificate of completion'
    ],
    imageUrl: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg',
    category: 'Courses',
    subcategory: 'Marketing',
    rating: 4.7,
    reviewCount: 213,
    tags: ['SEO', 'Marketing', 'Course'],
    isBestSeller: true
  },
  {
    id: '4',
    name: 'WordPress Theme Bundle',
    price: 59,
    originalPrice: 89,
    description: 'A collection of 10 premium WordPress themes suitable for various industries and purposes.',
    features: [
      '10 premium themes',
      'Lifetime updates',
      'Premium plugins included',
      'Responsive design',
      'SEO optimized'
    ],
    imageUrl: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg',
    category: 'WordPress',
    subcategory: 'Themes',
    rating: 4.6,
    reviewCount: 156,
    tags: ['WordPress', 'Themes', 'Web Design'],
    isOnSale: true
  },
  {
    id: '5',
    name: 'Social Media Marketing Guide',
    price: 39,
    originalPrice: 59,
    description: 'A comprehensive guide on how to leverage social media for business growth and brand awareness.',
    features: [
      'Strategy templates',
      'Content calendar',
      'Analytics tracking sheets',
      'Campaign ideas',
      'Case studies'
    ],
    imageUrl: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg',
    category: 'Marketing',
    subcategory: 'Social Media',
    rating: 4.5,
    reviewCount: 98,
    tags: ['Marketing', 'Social Media', 'Guide']
  },
  {
    id: '6',
    name: 'E-commerce Business Plan',
    price: 89,
    description: 'A detailed business plan template for launching and growing your e-commerce business successfully.',
    features: [
      'Financial projections',
      'Market analysis',
      'Marketing strategy',
      'Operations plan',
      'Risk assessment'
    ],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    category: 'Business',
    subcategory: 'Planning',
    rating: 4.7,
    reviewCount: 76,
    tags: ['Business', 'E-commerce', 'Planning']
  },
  {
    id: '7',
    name: 'Video Editing Master Class',
    price: 149,
    description: 'Learn professional video editing techniques and create stunning videos for various platforms.',
    features: [
      '15 hours of video content',
      'Project files included',
      'Advanced editing techniques',
      'Color grading tutorials',
      'Special effects'
    ],
    imageUrl: 'https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg',
    category: 'Courses',
    subcategory: 'Video',
    rating: 4.8,
    reviewCount: 124,
    tags: ['Video', 'Editing', 'Course'],
    isFeatured: true
  },
  {
    id: '8',
    name: 'Logo Design Templates',
    price: 29,
    originalPrice: 49,
    description: 'A collection of 50 premium logo design templates for various industries and businesses.',
    features: [
      '50 logo templates',
      'Fully customizable',
      'AI and PSD files',
      'Commercial license',
      'Free updates'
    ],
    imageUrl: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg',
    category: 'Design',
    subcategory: 'Logos',
    rating: 4.5,
    reviewCount: 87,
    tags: ['Logo', 'Design', 'Templates'],
    isOnSale: true
  }
];