import {
  ShoppingBag,
  Utensils,
  Truck,
  Shirt,
  Shield,
  Clock,
  CreditCard,
  HeartHandshake,
} from "lucide-react";

export const data = [
  {
    icon: <Truck className="w-12 h-12 mb-4 text-orange-400" />,
    title: "Swift Delivery",
    description:
      "From documents to gifts, we deliver it all with lightning speed. Your items, our priority.",
  },
  {
    icon: <Utensils className="w-12 h-12 mb-4 text-orange-400" />,
    title: "Food on Demand",
    description:
      "Craving Jollof rice or pizza? Your favourite restaurants are just a tap away. Bon appétit!",
  },
  {
    icon: <Shirt className="w-12 h-12 mb-4 text-orange-400" />,
    title: "Pristine Laundry",
    description:
      "Say goodbye to laundry day stress. We'll keep your wardrobe fresh and fabulous.",
  },
  {
    icon: <ShoppingBag className="w-12 h-12 mb-4 text-orange-400" />,
    title: "Secure Shopping",
    description:
      "Shop with peace of mind. Our escrow service ensures your money is safe until you're satisfied. Goodbye to 'what I ordered vs what I get'!",
  },
];

export const experience = [
  {
    icon: <Clock className="w-8 h-8 mb-4 text-orange-400" />,
    title: "Time-Saving Convenience",
    description:
      "Reclaim your day with our all-in-one platform. More time for you, less time running errands.",
  },
  {
    icon: <Shield className="w-8 h-8 mb-4 text-orange-400" />,
    title: "Ironclad Security",
    description:
      "Shop worry-free with our escrow system. Your transactions are protected from click to delivery.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 mb-4 text-orange-400" />,
    title: "24/7 Human Support",
    description:
      "Questions? Issues? Our friendly team is always here to help, day or night.",
  },
];
