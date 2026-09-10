/**
 * ==============================================================================
 * SINGLE SOURCE OF TRUTH (CONFIG) FOR THE ENTIRE WEBSITE
 * ==============================================================================
 * All images are stored locally in /assets/images/
 * Plain, simple English copy so anyone immediately understands the offerings.
 * ==============================================================================
 */

export const siteConfig = {
  // Brand Identity
  company: {
    name: "Apex Logistics & Supply Chain",
    shortName: "Apex Logistics",
    legalName: "Apex Logistics Solutions Pvt Ltd",
    tagline: "Reliable Logistics & Transportation Services",
    slogan: "We provide fast, secure, and affordable freight transport, warehousing, and cold storage solutions across India.",
    badgeText: "Trusted Pan-India Transport Partner",
    establishedYear: 2021,
    
    // Logo configuration
    logo: {
      type: "text", 
      textPrimary: "APEX",
      textSecondary: "LOGISTICS",
      imageSrc: "/assets/images/logo.png",
      alt: "Apex Logistics Logo",
    }
  },

  // Contact Channels
  contact: {
    phone: "+91 94421 88000",
    phoneRaw: "+919442188000",
    email: "contact@apexlogistics.in",
    salesEmail: "booking@apexlogistics.in",
    supportEmail: "support@apexlogistics.in",
    address: "Logistics Hub, Airport Expressway, Coimbatore, Tamil Nadu 641014, India",
    city: "Coimbatore",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=Coimbatore+Airport",
    whatsappNumber: "+91 94421 88000",
    whatsappLink: "https://wa.me/919442188000?text=Hello%20Apex%20Logistics%2C%20I%20want%20to%20book%20a%20truck%20or%20get%20a%20quote.",
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

  // Hero Carousel Slides (All Services with clean local assets)
  heroSlides: [
    {
      id: "full-truck-load",
      title: "Full Truck Load (FTL)",
      subtitle: "Dedicated trucks exclusively for your bulk shipments with direct, non-stop transit.",
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
      id: "warehousing",
      title: "Warehousing",
      subtitle: "Safe storage and inventory management solutions with 24/7 CCTV and computer tracking.",
      image: "/assets/images/service-3pl.jpg",
      tag: "Safe Storage",
      ctaText: "View Warehouses",
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
      id: "cold-storage-transportation",
      title: "Cold Storage-Transportation",
      subtitle: "Specialized refrigerated transport for temperature-sensitive food and pharmaceuticals.",
      image: "/assets/images/ind-pharma.jpg",
      tag: "Reefer Fleet",
      ctaText: "Book Cold Transit",
    },
    {
      id: "cold-storage-warehousing",
      title: "Cold Storage-Warehousing",
      subtitle: "Temperature-controlled multi-chamber storage for perishable and frozen goods.",
      image: "/assets/images/hero-warehouse.jpg",
      tag: "Cold Warehousing",
      ctaText: "Cold Storage Space",
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
      icon: "Infinity",
      value: "100%",
      label: "Safe Delivery",
      subtext: "Insured & Tracked Shipments"
    },
    {
      icon: "Users",
      value: "500+",
      label: "Happy Clients",
      subtext: "Businesses Across India"
    },
    {
      icon: "MapPin",
      value: "Pan India",
      label: "Network Reach",
      subtext: "All States & Cities Covered"
    },
    {
      icon: "Headphones",
      value: "24/7",
      label: "Live Support",
      subtext: "Call Us Anytime"
    }
  ],

  // Core Logistics Services
  services: [
    {
      id: "full-truck-load",
      title: "Full Truck Load (FTL)",
      shortDesc: "Dedicated trucks for your bulk shipments.",
      fullDesc: "Get an entire truck reserved exclusively for your goods. Ideal for large consignments, factory dispatches, and bulk orders with direct pickup and direct delivery without stops.",
      image: "/assets/images/service-ftl.jpg",
      icon: "Truck",
      features: [
        "Dedicated truck exclusively for your goods",
        "Direct point-to-point delivery with no unloading on way",
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
      fullDesc: "Only have a few pallets or boxes? Don't pay for an entire truck. With our Partial Truck Load (PTL) service, you share truck space with other shippers and only pay for the exact volume or weight you use.",
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
      id: "warehousing",
      title: "Warehousing",
      shortDesc: "Safe storage and inventory management solutions.",
      fullDesc: "Store your commercial goods safely in our modern, well-maintained warehouses. We provide pallet racking, computerized inventory records, CCTV security, and easy stock dispatch whenever you need it.",
      image: "/assets/images/service-3pl.jpg",
      icon: "Warehouse",
      features: [
        "Clean, dry, and fire-safe storage space",
        "24/7 CCTV surveillance and security guards",
        "Computerized stock management & barcode tracking",
        "Flexible short-term and long-term rental options"
      ],
      workflow: [
        { step: "01", title: "Goods Receiving", desc: "Careful unloading, counting, and quality checking upon arrival." },
        { step: "02", title: "Safe Placement", desc: "Items stored securely on pallet racks with assigned bin numbers." },
        { step: "03", title: "Inventory Report", desc: "Real-time stock reports provided so you always know what you have." },
        { step: "04", title: "Fast Dispatch", desc: "Instant order picking and loading whenever you need goods shipped out." }
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
      id: "cold-storage-transportation",
      title: "Cold Storage-Transportation",
      shortDesc: "Specialized transport for temperature-sensitive goods.",
      fullDesc: "Refrigerated and temperature-controlled trucks (reefers) designed to keep dairy products, pharmaceuticals, fresh fruits, vegetables, and frozen items in perfect condition throughout the trip.",
      image: "/assets/images/ind-pharma.jpg",
      icon: "ThermometerSnowflake",
      features: [
        "Refrigerated reefer containers (-25°C to +25°C)",
        "Continuous digital temperature monitoring and logging",
        "Pre-cooled containers before loading",
        "Backup cooling units for 100% reliability"
      ],
      workflow: [
        { step: "01", title: "Pre-Cooling", desc: "Vehicle chamber pre-cooled to your required temperature setting." },
        { step: "02", title: "Cold Loading", desc: "Quick dock transfer to prevent temperature fluctuations." },
        { step: "03", title: "Monitored Journey", desc: "Real-time temperature telemetry tracked throughout the highway route." },
        { step: "04", title: "Temp-Verified Handover", desc: "Delivery completed with temperature log printout for full assurance." }
      ]
    },
    {
      id: "cold-storage-warehousing",
      title: "Cold Storage-Warehousing",
      shortDesc: "Temperature-controlled storage for perishable goods.",
      fullDesc: "Dedicated cold storage facilities with humidity and temperature controls. Perfect for preserving seasonal crops, dairy, frozen foods, and medical supplies with zero spoilage.",
      image: "/assets/images/hero-warehouse.jpg",
      icon: "Snowflake",
      features: [
        "Multi-temperature chambers (Chilled, Frozen, Ambient)",
        "Uninterrupted 24/7 power backup with dual generators",
        "Strict hygiene and food-grade safety standards",
        "FIFO (First-In, First-Out) inventory rotation"
      ],
      workflow: [
        { step: "01", title: "Temperature Check In", desc: "Product core temperature checked upon arrival at unloading dock." },
        { step: "02", title: "Chamber Storage", desc: "Stored in dedicated temperature-controlled room based on product specs." },
        { step: "03", title: "Daily Temp Audit", desc: "Automated alerts if any chamber temperature shifts by even 1 degree." },
        { step: "04", title: "Chilled Outbound", desc: "Loaded directly into refrigerated trucks for onward journey." }
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

  // Industries We Serve
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
      id: "chemical",
      title: "Chemicals & Industrial Materials",
      desc: "Safety-tested trucks with trained drivers for safe transport of industrial chemicals.",
      image: "/assets/images/ind-chemical.jpg",
      icon: "FlaskConical"
    },
    {
      id: "pharma",
      title: "Pharmaceuticals & Healthcare",
      desc: "Temperature-monitored refrigerated vehicles for safe transport of medicines and vaccines.",
      image: "/assets/images/ind-pharma.jpg",
      icon: "HeartPulse"
    },
    {
      id: "project_cargo",
      title: "Infrastructure & Heavy Projects",
      desc: "Specialized low-bed trailers for moving heavy construction gear and factory equipment.",
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
    aboutText: "Apex Logistics provides reliable Full Truck Load, Partial Load, Warehousing, Distribution, Cold Chain, and Heavy Cargo transport services across all states in India.",
    quickLinks: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Industries", href: "#industries" },
      { name: "Instant Quote", href: "#quote" },
      { name: "Terms & Conditions", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
    ],
    copyright: `© ${new Date().getFullYear()} Apex Logistics Solutions Pvt Ltd. All rights reserved.`
  }
};
