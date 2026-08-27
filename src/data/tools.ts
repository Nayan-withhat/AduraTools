export interface ToolItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  icon: string;
  tags: string[];
  features: string[];
  howToSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  sampleInput?: string;
  badge?: string;
  isPopular?: boolean;
  relatedSlugs?: string[];
}

export const TOOLS: ToolItem[] = [
  // Developer Tools
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    name: 'JSON Formatter & Validator',
    shortDescription: 'Beautify, validate, fix, and minify JSON data with instant error highlighting.',
    longDescription: 'A lightning-fast in-browser JSON formatter, validator, and minifier. Fix syntax errors, validate against JSON standards, inspect depth, format with 2 or 4 spaces, and copy with one click.',
    category: 'developer',
    icon: 'code-xml',
    tags: ['json', 'formatter', 'beautifier', 'validator', 'minify', 'developer', 'parser'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: '{"site":"AduraTools","domain":"aduratools.site","tools":34,"features":["fast","free","private"],"config":{"secure":true,"offline":true}}',
    features: [
      'Format with 2 spaces, 4 spaces, or tab indentation',
      'Minify / compact JSON for network payloads',
      'Precise line-and-column syntax error highlighter',
      'Key count, byte size, and depth inspector',
      '100% client-side execution — zero server uploads'
    ],
    howToSteps: [
      { title: 'Paste your JSON', desc: 'Paste raw, minified, or unformatted JSON into the input editor, or click "Load Sample".' },
      { title: 'Choose formatting option', desc: 'Click "Format (2 Spaces)" for standard readable indenting or "Minify" to strip whitespace.' },
      { title: 'Inspect or copy output', desc: 'View live key and size stats, check error badges if invalid, and click "Copy" to save.' }
    ],
    faqs: [
      { question: 'Is my JSON data stored on your server?', answer: 'No. All parsing and formatting happens directly in your browser using JavaScript V8 JSON parser. No network requests are dispatched.' },
      { question: 'What is the maximum JSON file size supported?', answer: 'Because it runs entirely in your browser memory, it easily handles multi-megabyte JSON payloads up to 50MB without lag.' }
    ],
    relatedSlugs: ['jwt-decoder', 'base64-encoder', 'css-js-minifier', 'text-diff']
  },
  {
    id: 'base64-encoder',
    slug: 'base64-encoder',
    name: 'Base64 Encoder & Decoder',
    shortDescription: 'Encode and decode plain text, UTF-8 strings, and binary data to/from Base64.',
    longDescription: 'Easily convert ASCII and Unicode strings to Base64 format and decode Base64 strings back to readable text. Supports URL-safe character escaping and full emoji UTF-8 decoding.',
    category: 'developer',
    icon: 'binary',
    tags: ['base64', 'encode', 'decode', 'utf-8', 'binary', 'url-safe'],
    isPopular: true,
    sampleInput: 'AduraTools — Privacy-First Web Utilities',
    features: [
      'Bidirectional Encode / Decode modes',
      'UTF-8 and Unicode emoji-safe conversion',
      'Standard and URL-Safe Base64 variants',
      'Live character and byte counter'
    ],
    howToSteps: [
      { title: 'Select mode', desc: 'Choose "Encode" to convert plain text to Base64 or "Decode" to extract original text.' },
      { title: 'Enter your content', desc: 'Type or paste your text in the input box.' },
      { title: 'Copy converted output', desc: 'Click the "Copy" button to instantly copy the result to your clipboard.' }
    ],
    faqs: [
      { question: 'Does this handle multi-byte Unicode and emojis?', answer: 'Yes! Unlike standard atob/btoa functions which fail on Unicode characters, AduraTools uses a UTF-8 TextEncoder/TextDecoder pipeline.' }
    ],
    relatedSlugs: ['url-encoder', 'jwt-decoder', 'html-entity-encoder', 'hash-generator']
  },
  {
    id: 'jwt-decoder',
    slug: 'jwt-decoder',
    name: 'JWT Decoder & Claims Inspector',
    shortDescription: 'Decode JSON Web Tokens and inspect Header, Payload, and expiration dates securely.',
    longDescription: 'Safely inspect and decode JWT tokens in your browser. Read claims, check issued at (iat) and expiry (exp) timestamps, and inspect token algorithms without sending secret tokens to third parties.',
    category: 'developer',
    icon: 'jwt',
    tags: ['jwt', 'token', 'decode', 'oauth', 'auth', 'security'],
    sampleInput: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkdXJhIFVzZXIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3Mzg4OTAwMDAsImV4cCI6MTc3MDQyNjAwMH0.dummy_signature_aduratools',
    features: [
      'Color-coded Header, Payload, and Signature breakdown',
      'Automatic Unix timestamp converter for exp/nbf/iat',
      'Token validity and expiration status badge',
      '100% private in-browser analysis'
    ],
    howToSteps: [
      { title: 'Paste your JWT', desc: 'Paste your dot-separated token into the input area.' },
      { title: 'Inspect decoded claims', desc: 'Review the formatted JSON for Header, Claims, and expiry indicators.' },
      { title: 'Copy payload', desc: 'Copy formatted payload claims directly to your clipboard.' }
    ],
    faqs: [
      { question: 'Does AduraTools store my JWT?', answer: 'Never. Decoding happens client-side without sending tokens to any remote server.' }
    ],
    relatedSlugs: ['json-formatter', 'base64-encoder', 'timestamp-converter']
  },
  {
    id: 'url-encoder',
    slug: 'url-encoder',
    name: 'URL Encoder & Decoder',
    shortDescription: 'Encode and decode URLs and query parameters for HTTP queries.',
    longDescription: 'Encode special characters into RFC 3986 percent-encoded URI strings and decode encoded URLs back to human-readable format.',
    category: 'developer',
    icon: 'slug',
    tags: ['url', 'uri', 'encode', 'decode', 'query', 'percent-encoding'],
    sampleInput: 'https://aduratools.site/search?q=free tools&category=developer/tools#section-1',
    features: [
      'Full encodeURIComponent / decodeURIComponent options',
      'Handles full query strings and component fragments',
      'Instant real-time output synchronization'
    ],
    howToSteps: [
      { title: 'Paste your URL or string', desc: 'Enter the text you need to encode or decode.' },
      { title: 'Choose Encode or Decode', desc: 'Click the corresponding action button.' },
      { title: 'Copy result', desc: 'Use the one-click copy button.' }
    ],
    faqs: [
      { question: 'What is URL percent encoding?', answer: 'It converts reserved characters (like spaces, &, =, ?, #) into hexadecimal codes starting with % so URLs can be transmitted safely over HTTP.' }
    ],
    relatedSlugs: ['base64-encoder', 'html-entity-encoder', 'slug-generator']
  },
  {
    id: 'regex-tester',
    slug: 'regex-tester',
    name: 'Regular Expression Tester',
    shortDescription: 'Test and debug JavaScript RegEx patterns with real-time match highlighting and presets.',
    longDescription: 'Interactive regular expression testing workbench. Test custom patterns against sample text, toggle flags (g, i, m), view capture groups, and choose from curated preset patterns for emails, URLs, dates, and IP addresses.',
    category: 'developer',
    icon: 'regex',
    tags: ['regex', 'regular-expression', 'tester', 'debugger', 'match', 'pattern'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: 'Contact hello@aduratools.site or support@example.com for help. Call +1-800-555-0199 or visit https://aduratools.site',
    features: [
      'Real-time match highlighting with instant count badge',
      'Interactive flag switches (global, case-insensitive, multiline)',
      'Pre-loaded patterns for Email, URL, IP, Dates, and Phones',
      'Match list and capture groups inspector'
    ],
    howToSteps: [
      { title: 'Enter pattern', desc: 'Type your regular expression inside the pattern field.' },
      { title: 'Select flags', desc: 'Toggle global (g), case-insensitive (i), or multiline (m) flags.' },
      { title: 'Inspect highlights', desc: 'View live highlighted matches in the test text area.' }
    ],
    faqs: [
      { question: 'Which RegEx engine is used?', answer: 'AduraTools uses the standard ECMAScript JavaScript RegExp engine built directly into your browser.' }
    ],
    relatedSlugs: ['text-diff', 'word-counter', 'duplicate-remover']
  },
  {
    id: 'html-entity-encoder',
    slug: 'html-entity-encoder',
    name: 'HTML Entity Encoder & Decoder',
    shortDescription: 'Convert special characters to HTML entities like &amp;, &lt;, &gt;, and &quot;.',
    longDescription: 'Safely escape characters for HTML source code insertion and decode HTML entities back to readable text format.',
    category: 'developer',
    icon: 'code',
    tags: ['html', 'entities', 'encode', 'escape', 'decode', 'xml'],
    sampleInput: '<div class="alert font-bold">AduraTools & "Speed" > Competitors!</div>',
    features: ['HTML character escaping', 'Entity decoding', 'Real-time conversion'],
    howToSteps: [
      { title: 'Paste text', desc: 'Input your raw string or HTML snippet.' },
      { title: 'Toggle mode', desc: 'Select Encode to escape special characters or Decode to unescape.' },
      { title: 'Copy output', desc: 'Copy the escaped HTML entity string.' }
    ],
    faqs: [{ question: 'Why escape HTML entities?', answer: 'Escaping prevents cross-site scripting (XSS) and ensures browser parsers render literal code symbols rather than HTML elements.' }],
    relatedSlugs: ['url-encoder', 'base64-encoder']
  },
  {
    id: 'hash-generator',
    slug: 'hash-generator',
    name: 'Cryptographic Hash Generator',
    shortDescription: 'Compute SHA-256, SHA-512, SHA-1, and MD5 hashes using Web Crypto.',
    longDescription: 'Generate secure cryptographic checksums and hashes for text strings using the browser native Web Crypto API. Fast, deterministic, and client-side.',
    category: 'developer',
    icon: 'hash',
    tags: ['hash', 'crypto', 'sha256', 'sha512', 'sha1', 'checksum', 'security'],
    sampleInput: 'AduraTools 2026',
    features: ['SHA-256, SHA-512, SHA-1 support', 'Web Crypto native speed', 'Instant multi-hash output'],
    howToSteps: [
      { title: 'Input string', desc: 'Enter any text, key, or phrase into the input field.' },
      { title: 'View hashes', desc: 'All cryptographic algorithms calculate simultaneously.' },
      { title: 'Copy hash', desc: 'Click to copy your required checksum format.' }
    ],
    faqs: [{ question: 'Are these hashes cryptographically secure?', answer: 'Yes, SHA-256 and SHA-512 are calculated via window.crypto.subtle.digest using industry standard cryptographic implementations.' }],
    relatedSlugs: ['password-generator', 'uuid-generator', 'base64-encoder']
  },
  {
    id: 'uuid-generator',
    slug: 'uuid-generator',
    name: 'UUID / GUID Generator',
    shortDescription: 'Generate bulk Version 4 UUIDs (Universally Unique Identifiers) instantly.',
    longDescription: 'Generate random cryptographic UUID v4 strings for database keys, distributed systems, API mocks, and sessions.',
    category: 'developer',
    icon: 'uuid',
    tags: ['uuid', 'guid', 'v4', 'random', 'generator', 'database'],
    sampleInput: '',
    features: ['Cryptographically secure UUID v4', 'Batch generate multiple IDs', 'Uppercase/lowercase formatting'],
    howToSteps: [
      { title: 'Click Generate', desc: 'Hit the Generate button to create fresh unique IDs.' },
      { title: 'Select format', desc: 'Choose casing preference or hyphens.' },
      { title: 'Copy IDs', desc: 'Copy single or all generated UUIDs.' }
    ],
    faqs: [{ question: 'How unique are UUID v4 identifiers?', answer: 'UUID v4 provides 122 bits of randomness. The probability of generating a duplicate is virtually zero.' }],
    relatedSlugs: ['password-generator', 'hash-generator']
  },
  {
    id: 'timestamp-converter',
    slug: 'timestamp-converter',
    name: 'Unix Timestamp Converter',
    shortDescription: 'Convert Unix epoch timestamps (seconds & milliseconds) to human-readable dates and UTC.',
    longDescription: 'Convert epoch seconds or milliseconds into ISO 8601, UTC, and local date formats, or convert human dates back to Unix timestamps.',
    category: 'developer',
    icon: 'timestamp',
    tags: ['timestamp', 'unix', 'epoch', 'date', 'time', 'iso8601'],
    sampleInput: '1738890000',
    features: ['Unix seconds & milliseconds support', 'Local, UTC, and ISO date formatting', 'Current live timestamp clock'],
    howToSteps: [
      { title: 'Enter timestamp or date', desc: 'Paste a numerical timestamp or select a calendar date.' },
      { title: 'View all formats', desc: 'See immediate conversion into ISO 8601, UTC, and human-readable time.' },
      { title: 'Copy timestamp', desc: 'Copy the required format with one click.' }
    ],
    faqs: [{ question: 'What is Unix Epoch time?', answer: 'It is the number of seconds that have elapsed since January 1, 1970 00:00:00 UTC.' }],
    relatedSlugs: ['jwt-decoder', 'age-calculator']
  },
  {
    id: 'css-js-minifier',
    slug: 'css-js-minifier',
    name: 'CSS & JavaScript Minifier',
    shortDescription: 'Strip comments and compress CSS stylesheets and JS scripts for production.',
    longDescription: 'Reduce CSS and JavaScript file sizes by stripping whitespace, empty lines, and block comments in your browser.',
    category: 'developer',
    icon: 'minifier',
    tags: ['minifier', 'css', 'javascript', 'compress', 'optimize'],
    sampleInput: '/* Main header */\n.header {\n  display: flex;\n  align-items: center;\n  padding: 16px 24px;\n  background-color: #ffffff;\n}',
    features: ['Strips comments and unnecessary whitespace', 'Instant compression ratio percentage', 'Zero dependencies'],
    howToSteps: [
      { title: 'Paste CSS or JS', desc: 'Paste uncompressed code into the input area.' },
      { title: 'Click Minify', desc: 'Instantly strip comments and whitespace.' },
      { title: 'Copy optimized code', desc: 'Copy the minified payload.' }
    ],
    faqs: [{ question: 'Does this change my code logic?', answer: 'No, it only removes non-functional whitespace, newlines, and code comments.' }],
    relatedSlugs: ['json-formatter', 'text-diff']
  },

  // Text & Writing Tools
  {
    id: 'word-counter',
    slug: 'word-counter',
    name: 'Word & Character Counter',
    shortDescription: 'Real-time word, character, sentence, paragraph counts, and reading time analyzer.',
    longDescription: 'A comprehensive editorial text analysis tool. Track word count, character count (with and without spaces), sentence count, paragraph count, estimated reading time, speaking time, and top keyword density.',
    category: 'text',
    icon: 'file-text',
    tags: ['word-counter', 'character-counter', 'reading-time', 'text-analyzer', 'seo-writing'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: 'AduraTools is a modern online tools platform that provides fast, free, and easy-to-use tools for text, developer utilities, calculators, converters, image processing, and SEO utilities.\n\nEvery tool is built with a focus on speed, privacy, and delightful user experience. No logins, no tracking, and 100% in-browser processing.',
    features: [
      'Instant live counts for words, characters, sentences, and paragraphs',
      'Calculates accurate silent reading time and speech duration',
      'Analyzes top keyword frequencies and word density',
      'Average word length and reading level metrics'
    ],
    howToSteps: [
      { title: 'Paste or type text', desc: 'Enter your copy into the clean writing pane.' },
      { title: 'Review live metrics', desc: 'Inspect live stat cards for word count, characters, sentences, and reading duration.' },
      { title: 'Check keyword density', desc: 'View frequent terms to optimize article readability and SEO.' }
    ],
    faqs: [
      { question: 'How is reading time calculated?', answer: 'Reading time is calculated using the standard cognitive average of 200 words per minute for adult reading speed.' }
    ],
    relatedSlugs: ['case-converter', 'text-diff', 'whitespace-remover']
  },
  {
    id: 'case-converter',
    slug: 'case-converter',
    name: 'Case Converter',
    shortDescription: 'Convert text between uppercase, lowercase, title case, camelCase, snake_case, and kebab-case.',
    longDescription: 'Quickly transform text casing for programming variables, editorial headlines, social captions, and documentation across 10 distinct casing conventions.',
    category: 'text',
    icon: 'case',
    tags: ['case-converter', 'uppercase', 'lowercase', 'title-case', 'camelcase', 'snake-case', 'kebab-case'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: 'adura tools fast free privacy web platform',
    features: [
      '10 formatting modes: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, and Alternating cAsE',
      'Single-click copy button per casing format',
      'Live batch preview of all formats simultaneously'
    ],
    howToSteps: [
      { title: 'Input your text', desc: 'Type or paste any string into the input area.' },
      { title: 'Select desired case', desc: 'Choose from the instant converter tiles.' },
      { title: 'Copy converted string', desc: 'Click "Copy" next to your desired casing style.' }
    ],
    faqs: [
      { question: 'What is the difference between camelCase and PascalCase?', answer: 'camelCase starts with a lowercase letter (e.g. aduraTools) while PascalCase capitalizes the first letter of each word (e.g. AduraTools).' }
    ],
    relatedSlugs: ['slug-generator', 'word-counter', 'whitespace-remover']
  },
  {
    id: 'lorem-ipsum',
    slug: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    shortDescription: 'Generate custom placeholder dummy text by paragraphs, words, or sentences.',
    longDescription: 'Generate clean standard Latin placeholder dummy text for designers, web developers, mockups, wireframes, and prototypes with custom paragraph and sentence limits.',
    category: 'text',
    icon: 'lorem',
    tags: ['lorem-ipsum', 'placeholder', 'dummy-text', 'generator', 'design', 'mockup'],
    sampleInput: '3 paragraphs',
    features: ['Generate by paragraphs, sentences, or word counts', 'Option to start with "Lorem ipsum dolor sit amet"', 'One-click copy and clean export'],
    howToSteps: [
      { title: 'Select count', desc: 'Choose how many paragraphs or words you need.' },
      { title: 'Generate', desc: 'Click generate to create realistic placeholder copy.' },
      { title: 'Copy', desc: 'Copy the text straight to your clipboard.' }
    ],
    faqs: [{ question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is standard dummy text used in typography and graphic design since the 1500s from Cicero\'s classical literature.' }],
    relatedSlugs: ['word-counter', 'case-converter']
  },
  {
    id: 'text-diff',
    slug: 'text-diff',
    name: 'Text Diff & Comparison Checker',
    shortDescription: 'Compare two text snippets side-by-side with visual added and removed highlights.',
    longDescription: 'An interactive side-by-side text difference comparator. Highlight additions, removals, line modifications, and character changes between original and modified documents.',
    category: 'text',
    icon: 'diff',
    tags: ['text-diff', 'compare', 'difference', 'diff-checker', 'code-diff'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: 'Original text version:\n- AduraTools version 1.0\n- In-browser execution\n- Free utilities',
    features: [
      'Side-by-side visual difference highlighting',
      'Added, removed, and modified line color indicators',
      'Line number tracker and summary statistics'
    ],
    howToSteps: [
      { title: 'Paste original text', desc: 'Paste the original baseline document on the left.' },
      { title: 'Paste modified text', desc: 'Paste the updated or revised version on the right.' },
      { title: 'View highlighted differences', desc: 'Inspect highlighted additions and deletions.' }
    ],
    faqs: [{ question: 'Can I use this for code snippets?', answer: 'Yes! It works smoothly with JavaScript, Python, JSON, Markdown, and plain text.' }],
    relatedSlugs: ['word-counter', 'json-formatter', 'duplicate-remover']
  },
  {
    id: 'slug-generator',
    slug: 'slug-generator',
    name: 'URL Slug Generator',
    shortDescription: 'Convert article titles and headlines into clean, SEO-friendly URL slugs.',
    longDescription: 'Turn article titles, blog headlines, and product names into URL-safe slugs. Strips special characters, converts accents/diacritics, and handles custom separators.',
    category: 'text',
    icon: 'slug',
    tags: ['slug', 'url-slug', 'seo', 'permalink', 'clean-url'],
    sampleInput: 'How to Build Ultra-Fast Web Applications in 2026! (Step-by-Step Guide)',
    features: ['Diacritic and accent stripping', 'Lowercase URL standardization', 'Custom delimiter option (hyphen/underscore)'],
    howToSteps: [
      { title: 'Paste title', desc: 'Enter your headline or article title.' },
      { title: 'Convert', desc: 'Watch the clean permalink slug generate automatically.' },
      { title: 'Copy slug', desc: 'Copy for use in routing or markdown frontmatter.' }
    ],
    faqs: [{ question: 'Why are clean URL slugs important for SEO?', answer: 'Clean, descriptive slugs help search engines understand page topics and make links easier for humans to read.' }],
    relatedSlugs: ['case-converter', 'meta-tag-generator', 'url-encoder']
  },
  {
    id: 'duplicate-remover',
    slug: 'duplicate-remover',
    name: 'Duplicate Line Remover',
    shortDescription: 'Remove duplicate lines from lists, CSVs, and text files with sorting options.',
    longDescription: 'Clean lists, email contacts, and datasets by instantly removing duplicate rows. Supports case-sensitive deduplication and alphabetical sorting.',
    category: 'text',
    icon: 'duplicate',
    tags: ['duplicate-remover', 'clean-list', 'deduplicate', 'unique-lines', 'sort'],
    sampleInput: 'apple\nbanana\norange\napple\ngrape\nbanana\nwatermelon',
    features: ['Instant duplicate removal', 'Displays unique vs removed line count', 'Alphabetical sorting toggle'],
    howToSteps: [
      { title: 'Paste your list', desc: 'Enter list items with one entry per line.' },
      { title: 'Deduplicate', desc: 'Click Remove Duplicates.' },
      { title: 'Copy clean list', desc: 'Copy the unique entries.' }
    ],
    faqs: [{ question: 'Does this preserve line order?', answer: 'Yes, by default it keeps the first occurrence of each unique item in its original order.' }],
    relatedSlugs: ['whitespace-remover', 'word-counter', 'text-reverser']
  },
  {
    id: 'text-reverser',
    slug: 'text-reverser',
    name: 'Text Reverser & Inverter',
    shortDescription: 'Reverse entire text strings, reverse word order, or flip characters.',
    longDescription: 'A versatile text manipulator to reverse letters, reverse word orders, and flip text strings for testing, riddles, or encoding.',
    category: 'text',
    icon: 'reverser',
    tags: ['text-reverser', 'reverse-words', 'flip-text', 'mirror'],
    sampleInput: 'AduraTools is fast and simple',
    features: ['Reverse characters', 'Reverse word order', 'Mirror text effect'],
    howToSteps: [
      { title: 'Enter text', desc: 'Type your message into the box.' },
      { title: 'Choose reversal style', desc: 'Select reverse characters or reverse words.' },
      { title: 'Copy output', desc: 'Grab the reversed string.' }
    ],
    faqs: [{ question: 'Can it reverse multi-line text?', answer: 'Yes, all line breaks are preserved accurately during reversal.' }],
    relatedSlugs: ['case-converter', 'duplicate-remover']
  },
  {
    id: 'whitespace-remover',
    slug: 'whitespace-remover',
    name: 'Whitespace Cleaner & Remover',
    shortDescription: 'Strip unnecessary spaces, tabs, leading/trailing blanks, and empty lines.',
    longDescription: 'Clean messy text by consolidating multiple spaces into single spaces, removing trailing whitespace, and stripping blank lines.',
    category: 'text',
    icon: 'whitespace',
    tags: ['whitespace-remover', 'clean-text', 'remove-spaces', 'trim'],
    sampleInput: '  This   text    has   unnecessary    spaces   \n\n\nand   empty   lines.  ',
    features: ['Remove extra spaces', 'Trim leading and trailing blanks', 'Remove empty lines'],
    howToSteps: [
      { title: 'Paste text', desc: 'Input your raw uncleaned text.' },
      { title: 'Clean', desc: 'Click Clean Whitespace.' },
      { title: 'Copy result', desc: 'Copy the clean, normalized text.' }
    ],
    faqs: [{ question: 'Does it remove paragraph breaks?', answer: 'You can choose whether to keep single paragraph breaks or condense everything to a single paragraph.' }],
    relatedSlugs: ['word-counter', 'duplicate-remover', 'css-js-minifier']
  },

  // Calculators & Math
  {
    id: 'percentage-calculator',
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    shortDescription: 'Calculate percentage of a number, percentage increase/decrease, and ratios.',
    longDescription: 'A clean 3-in-1 percentage calculator. Calculate simple percentages (X% of Y), determine percentage increase/decrease between two values, and find the percentage proportion of a total with live step-by-step arithmetic explanations.',
    category: 'calculators',
    icon: 'percent',
    tags: ['percentage-calculator', 'math', 'discount', 'increase', 'decrease', 'ratio'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: '25% of 480',
    features: [
      'Mode 1: What is X% of Y?',
      'Mode 2: What percentage is X of Y?',
      'Mode 3: Percentage increase or decrease from X to Y',
      'Step-by-step arithmetic formula breakdown'
    ],
    howToSteps: [
      { title: 'Choose calculation mode', desc: 'Select standard percentage, proportion, or percentage difference.' },
      { title: 'Enter numbers', desc: 'Input your values into the numerical inputs.' },
      { title: 'View result and steps', desc: 'See the exact answer along with the mathematical formula.' }
    ],
    faqs: [
      { question: 'How is percentage increase calculated?', answer: 'Percentage increase is calculated as ((New Value - Old Value) / Old Value) * 100.' }
    ],
    relatedSlugs: ['compound-interest-calculator', 'bmi-calculator', 'mortgage-calculator']
  },
  {
    id: 'compound-interest-calculator',
    slug: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    shortDescription: 'Project future investment growth, interest earned, and monthly contributions.',
    longDescription: 'Simulate compound interest returns for savings, investments, and retirement accounts. Input principal, annual return rate, duration, and monthly deposits with visual ratio graphs.',
    category: 'calculators',
    icon: 'compound',
    tags: ['compound-interest', 'investment', 'savings', 'finance', 'roi', 'future-value'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: 'Principal: $10,000, Rate: 8%, Years: 10, Monthly: $200',
    features: [
      'Calculates total future value, total deposits, and interest earned',
      'Adjustable compounding frequency (monthly, quarterly, annually, daily)',
      'Visual principal vs earned interest breakdown bar',
      'Custom recurring monthly contributions'
    ],
    howToSteps: [
      { title: 'Enter initial principal', desc: 'Set your starting investment or savings balance.' },
      { title: 'Configure rate & time', desc: 'Enter expected annual percentage return and duration in years.' },
      { title: 'Add monthly contribution', desc: 'Optionally add ongoing monthly deposits.' }
    ],
    faqs: [
      { question: 'What is the compound interest formula?', answer: 'The standard formula is A = P(1 + r/n)^(nt) where P is principal, r is annual interest rate, n is compounding frequency, and t is time in years.' }
    ],
    relatedSlugs: ['percentage-calculator', 'mortgage-calculator']
  },
  {
    id: 'bmi-calculator',
    slug: 'bmi-calculator',
    name: 'BMI Calculator (Body Mass Index)',
    shortDescription: 'Calculate Body Mass Index, health category, and ideal weight range.',
    longDescription: 'Accurately calculate Body Mass Index (BMI) using Metric (kg/cm) or Imperial (lbs/feet/inches) measurements with WHO category spectrum gauge and healthy weight range estimates.',
    category: 'calculators',
    icon: 'bmi',
    tags: ['bmi-calculator', 'body-mass-index', 'health', 'fitness', 'weight', 'metric-imperial'],
    sampleInput: 'Height: 175cm, Weight: 68kg',
    features: [
      'Instant Metric and Imperial unit switching',
      'Interactive color-coded WHO category gauge (Underweight, Normal, Overweight, Obese)',
      'Calculates ideal healthy weight range for user height',
      '100% private health calculations'
    ],
    howToSteps: [
      { title: 'Select unit system', desc: 'Choose Metric (cm/kg) or Imperial (ft/in/lbs).' },
      { title: 'Enter height and weight', desc: 'Input your height and current body weight.' },
      { title: 'Inspect your score', desc: 'View your BMI score, category badge, and ideal target range.' }
    ],
    faqs: [
      { question: 'What is a normal BMI range according to WHO?', answer: 'A BMI between 18.5 and 24.9 is considered normal healthy weight for adults.' }
    ],
    relatedSlugs: ['unit-converter', 'percentage-calculator', 'age-calculator']
  },
  {
    id: 'age-calculator',
    slug: 'age-calculator',
    name: 'Age & Birthday Countdown Calculator',
    shortDescription: 'Calculate exact age in years, months, days, hours, and next birthday countdown.',
    longDescription: 'Determine your precise chronological age in years, months, weeks, days, and hours, along with an exact countdown to your next birthday.',
    category: 'calculators',
    icon: 'age',
    tags: ['age-calculator', 'birthday', 'date-calculator', 'chronological-age'],
    sampleInput: '1995-08-15',
    features: ['Exact age in years, months, days', 'Total days lived and total hours', 'Next birthday countdown timer'],
    howToSteps: [
      { title: 'Select birth date', desc: 'Pick your birth year, month, and day from the calendar.' },
      { title: 'Calculate', desc: 'See your exact chronological age.' },
      { title: 'Check next birthday', desc: 'See how many days remain until your next celebration.' }
    ],
    faqs: [{ question: 'Does it take leap years into account?', answer: 'Yes, all leap year calculations and variable month lengths are handled accurately.' }],
    relatedSlugs: ['timestamp-converter', 'bmi-calculator']
  },
  {
    id: 'mortgage-calculator',
    slug: 'mortgage-calculator',
    name: 'Mortgage & Loan EMI Calculator',
    shortDescription: 'Calculate monthly mortgage payments, total interest, and loan amortization.',
    longDescription: 'Estimate monthly home mortgage and loan payments based on home price, down payment, interest rate, and loan term.',
    category: 'calculators',
    icon: 'mortgage',
    tags: ['mortgage-calculator', 'loan', 'emi', 'finance', 'real-estate', 'interest'],
    sampleInput: 'Home Price: $400,000, Down Payment: $80,000, Interest: 6.5%, Term: 30 Years',
    features: ['Monthly payment calculation', 'Total interest vs principal breakdown', 'Down payment percentage calculator'],
    howToSteps: [
      { title: 'Enter home price', desc: 'Input total property purchase price.' },
      { title: 'Set down payment and rate', desc: 'Input down payment and annual interest percentage.' },
      { title: 'View monthly payment', desc: 'See your estimated monthly principal and interest payment.' }
    ],
    faqs: [{ question: 'What does EMI stand for?', answer: 'EMI stands for Equated Monthly Installment, the fixed monthly payment amount made by a borrower to a lender.' }],
    relatedSlugs: ['compound-interest-calculator', 'percentage-calculator']
  },

  // Converters
  {
    id: 'unit-converter',
    slug: 'unit-converter',
    name: 'Universal Unit Converter',
    shortDescription: 'Convert Length, Mass/Weight, Temperature, Digital Storage, Area, and Speed units.',
    longDescription: 'Comprehensive unit conversion suite covering 6 major measurement categories: Length (meters, feet, miles, inches, km), Weight (kg, lbs, oz, grams), Temperature (Celsius, Fahrenheit, Kelvin), Digital Storage (MB, GB, TB), Area, and Speed with instant precision conversion.',
    category: 'converters',
    icon: 'ruler',
    tags: ['unit-converter', 'measurement', 'length', 'mass', 'weight', 'temperature', 'storage', 'metric-imperial'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: '100 Kilometers to Miles',
    features: [
      '6 categories: Length, Mass, Temperature, Digital Storage, Area, Speed',
      'Instant bidirectional conversion with swap button',
      'High-precision floating point rounding',
      'Supports both Metric and US Customary / Imperial systems'
    ],
    howToSteps: [
      { title: 'Select category', desc: 'Choose between Length, Weight, Temp, Storage, Area, or Speed.' },
      { title: 'Enter value', desc: 'Type the number you want to convert.' },
      { title: 'Select units', desc: 'Choose your "From" unit and "To" unit to see immediate results.' }
    ],
    faqs: [
      { question: 'Is digital storage converted in decimal (1000) or binary (1024)?', answer: 'AduraTools provides standard binary conversion (1 GB = 1024 MB) standard in computing.' }
    ],
    relatedSlugs: ['color-converter', 'number-base-converter', 'percentage-calculator']
  },
  {
    id: 'color-converter',
    slug: 'color-converter',
    name: 'Color Code Converter (HEX, RGB, HSL, CMYK)',
    shortDescription: 'Convert between HEX, RGB, HSL, and CMYK color codes with live color preview and WCAG contrast check.',
    longDescription: 'An interactive color conversion and inspection workbench. Convert color values seamlessly across HEX, RGB, HSL, and CMYK models, preview real-time swatches, and verify WCAG contrast ratios against dark and light text.',
    category: 'converters',
    icon: 'palette',
    tags: ['color-converter', 'hex', 'rgb', 'hsl', 'cmyk', 'palette', 'wcag', 'design'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: '#ff3d8b',
    features: [
      'Simultaneous 4-model conversion: HEX, RGB, HSL, CMYK',
      'Interactive color picker and live swatch preview',
      'Automated WCAG AA/AAA contrast checker for black and white text',
      'One-click copy per color format'
    ],
    howToSteps: [
      { title: 'Pick or enter color', desc: 'Use the native visual color picker or paste any HEX, RGB, or HSL code.' },
      { title: 'View converted codes', desc: 'See instantaneous synchronization across all formats.' },
      { title: 'Copy code', desc: 'Click "Copy" next to your required format.' }
    ],
    faqs: [
      { question: 'What is WCAG contrast ratio?', answer: 'WCAG contrast ratio measures the difference in luminance between text and background. A minimum ratio of 4.5:1 is required for standard text readability (Level AA).' }
    ],
    relatedSlugs: ['unit-converter', 'number-base-converter', 'meta-tag-generator']
  },
  {
    id: 'number-base-converter',
    slug: 'number-base-converter',
    name: 'Number Base Converter (Binary, Hex, Dec, Octal)',
    shortDescription: 'Convert numbers between Decimal, Binary (Base 2), Hexadecimal (Base 16), and Octal (Base 8).',
    longDescription: 'A programmer\'s number base conversion utility. Convert numbers between Base 10 (Decimal), Base 2 (Binary), Base 16 (Hexadecimal), and Base 8 (Octal) with formatted bit groupings.',
    category: 'converters',
    icon: 'number-base',
    tags: ['number-base', 'binary', 'hexadecimal', 'decimal', 'octal', 'bitwise'],
    sampleInput: '255',
    features: ['Base 2, 8, 10, and 16 conversions', 'Bit group formatting', 'Handles large integers'],
    howToSteps: [
      { title: 'Enter number', desc: 'Type any decimal, hex, or binary number.' },
      { title: 'Select input base', desc: 'Specify the radix of your input.' },
      { title: 'Copy converted bases', desc: 'Copy the representation in binary, hex, decimal, or octal.' }
    ],
    faqs: [{ question: 'What is hexadecimal used for?', answer: 'Hexadecimal provides a human-friendly representation of binary code in computing and memory addressing, where 2 hex digits represent 1 byte (8 bits).' }],
    relatedSlugs: ['color-converter', 'base64-encoder', 'unit-converter']
  },

  // Image & Media Tools
  {
    id: 'image-compressor',
    slug: 'image-compressor',
    name: 'In-Browser Image Compressor',
    shortDescription: 'Compress PNG, JPEG, and WebP images locally in browser with quality sliders.',
    longDescription: 'Compress and optimize image files directly on your device using HTML5 Canvas. Adjust visual quality sliders, inspect before/after file sizes, view exact percentage savings, and download optimized files without uploading private photos to any server.',
    category: 'image',
    icon: 'compress',
    tags: ['image-compressor', 'compress-image', 'optimize-png', 'jpg-compression', 'webp', 'privacy'],
    badge: 'Popular',
    isPopular: true,
    features: [
      '100% in-browser Canvas compression — zero server uploads',
      'Supports PNG, JPEG, and WebP formats up to 50MB',
      'Adjustable quality slider (10% to 100%)',
      'Side-by-side original vs compressed size comparison with savings badge'
    ],
    howToSteps: [
      { title: 'Upload image', desc: 'Drag and drop an image or click "Select Image File".' },
      { title: 'Adjust quality', desc: 'Move the quality slider to find your balance of file size and visual fidelity.' },
      { title: 'Download compressed image', desc: 'Click "Download Optimized Image" to save locally.' }
    ],
    faqs: [
      { question: 'Is my photo uploaded to your server?', answer: 'No! AduraTools performs all image compression locally in your browser memory via the HTML5 2D Canvas API. Your files never leave your device.' }
    ],
    relatedSlugs: ['image-resizer', 'image-converter', 'meta-tag-generator']
  },
  {
    id: 'image-resizer',
    slug: 'image-resizer',
    name: 'Image Resizer & Dimension Scaler',
    shortDescription: 'Resize image width and height in pixels or percentage with aspect ratio lock.',
    longDescription: 'Resize images to custom width and height dimensions with optional aspect ratio locking and high-quality canvas bicubic interpolation.',
    category: 'image',
    icon: 'resize',
    tags: ['image-resizer', 'resize-image', 'dimensions', 'scale', 'pixels'],
    features: ['Custom width/height scaling', 'Aspect ratio locking', '100% private in-browser resizing'],
    howToSteps: [
      { title: 'Upload image', desc: 'Select or drag your image file.' },
      { title: 'Set dimensions', desc: 'Enter desired pixel width or percentage.' },
      { title: 'Download', desc: 'Save the resized image.' }
    ],
    faqs: [{ question: 'Does resizing degrade quality?', answer: 'Downscaling preserves sharpness; upscaling beyond original resolution may result in softening.' }],
    relatedSlugs: ['image-compressor', 'image-converter']
  },
  {
    id: 'image-converter',
    slug: 'image-converter',
    name: 'Image Format Converter (PNG, JPG, WebP)',
    shortDescription: 'Convert between PNG, JPG, and WebP image formats instantly without quality loss.',
    longDescription: 'Convert images between modern WebP, PNG with transparency, and lightweight JPEG formats locally in your browser.',
    category: 'image',
    icon: 'image',
    tags: ['image-converter', 'png-to-jpg', 'jpg-to-webp', 'png-to-webp', 'format-converter'],
    features: ['Converts between PNG, JPG, WebP', 'Preserves transparency when exporting PNG/WebP', 'Zero server uploads'],
    howToSteps: [
      { title: 'Upload image', desc: 'Select your source image file.' },
      { title: 'Choose target format', desc: 'Select PNG, JPG, or WebP.' },
      { title: 'Download file', desc: 'Save the converted image.' }
    ],
    faqs: [{ question: 'Why convert images to WebP?', answer: 'WebP provides superior lossless and lossy compression, resulting in 25-35% smaller file sizes than comparable JPEGs and PNGs.' }],
    relatedSlugs: ['image-compressor', 'image-resizer']
  },

  // SEO & Web Tools
  {
    id: 'meta-tag-generator',
    slug: 'meta-tag-generator',
    name: 'Meta Tag & Open Graph SEO Generator',
    shortDescription: 'Create SEO meta tags, OpenGraph cards, and Twitter cards with live SERP preview.',
    longDescription: 'Generate HTML meta tags for title, description, canonical URLs, and social sharing OpenGraph / Twitter Cards. Includes real-time character counters and live Google search snippet mockups.',
    category: 'seo',
    icon: 'meta',
    tags: ['meta-tag-generator', 'seo', 'opengraph', 'twitter-card', 'serp-preview', 'html-tags'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: 'AduraTools — Fast, Free & Private Online Tools Platform',
    features: [
      'Generates primary HTML meta tags (<title>, <meta description>, canonical)',
      'Generates Open Graph (Facebook/LinkedIn) and Twitter Card tags',
      'Live Google Search snippet and social card preview',
      'Real-time character counters (60 chars for title, 160 for description)'
    ],
    howToSteps: [
      { title: 'Fill in page details', desc: 'Enter page title, description, URL, and OG image link.' },
      { title: 'Check live preview', desc: 'Review how your site will look on Google SERPs and social feeds.' },
      { title: 'Copy HTML tags', desc: 'Copy the generated tags and paste inside your website <head> tag.' }
    ],
    faqs: [
      { question: 'What is the optimal meta description length?', answer: 'Google typically displays up to 155-160 characters on desktop search results before truncating.' }
    ],
    relatedSlugs: ['serp-preview', 'robots-txt-generator', 'slug-generator']
  },
  {
    id: 'serp-preview',
    slug: 'serp-preview',
    name: 'Google SERP Snippet Preview Tool',
    shortDescription: 'Visualize how your website title, URL, and meta description appear in Google search results.',
    longDescription: 'Simulate Google desktop and mobile search engine result page (SERP) snippets. Verify pixel widths and prevent truncated titles.',
    category: 'seo',
    icon: 'serp',
    tags: ['serp-preview', 'google-snippet', 'seo-preview', 'meta-title-checker'],
    sampleInput: 'AduraTools — Fast, Free & Private Online Utilities',
    features: ['Desktop and Mobile SERP simulation', 'Pixel width calculation', 'Truncation warning indicators'],
    howToSteps: [
      { title: 'Enter title & description', desc: 'Type your proposed SEO title and meta description.' },
      { title: 'Inspect preview', desc: 'See an exact visual representation of Google search results.' },
      { title: 'Refine copy', desc: 'Adjust lengths to avoid ellipsis truncation.' }
    ],
    faqs: [{ question: 'How wide can a Google title be?', answer: 'Google typically truncates titles wider than approximately 600 pixels on desktop (~60 characters).' }],
    relatedSlugs: ['meta-tag-generator', 'slug-generator']
  },
  {
    id: 'robots-txt-generator',
    slug: 'robots-txt-generator',
    name: 'Robots.txt Generator & Validator',
    shortDescription: 'Create compliant robots.txt crawler directives for Googlebot, Bingbot, and AI crawlers.',
    longDescription: 'Build search engine crawling rules for your website. Allow or disallow specific directories, set custom user-agents, and link your sitemap.xml.',
    category: 'seo',
    icon: 'robots',
    tags: ['robots-txt', 'crawler', 'seo', 'sitemap', 'googlebot', 'webmaster'],
    sampleInput: 'User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://aduratools.site/sitemap.xml',
    features: ['Custom user-agent rules', 'Disallow/Allow directory builder', 'Sitemap location directive', 'One-click copy'],
    howToSteps: [
      { title: 'Configure user agents', desc: 'Specify crawlers like Googlebot, Bingbot, or * for all.' },
      { title: 'Add path rules', desc: 'Specify private folders to disallow (e.g. /admin/).' },
      { title: 'Copy robots.txt', desc: 'Save the generated file to your web server root.' }
    ],
    faqs: [{ question: 'Where should robots.txt be located?', answer: 'The robots.txt file must always be placed at the top-level root directory of your website (e.g. https://aduratools.site/robots.txt).' }],
    relatedSlugs: ['meta-tag-generator', 'slug-generator']
  },

  // Security & Privacy
  {
    id: 'password-generator',
    slug: 'password-generator',
    name: 'Cryptographic Password Generator',
    shortDescription: 'Generate high-entropy random passwords with custom symbols, numbers, and strength meter.',
    longDescription: 'A secure, client-side password generator using the browser native Web Crypto API (`crypto.getRandomValues`). Customize length (8 to 64 characters), toggle uppercase, lowercase, numbers, and special symbols, and view estimated crack time and entropy score.',
    category: 'security',
    icon: 'key',
    tags: ['password-generator', 'random-password', 'crypto', 'security', 'entropy', 'privacy'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: '16 characters, uppercase, lowercase, numbers, symbols',
    features: [
      'Powered by window.crypto.getRandomValues for true cryptographic entropy',
      'Configurable length from 8 to 64 characters',
      'Character set toggles: Uppercase (A-Z), Lowercase (a-z), Numbers (0-9), Symbols (!@#$%)',
      'Real-time entropy strength meter (Bits) and estimated brute-force crack time'
    ],
    howToSteps: [
      { title: 'Set desired length', desc: 'Drag the length slider (16+ characters recommended for high security).' },
      { title: 'Toggle character sets', desc: 'Choose which character types to include in your password.' },
      { title: 'Copy password', desc: 'Click "Copy Password" to copy securely to your clipboard.' }
    ],
    faqs: [
      { question: 'Are generated passwords logged on your server?', answer: 'Never. Passwords are generated directly on your device using native browser Web Crypto. No data is ever transmitted.' }
    ],
    relatedSlugs: ['hash-generator', 'qr-code-generator', 'uuid-generator']
  },
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    name: 'Custom QR Code Generator',
    shortDescription: 'Create custom QR codes for URLs, plain text, and WiFi credentials with PNG/SVG export.',
    longDescription: 'Generate customized, high-resolution QR codes in your browser. Create codes for web links, text notes, and WiFi credentials with customizable foreground/background colors and instant PNG and SVG vector downloads.',
    category: 'security',
    icon: 'qr-code',
    tags: ['qr-code-generator', 'custom-qr', 'wifi-qr', 'svg-qr', 'png-qr', 'marketing'],
    badge: 'Popular',
    isPopular: true,
    sampleInput: 'https://aduratools.site',
    features: [
      'Supports Website URLs, Plain Text, and WiFi Network auto-connect payloads',
      'Custom foreground and background color customization',
      'High-resolution PNG and scalable vector SVG downloads',
      '100% in-browser generation without expiration limits'
    ],
    howToSteps: [
      { title: 'Choose payload type', desc: 'Select URL, Plain Text, or WiFi Network.' },
      { title: 'Enter content', desc: 'Type your link or text message.' },
      { title: 'Download QR code', desc: 'Click "Download PNG" or "Download SVG" to save your code.' }
    ],
    faqs: [
      { question: 'Do these QR codes expire?', answer: 'No! These are standard static QR codes that encode your data directly into the pixel matrix. They never expire and require no third-party redirection.' }
    ],
    relatedSlugs: ['password-generator', 'color-converter', 'meta-tag-generator']
  }
];

export function getToolBySlug(slug: string): ToolItem | undefined {
  return TOOLS.find(t => t.slug === slug);
}

export function getToolsByCategory(categoryId: string): ToolItem[] {
  return TOOLS.filter(t => t.category === categoryId);
}

export function getPopularTools(): ToolItem[] {
  return TOOLS.filter(t => t.isPopular);
}
