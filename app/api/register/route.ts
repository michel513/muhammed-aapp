import sendMail from '@/utils/sendMail';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: Request) {
  try {
    // Lire les données du corps de la requête
    const { firstName, email, phone } = await req.json();
    const payementPageUrl = process.env.PAYEMENT_PAGE_URL;

    // Validation des champs
    if (!firstName || !email || !phone) {
      return NextResponse.json({
        success: false,
        message: 'Veuillez remplir tous les champs',
      });
    }

    console.log('FIRST_NAME:', firstName);
    console.log('EMAIL:', email);
    console.log('PHONE:', phone);
    console.log('GOOGLE_FORM_URL:', payementPageUrl);

    const data = { firstName, email, phone, payementPageUrl };

    // Envoi de l'email via sendMail
    await sendMail({
      email,
      subject: 'Votre inscription au Séminaire de la Formation YouTube',
      template: path.join(process.cwd(), 'mails', 'formation-pro-email.ejs'),
      data,
    });

    return NextResponse.json({
      success: true,
      message: 'Email envoyé avec succès',
    });
  } catch (error) {
    console.error('[SEND_EMAIL]', error);
    return new NextResponse('internal server error', { status: 500 });
  }
}
