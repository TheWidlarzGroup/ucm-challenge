import { z } from 'zod'

export const AuthValidationSchema = z.object({
  email: z
    .string({ required_error: 'Required' })
    .min(1, { message: 'Required' })
    .max(200, { message: 'Too long!' })
    .email('Incorrect email format'),
  password: z
    .string({ required_error: 'Required' })
    .min(6, { message: 'Too short!' })
    .max(200, { message: 'Too long!' }),
})

export type AuthForm = z.infer<typeof AuthValidationSchema>
