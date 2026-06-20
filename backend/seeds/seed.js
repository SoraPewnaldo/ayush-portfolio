require('dotenv').config();
const mongoose = require('mongoose');
const Content = require('../models/Content');
const Project = require('../models/Project');
const Resume = require('../models/Resume');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ayush_os')
  .then(() => console.log('MongoDB Connected to seed...'))
  .catch(err => console.log(err));

const seedDB = async () => {
  try {
    // Clear existing
    await Content.deleteMany({});
    await Project.deleteMany({});
    await Resume.deleteMany({});

    // Seed Resume
    await Resume.create({
      fileUrl: 'https://res.cloudinary.com/demo/image/upload/sample.pdf',
      version: '1.0'
    });

    // Seed Content
    await Content.create([
      {
        title: 'About Me',
        slug: 'about-me',
        category: 'about',
        content: JSON.stringify({
          sections: [
            { heading: 'Overview', text: 'Cybersecurity student, AI researcher, and creative leader exploring the intersections of technology and human narrative.' },
            { heading: 'Introduction', text: 'My journey began with an innate curiosity to understand how things work beneath the surface. What started as exploring lines of code quickly evolved into a deep passion for cybersecurity and AI research. Today, I am focused on uncovering vulnerabilities and building secure, intelligent systems for an interconnected world.' },
            { heading: 'Vitals', text: 'Ayush Dakwal\nDegree: B.Tech CSE (Cybersecurity)\nLocation: NIIT University\nCurrent Focus: Digital Forensics' },
            { heading: 'What I Build', text: 'Cybersecurity Engineering, Digital Forensics Research, Secure AI Systems, Zero Trust Security, Creative Digital Experiences' },
            { heading: 'Beyond Technology', text: 'When I step away from the keyboard, I step onto the stage. Theatre and event management are my playgrounds for understanding human emotion and logistical chaos.' }
          ]
        })
      },
      {
        title: 'Cybersecurity & Research',
        slug: 'academic-profile',
        category: 'academic',
        content: JSON.stringify({
          sections: [
            { heading: 'Focus', text: 'I am a Cybersecurity student focused on building secure systems and exploring how artificial intelligence can strengthen digital trust.' },
            { heading: 'Research Philosophy', text: 'Through research and hands-on projects, I have worked on deepfake detection, digital evidence analysis, Zero Trust Architecture, and intelligent trust-scoring systems. My approach combines academic research with practical engineering, allowing me to explore both the theory and implementation of secure technologies. My interests lie at the intersection of cybersecurity, digital forensics, machine learning, and cloud security.' },
            { heading: 'Current Focus', text: 'Building trustworthy systems that can detect, analyze, and respond to modern cybersecurity challenges while advancing research in AI-powered digital forensics.' },
            { heading: 'Core Competencies', text: 'Secure AI Systems, Cloud Security, Threat Analysis, Computer Vision, Encryption' }
          ]
        })
      },
      {
        title: 'Digital Design Studio',
        slug: 'freelance-profile',
        category: 'freelance',
        content: JSON.stringify({
          sections: [
            { heading: 'Vision', text: 'Create visuals that people remember. Design is more than just visual aesthetics—it is the intentional orchestration of emotions and utility. As Digital Design Lead, Ayush crafts experiences that bridge the gap between abstract ideas and tangible impact.' },
            { heading: 'Philosophy', text: '1. CLARITY: Removing the noise to let the message speak with unwavering focus.\n2. PURPOSE: Every visual element must serve a functional objective or a narrative beat.\n3. IMPACT: Designing for longevity, ensuring the work resonates far beyond the first glance.' },
            { heading: 'Note to self', text: '"Functionality should never be a compromise for beauty, nor beauty for functionality. They are the same breath."' }
          ]
        })
      },
      {
        title: 'Beyond the Screen',
        slug: 'extracurricular-profile',
        category: 'extracurricular',
        content: JSON.stringify({
          sections: [
            { heading: 'Overview', text: 'While technology is a major part of my journey, some of my most valuable experiences have come from activities beyond academics. Through theatre, dance, event management, and cultural competitions, I have developed confidence, creativity, teamwork, and leadership skills.' },
            { heading: 'Rangmanch NU & Leadership', text: 'As Secretary of Rangmanch NU, I have been involved in organizing events, coordinating teams, and helping create meaningful experiences for participants and audiences. Performing on stage has taught me communication, adaptability, and the ability to connect with people from diverse backgrounds.' },
            { heading: 'Closing Sentiment', text: '"These experiences remind me that growth happens not only through code and research, but also through creativity, collaboration, and human connection."' }
          ]
        })
      }
    ]);

    // Seed Projects
    await Project.create([
      {
        title: 'Digital Forensics',
        slug: 'digital-forensics',
        description: '4 projects • 12 research papers',
        category: 'academic',
        subcategory: 'Research',
        thumbnailUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLsVHjv_pq9KPcACRJhZ2vT2aS5rxosuJ5koF37orSWoaOq5mvmj0AkmhOjQmQtNSAxNA8AoBFBt8CyCRWVdT-g_hX6xup6gZzwokqwqdFxpEC_vBE9ugkcoX4BxFWbLTcYZ6cS5qxKR1vOQ6sU8m2y9s-Xo79UXDLnhH4zG1EJYVgAQlOo1ohJopaiSYmKdoXzv6lVGX2mhuj2zqoXLcbTQKclOnKuWLSWMu_GugT3ZXfLHwEEvVYbk5WQK',
        mediaUrls: [],
        featured: true,
        order: 1
      },
      {
        title: 'Deepfake Detection',
        slug: 'deepfake-detection',
        description: 'Machine Learning • Vision',
        category: 'academic',
        subcategory: 'Machine Learning',
        thumbnailUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLsVHjv_pq9KPcACRJhZ2vT2aS5rxosuJ5koF37orSWoaOq5mvmj0AkmhOjQmQtNSAxNA8AoBFBt8CyCRWVdT-g_hX6xup6gZzwokqwqdFxpEC_vBE9ugkcoX4BxFWbLTcYZ6cS5qxKR1vOQ6sU8m2y9s-Xo79UXDLnhH4zG1EJYVgAQlOo1ohJopaiSYmKdoXzv6lVGX2mhuj2zqoXLcbTQKclOnKuWLSWMu_GugT3ZXfLHwEEvVYbk5WQK',
        mediaUrls: [],
        featured: true,
        order: 2
      },
      {
        title: 'Zero Trust Architecture',
        slug: 'zero-trust-arch',
        description: 'Access Control • Cloud',
        category: 'academic',
        subcategory: 'Cloud Security',
        thumbnailUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLsVHjv_pq9KPcACRJhZ2vT2aS5rxosuJ5koF37orSWoaOq5mvmj0AkmhOjQmQtNSAxNA8AoBFBt8CyCRWVdT-g_hX6xup6gZzwokqwqdFxpEC_vBE9ugkcoX4BxFWbLTcYZ6cS5qxKR1vOQ6sU8m2y9s-Xo79UXDLnhH4zG1EJYVgAQlOo1ohJopaiSYmKdoXzv6lVGX2mhuj2zqoXLcbTQKclOnKuWLSWMu_GugT3ZXfLHwEEvVYbk5WQK',
        mediaUrls: [],
        featured: true,
        order: 3
      },
      {
        title: 'Event Branding',
        slug: 'event-branding',
        description: 'Identity system for The Infinite Canvas',
        category: 'freelance',
        subcategory: 'Branding',
        thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0D7iVmQo-yd7zAh9Je4ftx_nPmPijOu_C_HUI6AyAoJW2GrL4NEntfgcvDk8UaLSwN4ieq9d0QeR2sh80V2WwnCGruTC1y3Fja_jt5S17_rhQeXGcLeZswAf6YaSyE1pa-ZfLgqXmsEroXuGbJ44lHlxmd1eDzlwcj3O7CpKnV3B8Qy5Q4HByFibJ3NG1GSMzecpOUtvXO0sph-bJSdpDAZ4xuqHjZwP88q5EvHnAhX2zgYIjPti838c15UxknXUVvWWs4Kj5EFRZ',
        mediaUrls: [],
        featured: true,
        order: 1
      },
      {
        title: 'Social Media Campaigns',
        slug: 'social-media-campaigns',
        description: 'Strategic visual storytelling for modern brands across digital touchpoints.',
        category: 'freelance',
        subcategory: 'Social Media',
        thumbnailUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLuWU8YHT3iB2PSZxCYELFpuuACPeUbfNakACtV7mxXfBQ27Ij8X4FCwh6HbhCE7cLhpR_THy-Q4ELbiQsSpxwkLgCmQhJnN1Zn8TZGmzKKmed10XBwF7Q76Iyk37Qs5QnDFYpAl3tUBw8Bx92MfFu2e_vI6-5B3CBcyTOlvyP-AiGBuNvz5hLxIJe5gePuon3JSgBc3BxKL1X29vxNVuaUinMKvsERWpMMsJEQhzkaTMryZeLBW9v3OM_wK',
        mediaUrls: [],
        featured: true,
        order: 2
      },
      {
        title: 'Poster Design',
        slug: 'poster-design',
        description: 'Swiss-inspired typography layout',
        category: 'freelance',
        subcategory: 'Print Design',
        thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaKeTtnl_gYO5aj8hmBVv9ecg3F9Dn_vcdPR0lUoHPxjHtoCiUJXPFcaeZ2CSxTI70j0k_x6CvKK4YPTUo1IN21NgMafxTTPpQGJLfQfVSsr_9-GR9fh7HU2Eijw1UMtKDySvNPvVS1_doYjOop5KjIXk57kQWNCqq1zynZX3r5FPnczpwlV2OhYkFI5Oha0klJsrx7dEu9ape8VqFaGmJA_9XezmWLZB_jDzAnqsPQ9k0cNV3WpI7gR2qAEM7YanEOQycOLjOxuXx',
        mediaUrls: [],
        featured: false,
        order: 3
      },
      {
        title: 'Theatre Performances',
        slug: 'theatre-performances',
        description: 'Acting, scripting and performing in theatre plays.',
        category: 'extracurricular',
        subcategory: 'Theatre',
        thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp_dZM4NvJqmYptF6S2xZ_SF1gC6Uts2y3Ic_2yDVEgrYlsS3FFwmgUpxgcDKrjXJ9jBDMb3QhavFQDnLbqwneGN0fT_QUSXWOKBkNIYzyl9hKnisZ864D7ozFvyPgrTvmVY_1EWkkF9yo8ciS-X5jEEfJWxld7jJcsjOjy_Gd9zWFdCU5LsCl02TxZi5vA3ziPTuB6Mk41hYRq51cLDxk3o1VaV60dZXr0k04etSe3S4q4Ujcqgex5QIUv2emLY0-BLmc0JWFYwOh',
        mediaUrls: [],
        featured: true,
        order: 1
      },
      {
        title: 'Nukkad Natak',
        slug: 'nukkad-natak',
        description: 'Street play performances driving social awareness.',
        category: 'extracurricular',
        subcategory: 'Street Play',
        thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj4d3F1jMquHdliQ6r030NLgl13wLQ8btu0PzN7HDPwbiAI2jXGg4Itz_ZeR5L7VWDm-maXOAdMhMEFsGe17Q2P8VX2EFRODchW1uvOr30-hk7LfLeSMT4sdJ1HwcXtA3h6Ri2i1FPHM_7_FjgESfBZy3NC7ZGNuGcENztD-wOh7T_VvbZUTENqRUV9YFNvCytFtc6fOIBgPnHQYtw22HWNVPE3f4cG8sDHBUYN53lrwzb8OmTWk3EIhicTDcKAxlejEDbV03OXZFp',
        mediaUrls: [],
        featured: true,
        order: 2
      },
      {
        title: 'Event Management',
        slug: 'event-management',
        description: 'Organizing the chaos.',
        category: 'extracurricular',
        subcategory: 'Leadership',
        thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGPicqjnJ8W_JtvlutE7o5IhzBUToJfmSXtvn3WMFgJgyOnnOTOrfmcO5EJFv6hqD05M7wb89w-Ed2ouwxoFqgPA4h2epBtMno2GJQVM_lagvQHiC74DRZ-3ZwY-RMwBXOC8O1cQo9HXSf748SwAzoaG-IJyx7jrhgmkHW-82XF2kCJQ2x_P6dwWxi28knmSo-oYyS_anrhQ-XLU45rb2lbyfvr7rqj_DsIJPLhNsEHlquc2-LOXRkcd3ZxVWo3IQCDu107Bx-ZEvk',
        mediaUrls: [],
        featured: false,
        order: 3
      }
    ]);

    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
