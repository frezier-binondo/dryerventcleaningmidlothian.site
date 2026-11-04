export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  iconName: string;
  keyPoints: string[];
  fullContentHtml?: string;
  wordCountTarget?: number;
}

export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  city: string;
  county: string;
  zipCodes: string[];
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  distanceFromMidlothian: string;
  housingStats: string;
  neighborhoods: string[];
  keyHighlights: string[];
  overview: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  content: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const SITE_INFO = {
  name: "Dryer Vent Cleaning Midlothian",
  shortName: "Dryer Vent Pros Midlothian",
  phone: "+14693363767",
  phoneFormatted: "(469) 336-3767",
  email: "service@dryerventcleaningmidlothian.site",
  domain: "https://dryerventcleaningmidlothian.site",
  address: {
    street: "Midlothian Pkwy & US-287",
    city: "Midlothian",
    state: "TX",
    zip: "76065",
    full: "Midlothian, TX 76065, USA",
  },
  mapUrl: "https://maps.app.goo.gl/BGUB6xEEbukKPH1F9",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13466.866597285517!2d-96.9959519!3d32.488242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab77e9fd0ea2b8ad%3A0xad17d209db896c7d!2sSterling%20Dryer%20Vent%20Cleaning%20Midlothian!5e0!3m2!1sen!2sus!4v1714800000000!5m2!1sen!2sus",
  hours: "Mon - Sat: 7:00 AM - 7:00 PM | 24/7 Emergency Dispatch",
  rating: "4.9",
  reviewCount: "148",
  heroImage: "/images/hero-dryer-vent.jpg",
};

export const EXTERNAL_AUTHORITIES = [
  {
    name: "U.S. Fire Administration (FEMA)",
    url: "https://www.usfa.fema.gov/",
    anchor: "U.S. Fire Administration clothes dryer fire safety reports",
    description: "Official federal statistics on dryer fires, causes, and lint buildup prevention.",
  },
  {
    name: "Consumer Product Safety Commission (CPSC)",
    url: "https://www.cpsc.gov/",
    anchor: "CPSC clothes dryer safety guidelines",
    description: "National product safety alerts regarding flexible foil ducts and dryer exhaust maintenance.",
  },
  {
    name: "National Fire Protection Association (NFPA)",
    url: "https://www.nfpa.org/",
    anchor: "NFPA clothes dryer safety research & guidelines",
    description: "Industry fire prevention codes, inspection intervals, and home hazard assessments.",
  },
  {
    name: "U.S. Department of Energy",
    url: "https://www.energy.gov/",
    anchor: "Energy.gov clothes dryer efficiency and ducting tips",
    description: "Federal guidelines on appliance energy efficiency, static backpressure, and airflow restriction.",
  },
  {
    name: "City of Midlothian Texas",
    url: "https://www.midlothian.tx.us/",
    anchor: "City of Midlothian municipal and building safety department",
    description: "Official Midlothian building codes, mechanical vent standards, and Ellis County fire rescue resources.",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "dryer-vent-cleaning",
    slug: "dryer-vent-cleaning",
    name: "Residential Dryer Vent Cleaning",
    shortDescription: "Complete rotary brush scrubbing and high-velocity suction to clear packed lint, combustible debris, and restore 100% unrestricted exhaust airflow.",
    metaTitle: "Dryer Vent Cleaning Midlothian TX | Professional Lint Removal",
    metaDescription: "Professional dryer vent cleaning in Midlothian, TX. Clear dangerous lint buildup, cut drying time in half, and prevent dryer fires. Free quotes available.",
    heroImage: "/images/dryer-vent-cleaning.jpg",
    iconName: "Wind",
    keyPoints: [
      "Full-length rotary mechanical brushing from dryer to exterior vent termination",
      "High-CFM negative air vacuum extraction preventing lint backflow into your living space",
      "Pre and post airflow velocity & static pressure measurement",
      "Exterior hood louver inspection and magnetic damper calibration",
      "Compliant with NFPA 211 and CPSC safety standards",
    ],
    wordCountTarget: 1200,
  },
  {
    id: "dryer-vent-repair",
    slug: "dryer-vent-repair",
    name: "Dryer Vent Duct Repair & Resealing",
    shortDescription: "Fix crushed transition hoses, separated wall joints, kinked ductwork, and leaky seams to stop carbon monoxide, humidity, and heat from venting inside.",
    metaTitle: "Dryer Vent Repair Midlothian TX | Fix Crushed & Leaking Ducts",
    metaDescription: "Fast dryer vent repair in Midlothian, TX. We repair crushed ducts, disconnected seams, torn transition hoses, and faulty exterior hoods. Free estimates.",
    heroImage: "/images/dryer-vent-repair.jpg",
    iconName: "Wrench",
    keyPoints: [
      "Replacement of dangerous foil or vinyl flex hose with semi-rigid or rigid aluminum",
      "Precision foil tape mastic sealing of disconnected attic and crawlspace duct runs",
      "Elimination of moisture condensation rotting drywall and fostering mold",
      "Re-securing sagging ducts to ensure gravity-assisted lint flow without dips",
      "Damaged exterior vent damper and termination hood replacements",
    ],
    wordCountTarget: 1100,
  },
  {
    id: "dryer-vent-installation-rerouting",
    slug: "dryer-vent-installation-rerouting",
    name: "Dryer Vent Installation & Rerouting",
    shortDescription: "Custom engineering of shorter, straighter exhaust routes using heavy-gauge rigid metal pipe to meet modern Texas building codes and maximize dryer life.",
    metaTitle: "Dryer Vent Installation & Rerouting Midlothian TX",
    metaDescription: "Expert dryer vent installation and rerouting in Midlothian, TX. Shorter runs, heavy-gauge rigid metal pipe, roof and wall venting. Get a free quote.",
    heroImage: "/images/dryer-vent-installation.jpg",
    iconName: "Compass",
    keyPoints: [
      "Rerouting long runs through roofs or side walls to dramatically reduce backpressure",
      "Installation of smooth interior 4-inch rigid galvanized steel or aluminum ducts",
      "Elimination of excessive 90-degree elbows that trap heavy wet lint",
      "Complete penetrations through exterior brick, stone, or siding with weatherproof flashing",
      "Full adherence to International Residential Code (IRC) Section M1502 guidelines",
    ],
    wordCountTarget: 1150,
  },
  {
    id: "dryer-vent-inspection",
    slug: "dryer-vent-inspection",
    name: "Video Camera Dryer Vent Inspection",
    shortDescription: "High-definition diagnostic fiber-optic camera scope to pinpoint hidden obstructions, disconnected internal joints, fire hazards, and animal blockages.",
    metaTitle: "Dryer Vent Inspection Midlothian TX | Video Scope & Airflow Test",
    metaDescription: "Detailed dryer vent safety inspections in Midlothian, TX. High-definition camera scopes and digital anemometer airflow diagnostics for ultimate peace of mind.",
    heroImage: "/images/dryer-vent-inspection.jpg",
    iconName: "Search",
    keyPoints: [
      "HD digital borescope camera walkthrough inside enclosed walls and attic runs",
      "Accurate digital anemometer CFM velocity and backpressure readouts",
      "Thermal infrared imaging to detect hidden wall heat build-up around the duct",
      "Detailed written safety report with before/after documentation for insurance",
      "Recommended before buying or selling any Midlothian or Ellis County home",
    ],
    wordCountTarget: 1050,
  },
  {
    id: "commercial-dryer-vent-cleaning",
    slug: "commercial-dryer-vent-cleaning",
    name: "Commercial Dryer Vent Cleaning",
    shortDescription: "Heavy-duty exhaust duct maintenance for laundromats, hotels, senior living centers, athletic facilities, and apartment complexes across North Texas.",
    metaTitle: "Commercial Dryer Vent Cleaning Midlothian TX | Laundromats & Multi-Unit",
    metaDescription: "Commercial dryer vent cleaning in Midlothian, TX for laundromats, hotels, healthcare facilities, and multi-family units. Scheduled maintenance & bulk rates.",
    heroImage: "/images/commercial-dryer-vent-cleaning.jpg",
    iconName: "Building2",
    keyPoints: [
      "High-capacity commercial-grade rotary whip systems and industrial vacuums",
      "Flexible off-peak and weekend scheduling to avoid business interruption",
      "Comprehensive compliance reports for fire marshals and commercial insurance carriers",
      "Maintenance contracts with preferred recurring commercial rates",
      "Booster fan cleaning, lubrication, and pressure switch testing",
    ],
    wordCountTarget: 1100,
  },
  {
    id: "dryer-vent-lint-removal",
    slug: "dryer-vent-lint-removal",
    name: "Deep Dryer Vent Lint Removal",
    shortDescription: "Intensive multi-stage extraction of rock-hard, moisture-compacted lint plugs that choke exhaust velocity and turn your laundry room into an oven.",
    metaTitle: "Dryer Vent Lint Removal Midlothian TX | Deep Clog Extraction",
    metaDescription: "Deep lint removal services in Midlothian, TX. We eradicate stubborn, compacted lint plugs and restore clean, unrestricted airflow. Same-day service available.",
    heroImage: "/images/dryer-vent-unclogging.jpg",
    iconName: "Flame",
    keyPoints: [
      "Pneumatic air-snake nozzles and forward-thrusting reverse-air scour tools",
      "Internal dryer chassis blower housing and lint trap trapway vacuuming",
      "Removal of sticky fabric softener wax layers that cement lint to duct walls",
      "Immediate reduction in dryer cabinet operating temperatures by up to 45°F",
      "Prevents thermal fuse blowouts and burned heating elements",
    ],
    wordCountTarget: 1050,
  },
  {
    id: "bird-nest-pest-removal",
    slug: "bird-nest-pest-removal",
    name: "Bird Nest & Pest Guard Installation",
    shortDescription: "Safe removal of starlings, sparrows, wasps, and rodents nesting in exterior dryer exhausts, followed by heavy-duty wildlife-proof vent covers.",
    metaTitle: "Bird Nest in Dryer Vent Removal Midlothian TX | Pest Guards",
    metaDescription: "Humane bird nest removal from dryer vents in Midlothian, TX. Complete sanitation and installation of durable bird-proof vent covers. Call (469) 336-3767.",
    heroImage: "/images/dryer-vent-bird-nest-removal.jpg",
    iconName: "ShieldAlert",
    keyPoints: [
      "Extraction of straw, twigs, feathers, and biological nesting matter",
      "EPA-approved bacteriological sanitization and deodorization of the duct run",
      "Installation of powder-coated steel bird guards that prevent re-entry",
      "Ensures exterior dampers open freely on air pressure and seal shut against pests",
      "Eliminates foul odors, moisture traps, and dangerous indoor bug infestations",
    ],
    wordCountTarget: 950,
  },
  {
    id: "dryer-vent-airflow-testing",
    slug: "dryer-vent-airflow-testing",
    name: "Airflow Velocity & Static Backpressure Testing",
    shortDescription: "Scientific diagnostic testing using digital manometers and hot-wire anemometers to calculate exact CFM flow and verify safe exhaust backpressure.",
    metaTitle: "Dryer Vent Airflow Testing Midlothian TX | Pressure Diagnostics",
    metaDescription: "Accurate airflow velocity and static pressure diagnostics for dryer exhausts in Midlothian, TX. Identify hidden bottlenecks and ensure manufacturer compliance.",
    heroImage: "/images/duct-brush-close-up.jpg",
    iconName: "Activity",
    keyPoints: [
      "Precise velocity measurement in Feet Per Minute (FPM) at the outside hood",
      "Static water column backpressure check against manufacturer specifications (<0.6 in. w.c.)",
      "Diagnosis of booster fan performance in extended length runs exceeding 35 feet",
      "Identification of hidden internal kinks or collapsed flexible transition pipes",
      "Certified before-and-after proof of airflow restoration for homeowners",
    ],
    wordCountTarget: 950,
  },
  {
    id: "multi-family-apartment-dryer-vent-cleaning",
    slug: "multi-family-apartment-dryer-vent-cleaning",
    name: "Multi-Family & Apartment Vent Cleaning",
    shortDescription: "Turnkey lint mitigation and fire safety compliance programs for condominiums, townhome communities, HOAs, and apartment complexes in Ellis County.",
    metaTitle: "Apartment & Multi-Family Dryer Vent Cleaning Midlothian TX",
    metaDescription: "Multi-family and apartment dryer vent cleaning in Midlothian, TX. Keep tenants safe, reduce property fire liabilities, and cut utility costs. Free bulk bids.",
    heroImage: "/images/apartment-dryer-vent-cleaning.jpg",
    iconName: "Layers",
    keyPoints: [
      "Coordinated tenant scheduling and courteous, uniformed background-checked technicians",
      "Master compliance tracking spreadsheet provided directly to property managers",
      "High-angle ladder and rooftop exhaust termination clearance for 2-3 story complexes",
      "Substantial multi-unit volume discounts for property management groups",
      "Mitigates major insurance fire risk exposure across entire buildings",
    ],
    wordCountTarget: 1000,
  },
];

export const LOCATIONS_LIST: LocationItem[] = [
  {
    id: "midlothian-tx",
    slug: "midlothian-tx",
    name: "Midlothian, TX (Primary Service Hub)",
    city: "Midlothian",
    county: "Ellis County",
    zipCodes: ["76065"],
    heroImage: "/images/hero-dryer-vent.jpg",
    metaTitle: "Dryer Vent Cleaning Midlothian TX | Local Experts & Same-Day Service",
    metaDescription: "Top-rated dryer vent cleaning in Midlothian, TX. Fast local service in Lawson Farms, Brandi Ridge, Mountain Peak, McAlpin & all 76065 neighborhoods. Call today!",
    distanceFromMidlothian: "Local Headquarters (0 miles)",
    housingStats: "Growing master-planned communities, modern custom homes, and established rural ranch properties with complex multi-story vertical roof vent runs.",
    neighborhoods: [
      "Lawson Farms",
      "Brandi Ridge",
      "Mountain Peak",
      "McAlpin Manor",
      "Bluebonnet Ridge",
      "Heritage High Area",
      "Hawkins Run",
      "Sentara Ranch",
      "Klaas Ranch",
      "Skyline Estates",
    ],
    keyHighlights: [
      "Immediate local dispatch across all 76065 subdivisions",
      "Expertise with both single-story wall exhausts and 25ft+ vertical roof exhausts",
      "Ellis County building code and local fire prevention familiarity",
      "Same-day emergency response for overheated or smoking dryers",
      "5-star rated local service with 100% satisfaction guarantee",
    ],
    overview: "As Midlothian continues to experience rapid residential growth along US-287, FM 663, and FM 1387, many newly constructed and renovated homes feature second-floor laundry rooms or central interior utility spaces. These architectural layouts require lengthy dryer exhaust pipe runs that travel through attic trusses or exit directly through second-story roofs. Without routine cleaning, these extended duct paths collect dense lint, causing dryers to struggle with double drying cycles, spiking Texas summer electric bills, and creating severe fire risks for local families.",
  },
  {
    id: "waxahachie-tx",
    slug: "waxahachie-tx",
    name: "Waxahachie, TX",
    city: "Waxahachie",
    county: "Ellis County",
    zipCodes: ["75165", "75167"],
    heroImage: "/images/dryer-vent-replacement.jpg",
    metaTitle: "Dryer Vent Cleaning Waxahachie TX | Certified Vent Pros",
    metaDescription: "Professional dryer vent cleaning in Waxahachie, TX. Serving historic Gingerbread homes, North Grove, and Spring Creek. Cut drying times and prevent fires.",
    distanceFromMidlothian: "11 miles East via US-287",
    housingStats: "Blend of historic Victorian architecture with older narrow duct transitions alongside booming new developments like North Grove and Settlers Glen.",
    neighborhoods: [
      "North Grove",
      "Historic Downtown Gingerbread Trail",
      "Spring Creek",
      "Settlers Glen",
      "The Oaks",
      "Mustang Creek",
      "Highland Meadows",
      "Rockett",
    ],
    keyHighlights: [
      "Specialized retrofitting for older Waxahachie crawlspaces and historical homes",
      "Routine rooftop vent cleaning for North Grove master-planned communities",
      "Full clearing of clay-rich insect and bird blockages common along Lake Waxahachie",
      "Rapid dispatch via the US-287 corridor in under 20 minutes",
      "Affordable bundle pricing for whole-home dryer vent inspection and cleaning",
    ],
    overview: "Waxahachie homeowners benefit from comprehensive dryer vent care tailored to the unique mix of architectural styles across Ellis County. Historic homes often feature legacy flexible ducting that has developed pinhole leaks or sagged over decades, whereas newer subdivisions boast high-efficiency dryers that depend on unrestricted high-velocity air exhaust to function properly.",
  },
  {
    id: "red-oak-tx",
    slug: "red-oak-tx",
    name: "Red Oak, TX",
    city: "Red Oak",
    county: "Ellis County",
    zipCodes: ["75154"],
    heroImage: "/images/technician-cleaning-exterior-vent.jpg",
    metaTitle: "Dryer Vent Cleaning Red Oak TX | Lint Extraction & Repair",
    metaDescription: "Trusted dryer vent cleaning in Red Oak, TX. Fast scheduling, rotary brush cleaning, and airflow testing for Fox Hollow, Ovilla Road corridor & 75154.",
    distanceFromMidlothian: "10 miles Northeast via Ovilla Rd / TX-342",
    housingStats: "Rapidly expanding single-family communities with slab foundations and lengthy horizontal attic duct runs exiting rear eaves or rooftops.",
    neighborhoods: [
      "Fox Hollow",
      "Red Oak Ranch",
      "Wooded Creek",
      "Live Oak Community",
      "Ovilla Road Corridor",
      "Estates of North Grove border",
      "Harmony Bank area",
    ],
    keyHighlights: [
      "Deep rotary extraction of damp, stubborn lint plugs in long horizontal attic pipes",
      "Duct sealing to eliminate humid air leaking into attic insulation",
      "Prompt service for homes along I-35E and Ovilla Road",
      "Commercial dryer maintenance for local Red Oak auto shops and athletic facilities",
      "Transparent upfront flat-rate pricing with zero hidden fees",
    ],
    overview: "Red Oak's pleasant suburban layout and vibrant family neighborhoods mean laundry appliances run almost constantly. In humid North Texas summers, moisture trapped inside blocked dryer exhaust ducts creates a sticky paste that adheres to the duct walls, eventually causing the dryer's thermal safety limit switches to trip and leaving heavy towels wet after 60-minute cycles.",
  },
  {
    id: "ovilla-tx",
    slug: "ovilla-tx",
    name: "Ovilla, TX",
    city: "Ovilla",
    county: "Ellis & Dallas County",
    zipCodes: ["75154"],
    heroImage: "/images/rotary-brush-cleaning-duct.jpg",
    metaTitle: "Dryer Vent Cleaning Ovilla TX | Expert Vent Service & Guards",
    metaDescription: "Reliable dryer vent cleaning and bird guard installation in Ovilla, TX. Protect acreage homes, custom estates, and prevent dryer fire hazards. Free quotes.",
    distanceFromMidlothian: "6 miles Northeast via Ovilla Rd",
    housingStats: "Spacious custom single-family homes on acreage parcels, often featuring heavy masonry exteriors and long dryer vent duct distances to exterior walls.",
    neighborhoods: [
      "Ovilla Oaks",
      "Highland Springs",
      "Red Oak Creek Area",
      "Downtown Ovilla Historic District",
      "Mockingbird Lane Corridor",
      "Pecan Creek Estates",
    ],
    keyHighlights: [
      "Expert bird nest removal and heavy-duty steel guard installation on wooded acreage",
      "Comprehensive duct length measuring to verify code compliance on custom ranches",
      "Only 8 minutes from our Midlothian central staging area",
      "Friendly, clean technicians who wear protective shoe covers and floor runners",
      "Complete pre-and-post digital airflow velocity tests",
    ],
    overview: "Because Ovilla is celebrated for its peaceful country feel, mature oak trees, and expansive acreage lots, outdoor wildlife—specifically starlings, sparrows, and squirrels—frequently target warm dryer exhaust hoods to build nests during early spring and winter. Our specialized bird-proofing and rotary duct cleaning services keep Ovilla homes safe from severe exhaust blockages.",
  },
  {
    id: "cedar-hill-tx",
    slug: "cedar-hill-tx",
    name: "Cedar Hill, TX",
    city: "Cedar Hill",
    county: "Dallas & Ellis County",
    zipCodes: ["75104"],
    heroImage: "/images/dryer-vent-maintenance.jpg",
    metaTitle: "Dryer Vent Cleaning Cedar Hill TX | Airflow Restoration",
    metaDescription: "Professional dryer vent cleaning in Cedar Hill, TX. Serving Lake Ridge, Highlands, and Cedar Hill State Park vicinity. Eliminate lint clogs and cut energy bills.",
    distanceFromMidlothian: "9 miles North via US-67 N",
    housingStats: "Hilly topography with multi-level walkout basements, tall 2-story brick residences in Lake Ridge, and high-pitch roofs requiring specialized venting access.",
    neighborhoods: [
      "Lake Ridge",
      "Highlands of Cedar Hill",
      "Pleasant Run Farms",
      "Waterford Oaks",
      "Kingswood",
      "Cedar Crest",
      "Belk Corridor",
    ],
    keyHighlights: [
      "Specialized equipment for steep two-story and three-story roof exhaust terminations",
      "Thorough cleaning of luxury custom laundry suites in Lake Ridge",
      "Fast response along the US-67 and FM 1382 corridors",
      "Full video camera scope to verify clear passage through multi-level shafts",
      "100% clean guarantee with industrial containment vacuums",
    ],
    overview: "Cedar Hill's scenic rolling elevation and majestic custom homes often feature multi-level architectural designs where laundry rooms are positioned centrally on main floors or upper levels. These designs necessitate vertical vent pipes that travel through multiple ceilings to reach high roof caps, where thermal lift slows down and lint rapidly precipitates out of the exhaust air.",
  },
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: "7-warning-signs-dryer-vent-clogged",
    slug: "7-warning-signs-dryer-vent-clogged",
    title: "7 Danger Signs Your Dryer Vent Is Dangerously Clogged (And What To Do)",
    excerpt: "If your clothes take more than 45 minutes to dry or your laundry room feels like a sauna, your dryer exhaust is signaling a dangerous blockage. Learn the 7 crucial warning signs.",
    date: "November 2, 2026",
    readTime: "6 min read",
    author: "Midlothian Dryer Vent Safety Team",
    category: "Safety & Maintenance",
    image: "/images/severely-clogged-dryer-duct.jpg",
    metaTitle: "7 Warning Signs Your Dryer Vent Is Clogged | Midlothian TX Guide",
    metaDescription: "Discover the 7 unmistakable signs of a clogged dryer vent. Protect your Midlothian home from fire risks, reduce energy bills, and restore quick drying cycles.",
    tags: ["Dryer Vent Clog", "Fire Prevention", "Midlothian TX", "Home Safety"],
    content: [
      "Most Midlothian homeowners assume that clearing the mesh lint screen inside their dryer drum after each cycle is all the maintenance required to keep their appliance running smoothly. Unfortunately, this is a dangerous misconception. Independent tests by the U.S. Consumer Product Safety Commission (CPSC) reveal that standard lint screens trap only approximately 60% to 70% of the fibrous lint generated during a typical drying cycle. The remaining 30% to 40% enters the internal exhaust ductwork, where heat, humidity, and fabric softener residues cause it to stick to pipe walls.",
      "Over months and years, this accumulation builds up into a dense, highly flammable blanket that chokes off exhaust airflow. In North Texas communities like Midlothian, Waxahachie, and Red Oak, long duct runs with multiple turns are common in modern two-story homes, creating ideal conditions for stubborn blockages. Here are the 7 warning signs that your dryer vent urgently needs professional attention.",
      "1. Clothes Require Multiple Cycles to Dry: When hot, moisture-laden air cannot escape freely to the outside, it circulates back into the drum, leaving heavy items like jeans, bedding, and bath towels soggy after an entire 50-minute cycle.",
      "2. The Dryer Exterior and Laundry Room Feel Excessively Hot: If your dryer cabinet is scorching to the touch or entering your laundry room feels like stepping into a Texas greenhouse, exhaust heat is being trapped inside your home.",
      "3. A Persistent Musty or Burning Odor: Lint consists of microscopic cotton, polyester, and linen fibers that ignite at temperatures as low as 400°F. When trapped lint settles on heating elements or near gas burner assemblies, it produces an unmistakable acrid smell.",
      "4. The Exterior Vent Flap Fails to Open During Operation: Step outside while your dryer is running. The outdoor damper hood should blast warm, fragrant air with enough force to open its louvers at least 45 degrees. If the flaps are motionless or merely flutter faintly, airflow is compromised.",
      "5. Excessive Lint Accumulates Behind and Under the Appliance: A clogged exhaust duct causes backpressure that forces fuzzy lint out of seam joints and onto your laundry room baseboards.",
      "6. Your Electric or Gas Utility Bill Has Spiked Unexplained: Running double cycles on a modern 5,000-watt electric dryer consumes massive amounts of electricity, adding tens of dollars to your monthly utility bills.",
      "7. More Than One Year Has Passed Since Your Last Professional Cleaning: Leading fire prevention authorities, including the NFPA and FEMA, recommend professional inspection and rotary cleaning at least once every 12 months for active households.",
    ],
  },
  {
    id: "how-often-should-you-clean-dryer-vent",
    slug: "how-often-should-you-clean-dryer-vent",
    title: "How Often Should You Actually Clean Your Dryer Vent in North Texas?",
    excerpt: "Does your household need annual cleaning, or should you schedule service every 6 months? Discover the key variables that dictate your optimal dryer vent cleaning schedule.",
    date: "October 26, 2026",
    readTime: "5 min read",
    author: "Midlothian Dryer Vent Safety Team",
    category: "Homeowner Tips",
    image: "/images/dryer-vent-maintenance.jpg",
    metaTitle: "How Often to Clean Your Dryer Vent | Midlothian TX Guide",
    metaDescription: "Find out how frequently your dryer vent should be cleaned based on duct length, pet ownership, and laundry frequency in Midlothian, TX and Ellis County.",
    tags: ["Maintenance Schedule", "Energy Efficiency", "Ellis County TX"],
    content: [
      "The general rule of thumb endorsed by the National Fire Protection Association (NFPA) is to have residential dryer exhaust systems cleaned and inspected at least once per year. However, every household in Midlothian and surrounding Ellis County communities operates differently. For many homes, an annual cleaning is insufficient to prevent dangerous backpressure from developing.",
      "Key factors that accelerate lint accumulation in your exhaust system include: First, household size and laundry volume. Families with active children, student athletes, or multi-generational households often run 8 to 15 loads of laundry per week. More laundry directly translates into pounds of lint traveling through the ductwork.",
      "Second, pet ownership. Dogs and cats shed fur that binds together with textile lint, forming dense, felt-like plugs that quickly choke 4-inch exhaust pipes.",
      "Third, duct length and architectural configuration. In Midlothian neighborhoods like Lawson Farms or Brandi Ridge, many homes feature laundry rooms located on interior walls or second floors. These setups require exhaust ducts to navigate 20 to 35 feet through attics with multiple 90-degree elbows, creating pockets where velocity drops and lint drops out of suspension.",
      "Fourth, type of duct material. Homes that still utilize corrugated flexible foil or plastic vinyl transitions experience lint buildup up to four times faster than those equipped with smooth rigid aluminum or galvanized steel ducting.",
      "We recommend the following schedule: Single or two-person households with short direct wall vents should clean every 12 to 18 months; busy families of four or pet-owning households should clean annually; large families (5+ members) or homes with vertical roof exhaust terminations should inspect and clean every 6 to 9 months.",
    ],
  },
  {
    id: "dryer-vent-cleaning-cost-factors",
    slug: "dryer-vent-cleaning-cost-factors",
    title: "Dryer Vent Cleaning Cost: What Determines The Price in Midlothian, TX?",
    excerpt: "Understand what influences the cost of professional dryer vent cleaning—from duct length and roof access to bird nest extraction—and avoid cheap 'bait-and-switch' scams.",
    date: "October 18, 2026",
    readTime: "7 min read",
    author: "Midlothian Dryer Vent Safety Team",
    category: "Cost & Value",
    image: "/images/dryer-vent-repair.jpg",
    metaTitle: "Dryer Vent Cleaning Cost in Midlothian TX | Price Factors Explained",
    metaDescription: "Discover how much professional dryer vent cleaning costs in Midlothian, TX. Learn about pricing variables, roof access, and why budget offers often lead to hidden fees.",
    tags: ["Pricing", "Consumer Advice", "Transparency"],
    content: [
      "When shopping for dryer vent cleaning services in Midlothian or nearby cities like Waxahachie and Cedar Hill, homeowners encounter quotes ranging from suspiciously low $49 'promotions' to professional flat-rate services between $120 and $250. Understanding what goes into a legitimate, thorough cleaning will protect you from predatory bait-and-switch scams.",
      "Beware the '$49 Quick Clean' Trap: Companies advertising sub-$50 pricing rarely clean the entire duct. Typically, their technicians show up, push a small handheld brush into the first two feet behind the dryer, and then claim you have 'dangerous blockages' requiring an emergency upsell of $300 to $600. A true professional service includes full-length rotary brush scrubbing from the dryer collar all the way to the exterior exhaust hood, combined with high-CFM negative air vacuum extraction.",
      "Primary Factors That Influence Fair, Honest Pricing: 1. Duct Length and Route: A standard first-floor laundry room with an exhaust pipe running 5 feet straight through an exterior wall requires less labor and equipment than a 30-foot run traveling through an attic crawlspace.",
      "2. Location of Exterior Vent Termination: Ground-level wall vents are easily accessed, whereas steep two-story second-floor wall exits or rooftop terminations require specialized safety harnesses, ladders, and fall protection gear.",
      "3. Presence of Obstructions: If birds or rodents have packed your duct with sticks, mud, and nesting debris, technicians must safely clear the biological hazard, sanitize the line with EPA-approved antimicrobials, and install a heavy-gauge protective bird guard.",
      "4. Need for Repairs or Resealing: If inspection reveals torn transition hoses, disconnected attic joints, or hazardous plastic flex hose, professional resealing with aluminum foil mastic tape will be quoted transparently before any work begins.",
      "At Dryer Vent Cleaning Midlothian, we provide upfront, no-obligation pricing before any technician touches a tool in your home, guaranteeing zero surprises.",
    ],
  },
  {
    id: "why-dryer-lint-is-a-fire-hazard",
    slug: "why-dryer-lint-is-a-fire-hazard",
    title: "Why Dryer Lint Is One of the Top Fire Hazards in American Homes",
    excerpt: "Federal fire data confirms over 15,000 residential dryer fires occur each year. Understand the physics of lint combustion and how routine maintenance protects your family.",
    date: "October 10, 2026",
    readTime: "5 min read",
    author: "Midlothian Dryer Vent Safety Team",
    category: "Fire Safety",
    image: "/images/severely-clogged-dryer-duct.jpg",
    metaTitle: "Why Dryer Lint Is a Dangerous Fire Hazard | Midlothian TX Pros",
    metaDescription: "Learn why lint buildup is the leading cause of residential dryer fires. Real data from FEMA & NFPA, and how Midlothian homeowners can stay protected.",
    tags: ["Fire Hazard", "NFPA", "FEMA", "Home Protection"],
    content: [
      "According to reports published by the U.S. Fire Administration (USFA), clothes dryers are responsible for an estimated 2,900 residential building fires annually in the United States, causing approximately 5 deaths, 100 injuries, and more than $35 million in property loss. The leading factor contributing to the ignition of these fires (accounting for 34% of all incidents) is failure to clean and maintain the dryer exhaust duct.",
      "Why Is Dryer Lint So Flammable? Lint is composed of microscopic fibers shedding from cotton towels, shirts, synthetic fabrics, and linens. These fibers have an immense surface-area-to-mass ratio and are extremely dry. In survivalist camping circles, dryer lint is considered one of the most effective fire tinders because it catches spark instantaneously.",
      "How A Clog Triggers a Fire: Modern dryers generate internal temperatures between 125°F and 160°F. When exhaust airflow is restricted by a lint clog or crushed vent line, heat cannot disperse outside. The dryer's internal cabinet temperature can rapidly climb to over 300°F or 400°F.",
      "If the machine's high-limit safety thermostat fails—or if lint accumulation on the electric heating coils or gas burner tube catches a direct ember—the lint ignites. The dryer's powerful exhaust blower motor acts like a high-powered bellows, fanning the flames and sending fire roaring straight through the duct into your home's attic, subfloor, and drywall cavities.",
      "Annual professional vent cleaning removes 100% of combustible lint deposits, ensuring your dryer operates within safe temperature limits and eliminating this preventable catastrophic risk.",
    ],
  },
  {
    id: "rigid-vs-flexible-dryer-duct",
    slug: "rigid-vs-flexible-dryer-duct",
    title: "Rigid Metal vs. Flexible Dryer Ducts: Which Is Safer For Your Home?",
    excerpt: "Still using white plastic or foil accordion hoses behind your dryer? Learn why modern building codes ban these materials and why rigid aluminum is the gold standard.",
    date: "October 4, 2026",
    readTime: "6 min read",
    author: "Midlothian Dryer Vent Safety Team",
    category: "Installation & Code",
    image: "/images/dryer-vent-installation.jpg",
    metaTitle: "Rigid Metal vs Flexible Dryer Duct: Safety Guide | Midlothian TX",
    metaDescription: "Compare rigid metal vs semi-rigid and flexible foil dryer ducts. Discover what Texas and IRC residential codes require for maximum home safety and airflow.",
    tags: ["Duct Materials", "Building Code", "IRC M1502", "Appliance Safety"],
    content: [
      "When inspecting homes throughout Midlothian, Waxahachie, and Ovilla, our technicians frequently discover outdated or unsafe transition ducting connecting the back of the dryer to the wall inlet. In many older properties, homeowners are still utilizing corrugated white vinyl plastic or flimsy thin-foil accordion tubing.",
      "The Dangers of Foil and Plastic Flex Ducts: Flexible vinyl and foil accordion ducts are dangerous for three critical reasons. First, their internal corrugations create high friction and air turbulence, acting like miniature speed bumps that catch floating lint. Within months, the ridges fill with combustible lint blankets.",
      "Second, when a dryer is pushed back against the wall, flexible ducts easily crush, kink, or collapse, reducing the 4-inch cross-sectional area to less than 1 inch. This instantly chokes exhaust velocity.",
      "Third, in the event of an internal dryer fire, thin foil or plastic burns through in less than 30 seconds, discharging open flames and toxic carbon monoxide fumes directly into your laundry room.",
      "Why Rigid Metal Ducts Are the Code Standard: The International Residential Code (IRC Section M1502) and major appliance manufacturers specify that dryer exhaust ducts must be constructed of smooth-walled, rigid metal pipe (galvanized steel or aluminum) at least 0.0157 inches thick (28 to 30 gauge).",
      "Rigid metal pipes have ultra-slick interiors that minimize airflow resistance, carry lint all the way to the exterior termination, and can withstand high heat without puncturing. For the short transition run from the dryer to the wall collar (maximum 8 feet), semi-rigid aluminum ducting is acceptable, provided it is properly secured with stainless steel hose clamps rather than duct tape.",
    ],
  },
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "Safety & Fire Prevention",
    question: "How does a dirty dryer vent cause a house fire?",
    answer: "Lint is composed of micro-cotton and polyester fibers that ignite very easily at temperatures above 400°F. When exhaust airflow is restricted by a lint blockage or crushed pipe, the dryer cannot expel hot air, causing internal temperatures inside the cabinet to spike dramatically. If trapped lint touches the electric heating element or gas burner, it catches fire instantly. The dryer's internal exhaust fan acts like a bellows, pushing fire through the duct into your attic or wall cavities.",
  },
  {
    id: "faq-2",
    category: "Frequency & Signs",
    question: "How often should I have my dryer vent professionally cleaned in Midlothian?",
    answer: "Fire prevention organizations including the NFPA and FEMA advise having dryer vents professionally inspected and cleaned at least once every 12 months. If you have a large family doing daily laundry, long vertical roof vent runs (common in two-story Midlothian subdivisions), or own heavy-shedding pets, scheduling service every 6 to 9 months is strongly recommended.",
  },
  {
    id: "faq-3",
    category: "Drying Performance",
    question: "Why does my dryer take two or three cycles to dry a single load of clothes?",
    answer: "A single load of wet laundry holds between a half-gallon and a full gallon of water. If your 4-inch exhaust pipe is choked with packed lint, this evaporated moisture cannot escape to the outside. It remains trapped in the drum, condensing back onto your garments. Cleaning the vent restores full 100% airflow, reducing drying times back down to 35-45 minutes.",
  },
  {
    id: "faq-4",
    category: "Pricing & Quotes",
    question: "How much does dryer vent cleaning typically cost in the Midlothian area?",
    answer: "Standard residential dryer vent cleaning in Midlothian and Ellis County generally ranges from $99 to $189, depending on the overall length of the duct run, ease of access, and whether the exhaust terminates at ground level or on a steep two-story roof. We provide 100% free upfront estimates before performing any work.",
  },
  {
    id: "faq-5",
    category: "DIY vs. Professional",
    question: "Can I just clean my dryer vent myself with a cheap store-bought drill kit?",
    answer: "While hardware store DIY brush kits can reach the first few feet, they carry significant risks. Homeowners frequently disconnect duct seams inside walls or snap flexible drill rods inside long runs with elbows, turning a simple cleaning into an expensive drywall repair. Furthermore, DIY tools do not measure static backpressure or sanitize ducts. Professional rotary systems with negative air vacuum containment ensure the entire duct is cleared safely without blowing dust into your home.",
  },
  {
    id: "faq-6",
    category: "Process & Service",
    question: "What actually happens during a professional dryer vent cleaning appointment?",
    answer: "Our technicians inspect the transition hose, test initial exhaust airflow velocity using a digital anemometer, and connect a high-power HEPA-filtered vacuum collector. We then feed rotary mechanical brushes and high-pressure air whips through the entire line from the dryer collar to the exterior cap. We verify the exterior damper operates smoothly, clean the lint screen housing, and re-test airflow to provide tangible before-and-after proof of restored efficiency.",
  },
  {
    id: "faq-7",
    category: "Pests & Animals",
    question: "Do you remove bird nests and install protective wildlife guards on exterior vents?",
    answer: "Yes! In Midlothian and rural Ellis County acreage properties, birds and rodents frequently enter exterior dryer vents to build nests. We safely extract all nesting material, sanitize the ductwork with antimicrobial fogging to eliminate parasites and bacteria, and install heavy-duty powder-coated steel bird guards that prevent animals from ever returning.",
  },
  {
    id: "faq-8",
    category: "Building Codes",
    question: "What are the local building code requirements for dryer vents in Texas?",
    answer: "Under the International Residential Code (IRC M1502) adopted across Texas municipalities, dryer exhaust ducts must be constructed of smooth-walled 4-inch rigid metal pipe, supported every 4 to 12 feet, and must exhaust independently to the home's exterior (never into an attic, crawlspace, or chimney). The maximum allowed run length is generally 35 feet, with reductions of 5 feet for every 90-degree elbow installed.",
  },
  {
    id: "faq-9",
    category: "Energy Savings",
    question: "Will having my dryer vent cleaned lower my monthly electricity or gas bill?",
    answer: "Yes, significantly! When your dryer requires two cycles to dry clothes, it uses twice as much electricity or natural gas. Electric clothes dryers are among the most energy-intensive appliances in modern homes, drawing 3,000 to 5,000 watts per hour. Clearing the vent can save homeowners $15 to $30 every month on their utility bills.",
  },
  {
    id: "faq-10",
    category: "Commercial & Multi-Family",
    question: "Do you offer commercial dryer vent cleaning for laundromats and apartments?",
    answer: "Absolutely. We service commercial laundry facilities, boutique hotels, pet grooming salons, athletic clubs, and multi-family apartment communities throughout Midlothian, Waxahachie, and South DFW. We offer flexible scheduling, master compliance logs for property managers, and bulk volume rates.",
  },
];
