import type {
  WorkshopDetailItem,
  LearningOutcomeItem,
  FaqItem,
  TestimonialItem,
} from "../types";

export const WORKSHOP_NAME = "AI & Robotics Summer Workshop";

export const WORKSHOP_START_DATE = "2026-07-15T09:00:00+05:30";

export const WORKSHOP_DETAILS: WorkshopDetailItem[] = [
  { id: "age", label: "Age Group", value: "8–14 Years", icon: "age" },
  { id: "duration", label: "Duration", value: "4 Weeks", icon: "duration" },
  { id: "mode", label: "Mode", value: "Online (Live)", icon: "mode" },
  { id: "fee", label: "Fee", value: "₹2,999", icon: "fee" },
  { id: "start", label: "Start Date", value: "15 July 2026", icon: "calendar" },
];

export const LEARNING_OUTCOMES: LearningOutcomeItem[] = [
  {
    id: "ai-basics",
    title: "Understanding AI Basics",
    description:
      "Discover how machines 'think' through fun, hands-on activities that explain real AI concepts in simple words.",
    icon: "brain",
    color: "coral",
  },
  {
    id: "robotics",
    title: "Robotics Fundamentals",
    description:
      "Explore how robots sense, move, and react — and build a foundation for designing your own simple bots.",
    icon: "robot",
    color: "violet",
  },
  {
    id: "coding",
    title: "Beginner Coding Skills",
    description:
      "Write your first lines of code with block-based and beginner-friendly tools designed just for young learners.",
    icon: "code",
    color: "teal",
  },
  {
    id: "sensors",
    title: "Sensor-Based Automation",
    description:
      "Learn how sensors collect real-world data and trigger automated actions, just like in smart devices around you.",
    icon: "sensor",
    color: "sun",
  },
  {
    id: "thinking",
    title: "Logical Thinking & Problem-Solving",
    description:
      "Build confidence tackling challenges step-by-step — a skill that helps far beyond the workshop too.",
    icon: "puzzle",
    color: "coral",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do students need any prior coding experience?",
    answer:
      "Not at all! This workshop is designed for absolute beginners. We start from the basics and use kid-friendly, visual coding tools so every child can follow along comfortably, regardless of their starting point.",
  },
  {
    id: "faq-2",
    question: "Are class recordings available if we miss a session?",
    answer:
      "Yes. Every live session is recorded and shared within 24 hours, so your child can revisit any class, catch up on a missed session, or rewatch a tricky topic at their own pace.",
  },
  {
    id: "faq-3",
    question: "What tools or devices are needed to join the workshop?",
    answer:
      "A laptop or desktop with a working camera, microphone, and stable internet connection is all that's required. No special robotics kits are needed — we use free, browser-based simulators for all hands-on activities.",
  },
  {
    id: "faq-4",
    question: "How many students are in each live batch?",
    answer:
      "We keep batches small — typically under 20 students — so every child gets personal attention and enough time to ask questions during live sessions.",
  },
  {
    id: "faq-5",
    question: "Will my child receive a certificate after completion?",
    answer:
      "Yes! Every student who completes the 4-week program receives a digital certificate of completion, along with their own mini AI & Robotics project to showcase.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Ananya Sharma",
    role: "Parent of a 10-year-old",
    quote:
      "My daughter built her first chatbot in week two and hasn't stopped talking about it since. The teachers explain everything in such a fun, simple way.",
    rating: 5,
    avatarColor: "coral",
    initials: "AS",
  },
  {
    id: "t2",
    name: "Rohan Mehta",
    role: "Parent of a 12-year-old",
    quote:
      "Great pacing for beginners and the live doubt-solving sessions were a huge help. My son now wants to build his own robot at home!",
    rating: 5,
    avatarColor: "violet",
    initials: "RM",
  },
  {
    id: "t3",
    name: "Priya Nair",
    role: "Parent of an 8-year-old",
    quote:
      "I loved that recordings were always available. We could revisit lessons over the weekend, and the certificate at the end was a lovely touch.",
    rating: 4,
    avatarColor: "teal",
    initials: "PN",
  },
];
