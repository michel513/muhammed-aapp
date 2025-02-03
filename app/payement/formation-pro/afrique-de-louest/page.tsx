'use client';

import React, { useState } from 'react';
import { Check, ChevronRight, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PaymentMethod } from '@/types';

const PaymentPage = () => {
  const router = useRouter();

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    {
      id: 'wave',
      name: 'Wave',
      icon: '/photos/wave.webp',
      description: 'Payez avec Wave',
      color: 'bg-blue-500',
      number: '+221 77 984 76 19',
      href: '/payement/formation-pro/afrique-de-louest/wave-money'
    },
    {
      id: 'orange-money',
      name: 'Orange Money',
      icon: '/photos/orange-money.webp',
      description: 'Payez avec Orange Money',
      color: 'bg-orange-500',
      number: '+221 77 984 76 19',
      href: '/payement/formation-pro/afrique-de-louest/orange-money'
    }
  ];

  const handleMethodClick = (method: PaymentMethod) => {

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
          <button
            onClick={() => router.back()}
            className="absolute left-0 top-0 text-white/80 hover:text-white bg-gradient-to-br from-white-900 to-white-800 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text">
              Choisissez votre moyen de paiement pour l&#39;afrique de l&#39;ouest
            </h2>
            <div className="inline-block">
              <p className="text-white/80 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full">
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
                  <div className={`${method.color} p-3 rounded-xl transform transition-transform duration-300 group-hover:scale-110 bg-opacity-20`}>
                    <Image
                      src={method.icon}
                      width={40}
                      height={40}
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
                    <p className="text-white/70 font-medium mt-1">{method.number}</p>
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
        </div>
      </div>
      </div>
    </div>
  );
};

export default PaymentPage;