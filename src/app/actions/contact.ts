"use server"

import { z } from "zod"
import { Resend } from 'resend'

const contactSchema = z.object({
    name: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
    email: z.string().email("Adresa de email nu este validă"),
    message: z.string().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere"),
})

export type ContactFormState = {
    success?: boolean
    message?: string
    errors?: {
        name?: string[]
        email?: string[]
        message?: string[]
    }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const rawFormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    }

    const validatedFields = contactSchema.safeParse(rawFormData)

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Vă rugăm să corectați erorile de mai sus.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, message } = validatedFields.data

    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'robertgermandev@gmail.com',
            subject: `Mesaj nou de la ${name}`,
            replyTo: email,
            html: `
            <h2>Mesaj nou de pe site-ul web</h2>
            <p><strong>Nume:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mesaj:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `
        })

        return {
            success: true,
            message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând.",
        }
    } catch (error) {
        console.error("Error sending email:", error)
        return {
            success: false,
            message: "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.",
        }
    }
}