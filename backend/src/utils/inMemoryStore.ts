import type { EnquiryInput } from "../utils/enquiryValidation";

export interface InMemoryEnquiry extends EnquiryInput {
  id: string;
  workshop: string;
  createdAt: Date;
}

const store: InMemoryEnquiry[] = [];

export function saveInMemory(data: EnquiryInput): InMemoryEnquiry {
  const record: InMemoryEnquiry = {
    id: `local_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    ...data,
    workshop: "AI & Robotics Summer Workshop",
    createdAt: new Date(),
  };
  store.push(record);
  return record;
}

export function getInMemoryEnquiries(): InMemoryEnquiry[] {
  return store;
}
