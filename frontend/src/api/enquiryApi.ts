import axios from "axios";
import type { EnquiryFormValues, EnquiryResponse } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5000";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export async function submitEnquiry(
  data: EnquiryFormValues
): Promise<EnquiryResponse> {
  try {
    const response = await apiClient.post<EnquiryResponse>("/api/enquiry", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(
      "Something went wrong while submitting your enquiry. Please try again."
    );
  }
}
