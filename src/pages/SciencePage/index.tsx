import React from 'react';
import ResearchSection from './components/ResearchSection';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import { journalingResearch, aiResearch } from './data/research';
import { stats, testimonials } from './data/stats';

export default function SciencePage() {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black to-purple-900/20">
      {/* Hero Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            The Science Behind Mendley
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
            Mendley integrates advanced AI with proven therapeutic methods and evidence-based journaling 
            practices to empower personal transformation and mental well-being.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-16 z-40 bg-black/80 backdrop-blur-sm py-3 border-y border-gray-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <ul className="flex space-x-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {['Research', 'Impact', 'Process', 'Collaborate'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Research Sections */}
      <div id="research">
        <ResearchSection
          title="The positive effects of journaling are well studied"
          subtitle="Decades of research has shown that expressive writing can significantly improve mental health and well-being."
          items={journalingResearch}
          expandedSection={expandedSection}
          onToggleSection={setExpandedSection}
        />

        <ResearchSection
          title="The positive effects of conversational AI are being studied now"
          subtitle="Recent research supports the effectiveness of conversational agents in mental health care."
          items={aiResearch}
          expandedSection={expandedSection}
          onToggleSection={setExpandedSection}
        />
      </div>

      {/* Stats Section */}
      <div id="impact">
        <StatsSection stats={stats} testimonials={testimonials} />
      </div>

      {/* Process Section */}
      <div id="process">
        <ProcessSection />
      </div>

      {/* Collaborate Section */}
      <section id="collaborate" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Collaborate with Us</h2>
          <p className="text-gray-300 text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            We continue to work closely with mental health professionals to refine and enhance Mendley. 
            Join us in shaping the future of mental health care.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-base font-medium transition-colors">
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
}