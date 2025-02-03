'use client';

import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

import Image from 'next/image';
import { PayementMethodCountry } from '@/types';

const PaymentPage = () => {

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    {
      id: 'afrique-de-louest',
      name: 'Afrique de l\'ouest',
      icon: '/photos/afrique-ouest.gif',
      description: 'Payez en afrique de l\'ouest',
      href: '/payement/afrique-de-louest'
    },
    {
      id: 'international',
      name: 'International',
      icon: '/photos/world.webp',
      description: 'Payez à l\'international',
      href: '/payement/international'
    }
  ];

  const handleMethodClick = (method: PayementMethodCountry) => {
    setSelectedMethod(method.id);
    setTimeout(() => {
      window.location.href = method.href;
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-xl w-full mx-4 relative shadow-2xl border border-white/20">
        {/* Header avec glassmorphism */}
        <div className="relative mb-12">

          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text">
              Sélectionnez votre région
            </h2>
            <div className="inline-block">
              <p className="text-white/80 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm px-6 py-2 rounded-full">

                Montant : <span className="font-bold text-yellow-400">13000 FCFA</span>
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods avec effet hover amélioré */}
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`group p-6 rounded-2xl transition-all duration-500 cursor-pointer 
                ${selectedMethod === method.id
                  ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-2 border-yellow-400/50'
                  : 'bg-white/5 hover:bg-white/10 border-2 border-transparent hover:border-white/20'
                }
              `}
              onClick={() => handleMethodClick(method)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="bg-white/10 p-3 rounded-xl transform transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={method.icon}
                      width={100}
                      height={100}
                      alt={method.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {method.name}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {method.description}
                    </p>
                  </div>
                </div>
                <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                  {selectedMethod === method.id ? (
                    <Check className="text-yellow-400" size={28} />
                  ) : (
                    <ChevronRight className="text-white/40 group-hover:text-white/80" size={28} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice avec style moderne */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm p-6 mt-10 rounded-2xl">

          <div className="flex flex-col items-center space-y-3">
            <div className="bg-white/10 p-3 rounded-full">
              <span className="text-2xl">🔒</span>
            </div>
            <div className="text-center">
              <p className="text-white font-medium mb-2">
                Paiement 100% sécurisé
              </p>
              <p className="text-white/60 text-sm">
                Vos informations de paiement sont chiffrées et sécurisées.
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-white/60">
                Besoin d&apos;aide ? Contactez le support au
                <a href="tel:+221770970133" className="text-blue-400 ml-2 hover:text-blue-300 transition-colors">
                  +221 77 097 01 33
                </a> ou
                <a href="tel:+221770970133" className="text-blue-400 ml-2 hover:text-blue-300 transition-colors">
                  +221 77 984 76 19
                </a> Vous pouvez aussi nous joindre via à whatsapp ou message
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
