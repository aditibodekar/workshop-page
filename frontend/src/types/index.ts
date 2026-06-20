export interface WorkshopDetailItem {
  id: string;
  label: string;
  value: string;
  icon: "age" | "duration" | "mode" | "fee" | "calendar";
}

export interface LearningOutcomeItem {
  id: string;
  title: string;
  description: string;
  icon: "brain" | "robot" | "code" | "sensor" | "puzzle";
  color: "coral" | "violet" | "teal" | "sun";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarColor: "coral" | "violet" | "teal" | "sun";
  initials: string;
}

export interface EnquiryFormValues {
  name: string;
  email: string;
  phone: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
}
