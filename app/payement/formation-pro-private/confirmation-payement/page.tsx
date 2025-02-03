"use client";

import React, { useState } from 'react';
import { ArrowLeft, Upload, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toast';
import axios from 'axios';
import Image from 'next/image';

const PaymentInterface = () => {
  const amount = "13 000 F CFA";
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [nameEmptyError, setNameEmptyError] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Le fichier ne doit pas dépasser 10mb");
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
      return;
    }

    if (!email || email.length < 1) {
      setEmailEmptyError(true);
      setTimeout(() => setEmailEmptyError(false), 3000);
      return;
    }

    if (!name || name.length < 1) {
      setNameEmptyError(true);
      setTimeout(() => setNameEmptyError(false), 3000);
      return;
    }

    if (!image) {
      toast.error("Veuillez ajouter une preuve de paiement");
      return;
    }

    setLoading(true);

    try {
      // Create FormData to send the image
      const formData = new FormData();
      formData.append('firstName', name);
      formData.append('email', email);
      formData.append('phone', mobileNumber);
      if (image) {
        formData.append('paymentProof', image);
      }

      // Send data to the server
      const response = await axios.post('/api/confirm-payment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.data;

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      // Store information locally
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPhone', mobileNumber);

      setHasPaid(true);
      toast.success('Paiement confirmé avec succès !');

      const searchParams = new URLSearchParams({
        email: email,
        phone: mobileNumber
      });

      router.push(`/confirmation/payement-effectue?${searchParams.toString()}`);
      toast.success('Inscription réussie !');

    } catch (err) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-xl w-full mx-4 relative shadow-2xl border border-white/20">
        {/* Header */}
        <div className="relative mb-12">
          <button
            onClick={() => router.back()}
            className="absolute left-0 top-0 text-white/80 hover:text-white bg-gradient-to-br from-white-900 to-white-800 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3 text-white">
              Confirmation du Paiement
            </h2>
            <div className="inline-block">
              <p className="text-white/80 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm px-6 py-2 rounded-full">
                Montant : <span className="font-bold text-blue-400">{amount}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            <Input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`bg-white/5 border-white/10 text-white placeholder-white/50 ${nameEmptyError ? "border-red-500" : ""}`}
            />
            {nameEmptyError && (
              <Alert variant="destructive" className="mt-2 bg-red-500/20 border-red-500/20">
                <AlertDescription className="text-white">Veuillez entrer votre nom</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-white/5 border-white/10 text-white placeholder-white/50 ${emailEmptyError ? "border-red-500" : ""}`}
            />
            {emailEmptyError && (
              <Alert variant="destructive" className="mt-2 bg-red-500/20 border-red-500/20">
                <AlertDescription className="text-white">Veuillez entrer votre email</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            <Input
              type="tel"
              placeholder="Votre numéro WhatsApp"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className={`bg-white/5 border-white/10 text-white placeholder-white/50 ${numberEmptyError ? "border-red-500" : ""}`}
            />
            {numberEmptyError && (
              <Alert variant="destructive" className="mt-2 bg-red-500/20 border-red-500/20">
                <AlertDescription className="text-white">Veuillez entrer votre numéro WhatsApp</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*"
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer text-white/80 flex flex-col items-center gap-2"
            >
              <Upload className="w-6 h-6 text-blue-400" />
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  width={200}
                  height={200}
                  alt="Aperçu du reçu"
                  className="mt-2 max-w-full h-auto max-h-48 rounded-xl"
                />
              ) : (
                "Faites glisser une preuve de paiement ici ou cliquez pour en sélectionner une"
              )}
            </label>
            <div className="text-xs text-white/60 mt-2">
              Joignez un reçu bancaire ou une capture d&apos;écran de la transaction. Le fichier ne doit pas dépasser 10mb.
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center justify-center space-x-2">
              {loading ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                "Confirmer le paiement et envoyer de l email de confirmation"
              )}
            </span>
          </button>
        </form>

        {hasPaid && (
          <div className="mt-6 text-center">
            <div className="bg-green-500/20 text-green-400 px-6 py-3 rounded-xl backdrop-blur-sm">
              Merci pour votre paiement ! Nous allons traiter votre commande.
            </div>
          </div>
        )}

        {/* Support */}
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
  );
};

export default PaymentInterface;