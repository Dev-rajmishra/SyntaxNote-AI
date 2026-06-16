import { z } from "zod";

export const CreateTagSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Tag name is required")
    .max(30, "Tag name is too long")
    .regex(/^[a-zA-Z0-9-_ ]+$/, "Tag contains invalid characters"),
});


export const UpdateTagSchema = z.object({
    name: z
    .string()
    .trim()
    .min(1)
    .max(30)
    .optional(),
});

export const TagParamsSchema = z.object({
  id: z.uuid("invalid tag id"),
});

export const TagQuerySchema = z.object({
    tag: z
    .string()
    .trim()
    .min(1),
});

export type CreateTagIndex = z.infer<typeof CreateTagSchema>;
export type UpdateTagIndex = z.infer<typeof UpdateTagSchema>;
export type TagParamsIndex = z.infer<typeof TagParamsSchema>;
export type TagQueryIndex = z.infer<typeof TagQuerySchema>;