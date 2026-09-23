/**
 * ==============================================================================
 * SINGLE SOURCE OF TRUTH (CONFIG) FOR THE ENTIRE WEBSITE
 * ==============================================================================
 * All images are stored locally in /assets/images/
 * Update only this file to reflect brand, contact, services, and industries.
 * ==============================================================================
 */

export const siteConfig = {
  // Brand Identity
  company: {
    name: "Chrome Sai Express Service",
    shortName: "Chrome Sai",
    legalName: "Chrome Sai Express Service",
    tagline: "Reliable Logistics & Transportation Services",
    slogan: "We provide fast, secure, and affordable freight transport across India.",
    badgeText: "Trusted Pan-India Transport Partner",
    title: "Delivering First",
    establishedYear: 2021,

    mission: "Delivering seamless logistics solutions for businesses across diverse industries.",
    vision: "To be India's most trusted logistics partner, driving innovation in transportation.",
    description: "Chrome Sai Express Service is a logistics service provider founded by industry veterans to transform road freight. Guided by our motto, \"DELIVERING FIRST,\" we combine advanced tracking technology, an extensive transportation network, and customized resources to make shipping seamless, efficient, and hassle-free.",

    // Logo configuration — update imageSrc to change everywhere at once
    logo: {
      type: "image",
      textPrimary: "CS",
      textSecondary: "EXPRESS",
      imageSrc: "/assets/images/logo.png",
      alt: "Chrome Sai Express Service Logo",
    }
  },

  // Contact Channels
  contact: {
    phone: "+91 98863 45860",
    phoneRaw: "+919886345860",
    email: "karthikeyan@chromesai.in",
    salesEmail: "karthikeyan@chromesai.in",
    supportEmail: "karthikeyan@chromesai.in",
    address: "S-05, Silver Waves Prakruthi Apartment, Valagerehalli, K S Town, Bengaluru 560040, India",
    addressLine1: "S-05, Silver Waves Prakruthi Apartment",
    addressLine2: "Valagerehalli, K S Town",
    city: "Bengaluru",
    pincode: "560040",
    country: "India",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=S-05+Silver+Waves+Prakruthi+Apartment+Valagerehalli+K+S+Town+Bengaluru+560040+India",
    whatsappNumber: "+91 98863 45860",
    whatsappLink: "https://wa.me/919886345860?text=Hello%20Chrome%20Sai%20Express%2C%20I%20want%20to%20book%20a%20truck%20or%20get%20a%20quote.",
    workingHours: "24/7 Customer Support & Dispatch",
  },

  // Calls to Action
  actions: {
    primaryCTA: "Book a Truck",
    secondaryCTA: "Get Started",
    contactCTA: "Contact Us",
    quoteCTA: "Instant Quote",
  },

  // Navigation Links
  navigation: {
    main: [
      { name: "Home", href: "#home" },
      {
        name: "Services",
        href: "#services",
        hasDropdown: true,
        dropdownKey: "services"
      },
      {
        name: "Industries",
        href: "#industries",
        hasDropdown: true,
        dropdownKey: "industries"
      },
      { name: "Why Us", href: "#why-us" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ]
  },

  // Hero Carousel Slides — one per service
  heroSlides: [
    {
      id: "full-truck-load",
      title: "Full Truck Load (FTL)",
      subtitle: "Dedicated trucks exclusively for your bulk shipments with direct, non-stop transit across India.",
      image: "/assets/images/service-ftl.jpg",
      tag: "Bulk Transport",
      ctaText: "Book FTL Truck",
    },
    {
      id: "partial-truck-load",
      title: "Partial Truck Load (PTL)",
      subtitle: "Cost-effective shared truck space for smaller loads. Pay only for the space you use.",
      image: "/assets/images/hero-ftl.jpg",
      tag: "Shared Freight",
      ctaText: "Get PTL Quote",
    },
    {
      id: "distribution",
      title: "Distribution",
      subtitle: "Reliable last-mile delivery network connecting factories and warehouses to stores and dealers.",
      image: "/assets/images/service-milkrun.jpg",
      tag: "Last-Mile Delivery",
      ctaText: "Plan Distribution",
    },
    {
      id: "reverse-logistics",
      title: "Reverse Logistics",
      subtitle: "Efficient returns, replacement pick-ups, and eco-friendly recycling transport solutions.",
      image: "/assets/images/service-multimodal.jpg",
      tag: "Returns Management",
      ctaText: "Manage Returns",
    },
    {
      id: "over-dimensional-cargo",
      title: "Over Dimensional Cargo (ODC)",
      subtitle: "Heavy-duty multi-axle trailers and escorted transit for oversized industrial machinery.",
      image: "/assets/images/ind-project-cargo.jpg",
      tag: "Heavy Haulage",
      ctaText: "Request ODC Survey",
    }
  ],

  // Key Simple Numbers
  metrics: [
    {
      icon: "Rocket",
      value: "∞",
      label: "Possibilities Ahead"
    },
    {
      icon: "Handshake",
      value: "50+",
      label: "Clients Served"
    },
    {
      icon: "MapPin",
      value: "PAN India",
      label: "Expanding Horizons"
    },
    {
      icon: "PhoneCall",
      value: "24/7",
      label: "Always On Support"
    }
  ],

  // Core Logistics Services — exactly 5
  services: [
    {
      id: "full-truck-load",
      title: "Full Truck Load (FTL)",
      shortDesc: "Dedicated trucks for your bulk shipments.",
      fullDesc: "Get an entire truck reserved exclusively for your goods. Ideal for large consignments, factory dispatches, and bulk orders with direct pickup and delivery without any stops in between.",
      image: "/assets/images/service-ftl.jpg",
      icon: "Truck",
      features: [
        "Dedicated truck exclusively for your goods",
        "Direct point-to-point delivery with no unloading on the way",
        "24/7 live GPS location tracking on your phone",
        "Available in all container and open-body sizes"
      ],
      workflow: [
        { step: "01", title: "Truck Booking", desc: "Select truck size and pickup time online or over a quick phone call." },
        { step: "02", title: "Direct Loading", desc: "Truck arrives at your factory or warehouse dock for direct loading." },
        { step: "03", title: "Non-Stop Transit", desc: "Direct route transit monitored continuously with live GPS tracking." },
        { step: "04", title: "Safe Delivery", desc: "Direct unloading at receiver with instant digital proof of delivery." }
      ]
    },
    {
      id: "partial-truck-load",
      title: "Partial Truck Load (PTL)",
      shortDesc: "Cost-effective shared truck space for smaller loads.",
      fullDesc: "Only have a few pallets or boxes? Don't pay for an entire truck. With our PTL service, you share truck space with other shippers and only pay for the exact volume or weight you use.",
      image: "/assets/images/hero-ftl.jpg",
      icon: "Package",
      features: [
        "Pay only for the space or weight you use",
        "Affordable pricing for medium and small shipments",
        "Regular scheduled dispatches between major cities",
        "Carefully segregated cargo to prevent mixing"
      ],
      workflow: [
        { step: "01", title: "Weight & Size Check", desc: "Tell us the number of boxes, pallets, or approximate weight." },
        { step: "02", title: "Pickup & Consolidation", desc: "We collect your shipment and safely consolidate it onto scheduled routes." },
        { step: "03", title: "Shared Highway Haul", desc: "Regular transit with automated milestone updates." },
        { step: "04", title: "Doorstep Delivery", desc: "Prompt delivery directly to your customer's doorstep." }
      ]
    },
    {
      id: "distribution",
      title: "Distribution",
      shortDesc: "Reliable last-mile delivery network.",
      fullDesc: "Seamless delivery from regional warehouses directly to retail stores, dealers, distributors, or end customers. We handle multi-stop route planning to ensure on-time delivery every single day.",
      image: "/assets/images/service-milkrun.jpg",
      icon: "Route",
      features: [
        "Daily scheduled distribution to stores and dealers",
        "Multi-drop route planning to save fuel and time",
        "Experienced local delivery drivers",
        "Instant delivery confirmations and signed receipts"
      ],
      workflow: [
        { step: "01", title: "Dispatch Planning", desc: "Orders sorted and scheduled according to geographical delivery zones." },
        { step: "02", title: "Vehicle Loading", desc: "Loaded in sequence of delivery stops for fast, organized drop-offs." },
        { step: "03", title: "Route Delivery", desc: "On-time arrival at each shop, dealer, or business location." },
        { step: "04", title: "Receipt Confirmation", desc: "Signed delivery challan uploaded immediately for your records." }
      ]
    },
    {
      id: "reverse-logistics",
      title: "Reverse Logistics",
      shortDesc: "Efficient returns and recycling solutions.",
      fullDesc: "Effortlessly handle product returns, warranty replacements, customer exchanges, and empty container recycling. We inspect returned items and transport them safely back to your factory or facility.",
      image: "/assets/images/service-multimodal.jpg",
      icon: "RotateCcw",
      features: [
        "Smooth return pickup from customer or dealer locations",
        "Basic quality inspection and verification before pickup",
        "Safe return transit back to your central warehouse",
        "Repacking and recycling transport management"
      ],
      workflow: [
        { step: "01", title: "Return Request", desc: "Initiate return pickup with customer details and item description." },
        { step: "02", title: "Pickup & Inspection", desc: "Driver collects the item and verifies condition and serial numbers." },
        { step: "03", title: "Consolidated Return", desc: "Items grouped and transported back cost-effectively." },
        { step: "04", title: "Factory Handover", desc: "Items returned to your facility with complete documentation." }
      ]
    },
    {
      id: "over-dimensional-cargo",
      title: "Over Dimensional Cargo (ODC)",
      shortDesc: "Transportation for oversized and heavy cargo.",
      fullDesc: "Specialized transportation for super-heavy, tall, or wide industrial equipment, transformers, turbines, and construction machinery using heavy-duty multi-axle trailers and hydraulic pullers.",
      image: "/assets/images/ind-project-cargo.jpg",
      icon: "ShieldAlert",
      features: [
        "Multi-axle hydraulic trailers and low-bed carriers",
        "Route survey to check bridge clearances and road conditions",
        "Government permits and escort vehicles arranged",
        "Experienced crew specializing in heavy machinery lashings"
      ],
      workflow: [
        { step: "01", title: "Route Feasibility", desc: "We check road height clearances, sharp turns, and bridge weights." },
        { step: "02", title: "Heavy Loading & Lashing", desc: "Using cranes and certified steel lashings to secure oversized cargo." },
        { step: "03", title: "Escorted Highway Haul", desc: "Slow, steady convoy transport with pilot escort vehicles." },
        { step: "04", title: "Site Placement", desc: "Careful unloading and placement directly at project destination." }
      ]
    }
  ],

  // Industries We Serve — exactly 5
  industries: [
    {
      id: "manufacturing",
      title: "Manufacturing & Engineering",
      desc: "Timely delivery of raw materials, auto parts, and machinery to keep your factories running smoothly.",
      image: "/assets/images/ind-engineering.jpg",
      icon: "Factory"
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Retail",
      desc: "Fast hub-to-hub and store delivery services to ensure your products reach customers quickly.",
      image: "/assets/images/ind-ecommerce.jpg",
      icon: "ShoppingBag"
    },
    {
      id: "fmcg",
      title: "FMCG & Consumer Goods",
      desc: "Fast-paced transport to supermarkets and wholesale distributors to prevent any stockouts.",
      image: "/assets/images/ind-fmcg.jpg",
      icon: "Box"
    },
    {
      id: "industrial",
      title: "Industrial Materials",
      desc: "Safety-tested trucks with trained drivers for the secure transport of industrial raw materials and heavy goods.",
      image: "/assets/images/ind-chemical.jpg",
      icon: "Layers"
    },
    {
      id: "infrastructure",
      title: "Infrastructure & Heavy Projects",
      desc: "Specialized low-bed trailers for moving heavy construction gear, steel, and factory equipment to project sites.",
      image: "/assets/images/ind-project-cargo.jpg",
      icon: "ShieldAlert"
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      title: "Live 24/7 GPS Tracking",
      desc: "Know exactly where your shipment is at any moment with live tracking links shared directly to your WhatsApp or phone.",
      icon: "Navigation"
    },
    {
      title: "On-Time Delivery Guarantee",
      desc: "We respect your business deadlines. Our experienced drivers and standby fleet ensure on-schedule delivery.",
      icon: "CheckCircle2"
    },
    {
      title: "Safe & Damage-Free Cargo",
      desc: "All vehicles are clean, weatherproof, and equipped with quality lashing belts to protect your goods from any damage.",
      icon: "ShieldCheck"
    },
    {
      title: "Clear Pricing & Fast Billing",
      desc: "No hidden charges or surprise costs. Get transparent rates upfront and digital receipts right after delivery.",
      icon: "FileCheck"
    }
  ],

  // Footer Content
  footer: {
    aboutText: "Chrome Sai Express Service is a logistics service provider founded by industry veterans to transform road freight. Guided by our motto, \"DELIVERING FIRST,\" we combine advanced tracking technology, an extensive transportation network, and customized resources to make shipping seamless, efficient, and hassle-free.",
    quickLinks: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Industries", href: "#industries" },
      { name: "Instant Quote", href: "#quote" },
    ],
    copyright: `© ${new Date().getFullYear()} Chrome Sai Express Service. All rights reserved.`
  }
};
