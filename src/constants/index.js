import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  buybackart,
  restolibre,
  foodnome,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile App Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Mayer PLC',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'April 2016 - June 2020',
    points: [
      'Developed custom WordPress websites for clients using HTML, CSS, and PHP.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Worked on optimizing website speed and performance.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Gerlach and Sons',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'June 2020 - April 2023',
    points: [
      'Worked on developing and maintaining multiple web applications using ReactJS, VueJS, Node.js, and MongoDB.',
      'Built REST APIs to support the frontend development team.',
      'Collaborate with cross-functional teams to design and develop scalable web applications.',
      'Implement responsive designs that provide optimal user experience across devices.',
    ],
  },
  {
    title: 'Senior Full Stack Developer',
    company_name: 'Berge-Hermiston',
    icon: shopify,
    iconBg: '#383E56',
    date: 'April 2023 - Present',
    points: [
      'Designed and developed a highly scalable and responsive e-commerce platform using React and Node.js.',
      'Built RESTful APIs for the platform using Express.j.s',
      'Developed a custom CMS using React and Redux to manage product listings and user data.',
      'Utilized AWS services such as S3 and CloudFront to store and serve static content.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      `Working with Adam Black was an absolute pleasure. His attention to detail and commitment to delivering high-quality work exceeded my expectations.  
      I would highly recommend them to anyone in need of a talented and reliable freelancer.`,
    name: 'Camille Durand',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      `I was blown away by Adam Black's creativity and professionalism. 
      He took the time to understand my vision and brought it to life in a way that exceeded my expectations.
       Their communication and responsiveness were also top-notch. I would definitely work with them again.`,
    name: 'Sophie Dumont',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      `I had the pleasure of working with Adam Black on a complex project that required a high level of skill and expertise. 
      He not only delivered exceptional work, but also provided valuable insights and suggestions that helped to improve the project even further.`,
    name: 'Lisa Wang',
    designation: 'CTO',
    company: 'Ziemann Inc',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Food Nome',
    description:
      'Home-Based Cook Collective And Online Marketplace, Offering The Tastiest Homemade Meals & Dining Experiences In Your Neighborhood.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Hubspot',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: foodnome,
    source_code_link: 'https://foodnome.com',
  },
  {
    name: 'BuyBackArt',
    description:
      'Web application that  is known for offering the best prices for all pre-owned devices and their valued customers are the biggest witness to their claim.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Django',
        color: 'green-text-gradient',
      },
      {
        name: 'Market Place',
        color: 'pink-text-gradient',
      },
    ],
    image: buybackart,
    source_code_link: 'https://www.buybackart.com',
  },
  {
    name: 'Rest Olibre',
    description:
      'With restolibre you find all the restaurants around you that still have availability. In a few clicks, you make your reservation request and you are notified in real time of the progress of your request.',
    tags: [
      {
        name: 'Laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'PHP',
        color: 'green-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'pink-text-gradient',
      },
    ],
    image: restolibre,
    source_code_link: 'https://www.restolibre.com',
  },
];

export { services, technologies, experiences, testimonials, projects };
