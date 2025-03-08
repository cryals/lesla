export interface Project {
  id: string;
  name: string;
  type: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
  technologies?: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'project_1',
    type: '.website',
    status: 'completed',
    description: 'Корпоративный сайт с адаптивным дизайном',
    technologies: ['React', 'TypeScript', 'Styled Components'],
    url: 'https://example.com/project1'
  },
  {
    id: 'project-2',
    name: 'project_2',
    type: '.webapp',
    status: 'completed',
    description: 'Интернет-магазин с интеграцией платежных систем',
    technologies: ['Next.js', 'MongoDB', 'Stripe API'],
    url: 'https://example.com/project2'
  },
  {
    id: 'project-3',
    name: 'project_3',
    type: '.landing',
    status: 'completed',
    description: 'Промо-сайт для запуска нового продукта',
    technologies: ['Vue.js', 'GSAP', 'Firebase'],
    url: 'https://example.com/project3'
  },
  {
    id: 'project-4',
    name: 'new_project',
    type: '.spa',
    status: 'in-progress',
    description: 'Одностраничное приложение в разработке',
    technologies: ['React', 'Redux', 'Node.js'],
  },
  {
    id: 'project-5',
    name: 'upcoming_project',
    type: '.mobile',
    status: 'planned',
    description: 'Мобильное приложение с интегрированным AI',
    technologies: ['React Native', 'TensorFlow.js', 'AWS'],
  }
]; 