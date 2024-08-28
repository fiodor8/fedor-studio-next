import { Resend } from "resend";
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequestBody {
    email: string;
}

export async function POST(req: NextRequest) {
    try {
        // Parse JSON from the request body
        const body: ContactRequestBody = await req.json();

        // Validate the email
        if (!body.email || typeof body.email !== 'string') {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // Create the contact
        const { data, error } = await resend.contacts.create({
            email: body.email,
            unsubscribed: false,
            audienceId: '82c0b7fb-6002-48d3-b35e-f2d9534d640a',
        });

        // Handle any errors from the contact creation process
        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        // Return success response
        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}