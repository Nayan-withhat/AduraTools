export interface Category {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: string;
  colorBlock: 'block-lime' | 'block-lilac' | 'block-cream' | 'block-mint' | 'block-coral' | 'block-pink' | 'block-navy';
  badgeBg: string;
  toolCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'developer',
    slug: 'developer-tools',
    name: 'Developer Tools',
    shortName: 'Developer',
    description: 'Format, encode, validate, inspect, and debug code and data payloads.',
    longDescription: 'A comprehensive suite of browser-based utilities for software engineers, frontend developers, and API architects. Validate JSON, inspect JWTs, test regular expressions, and generate cryptographic hashes with zero server latency.',
    icon: 'code',
    colorBlock: 'block-coral',
    badgeBg: '#f3c9b6',
    toolCount: 10,
  },
  {
    id: 'text',
    slug: 'text-tools',
    name: 'Text & Writing Tools',
    shortName: 'Text',
    description: 'Analyze, transform, clean, compare, and convert text instantly.',
    longDescription: 'Powerful text manipulation tools for writers, editors, students, and content creators. Calculate accurate reading times, convert case formats, clean duplicate lines, and compare text diffs in real-time.',
    icon: 'type',
    colorBlock: 'block-lime',
    badgeBg: '#dceeb1',
    toolCount: 8,
  },
  {
    id: 'calculators',
    slug: 'calculators-math',
    name: 'Calculators & Math',
    shortName: 'Calculators',
    description: 'Finance, percentages, health metrics, and compound interest calculations.',
    longDescription: 'Fast, reliable mathematical and financial calculators. Determine exact percentage differences, compound interest projections, mortgage amortization schedules, and health metrics like BMI.',
    icon: 'calculator',
    colorBlock: 'block-mint',
    badgeBg: '#c8e6cd',
    toolCount: 5,
  },
  {
    id: 'converters',
    slug: 'unit-converters',
    name: 'Unit & Color Converters',
    shortName: 'Converters',
    description: 'Convert units of measurement, color formats, and number bases.',
    longDescription: 'Universal converters for physical units, digital storage, color palettes (HEX, RGB, HSL, CMYK), and numerical bases (Binary, Decimal, Hexadecimal) with precision calculations.',
    icon: 'refresh',
    colorBlock: 'block-lilac',
    badgeBg: '#c5b0f4',
    toolCount: 3,
  },
  {
    id: 'image',
    slug: 'image-tools',
    name: 'Image & Media Tools',
    shortName: 'Image',
    description: 'Compress, resize, crop, and convert image files in-browser.',
    longDescription: 'Privacy-focused image processing right in your browser memory. Optimize PNGs, JPEGs, and WebPs without uploading private files or compromising image quality.',
    icon: 'image',
    colorBlock: 'block-cream',
    badgeBg: '#f4ecd6',
    toolCount: 3,
  },
  {
    id: 'seo',
    slug: 'seo-web-tools',
    name: 'SEO & Web Tools',
    shortName: 'SEO & Web',
    description: 'Generate meta tags, preview Google SERPs, and build robots.txt rules.',
    longDescription: 'Essential search engine optimization and webmaster utilities. Preview how your site appears on Google, Twitter, and Facebook, and generate compliant robots.txt files.',
    icon: 'search',
    colorBlock: 'block-pink',
    badgeBg: '#efd4d4',
    toolCount: 3,
  },
  {
    id: 'security',
    slug: 'security-privacy',
    name: 'Security & Privacy',
    shortName: 'Security',
    description: 'Generate cryptographic passwords, custom QR codes, and hash tokens.',
    longDescription: 'Client-side cryptographic generators for high-entropy passwords, customizable QR codes, and integrity checksums with zero network footprint.',
    icon: 'shield',
    colorBlock: 'block-navy',
    badgeBg: '#1f1d3d',
    toolCount: 2,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
