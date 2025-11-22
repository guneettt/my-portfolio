import React, { useState, useEffect } from 'react';
import { Github, Instagram, Twitter, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeExperience, setActiveExperience] = useState('ur2phd');
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "I just... build things :)";

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const startTyping = () => {
      let index = 0;
      setTypedText('');
      setIsTypingComplete(false);
      
      const typeTimer = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          index++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typeTimer);
          
          // Wait 5 seconds then restart
          setTimeout(() => {
            startTyping();
          }, 5000);
        }
      }, 150);

      return typeTimer;
    };

    const timer = startTyping();
    return () => clearInterval(timer);
  }, []);

  const navigation = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: '01. About', href: '#about' },
    { id: 'experience', label: '02. Experience', href: '#experience' },
    { id: 'work', label: '03. Projects', href: '#work' },
    { id: 'contact', label: '04. Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold" style={{ fontFamily: '"Inter", sans-serif' }}>
                G<span className="text-gray-400">.</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-mono text-sm transition-colors hover:text-white ${
                      activeSection === item.id ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="/resume.pdf"
                  className="ml-4 px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors font-mono text-sm inline-block text-center"
                >
                  Resume
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-gray-400 hover:text-white font-mono text-sm w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                className="block px-3 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors font-mono text-sm mx-3 mt-4 text-center"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Side Social Links - Only show on xl screens and up */}
<div className="fixed left-12 bottom-0 hidden xl:block">
  <div className="flex flex-col items-center space-y-6">

    {/* GitHub */}
    <a
      href="https://github.com/guneettt"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 transform"
    >
      <Github size={22} />
    </a>

    {/* Email */}
    <a
      href="mailto:guneet4@ualberta.ca"
      className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 
                 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm8 7 8-5H4l8 5zm0 
                 2-8-5v10h16V8l-8 5z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/itsguneettt"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 transform"
    >
      <Linkedin size={22} />
    </a>

    <div className="w-px h-20 bg-gray-600"></div>
  </div>
</div>



      {/* Side Email - Only show on xl screens and up */}
      <div className="fixed right-12 bottom-0 hidden xl:block">
        <div className="flex flex-col items-center">
          <a 
            href="mailto:guneet4@ualberta.ca" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 transform font-mono text-sm"
            style={{ writingMode: 'vertical-rl' }}
          >
            guneet4[at]ualberta[dot]ca
          </a>
          <div className="w-px h-20 bg-gray-600 mt-6"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:pl-32 xl:pr-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-5xl">
              <p className="font-mono text-white mb-6 text-lg sm:text-xl">
                Hi, my name is
              </p>
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Guneet.
              </h1>
              <h2
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-500 mb-10 leading-tight"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {typedText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </h2>
              <p
                className="text-gray-300 text-xl max-w-3xl leading-relaxed mb-16"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                I'm a 3rd year Computer Science student at the University of Alberta 
                specializing in building exceptional digital experiences. Currently, 
                I'm focused on learning modern web development and creating projects 
                that solve real-world problems.
              </p>
              <a
                href="#work"
                className="inline-flex items-center px-10 py-5 border border-white text-white rounded hover:bg-white hover:text-black transition-all font-mono text-base hover:-translate-y-1 transform"
              >
                Check out my projects!
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h3
              className="flex items-center justify-center text-2xl font-bold text-white mb-8"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              <span className="font-mono text-white text-lg mr-2">01.</span>
              About Me
              <div className="ml-4 h-px bg-gray-600 flex-1 max-w-xs"></div>
            </h3>

            <div
              className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              <p>
                Hello! I’m Guneet, a Computer Science undergraduate at the University of
                Alberta with a passion for building software that solves real-world
                problems. I first got into programming in 2019, and since then I’ve
                explored everything from mobile apps to full-stack web development,
                machine learning, and even low-level systems like RISC-V assembly.
              </p>

              <p>
                These days, I’m especially focused on creating practical, user-friendly
                applications — whether that’s{' '}
                <span className="text-white font-semibold">scam-call protection with AI</span>,{' '}
                <span className="text-white font-semibold">offline search tools for emergencies</span>, or{' '}
                <span className="text-white font-semibold">cloud-connected survey apps</span>.
                I enjoy tackling challenges that mix creativity with problem-solving and
                love learning new technologies along the way.
              </p>

              <p>
                I’m also diving deeper into{' '}
                <span className="text-white font-semibold">full-stack and cross-platform development</span>,
                while keeping an eye on modern best practices and how to build software
                that’s not just functional, but impactful.
              </p>

              <p className="mb-8">
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-8 max-w-2xl mx-auto">
              {[
                'JavaScript (ES6+)',
                'TypeScript',
                'React',
                'Node.js',
                'React Native',
                'FastAPI',
                'Python',
                'Java',
                'SQL'
              ].map((tech) => (
                <div key={tech} className="flex items-center justify-center">
                  <span className="text-white mr-2">▶</span>
                  <span className="font-mono text-sm text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
<section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
  <div className="max-w-4xl mx-auto">
    <h3 className="flex items-center text-2xl font-bold text-white mb-12" style={{ fontFamily: '"Inter", sans-serif' }}>
      <span className="font-mono text-white text-lg mr-2">02.</span>
      Where I've Worked
      <div className="ml-4 h-px bg-gray-600 flex-1 max-w-sm"></div>
    </h3>
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Tab Navigation - Vertical */}
      <div className="lg:w-1/4">
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l-2 border-gray-600">
          {[
            { id: 'ur2phd', label: 'UR2PhD' },
            { id: 'daylily', label: 'Daylily AI' },
            { id: 'iit-goa', label: 'IIT Goa' },
            { id: 'ualberta', label: 'UAlberta TA' },
            { id: 'natignite', label: 'natIgnite' },
            { id: 'devcon', label: 'DevCon' },
          ].map((company) => (
            <button
              key={company.id}
              onClick={() => setActiveExperience(company.id)}
              className={`px-6 py-4 text-left font-mono text-sm whitespace-nowrap transition-all duration-200 border-l-2 lg:border-l-2 lg:border-b-0 border-b-2 lg:border-b-0 ${
                activeExperience === company.id
                  ? 'text-cyan-400 bg-gray-900/30 border-cyan-400'
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-900/20 border-transparent'
              }`}
            >
              {company.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="lg:w-3/4">
        {activeExperience === 'ur2phd' && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
              UR2PhD Scholar <span className="text-cyan-400">@ University of Alberta</span>
            </h4>
            <p className="text-gray-300 font-mono text-base">Sept 2025 — Present</p>
            <ul className="space-y-4 text-gray-300 text-lg leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Developing Python/C++ tools for TAR/ZIP analysis with content-defined chunking, targeting around 30% duplicate data reduction.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Researching deduplication algorithms with Dr. Paul Lu, culminating in a seminar and project report.
              </li>
            </ul>
          </div>
        )}

        {activeExperience === 'daylily' && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
              Full Stack Developer <span className="text-cyan-400">@ Daylily AI</span>
            </h4>
            <p className="text-gray-300 font-mono text-base">Aug 2025 — Present</p>
            <ul className="space-y-4 text-gray-300 text-lg leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Collaborating with clients to gather requirements and translate them into tailored AI-driven web solutions.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Building and deploying full-stack features to enhance customer engagement and product scalability.
              </li>
            </ul>
          </div>
        )}

        {activeExperience === 'iit-goa' && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
              Research Intern <span className="text-cyan-400">@ IIT Goa</span>
            </h4>
            <p className="text-gray-300 font-mono text-base">May 2025 — July 2025</p>
            <ul className="space-y-4 text-gray-300 text-lg leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Developed 3+ control algorithms for flow battery management, reducing energy loss in simulations by about 25%.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Collaborated on research for programmable flow systems, aiming for future IEEE publication.
              </li>
            </ul>
          </div>
        )}

        {activeExperience === 'ualberta' && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
              Teaching Assistant <span className="text-cyan-400">@ University of Alberta</span>
            </h4>
            <p className="text-gray-300 font-mono text-base">Jan. 2025 — Present</p>
            <ul className="space-y-4 text-gray-300 text-lg leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Graded 400+ assignments and led 35 labs, contributing to a 15% improvement in student averages.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Cut grading turnaround from 4 to about 1.5 days using Python automation scripts.
              </li>
            </ul>
          </div>
        )}

        {activeExperience === 'natignite' && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
              1st Place Winner <span className="text-cyan-400">@ natIgnite Hackathon</span>
            </h4>
            <p className="text-gray-300 font-mono text-base">August 2025</p>
            <ul className="space-y-4 text-gray-300 text-lg leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Built TrustLine, a real-time deepfake scam-call detector with React Native and FastAPI.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Won 1st place and $6,000 in seed funding at the Network for Applied Technology (NAT) AgeTech hackathon.
              </li>
            </ul>
          </div>
        )}

        {activeExperience === 'devcon' && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
              2nd Place Winner <span className="text-cyan-400">@ DevCon Hackathon</span>
            </h4>
            <p className="text-gray-300 font-mono text-base">March 2025</p>
            <ul className="space-y-4 text-gray-300 text-lg leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Built RideSafe, a real-time transit safety app with ViT-based threat detection using React Native & Flask.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-4 mt-1 text-xl">▶</span>
                Earned 2nd place and a $1,000 cash prize at Edmonton Unlimited’s DevCon hackathon.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
</section>

        {/* Work Section */}
<section id="work" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
  <div className="max-w-6xl mx-auto">
    <h3 className="flex items-center text-2xl font-bold text-white mb-8" style={{ fontFamily: '"Inter", sans-serif' }}>
      <span className="font-mono text-white text-lg mr-2">03.</span>
      Some Things I've Built
    </h3>
    <div className="grid gap-12">
            {[
        {
          title: "Signal Vault",
          description:
            "An offline-first search engine designed for emergency scenarios when internet connectivity is down. Keeps 100+ key terms cached locally and achieves ~90% faster search responses via an optimized localStorage caching layer.",
          tech: ["Python", "JavaScript", "HTML/CSS", "Node.js"],
          status: "In Development",
          demoUrl: "#", // Add your live demo URL here when deployed
          githubUrl: "https://github.com/guneettt/signal-vault"
        },
        {
          title: "SWC Automotive Platform",
          description:
            "A comprehensive automotive business website with 15+ dynamic pages for inventory, services, and lead capture. Built with modern React architecture and a Firebase-backed CMS to let non-technical staff update content in real time.",
          tech: ["React", "Tailwind CSS", "Firebase"],
          status: "Client Project",
          demoUrl: "#", // Add your live demo URL here
          
        },
        {
          title: "Bias Visualizer Chrome Extension",
          description:
            "A Chrome extension that compares trending topics across Google Trends and Reddit to visualize how online conversations differ by platform. Backed by a FastAPI service capable of processing hundreds of queries per second for real-time analysis.",
          tech: ["JavaScript", "HTML/CSS", "FastAPI", "Python"],
          demoUrl: "#", // Add your live demo URL here
          githubUrl: "https://github.com/guneettt/bias-visualizer" 
        },
        {
          title: "Photorealistic 3D Ray Tracer",
          description:
            "A ray tracing engine written from scratch in C, supporting multiple geometric primitives and realistic lighting. Optimized ray–object intersection logic renders frames in under 20ms with clean Makefile builds.",
          tech: ["C", "Makefile", "Computer Graphics", "Linear Algebra"],
          demoUrl: "#", // Add link to sample renders / README
          
        },
        {
          title: "Scalable Tweet Analytics Engine",
          description:
            "A high-throughput analytics system for large tweet datasets using MongoDB and Python. Custom schemas and batch-processing pipelines support efficient storage, filtering, and aggregation on tens of thousands of records.",
          tech: ["Python", "SQL", "MongoDB", "JSON", "Data Processing"],
          demoUrl: "#", // Add your live demo URL here
          
        },
        {
          title: "TrustLine - AI Fraud Detection",
          description:
            "An award-winning mobile app that detects deepfake scam calls in real time using machine learning. Built with React Native and FastAPI to deliver accessible scam-call protection for older adults and caregivers.",
          tech: ["React Native", "FastAPI", "Machine Learning", "Audio Processing"],
          status: "Award Winner",
          demoUrl: "#", // Add your live demo / pitch
          githubUrl: "https://github.com/WanderingWalnut/Trustline" 
        },
        {
          title: "RideSafe - Transit Safety",
          description:
            "A real-time transit safety app that uses Vision Transformer (ViT)–based threat detection to monitor live video feeds and trigger alerts. Built during DevCon using React Native and Flask as a fast proof-of-concept for safer public transit.",
          tech: ["React Native", "Flask", "Computer Vision", "Python"],
          status: "Hackathon Project",
          status: "2nd Place @ DevCon",
          demoUrl: "#", // Add demo / video link
          githubUrl: "https://github.com/mikejattu/RideSafe"
        },
                {
          title: "Whimsy",
          description:
            "A collaborative Android social media app enabling mood-based posts, interactive comments, and real-time emotional feeds. Features a privacy-aware following system, editable mood journals, and an interactive mood map with filters by time, user, or location. Integrated DALL·E API to generate creative mood-themed images and boost engagement.",
          tech: ["Java", "Android Studio", "Firebase", "DALL·E API"],
          status: "Group Project",
          demoUrl: "#", // add link if you deploy a demo
          
        },

      ].map((project, index) => {
        return (
          <div key={index} className="group relative">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-xl font-semibold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {project.title}
                  </h4>
                  {project.status && (
                    <span className="text-xs font-mono bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded">
                      {project.status}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    title="GitHub Repository"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <p className="text-gray-300 mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-sm text-gray-300 bg-gray-800 border border-gray-600 px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-white mb-4">04. What's Next?</p>
            <h3
              className="text-4xl font-bold text-white mb-6"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Get In Touch
            </h3>
            <p
              className="text-gray-300 text-lg mb-8 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              I'm currently looking for internship opportunities and am always interested 
              in collaborating on interesting projects. Whether you have an opportunity, 
              a question, or just want to say hi, I'd love to hear from you!
            </p>
            <a
              href="mailto:guneet4@ualberta.ca"
              className="inline-flex items-center px-8 py-4 border border-white text-white rounded hover:bg-white hover:text-black transition-all font-mono text-sm hover:-translate-y-1 transform"
            >
              Say Hello
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center bg-black">
          <p className="text-gray-400 font-mono text-sm">Built by Guneet</p>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
