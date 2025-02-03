import { StaticImageData } from "next/image";

export interface FormData {
    firstName: string;
    email: string;
    phone: string;
  }
  
  export interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  export type PaymentMethod = {
    id: string;
    name: string;
    icon: string;
    description: string;
    color: string;
    number: string;
    href: string;
  };

  export type PayementMethodCountry = {
    id: string;
    name: string;
    icon: string;
    description: string;
    href: string;
  }


  export type TestimonialType = {
    name: string;
    date: string;
    rating: number;
    type: string;
    title: string;
    text: string;
    stats: {
      subscribers: string;
      revenue: string;
      channels: number;
    };
    video: StaticImageData;
  }