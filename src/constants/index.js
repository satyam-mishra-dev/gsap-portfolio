// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "ML Research & Development",
    description:
      "I design and experiment with cutting-edge machine learning and LLM solutions — from research prototypes to production-ready models — helping businesses gain intelligence, automation, and innovation at scale.",
    items: [
      {
        title: "Model Prototyping",
        description: "(Experimentation, Benchmarking, Fine-Tuning)",
      },
      {
        title: "AI Agents",
        description: "(Autonomous Workflows, Task Automation)",
      },
      {
        title: "Data Insights",
        description: "(Preprocessing, Feature Engineering, Visualization)",
      },
    ],
  },
  
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Zentry",
    description:
      "A comprehensive platform built with Next.js and modern web technologies, featuring advanced functionality and seamless user experience.",
    href: "https://zentry-clone-wheat-six.vercel.app/",
    image: "/assets/projects/zentry.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Node.js" },
    ],
  },
  {
    id: 2,
    name: "Intervue AI",
    description:
      "A revolutionary AI-powered interview platform with real-time voice processing, WebSocket communication, and intelligent conversation analysis.",
    href: "https://intervue-ai-final.vercel.app/",
    image: "/assets/projects/intervueAi.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "WebSocket.io" },
      { id: 3, name: "FastAPI" },
      { id: 4, name: "Python" },
      { id: 5, name: "Voice Recognition" },
    ],
  },
  {
    id: 3,
    name: "Custom SML",
    description:
      "A functional mini-LLM built from scratch using transformer architecture. Features 6 layers, 6 attention heads, 384-dim embeddings with 128-token context window, trained on TinyStories dataset.",
    href: "https://github.com/satyam-mishra-dev/CUSTOM-SML.git",
    image: "/assets/projects/customLLM.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "PyTorch" },
      { id: 3, name: "Transformers" },
      { id: 4, name: "Jupyter" },
      { id: 5, name: "TinyStories" },
    ],
  },
  {
    id: 4,
    name: "Neural Network from Scratch",
    description:
      "A comprehensive implementation of neural networks from scratch, featuring multi-layer perceptron architecture with tanh and softmax activations, demonstrating deep understanding of backpropagation and gradient descent.",
    href: "https://www.kaggle.com/code/satypunk/creating-new-neural-network",
    image: "/assets/projects/neuralNetwork.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "NumPy" },
      { id: 3, name: "Matplotlib" },
      { id: 4, name: "Kaggle" },
      { id: 5, name: "Backpropagation" },
    ],
  },
  {
    id: 5,
    name: "AI Career Coach",
    description:
      "An intelligent career guidance platform powered by AI, helping users navigate their professional journey with personalized insights and recommendations.",
    href: "https://ai-mentor-eta.vercel.app/",
    image: "/assets/projects/aiCareer.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "OpenAI API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 6,
    name: "Neo Care",
    description:
      "A comprehensive healthcare platform built with Next.js, providing innovative solutions for patient care and medical management.",
    href: "https://neo-care-ashen.vercel.app/",
    image: "/assets/projects/neoCare.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/hey_saty_here_/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/satyam-mishra-9329a1329" },
  { name: "GitHub", href: "https://github.com/satyam-mishra-dev" },
];
