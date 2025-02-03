"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const PaymentSuccessPageContent = () => {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    // Récupérer les paramètres de l'URL
    const emailParam = searchParams.get('email');
    const phoneParam = searchParams.get('phone');

    // Vérifier d'abord les paramètres d'URL
    if (emailParam && phoneParam) {
      setEmail(emailParam);
      setPhone(phoneParam);
    } else {
      // Si pas de paramètres, essayer localStorage
      const storedEmail = localStorage.getItem('userEmail');
      const storedPhone = localStorage.getItem('userPhone');
      
      if (storedEmail) setEmail(storedEmail);
      if (storedPhone) setPhone(storedPhone);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full mx-4 relative shadow-2xl border border-white/20">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-green-500/20 p-4 rounded-full">
            <CheckCircle2 size={48} className="text-green-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Paiement Confirmé avec Succès !
          </h1>
          <p className="text-white/80 text-lg mb-6">
            Merci pour votre confiance. Votre paiement a été traité et confirmé.
          </p>
          
          {/* User Info Card */}
          <Card className="bg-white/10 border-white/20 mb-6">
            <CardHeader>
              <h2 className="text-xl font-semibold text-white">Vos informations</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{phone}</span>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps Alert */}
          <Alert className="bg-blue-500/20 border-blue-500/30 mb-8">
            <AlertDescription className="text-white">
              Un email de confirmation, vous sera envoyé. à votre adresse {email} dans les heures qui suives suite à la validation de votre payement. 
              Veuillez vérifier dans les 24 heures  votre boîte de réception (et vos spams).
            </AlertDescription>
          </Alert>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/" 
            className="w-full bg-white/10 text-white py-4 px-6 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          >
            Retour à l&apos;accueil
          </Link>
        </div>

        {/* Support Section */}
        <div className="mt-8 text-center">
          <p className="text-white/60">
            Besoin d&apos;aide ? Contactez le support au
            <a href="tel:+221770970133" className="text-blue-400 ml-2 hover:text-blue-300 transition-colors">
              +221 77 097 01 33
            </a>
            {' '}ou{' '}
            <a href="tel:+221770970133" className="text-blue-400 hover:text-blue-300 transition-colors">
              +221 77 984 76 19
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const PaymentSuccessPage = () => {
  return (
    <Suspense fallback={<div>Chargement en cours...</div>}>
      <PaymentSuccessPageContent />
    </Suspense>
  );
};

export default PaymentSuccessPage;
