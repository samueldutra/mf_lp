import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'name_error' }),
    email: z.string().email({ message: 'email_error' }),
    phone: z.string().min(10, { message: 'phone_error' }),
    subject: z.string().min(5, { message: 'subject_error' }),
    message: z.string().min(10, { message: 'message_error' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
