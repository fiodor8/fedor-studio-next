import { z } from "zod"

export const formSchema = z.object({
    email: z.string()
        .min(1, { message: "This filed has to be filled" })
        .email("This is not a valid email")
})