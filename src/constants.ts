import { Service, PortfolioItem, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'business',
    title: 'Business Websites',
    description: 'Corporate-grade websites that establish authority and trust for startups and established firms.',
    icon: 'Briefcase',
  },
  {
    id: 'business-services',
    title: 'Service Portals',
    description: 'Specialized websites for service-based businesses with booking and lead management.',
    icon: 'Settings',
  },
  {
    id: 'e-commerce',
    title: 'E-commerce Stores',
    description: 'High-conversion online shops with seamless payment integrations and inventory systems.',
    icon: 'ShoppingBag',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Optimized, high-performance landing pages designed to maximize lead generation.',
    icon: 'Zap',
  },
  {
    id: 'creative',
    title: 'Creative Portfolios',
    description: 'Unique, visually striking showcases for artists, architects, and creative professionals.',
    icon: 'Palette',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Sites',
    description: 'Modern property listing websites with advanced search and interactive map integrations.',
    icon: 'Home',
  },
  {
    id: 'personal-brand',
    title: 'Personal Branding',
    description: 'Professional identities for influencers and public figures to showcase their impact.',
    icon: 'User',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Apps',
    description: 'Scalable web applications for internal workflows and complex business data management.',
    icon: 'Cpu',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Luxe Real Estate',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Nova Tech Dashboard',
    category: 'SaaS',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Zen Meditation App',
    category: 'Mobile First',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Echo Music Player',
    category: 'Entertainment',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO, Brightly',
    content: 'CK_webby delivered a website that exceeded our expectations. The design is modern, fast, and exactly what we needed.',
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder, TechFlow',
    content: 'Process was seamless. Highly professional and has a great eye for detail. Highly recommended for any web project.',
    avatarUrl: 'https://i.pravatar.cc/150?u=michael',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Minimalism in 2026',
    excerpt: 'Why less is still more in the evolving landscape of digital design.',
    date: 'May 5, 2026',
    category: 'Design Trends',
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Optimizing for Core Web Vitals',
    excerpt: 'A technical deep dive into making your React apps lightning fast.',
    date: 'April 28, 2026',
    category: 'Development',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
  },
];

export const CONTACT_INFO = {
  email: 'officialck688@gmail.com',
  phone: '8810699290',
  whatsapp: 'https://wa.me/918810699290',
  instagram: 'https://www.instagram.com/ck_webby?igsh=MTJrcTZzMHEzcWNxNQ==',
};
