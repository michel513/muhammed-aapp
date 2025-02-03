import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface PricingCardProps {
    price: number;
    features: string[];
    onSelect: () => void;
}

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const PricingCard = ({ price, features, onSelect }: PricingCardProps) => (
    
    <>
    <motion.div
        variants={fadeIn}
        className="bg-white bg-opacity-5 p-6 rounded-xl border border-blue-400 hover:border-blue-300 transition-all"
    >
        <h3 className="text-2xl font-bold text-white mb-4">Programme Premium</h3>
        <div className="text-3xl font-bold text-blue-400 mb-6">{price}€ <span className="text-lg text-gray-400">/mois</span></div>
        <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                </li>
            ))}
        </ul>
        <button
            onClick={onSelect}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors"
        >
            Commencer Maintenant
        </button>
    </motion.div>
    </>
);

export default PricingCard;