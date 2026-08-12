export interface Project {
  id: number;
  title: string;
  industry: string;
  category: string;
  services: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Demand Intelligence",
    industry: "Retail & Analytics",
    category: "AI",
    services: "AI • Data • Web",
    description:
      "An AI-powered platform helping businesses forecast demand and make smarter operational decisions.",
    image: "/projects/project-1.svg",
  },

  {
    id: 2,
    title: "Commerce Growth Platform",
    industry: "E-commerce",
    category: "Web",
    services: "Web • UI/UX • Automation",
    description:
      "A modern commerce platform designed to improve customer experience and increase conversions.",
    image: "/projects/project-2.svg",
  },

  {
    id: 3,
    title: "Field Operations App",
    industry: "Operations",
    category: "Apps",
    services: "Mobile • Backend • UX",
    description:
      "A mobile application connecting field teams with real-time business operations.",
    image: "/projects/project-3.svg",
  },

  {
    id: 4,
    title: "Brand Experience System",
    industry: "Technology",
    category: "Design",
    services: "UI/UX • Design System",
    description:
      "A complete digital experience designed around clarity, consistency and modern technology.",
    image: "/projects/project-4.svg",
  },
];