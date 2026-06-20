import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function FolderPage() {
  const { category } = useParams();
  const [content, setContent] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let catQuery = category;
    if (category === 'ai-research' || category === 'cybersecurity') catQuery = 'cybersecurity';
    if (category === 'video') catQuery = 'video';
    if (category === 'design') catQuery = 'design';
    if (category === 'about') catQuery = 'about';
    if (category === 'beyond-screen') catQuery = 'beyond-screen';

    axios.get(`/api/content/${catQuery}`).then(res => {
      if (res.data && res.data.length > 0) {
        setContent(res.data[0]);
      } else {
        setContent(null);
      }
    });

    axios.get(`/api/projects/${catQuery}`).then(res => {
      setProjects(res.data);
    });
  }, [category]);

  return (
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-50 flex justify-center items-start pt-16 px-4 overflow-y-auto pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-5xl bg-surface-container-low min-h-[80vh] rounded-xl shadow-xl border border-outline-variant p-8 md:p-12 relative"
      >
        <div className="flex justify-between items-center border-b border-outline-variant pb-4 mb-8">
          <h1 className="font-display-xl-mobile text-display-xl-mobile text-primary capitalize">{category.replace('-', ' ')}</h1>
          <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-4xl">close</span></Link>
        </div>

        <div className="prose prose-stone max-w-none font-body-md text-on-surface">
          {content && content.content && (() => {
            try {
              const parsed = JSON.parse(content.content);
              return parsed.sections.map((sec, idx) => (
                <div key={idx} className="mb-8">
                  <h2 className="font-headline-md text-headline-md text-primary mb-2">{sec.heading}</h2>
                  <p className="text-on-surface-variant leading-relaxed whitespace-pre-wrap">{sec.text}</p>
                </div>
              ));
            } catch(e) {
              return <p>{content.content}</p>;
            }
          })()}
        </div>

        {projects.length > 0 && (
          <div className="mt-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Projects & Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(proj => (
                <div key={proj._id} className="bg-surface rounded-lg overflow-hidden border border-outline-variant shadow-sm hover:shadow-md transition-all group">
                  {proj.thumbnailUrl && <img src={proj.thumbnailUrl} alt={proj.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />}
                  <div className="p-6 relative bg-surface z-10">
                    <h3 className="font-headline-md text-2xl text-primary">{proj.title}</h3>
                    <p className="font-body-md text-on-surface-variant mt-2">{proj.description}</p>
                    {proj.technologies && proj.technologies.length > 0 && (
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {proj.technologies.map(tech => (
                          <span key={tech} className="bg-surface-variant px-2 py-1 text-label-caps font-label-caps rounded text-on-surface-variant">{tech}</span>
                        ))}
                      </div>
                    )}
                    {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-primary underline mt-4 inline-block font-label-caps">View Live →</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
