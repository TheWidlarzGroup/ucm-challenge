import { z } from 'zod'

export const NewMemberValidationSchema = z.object({
  name: z
    .string({ required_error: 'Required' })
    .min(1, { message: 'Required' })
    .max(200, { message: 'Too long!' }),
  job: z
    .string({ required_error: 'Required' })
    .min(1, { message: 'Required' })
    .max(200, { message: 'Too long!' }),
  picture: z.string({ required_error: 'Image is required! Pick one!' }),
})

export type NewMemberForm = z.infer<typeof NewMemberValidationSchema>
