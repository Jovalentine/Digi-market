import { Review } from '../types';

export const reviews: Record<string, Review[]> = {
  '1': [
    {
      id: 'r1',
      userId: 'u1',
      userName: 'Alex Johnson',
      userAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: 'This UI kit is absolutely incredible. The components are well designed and extremely easy to use. Saved me hours of development time!',
      date: '2023-11-15'
    },
    {
      id: 'r2',
      userId: 'u2',
      userName: 'Sarah Parker',
      userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: 'Perfect for my startup project. The design is clean, modern and very professional. Highly recommended!',
      date: '2023-10-23'
    },
    {
      id: 'r3',
      userId: 'u3',
      userName: 'Michael Chen',
      rating: 4,
      text: 'Great quality overall. Would be perfect with more industry-specific components, but the existing ones are excellent.',
      date: '2023-09-30'
    }
  ],
  '2': [
    {
      id: 'r4',
      userId: 'u4',
      userName: 'David Wilson',
      userAvatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      rating: 5,
      text: 'This toolkit has transformed my development workflow. The code snippets are extremely useful and well documented.',
      date: '2023-11-05'
    },
    {
      id: 'r5',
      userId: 'u5',
      userName: 'Emily Rodriguez',
      rating: 4,
      text: 'Very comprehensive toolkit with useful resources. Some of the Docker templates needed slight modifications for my use case, but overall great value.',
      date: '2023-10-18'
    }
  ],
  '3': [
    {
      id: 'r6',
      userId: 'u6',
      userName: 'Jessica Williams',
      userAvatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      rating: 5,
      text: 'This course completely transformed my understanding of SEO. My website traffic has doubled since implementing the strategies taught here.',
      date: '2023-11-20'
    },
    {
      id: 'r7',
      userId: 'u7',
      userName: 'Robert Garcia',
      rating: 5,
      text: 'Comprehensive content with practical examples. The instructor explains complex concepts in an easy-to-understand way.',
      date: '2023-10-12'
    },
    {
      id: 'r8',
      userId: 'u8',
      userName: 'Lisa Thompson',
      userAvatar: 'https://randomuser.me/api/portraits/women/26.jpg',
      rating: 4,
      text: 'Great course with actionable strategies. Would appreciate more case studies, but the content is excellent.',
      date: '2023-09-28'
    }
  ]
};