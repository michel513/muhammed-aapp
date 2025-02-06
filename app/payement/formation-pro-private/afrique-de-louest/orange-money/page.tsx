'use client';

import React from 'react';
import { Copy, ArrowLeft, Phone, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const OrangeMoneyPage = () => {
  const router = useRouter();
  const paymentNumber = '+221 77 984 76 19';

  const amount = '100.000';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-xl w-full mx-4 relative shadow-2xl border border-white/20">
        {/* Header avec glassmorphism */}
        <div className="relative mb-12">
          <button
            onClick={() => router.back()}
            className="absolute left-0 top-0 text-white/80 hover:text-white bg-gradient-to-br from-white-900 to-white-800 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center p-4 shadow-lg">
              <Image
                src="/photos/orange-money.webp"
                width={100}
                height={100}
                alt="Orange Money"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-3xl font-bold mb-3 text-white">
              Paiement Orange Money
            </h2>
            <div className="inline-block">
              <p className="text-white/80 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm px-6 py-2 rounded-full">
                Montant : <span className="font-bold text-orange-400">{amount} FCFA</span>
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-8">
          {/* Numéro de paiement */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
            <h3 className="font-semibold text-orange-400 mb-4">Numéro de paiement</h3>
            <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl">
              <div className="flex items-center space-x-4">
                <Phone className="text-orange-400" size={24} />
                <span className="font-mono text-xl text-white">{paymentNumber}</span>
              </div>
              <button
                onClick={() => copyToClipboard(paymentNumber)}
                className="p-3 hover:bg-orange-500/20 rounded-xl transition-all duration-300"
              >
                <Copy size={24} className="text-orange-400" />
              </button>
            </div>
          </div>

          {/* Instructions de paiement */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-xl">Instructions de paiement :</h3>
            <ol className="space-y-4">
              {[
                "Composez #144# sur votre téléphone",
                "Sélectionnez l'option \"Paiement de facture\"",
                `Entrez le numéro ${paymentNumber}`,
                `Entrez le montant : ${amount} FCFA`,
                "Confirmez avec votre code secret Orange Money"
              ].map((instruction, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="bg-orange-500/20 text-orange-400 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-white/80 pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Button vers la confirmation de paiement */}
          <div className="mt-10 text-center">
            <button
              onClick={() => router.push('/payement/formation-pro-private/confirmation-payement')}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-all"
            >
              Confirmer le paiement
            </button>
          </div>

          {/* Alert */}
          <div className="
              bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm px-6 py-2 rounded-2xl
              border border-orange-500/20 flex items-start space-x-4
            ">
            <AlertCircle className="text-orange-400 flex-shrink-0" size={24} />
            <p className="text-white/80">
              Une fois le paiement effectué, vous recevrez une confirmation par SMS.
              La page se mettra à jour automatiquement.
            </p>
          </div>
        </div>

        {/* Support */}
        <div className="mt-10 text-center">
          <p className="text-white/60">
            Besoin d&apos;aide ? Contactez le support au
            <a href="tel:+221770970133" className="text-blue-400 ml-2 hover:text-blue-300 transition-colors">
              +221 77 097 01 33
            </a> ou
            <a href="tel:+221770970133" className="text-blue-400 ml-2 hover:text-blue-300 transition-colors">
              +221 70 594 37 90
            </a> Vous pouvez aussi nous joindre via à whatsapp ou message
          </p>
        </div>

      </div>
    </div>
  );
};

export default OrangeMoneyPage;
