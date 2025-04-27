export interface Service {
  id: string;
  name: string;
  icon: string;
  link: string;       // ⬅️ changed from href → link (matches your new config)
  bg: string;          // ⬅️ added for background texture
  header: string;
  description: string;
  images: string[];
  features: string[];
  pricing?: {
    min?: number;
    max?: number;
    description?: string;
  };
  process?: string[];
  requirements?: string[];
}

export const services: Service[] = [
  {
    id: 'pawn-shop',
    name: 'Pawn Shop',
    icon: '💰',
    link: '/services/pawn-shop',
    bg: '/textures/shop.jpg',
    header: 'Your Trusted Pawn Shop in Logan',
    description: 'Fair, fast cash offers on jewelry, electronics, tools, and more — always with honest appraisals and professional service.',
    images: [
      '/images/services/pawn-shop-1.jpg',
      '/images/services/pawn-shop-2.jpg',
      '/images/services/pawn-shop-3.jpg'
    ],
    features: [
      'Instant cash for valuables',
      'Expert, fair appraisals',
      'Electronics, tools, jewelry & more',
      'Simple, confidential process',
      'No credit checks required'
    ],
    process: [
      'Bring in your item for an on-the-spot appraisal',
      'Receive a competitive cash offer',
      'Complete quick paperwork',
      'Walk out with cash in hand'
    ],
    requirements: [
      'Valid government-issued ID',
      'Item in good working condition',
      'Proof of ownership if available'
    ]
  },
  {
    id: 'loans',
    name: 'Loans',
    icon: '💵',
    link: '/services/loans',
    bg: '/textures/paper.jpg',
    header: 'Fast, Flexible Loans When You Need Them',
    description: 'Short-term cash loans using your valuables as collateral — fast approval, flexible repayment, no credit needed.',
    images: [
      '/images/services/loans-1.jpg',
      '/images/services/loans-2.jpg',
      '/images/services/loans-3.jpg'
    ],
    features: [
      'Same-day cash payouts',
      'Flexible loan terms',
      'Competitive interest rates',
      'No income verification required',
      'Friendly, confidential service'
    ],
    pricing: {
      min: 100,
      max: 10000,
      description: 'Loan amounts based on item or title value'
    },
    process: [
      'Bring in your collateral or documentation',
      'Quick professional evaluation',
      'Sign a short form',
      'Leave with cash immediately'
    ],
    requirements: [
      'Valid government-issued ID',
      'Collateral in good condition',
      'Proof of ownership if needed'
    ]
  },
  {
    id: 'guitars',
    name: 'Guitars',
    icon: '🎸',
    link: '/services/guitars',
    bg: '/textures/wood-grain.jpg',
    header: 'Quality Guitars & Musical Instruments',
    description: 'Shop, sell, or pawn quality guitars, amps, and musical gear at fair market pricing — musicians welcome.',
    images: [
      '/images/services/guitars-1.jpg',
      '/images/services/guitars-2.jpg',
      '/images/services/guitars-3.jpg'
    ],
    features: [
      'Buy, sell, or pawn guitars and amps',
      'Wide selection of brands and models',
      'Expert appraisals on instruments',
      'Fair market offers',
      'Accessories available'
    ],
    process: [
      'Bring in your guitar or instrument',
      'Receive an expert appraisal',
      'Choose to sell, pawn, or trade',
      'Quick cash or instant deal'
    ],
    requirements: [
      'Valid government-issued ID',
      'Instrument in good working order',
      'Accessories (if available)'
    ]
  },
  {
    id: 'cash-loans',
    name: 'Cash Loans',
    icon: '$',
    link: '/services/cash-loans',
    bg: '/textures/money.jpg',
    header: 'Simple Cash Loans',
    description: 'Quick, no-hassle cash loans using your valuables as collateral — cash in your hand in minutes.',
    images: [
      '/images/services/cash-loans-1.jpg',
      '/images/services/cash-loans-2.jpg',
      '/images/services/cash-loans-3.jpg'
    ],
    features: [
      'Instant cash payouts',
      'Simple application process',
      'Low minimums',
      'No credit checks',
      'Same-day funding'
    ],
    process: [
      'Bring in your item or documents',
      'Get an appraisal and offer',
      'Sign a short form',
      'Walk out with cash'
    ],
    requirements: [
      'Valid government-issued ID',
      'Collateral in good condition'
    ]
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    icon: '💎',
    link: '/services/jewelry',
    bg: '/textures/velvet.jpg',
    header: 'Expert Jewelry Services',
    description: 'Get top offers for gold, silver, diamonds, and watches — professional appraisals and instant cash.',
    images: [
      '/images/services/jewelry-1.jpg',
      '/images/services/jewelry-2.jpg',
      '/images/services/jewelry-3.jpg'
    ],
    features: [
      'Top payouts for gold and diamonds',
      'Accurate jewelry appraisals',
      'Watches and precious metals accepted',
      'Buy, sell, or pawn options',
      'Discreet, professional transactions'
    ],
    process: [
      'Bring in your jewelry or watch',
      'Get an expert appraisal and offer',
      'Choose cash payout or pawn loan',
      'Simple, fast transaction'
    ],
    requirements: [
      'Valid government-issued ID',
      'Jewelry or metals in presentable condition'
    ]
  },
  {
    id: 'guns',
    name: 'Guns',
    icon: '🔫',
    link: '/services/guns',
    bg: '/textures/metal.jpg',
    header: 'Firearm Pawn & Sales',
    description: 'Licensed firearm transactions, pawns, and purchases with full compliance and top-dollar payouts.',
    images: [
      '/images/services/guns-1.jpg',
      '/images/services/guns-2.jpg',
      '/images/services/guns-3.jpg'
    ],
    features: [
      'Licensed firearm pawn services',
      'Competitive cash offers',
      'Legal compliance guaranteed',
      'Wide selection of firearms',
      'Quick, secure transactions'
    ],
    process: [
      'Bring in your firearm and valid ID',
      'Professional evaluation and offer',
      'Secure processing and documentation',
      'Cash payout or pawn loan'
    ],
    requirements: [
      'Valid government-issued ID',
      'Proof of ownership',
      'Must pass federal background checks (if required)'
    ]
  },
  {
    id: 'gold-dealer',
    name: 'Gold Dealer',
    icon: '🥇',
    link: '/services/gold-dealer',
    bg: '/textures/gold-foil.jpg',
    header: 'Top Dollar for Your Precious Metals',
    description: 'Turn your unwanted gold, silver, or platinum into cash today — best local rates guaranteed.',
    images: [
      '/images/services/gold-1.jpg',
      '/images/services/gold-2.jpg',
      '/images/services/gold-3.jpg'
    ],
    features: [
      'We buy all gold karats and forms',
      'Instant cash payouts',
      'Professional testing on-site',
      'Competitive market rates',
      'No pressure, no gimmicks'
    ],
    process: [
      'Bring in your gold, silver, or platinum',
      'Receive real-time testing and evaluation',
      'Accept a top-dollar cash offer',
      'Walk out with payment immediately'
    ],
    requirements: [
      'Valid government-issued ID',
      'Metals (any condition)'
    ]
  },
  {
    id: 'car-title-loans',
    name: 'Car Title Loans',
    icon: '🚗',
    link: '/services/car-title-loans',
    bg: '/textures/asphalt.jpg',
    header: 'Fast Car Title Loans',
    description: 'Use your vehicle title to get the cash you need — fast approvals, keep your car while you repay.',
    images: [
      '/images/services/car-loans-1.jpg',
      '/images/services/car-loans-2.jpg',
      '/images/services/car-loans-3.jpg'
    ],
    features: [
      'Get cash while keeping your vehicle',
      'Clear and simple loan terms',
      'Quick, same-day approvals',
      'Competitive interest rates',
      'Flexible repayment plans'
    ],
    pricing: {
      min: 1000,
      max: 25000,
      description: 'Loan amounts based on vehicle condition and market value'
    },
    process: [
      'Bring in your vehicle title and ID',
      'Quick collateral evaluation',
      'Sign a simple loan agreement',
      'Get your cash fast and keep your car'
    ],
    requirements: [
      'Valid government-issued ID',
      'Clear car title (your name)',
      'Proof of income',
      'Proof of insurance'
    ]
  },
  {
    id: 'pawnbrokers',
    name: 'Pawnbrokers',
    icon: '🤝',
    link: '/services/pawnbrokers',
    bg: '/textures/leather.jpg',
    header: 'Professional Pawnbroker Services',
    description: 'Licensed pawnbrokers helping Logan residents buy, sell, and secure fast loans every day.',
    images: [
      '/images/services/pawnbrokers-1.jpg',
      '/images/services/pawnbrokers-2.jpg',
      '/images/services/pawnbrokers-3.jpg'
    ],
    features: [
      'Licensed pawnbroker experts',
      'Quick cash offers',
      'Confidential transactions',
      'Wide range of accepted items',
      'Friendly local service'
    ],
    process: [
      'Bring in your item for appraisal',
      'Agree on a cash or loan offer',
      'Sign short documentation',
      'Walk out with your money'
    ],
    requirements: [
      'Valid government-issued ID',
      'Item in acceptable condition'
    ]
  },
  {
    id: 'title-loans',
    name: 'Title Loans',
    icon: '📄',
    link: '/services/title-loans',
    bg: '/textures/parchment.jpg',
    header: 'Quick & Easy Title Loans',
    description: 'Need quick cash without losing your car? Our title loans are fast, simple, and flexible.',
    images: [
      '/images/services/title-loans-1.jpg',
      '/images/services/title-loans-2.jpg',
      '/images/services/title-loans-3.jpg'
    ],
    features: [
      'Fast cash secured by your vehicle title',
      'No credit check required',
      'Flexible terms and payments',
      'Competitive interest rates',
      'Keep your car during the loan'
    ],
    process: [
      'Bring your title and ID',
      'Receive cash offer same day',
      'Keep driving while you repay',
      'Simple renewal options available'
    ],
    requirements: [
      'Valid government-issued ID',
      'Clear vehicle title in your name',
      'Proof of income'
    ]
  }
];
