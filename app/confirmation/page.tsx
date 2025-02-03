'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, Mail, ArrowRight, Phone, Youtube } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

interface ConfirmationProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  label: string;
  highlight?: string;
}

const InfoItem: React.FC<ConfirmationProps> = ({ Icon, text, label, highlight }) => (
  <div className="flex items-center space-x-4 text-white/80 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
    <div className="p-3 rounded-xl bg-gradient-to-br from-red-400/20 to-purple-400/20 group-hover:scale-105 transition-transform duration-300">
      <Icon className="text-red-400" height={24} width={24} />
    </div>
    <div className="flex-1">
      <p className="font-medium text-white text-lg">{text}</p>
      <p className="text-white/60 text-sm">{label}</p>
      {highlight && <p className="text-red-400 text-sm mt-2 font-medium">{highlight}</p>}
    </div>
  </div>
);

const ConfirmationEmailContent = () => {
  const searchParams = useSearchParams();
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [productType, setProductType] = useState<string>('');

  useEffect(() => {
    const emailFromUrl = searchParams.get('email');
    const phoneFromUrl = searchParams.get('phone');
    const typeFromUrl = searchParams.get('type');

    const emailFromStorage = localStorage.getItem('userEmail');
    const phoneFromStorage = localStorage.getItem('userPhone');

    setUserEmail(emailFromUrl || emailFromStorage || '');
    setUserPhone(phoneFromUrl || phoneFromStorage || '');
    setProductType(typeFromUrl || 'formation');
  }, [searchParams]);

  const getPriceInfo = () => {
    if (productType === 'coaching') {
      return {
        title: "4K Pro Coaching Privée YouTube",
        price: "150€ / 100.000 Fcfa"
      };
    }
    return {
      title: "4K Pro YouTube",
      price: "62€ / 40.000 Fcfa"
    };
  }

  const handleMailboxAccess = () => {
    const emailDomain = userEmail.split('@')[1]?.toLowerCase();
    let mailboxUrl = 'https://webmail.com';

    if (emailDomain?.includes('gmail')) mailboxUrl = 'https://mail.google.com';
    else if (emailDomain?.includes('yahoo')) mailboxUrl = 'https://mail.yahoo.com';
    else if (emailDomain?.includes('hotmail') || emailDomain?.includes('outlook')) {
      mailboxUrl = 'https://outlook.live.com';
    }

    window.open(mailboxUrl, '_blank');
  };

  const productInfo = getPriceInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-xl w-full mx-4 relative shadow-2xl border border-white/20">
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center relative transform hover:scale-105 transition-transform duration-300">
              <CheckCircle size={48} className="text-white" />
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3 text-transparent bg-gradient-to-r from-red-300 via-red-400 to-purple-400 bg-clip-text transform hover:scale-105 transition-transform duration-300">
            Bienvenue ! 🎉
          </h2>
          <p className="text-white/80 text-lg">Votre inscription à {productInfo.title} est confirmée</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm rounded-2xl mb-8 border border-white/10 overflow-hidden">
          <InfoItem
            Icon={Mail}
            text={userEmail}
            label="Email de confirmation"
            highlight={`Paiement requis : ${productInfo.price}`}
          />
          {userPhone && <InfoItem Icon={Phone} text={userPhone} label="Numéro de téléphone" />}
          <InfoItem 
            Icon={Youtube} 
            text={productInfo.title} 
            label={productType === 'coaching' ? "Coaching personnalisé" : "Formation complète"} 
          />
        </div>

        <div className="space-y-6">
          <p className="text-center text-white/60">Consultez votre boîte mail pour les instructions de paiement</p>
          <button
            onClick={handleMailboxAccess}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="flex items-center justify-center space-x-3 relative">
              <span className="text-lg">ACCÉDER À MA BOÎTE MAIL</span>
              <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <span className="text-lg">💬</span>
            <span className="text-white/60 text-sm">Support disponible 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfirmationEmail = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
          <div className="text-white/80 text-lg">
            <div className="animate-pulse">Chargement...</div>
          </div>
        </div>
      }
    >
      <ConfirmationEmailContent />
    </Suspense>
  );
};

export default ConfirmationEmail;