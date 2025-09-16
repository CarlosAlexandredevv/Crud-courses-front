import { z } from 'zod';

const runtimeEnvSchema = z.object({
  EXPO_PUBLIC_API_URL: z.string().url(),
});

const parsed = runtimeEnvSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error('Invalid environment variables');
}

export const env = {
  API_URL: parsed.data.EXPO_PUBLIC_API_URL,
};
