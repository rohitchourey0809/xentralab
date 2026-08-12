export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  message: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    company: "Nova Retail",
    role: "Founder",
    message:
      "XentraLab helped us transform a complex business idea into a clean and scalable digital product.",
    rating: 5,
  },

  {
    id: 2,
    name: "Sarah Wilson",
    company: "Growth Labs",
    role: "Marketing Director",
    message:
      "The team combines strong technical execution with excellent communication and product thinking.",
    rating: 5,
  },

  {
    id: 3,
    name: "Rahul Sharma",
    company: "OpsTech",
    role: "COO",
    message:
      "The automation solution saved our team significant time and gave us much better operational visibility.",
    rating: 5,
  },
];