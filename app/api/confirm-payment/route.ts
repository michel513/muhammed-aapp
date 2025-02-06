'use server';

import { NextResponse } from 'next/server';
import path from 'path';

import sendMail from '@/utils/sendMail';
import { uploadSingleFile } from '@/utils/uploadthingsApi';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    // Extract form data
    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const paymentProof = formData.get('paymentProof') as File;

    const whatsappUrl = process.env.WHATSAPP_URL;

    // Validation
    if (!firstName || !email || !phone || !paymentProof) {
      return NextResponse.json({
        success: false,
        message: 'Veuillez remplir tous les champs et ajouter une preuve de paiement',
      });
    }

    // Upload file using uploadthings (maintenant côté serveur)
    let uploadResponse;
    
    try {
      uploadResponse = await uploadSingleFile(paymentProof, 'Image');
      if (!uploadResponse?.url) {
        throw new Error("Échec de l'upload du fichier");
      }
    } catch (error) {
      console.error('Upload error:', error);
      return NextResponse.json({
        success: false,
        message: "Erreur lors de l'upload du fichier",
      });
    }

    const data = {
      firstName,
      email,
      phone,
      paymentProofUrl: uploadResponse.url,
      whatsappUrl
    };

    // Send email
    await sendMail({
      email,
      subject: 'Confirmation de votre paiement',
      template: path.join(process.cwd(), 'mails', 'payment-confirmation.ejs'),
      data,
    });

    return NextResponse.json({
      success: true,
      message: 'Paiement confirmé et email envoyé avec succès',
    });
    
  } catch (error) {
    console.error('[CONFIRM_PAYMENT]', error);
    return NextResponse.json(
      { success: false, message: 'Une erreur est survenue' },
      { status: 500 }
    );
  }
}