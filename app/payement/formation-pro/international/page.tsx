"use client";

import React from 'react';
import { ArrowLeft, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PayPalEmailInterface = () => {
  const router = useRouter();
  const paypalEmail = "daviddalyndiaye@gmail.com"; // Remplacez par votre email PayPal
  const amount = "40 000 F CFA";

  const copyEmail = () => {
    navigator.clipboard.writeText(paypalEmail);
    alert("Email PayPal copié !");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-xl w-full mx-4 relative shadow-2xl border border-white/20">
        {/* Bouton Retour */}
        <button
          onClick={() => router.back()}
          className="absolute left-8 top-8 text-white/80 hover:text-white bg-gradient-to-br from-white-900 to-white-800 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Contenu principal */}
        <div className="text-center mt-8">
          <div className="w-40 h-40 mx-auto mb-6">
            <Image
              src="/photos/paypal-logo.webp" // Assurez-vous d'avoir ce logo dans votre dossier public
              width={160}
              height={160}
              alt="PayPal Logo"
              className="w-full h-full object-contain"
            />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            Paiement PayPal
          </h2>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-blue-500/20 mb-6">
            <p className="text-white mb-2">Montant à payer:</p>
            <p className="text-blue-400 font-bold text-2xl">{amount}</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-blue-500/20 mb-8">
            <p className="text-white mb-2">Email PayPal pour le paiement:</p>
            <div className="flex items-center justify-center gap-4">
              <p className="text-blue-400 font-mono">{paypalEmail}</p>
              <Button
                onClick={copyEmail}
                variant="ghost"
                size="icon"
                className="hover:bg-white/10"
              >
                <Copy className="w-5 h-5 text-blue-400" />
              </Button>
            </div>
          </div>

          <div className="text-white/60 text-sm mb-6">
            <p>Pour effectuer le paiement:</p>
            <ol className="text-left mt-4 space-y-2">
              <li>1. Ouvrez votre application PayPal</li>
              <li>2. Sélectionnez &quot;Envoyer&quot;</li>
              <li>3. Collez l&apos;email copié ci-dessus</li>
              <li>4. Entrez le montant: {amount}, selon votre devise </li>
              <li>5. Validez le paiement</li>
            </ol>
          </div>

          <button
            onClick={() => router.push('/payement/confirmation-payement')}
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg"
          >
            Confirmer le paiement 
          </button>

          {/* Support */}
          <div className="mt-8 text-center">
            <p className="text-white/60">
              Besoin d&apos;aide ? Contactez le support au
              <a href="tel:+221770970133" className="text-blue-400 ml-2 hover:text-blue-300">
                +221 77 097 01 33
              </a>
              {" "}ou{" "}
              <a href="tel:+221770970133" className="text-blue-400 hover:text-blue-300">
                +221 77 984 76 19
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPalEmailInterface;