'use client';

import React, { useState, ChangeEvent } from 'react';
import { Loader2, X } from 'lucide-react';
import { FormData, SignupModalProps } from "@/types";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import axios from 'axios';
import { toast } from 'react-toast';
import { useRouter } from 'next/navigation';

export const SignupModalPrivate: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
    // La bibliothèque fournit automatiquement la validation

    setIsValidPhone(value.length >= 10);
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidPhone) {
      toast.error('Veuillez entrer un numéro de téléphone valide');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/register-private', formData);
      const data = await response.data;

      if (data.error) {
        setError(data.error);
        toast.error(error);
        return;
      }

      onClose();

      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userPhone', formData.phone);

      const searchParams = new URLSearchParams({
        email: formData.email,
        phone: formData.phone
      });

      router.push(`/confirmation?${searchParams.toString()}`);
      toast.success('Inscription réussie !');
      
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 animate-fadeIn">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 max-w-lg w-full mx-4 relative shadow-2xl transform animate-slideUp">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all duration-300"
          type="button"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
            Coaching Privé YouTube - 4K Pro
          </h2>
          <p className="text-gray-600 text-lg">
            5 étapes pour passer de <span className="text-blue-500 font-semibold">0</span> à
            <span className="text-blue-500 font-semibold"> 1&apos;000€/mois</span> sur ta chaîne youtube
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-gray-900 outline-none focus:border-yellow-500 transition-all duration-300 hover:border-gray-300 bg-white/50 backdrop-blur-sm"
              required
            />
          </div>

          <div className="group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-gray-900 outline-none focus:border-yellow-500 transition-all duration-300 hover:border-gray-300 bg-white/50 backdrop-blur-sm"
              required
            />
          </div>

          <div className="phone-input-container">
            <PhoneInput
              country={'sn'}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{
                required: true,
                className: "w-full p-4 pl-12 border-2 border-gray-200 rounded-xl text-gray-900 outline-none focus:border-yellow-500 transition-all duration-300 hover:border-gray-300 bg-white/50 backdrop-blur-sm"
              }}
              containerClass="phone-input"
              buttonClass="phone-dropdown"
              searchClass="search-dropdown"
              dropdownClass="country-dropdown"
              enableSearch={true}
              disableSearchIcon={true}
              searchPlaceholder="Rechercher un pays..."
              preferredCountries={['fr', 'be', 'ch', 'ca']}
            />
          </div>

          <button
            type="submit"
            disabled={loading || !isValidPhone}
            className={`w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-400 text-black font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:from-blue-400 hover:to-blue-500 group ${(!isValidPhone || loading) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="flex items-center justify-center space-x-2">
              {loading ? (
                <Loader2 size={20} className="animate-spin text-white" />
              ) : (
                <>
                  <span>INSCRIS-TOI MAINTENANT</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                </>
              )}
            </span>
          </button>

          <div className="text-center text-sm text-gray-600 mt-6 space-y-2">
            <p className="flex items-center justify-center space-x-2">
              <span>🔒</span>
              <span>Vos informations sont 100% sécurisées</span>
            </p>
            <p className="text-xs text-gray-500">
              Conformément à la loi européenne de protection des données.<br />
              Vous ne recevrez jamais de spam.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};