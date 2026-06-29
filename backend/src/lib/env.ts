import {z} from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    PORT: z.coerce.number().default(3001),

    FRONTEND_URL: z.string().url(),
    GEMINI_URL: z.string().url(),
    GEMINI_API_KEY: z.string().min(1),

});

export type Env = z.infer<typeof envSchema>;

export function loadEnv() {
 const parsed =envSchema.safeParse(process.env);

 if(!parsed.success) {
    console.error(parsed.error.flatten().fieldErrors);
    throw new Error(parsed.error.message || "Invalid environment variables");
 }

 return parsed.data;
}

let cashedEnv : Env | null = null;

export function getEnv() {
    if(!cashedEnv) {
        cashedEnv = loadEnv();
    }
    return cashedEnv;
}