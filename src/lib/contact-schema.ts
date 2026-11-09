import { z } from "zod";
import {
  contactBudgets,
  contactMethods,
  contactServices,
  contactTimelines,
} from "@/content/contact-options";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Please use 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "Please use 200 characters or fewer."),
  phone: z
    .string()
    .trim()
    .max(40, "Please use 40 characters or fewer.")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(150, "Please use 150 characters or fewer.")
    .optional()
    .or(z.literal("")),
  service: z.enum(contactServices, {
    message: "Please choose the service you need.",
  }),
  budget: z.enum(contactBudgets, {
    message: "Please choose an estimated budget.",
  }),
  timeline: z.enum(contactTimelines, {
    message: "Please choose a timeline.",
  }),
  message: z
    .string()
    .trim()
    .min(30, "Please share at least 30 characters about the project.")
    .max(4000, "Please keep the project details under 4,000 characters."),
  contactMethod: z.enum(contactMethods, {
    message: "Please choose a preferred contact method.",
  }),
  consent: z.literal(true, {
    message: "Please confirm that you would like to be contacted.",
  }),
  website: z.string().max(0, "Spam check failed.").optional().or(z.literal("")),
  startedAt: z.string().trim(),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export type ContactApiResponse = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactPayload, string>>;
  code?: "NOT_CONFIGURED" | "RATE_LIMITED" | "VALIDATION" | "SEND_FAILED";
};
