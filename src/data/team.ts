export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Bikash",
    role: "Founder & CEO",
    description:
      "Vision, strategy, leadership and overall business direction.",
    image: "/team/bikash.svg",
    linkedin: "#",
  },

  {
    id: 2,
    name: "Manish",
    role: "Operations Manager & Client Relations",
    description:
      "Operations, client communication and project coordination.",
    image: "/team/manish.svg",
    linkedin: "#",
  },

  {
    id: 3,
    name: "Omkar",
    role: "Project Manager & Team Lead",
    description:
      "Project planning, team coordination and delivery management.",
    image: "/team/omkar.svg",
    linkedin: "#",
  },

  {
    id: 4,
    name: "Rohit",
    role: "Creative & Technical Lead",
    description:
      "Web development, creative solutions and technical execution.",
    image: "/team/rohit.svg",
    linkedin: "#",
  },

  {
    id: 5,
    name: "Salman",
    role: "Business Development Lead",
    description:
      "Client acquisition, partnerships and business growth.",
    image: "/team/salman.svg",
    linkedin: "#",
  },
];