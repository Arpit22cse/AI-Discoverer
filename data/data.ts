import { AITool } from "@/types/types";

export const aiTools: AITool[] = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Conversational AI by OpenAI that helps with chatting, writing, and coding.",
    category: "Writing",
    upvotes: 12400,
    howToUse: [
      "Go to chat.openai.com.",
      "Log in or create an OpenAI account.",
      "Type your prompt or question in the input box.",
      "Press Enter to generate a response.",
      "Iterate with follow-up prompts for better output."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/chatgpt",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    pricing: 'Free'
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI art generator that creates images from natural language prompts.",
    category: "Design",
    upvotes: 9800,
    howToUse: [
      "Join the Midjourney Discord server.",
      "Go to a #newbies channel.",
      "Type /imagine followed by your prompt.",
      "Wait for AI to generate 4 image variations.",
      "Upscale or modify your preferred image."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/midjourney",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763217799/midjourney-seeklogo_ul0z6a.png",
    pricing: 'Subscription'
  },
  {
    id: 3,
    name: "Notion AI",
    description: "AI assistant built into Notion for writing, summarizing, and brainstorming.",
    category: "Productivity",
    upvotes: 11200,
    howToUse: [
      "Open your Notion workspace.",
      "Type /AI to access Notion AI features.",
      "Choose tasks like writing or summarizing.",
      "Review AI-generated results and refine them.",
      "Use across notes, docs, or wikis."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/notion-ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    pricing: 'Freemium'
  },
  {
    id: 4,
    name: "Jasper",
    description: "AI content generator for blogs, ads, and marketing materials.",
    category: "Marketing",
    upvotes: 8700,
    howToUse: [
      "Sign up on jasper.ai.",
      "Select a content template.",
      "Enter your topic, audience, and tone.",
      "Click 'Generate' to produce text.",
      "Edit or expand the content if needed."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/jasper-ai",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763266029/jasper-1_rxyqsh.png",
    pricing: 'Subscription'
  },
  {
    id: 5,
    name: "Runway ML",
    description: "AI video editor that helps remove backgrounds and generate new clips.",
    category: "Video",
    upvotes: 7400,
    howToUse: [
      "Visit runwayml.com and sign up.",
      "Upload your video or image file.",
      "Use AI tools like background removal or text-to-video.",
      "Preview the result and make adjustments.",
      "Export the final video."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/runway-ml",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763265998/runway_qlhrcw.png",
    pricing: 'Freemium'
  },
  {
    id: 6,
    name: "Copy.ai",
    description: "AI writing assistant that creates marketing copy and blog posts.",
    category: "Marketing",
    upvotes: 6900,
    howToUse: [
      "Sign up at copy.ai.",
      "Choose a writing type like ad copy or product description.",
      "Enter key details about your topic.",
      "Generate AI-written content instantly.",
      "Edit and polish your copy."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/copy-ai",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763277384/copyai_nwabzp.png",
    pricing: 'Freemium'
  },
  {
    id: 7,
    name: "GrammarlyGO",
    description: "AI grammar and tone improvement tool built into Grammarly.",
    category: "Writing",
    upvotes: 8200,
    howToUse: [
      "Install Grammarly extension or app.",
      "Activate GrammarlyGO in settings.",
      "Write or paste your text.",
      "Review AI suggestions for clarity and tone.",
      "Accept or modify improvements."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/grammarlygo",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763277366/grammarly_xbxzjn.png",
    pricing: 'Freemium'
  },
  {
    id: 8,
    name: "Pictory",
    description: "Converts text or blog posts into shareable videos using AI.",
    category: "Video",
    upvotes: 5600,
    howToUse: [
      "Sign up at pictory.ai.",
      "Paste your blog URL or script.",
      "Choose a video style and template.",
      "Let AI generate visuals and voiceover.",
      "Edit and export the video."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/pictory-ai",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271681/Pictory_vn9aan.png",
    pricing: 'Subscription'
  },
  {
    id: 9,
    name: "Synthesia",
    description: "Creates videos with AI avatars speaking your script.",
    category: "Video",
    upvotes: 9700,
    howToUse: [
      "Go to synthesia.io.",
      "Select an AI avatar and voice.",
      "Paste your text script.",
      "Generate and preview your AI video.",
      "Download and share."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/synthesia",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763265974/synthesia_rijuhh.png",
    pricing: 'Subscription'
  },
  {
    id: 10,
    name: "Canva Magic Write",
    description: "AI writing and design assistant integrated into Canva Docs.",
    category: "Design",
    upvotes: 9000,
    howToUse: [
      "Open a Canva document.",
      "Use Magic Write in the toolbar.",
      "Describe what you want to create.",
      "AI generates text or design ideas.",
      "Customize and export your design."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/magic-write",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271564/canva_oysp4b.png",
    pricing: 'Freemium'
  },
  {
    id: 11,
    name: "Tome",
    description: "AI storytelling tool that builds slides and presentations automatically.",
    category: "Productivity",
    upvotes: 7200,
    howToUse: [
      "Go to tome.app.",
      "Enter your topic or idea.",
      "Tome generates text and visuals for slides.",
      "Adjust design and order of slides.",
      "Present or share your Tome deck."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/tome",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271737/tome_kmtket.png",
    pricing: 'Freemium'
  },
  {
    id: 12,
    name: "Murf.ai",
    description: "AI voice generator for realistic voiceovers in multiple tones.",
    category: "Audio",
    upvotes: 6100,
    howToUse: [
      "Visit murf.ai.",
      "Paste your text script.",
      "Choose a voice and language.",
      "Adjust pitch and speed.",
      "Export your voiceover file."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/murf-ai",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271624/murfai_jgqnwj.png",
    pricing: 'Subscription'
  },
  {
    id: 13,
    name: "Perplexity AI",
    description: "AI search engine that provides answers with sources.",
    category: "Research",
    upvotes: 8800,
    howToUse: [
      "Go to perplexity.ai.",
      "Enter a question in the search box.",
      "Review AI-generated summaries with citations.",
      "Click on sources for more details.",
      "Use follow-up prompts to refine answers."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/perplexity-ai",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763217359/perplexity-color_tgrox9.png",
    pricing: 'Free'
  },
  {
    id: 14,
    name: "Leonardo.ai",
    description: "AI tool for generating digital art and game assets.",
    category: "Design",
    upvotes: 8400,
    howToUse: [
      "Create an account on leonardo.ai.",
      "Enter your text prompt.",
      "Choose style, resolution, and seed settings.",
      "Generate and download artwork.",
      "Refine results with more prompts."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/leonardo-ai",
    logo: "https://leonardo.ai/favicon.ico",
    pricing: 'Freemium'
  },
  {
    id: 15,
    name: "Claude",
    description: "AI assistant for summarization and advanced reasoning.",
    category: "Research",
    upvotes: 9300,
    howToUse: [
      "Open claude.ai.",
      "Sign in or use via API.",
      "Type your query or upload a document.",
      "Claude summarizes or explains it.",
      "Ask follow-up questions for clarity."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/claude",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763217341/claude-color_qzvgfx.png",
    pricing: 'Subscription'
  },
  {
    id: 16,
    name: "Lumen5",
    description: "Transforms articles or text into social videos using AI.",
    category: "Marketing",
    upvotes: 6300,
    howToUse: [
      "Sign up at lumen5.com.",
      "Paste a blog post or text.",
      "Select theme and visuals.",
      "AI generates a storyboard.",
      "Edit and export the final video."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/lumen5",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763277680/lumen5_t7ewrq.png",
    pricing: 'Freemium'
  },
  {
    id: 17,
    name: "Writesonic",
    description: "AI tool for SEO blogs, ad copy, and social content.",
    category: "Writing",
    upvotes: 6900,
    howToUse: [
      "Visit writesonic.com.",
      "Choose a content type.",
      "Enter your topic or keyword.",
      "AI generates multiple options.",
      "Edit or download your text."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/writesonic",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271776/writesonic_veomz4.png",
    pricing: 'Subscription'
  },
  {
    id: 18,
    name: "Gamma App",
    description: "AI presentation creator for modern, responsive slide decks.",
    category: "Productivity",
    upvotes: 7100,
    howToUse: [
      "Go to gamma.app.",
      "Enter your idea or document.",
      "Let AI generate slides with design.",
      "Customize visuals and layout.",
      "Share or export the presentation."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/gamma-app",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271586/gamma_ebvmjh.png",
    pricing: 'Freemium'
  },
  {
    id: 19,
    name: "QuillBot",
    description: "AI-powered paraphrasing tool for rewriting and grammar correction.",
    category: "Writing",
    upvotes: 9500,
    howToUse: [
      "Visit quillbot.com.",
      "Paste or type your text.",
      "Choose a paraphrasing mode.",
      "Click Rephrase to generate improved text.",
      "Copy and use the result."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/quillbot",
    logo: "https://quillbot.com/favicon.ico",
    pricing: 'Freemium'
  },
  {
    id: 20,
    name: "PromptBase",
    description: "Marketplace for buying and selling optimized AI prompts.",
    category: "Development",
    upvotes: 8000,
    howToUse: [
      "Go to promptbase.com.",
      "Search for a specific prompt type.",
      "Buy or sell custom prompts.",
      "Use purchased prompts in tools like ChatGPT or Midjourney.",
      "Track your sales and feedback."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/promptbase",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271659/promptBase_yup0zv.png",
    pricing: 'Free'
  },
    {
    id: 21,
    name: "Descript",
    description: "AI-powered video and podcast editor with text-based editing and overdub.",
    category: "Audio",
    upvotes: 7800,
    howToUse: [
      "Go to descript.com and download the app.",
      "Import your video or audio file.",
      "Edit text to automatically cut or change the media.",
      "Use Overdub to generate realistic voice edits.",
      "Export the final video or podcast."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/descript",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763277827/Descript_ihbwo2.png",
    pricing: 'Subscription'
  },
  {
    id: 22,
    name: "Durable AI",
    description: "Instant website builder that generates complete websites using AI.",
    category: "Development",
    upvotes: 8600,
    howToUse: [
      "Visit durable.co.",
      "Enter your business name and type.",
      "AI generates a complete website with images and text.",
      "Customize colors, content, and layout.",
      "Publish instantly with one click."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/durable-ai",
    logo: "https://durable.co/favicon.ico",
    pricing: 'Subscription'
  },
  {
    id: 23,
    name: "Scribe",
    description: "AI documentation tool that auto-creates step-by-step guides from screen actions.",
    category: "Productivity",
    upvotes: 7700,
    howToUse: [
      "Install the Scribe Chrome extension.",
      "Click 'Record' before performing a process.",
      "Scribe automatically documents your actions.",
      "Edit the generated guide as needed.",
      "Share via link or embed in documentation."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/scribe-how-to-guides",
    logo: "https://scribehow.com/favicon.ico",
    pricing: 'Freemium'

  },
  {
    id: 24,
    name: "Poe AI",
    description: "Platform by Quora that hosts multiple AI chatbots including Claude and GPT.",
    category: "Research",
    upvotes: 9400,
    howToUse: [
      "Go to poe.com.",
      "Sign up or log in with your Quora account.",
      "Select a chatbot like GPT-4, Claude, or Gemini.",
      "Type your question and receive instant answers.",
      "Compare responses from multiple AIs."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/poe",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763217548/poe-color_auwnpn.png",
    pricing: 'Free'
  },
  {
    id: 25,
    name: "OpusClip",
    description: "AI tool that converts long videos into short viral clips for social media.",
    category: "Video",
    upvotes: 6900,
    howToUse: [
      "Upload your long video on opus.pro.",
      "AI detects key moments and edits automatically.",
      "Preview the short clips generated.",
      "Adjust captions and framing.",
      "Download and share on social media."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/opusclip",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271642/opucs_zhr0e8.png",
    pricing: 'Freemium'
  },
  {
    id: 26,
    name: "ElevenLabs",
    description: "AI voice synthesis tool for lifelike, expressive speech generation.",
    category: "Audio",
    upvotes: 8800,
    howToUse: [
      "Sign up at elevenlabs.io.",
      "Upload or enter your text script.",
      "Choose a prebuilt or cloned voice.",
      "Generate and preview the audio output.",
      "Download the generated voice file."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/elevenlabs",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763217533/elevenlabs_z2gk1v.png",
    pricing: 'Subscription'
  },
  {
    id: 27,
    name: "Browse AI",
    description: "AI web scraper and data extractor that monitors websites automatically.",
    category: "Development",
    upvotes: 7400,
    howToUse: [
      "Go to browse.ai.",
      "Enter a target website URL.",
      "Select data elements to extract using the browser tool.",
      "Train a robot to repeat this process on schedule.",
      "Export collected data as CSV or Google Sheet."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/browse-ai",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271551/BrowseAi_sfw9a4.png",
    pricing: 'Freemium'
  },
  {
    id: 28,
    name: "Krisp",
    description: "AI noise-cancelling app for removing background noise in calls and recordings.",
    category: "Audio",
    upvotes: 8300,
    howToUse: [
      "Download the Krisp app or browser extension.",
      "Select Krisp as your microphone and speaker device.",
      "Join your call in Zoom, Meet, or Teams.",
      "AI automatically removes background noise in real time.",
      "View noise cancellation analytics after the call."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/krisp",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271613/krisp_owudwe.png",
    pricing: 'Freemium'
  },
  {
    id: 29,
    name: "Replit Ghostwriter",
    description: "AI coding assistant integrated into Replit IDE for real-time code suggestions.",
    category: "Development",
    upvotes: 8100,
    howToUse: [
      "Open replit.com and log in.",
      "Start a new project or open existing code.",
      "Enable Ghostwriter from settings.",
      "Type normally — AI suggests code completions.",
      "Accept or modify suggestions inline."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/replit-ghostwriter",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271596/ghostwriter_zbpk17.png",
    pricing: 'Subscription'

  },
  {
    id: 30,
    name: "Mixo.io",
    description: "AI startup builder that creates landing pages from a simple business idea.",
    category: "Marketing",
    upvotes: 6700,
    howToUse: [
      "Go to mixo.io.",
      "Enter your startup or product idea.",
      "AI generates landing page text, images, and structure.",
      "Edit and customize the content.",
      "Publish instantly on your domain."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/mixo-io",
    logo: "https://mixo.io/favicon.ico",
    pricing: 'Freemium'
  },
  {
    id: 31,
    name: "Remove.bg",
    description: "AI tool for removing image backgrounds instantly.",
    category: "Design",
    upvotes: 9800,
    howToUse: [
      "Go to remove.bg.",
      "Upload an image.",
      "AI automatically removes the background.",
      "Preview and fine-tune edges if needed.",
      "Download the transparent image."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/remove-bg",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271533/backgroungBg_gyi2aq.png",
    pricing: 'Freemium'
  },
  {
    id: 32,
    name: "Soundraw.io",
    description: "AI music generator that creates unique royalty-free background tracks.",
    category: "Audio",
    upvotes: 7200,
    howToUse: [
      "Visit soundraw.io and sign up.",
      "Select mood, genre, and length of the track.",
      "AI generates multiple versions automatically.",
      "Preview and download your favorite one.",
      "Use in videos or podcasts."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/soundraw-io",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271716/soundDraw_kxiweg.png",
    pricing: 'Subscription'
  },
  {
    id: 33,
    name: "Beautiful.ai",
    description: "AI presentation creator that designs slides automatically with smart layouts.",
    category: "Productivity",
    upvotes: 7500,
    howToUse: [
      "Sign up at beautiful.ai.",
      "Choose a presentation template.",
      "Add your content (text, charts, media).",
      "AI optimizes slide design instantly.",
      "Download or present online."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/beautiful-ai",
    logo: "https://beautiful.ai/favicon.ico",
    pricing: 'Freemium'
  },
  {
    id: 34,
    name: "Cleanup.pictures",
    description: "AI tool that removes unwanted objects, people, or text from images.",
    category: "Design",
    upvotes: 8800,
    howToUse: [
      "Go to cleanup.pictures.",
      "Upload your image.",
      "Brush over the area you want to remove.",
      "AI cleans the selected area seamlessly.",
      "Download the final edited image."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/cleanup-pictures",
    logo: "https://cleanup.pictures/favicon.ico",
    pricing: 'Freemium'
  },
  {
    id: 35,
    name: "Synthesys",
    description: "AI video generator for creating talking avatars from scripts.",
    category: "Video",
    upvotes: 7100,
    howToUse: [
      "Visit synthesys.io.",
      "Select an avatar and input your text script.",
      "Customize the voice and expression.",
      "Generate and preview your video.",
      "Download or share it directly."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/synthesys",
    logo: "https://synthesys.io/favicon.ico",
    pricing: 'Subscription'
  },
  {
    id: 36,
    name: "Otter.ai",
    description: "AI meeting assistant that transcribes and summarizes meetings in real time.",
    category: "Productivity",
    upvotes: 8900,
    howToUse: [
      "Go to otter.ai.",
      "Connect your calendar and join meetings.",
      "Otter records and transcribes automatically.",
      "Review, search, and share meeting notes.",
      "Export summaries as text or PDF."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/otter-ai",
    logo: "https://otter.ai/favicon.ico",
    pricing: 'Freemium'
  },
  {
    id: 37,
    name: "SlidesAI.io",
    description: "AI tool that converts text or documents into Google Slides presentations.",
    category: "Productivity",
    upvotes: 6200,
    howToUse: [
      "Go to slidesai.io and sign in with Google.",
      "Paste or upload your text.",
      "AI auto-generates slide structure and design.",
      "Customize fonts and visuals.",
      "Export to Google Slides."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/slidesai-io",
    logo: "https://slidesai.io/favicon.ico",
    pricing: 'Freemium'
  },
  {
    id: 38,
    name: "BrowseGPT",
    description: "AI agent that browses the web and extracts information automatically.",
    category: "Research",
    upvotes: 6700,
    howToUse: [
      "Install the BrowseGPT extension.",
      "Type your query or task in the input field.",
      "AI navigates websites and retrieves data.",
      "View the summarized output.",
      "Export data as a report."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/browsegpt",
    logo: "https://browsegpt.ai/favicon.ico",
    pricing: 'Subscription'
  },
  {
    id: 39,
    name: "PhotoRoom",
    description: "AI image editor that creates professional product photos instantly.",
    category: "Design",
    upvotes: 9100,
    howToUse: [
      "Go to photoroom.com.",
      "Upload your photo.",
      "AI removes background and enhances lighting.",
      "Apply templates for e-commerce or social posts.",
      "Download or share your image."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/photoroom",
    logo: "https://photoroom.com/favicon.ico",
    pricing: 'Freemium'
  },
  {
    id: 40,
    name: "Scalenut",
    description: "AI-powered SEO and content optimization platform for long-form writing.",
    category: "SEO",
    upvotes: 8300,
    howToUse: [
      "Sign up at scalenut.com.",
      "Enter your target keyword.",
      "AI generates SEO-optimized outlines and content.",
      "Use NLP suggestions to improve ranking.",
      "Publish directly to your CMS."
    ],
    productHuntUrl: "https://www.producthunt.com/posts/scalenut",
    logo: "https://res.cloudinary.com/dt8xqdsfr/image/upload/v1763271749/scalenut_geqmzk.png",
    pricing: 'Subscription'
  }
];

export default aiTools;