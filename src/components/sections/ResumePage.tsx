'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Github,
  Globe,
  Mail,
  Phone,
  Download,
  Briefcase,
  Award,
  GraduationCap,
  Wrench,
  User,
  Star,
  Users,
  Building,
  HardHat,
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const professionalSummary =
  'Self-taught developer, builder, and business owner with 15+ years of experience in logistics, operations, and tech innovation. Creator of dozens of full-stack projects across voice AI, logistics forms, business portfolios, CRM platforms, and community tools. Combines hands-on blue-collar experience with advanced AI and automation development. Comfortable on the road, in the field, or writing code in the terminal.';

const experiences = [
  {
    role: 'Founder / Full-Stack Developer',
    company: 'RapidWebDevelop LLC / Agent Lee – Milwaukee, WI (2022 – Present)',
    items: [
      'Developed 30+ repositories including: AgentLee3 (AI voice assistant), LEECRM, LEEWAYSTANDARDSdocs (LMS), and various business tools.',
      'Built Agent Lee AI System using React, FastAPI, & Docker.',
      'Designed gamified front-end LMS platforms.',
      'Forked and contributed to GPT-engineer, BitNet, Whisper.'
    ],
  },
   {
    role: 'Owner / Fleet Manager',
    company: 'Carriers Logistics LLC – Milwaukee, WI (2008 – Present)',
    items: [
        'Created logistics/delivery service.',
        'Built internal tracking tools.',
        'Organized donation drives.'
    ],
  },
  {
    role: 'Night Driver Supervisor',
    company: 'Crothall Laundry Services – Oak Creek, WI (2010 – 2014)',
    items: [
        'Managed industrial delivery routes.',
        'Oversaw fleet maintenance.'
    ],
  },
  {
    role: 'Senior Area Manager',
    company: 'International Profit Associates – Buffalo Grove, IL (2004 – 2007)',
    items: [
      'Led B2B business dev & training.',
    ],
  },
  {
    role: 'Landscape Crew Manager',
    company: 'Nevels Joe Landscape Co. – Grafton, WI (2001 – 2004)',
    items: [
        'Managed team schedules and design.',
    ],
  },
];

const projects = [
  {
    title: 'LEEWAY Standards Docs',
    description: 'CDL & Logistics LMS documentation portal',
    link: 'https://4citeb4u.github.io/LEEWAYSTANDARDSdocs/',
  },
  {
    title: 'Always Trucking & Loading LMS',
    description: 'Full dispatch and CDL training portal',
    link: 'https://alwaystruckingandloading.com',
  },
  {
    title: 'Auto Tire Shop',
    description: 'Auto service shop interface',
    link: 'https://4citeb4u.github.io/Auto-Tireshop/',
  },
  {
    title: 'Investor Pitch',
    description: 'AI-narrated investor pitch for RapidWebDevelop',
    link: 'https://4citeb4u.github.io/RapidWebDevelopLLCInvestorPitchDeck/',
  },
  {
    title: 'Leola’s Library',
    description: 'Book reader and inventory platform',
    link: 'https://4citeb4u.github.io/leolasliabrary/',
  },
  {
    title: 'The Waterhole Project',
    description: 'Community engagement and resource directory',
    link: 'https://4citeb4u.github.io/Thewaterholeprojectt/',
  }
];

const skills = {
  'Frontend': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  'Backend': ['Python', 'FastAPI', 'Node.js', 'Docker', 'Shell'],
  'AI & Voice': ['Gemini 2.5', 'Whisper', 'LiveKit', 'GPT-engineer', 'LLaMA'],
  'Tools': ['GitHub', 'Trello', 'Peachtree', 'EmailJS', 'Slack', 'Microsoft Office'],
};

const certifications = [
  'Class A CDL (H, N, P, T Endorsements)',
  'OSHA 10 Certified',
  'CPMM (Certified Property Maintenance Manager)',
  'FEMA IS-100.C',
  'DOT/TSI Compliance Training',
  'CPR/AED Certified',
  'TWIC Card – Federal Credentialing'
];

const awards = [
    'City of Milwaukee Fleet Maintenance Commendation',
    'Public Works Safety Excellence Award',
    'Milwaukee Youth Mentorship Leader',
    'TWIC Certified, DOT/FEMA Compliance',
];

const communityRoles = [
    'Youth Mentor: Career guidance for at-risk youth',
    'Church Volunteer: Food drives, event coordination',
    'Neighborhood Organizer: Local clean-ups and drives',
]

const education = {
  degree: 'Associate of Applied Science – Business',
  college: 'Bryant & Stratton College',
  details: 'GPA: 3.8',
  focus: 'Leadership, Project Management, Urban Studies, Logistics & Supply Chain'
};


export function ResumePage() {
    const handleDownloadPdf = async () => {
    const content = document.getElementById('resume-content');
    const downloadButton = document.getElementById('download-button');

    if (!content) {
      console.error('Resume content element not found');
      return;
    }
    
    if (downloadButton) downloadButton.style.display = 'none';

    try {
      const canvas = await html2canvas(content, {
        scale: 2, 
        useCORS: true,
        logging: true,
        windowWidth: content.scrollWidth,
        windowHeight: content.scrollHeight,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'letter',
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      const ratio = canvasWidth / pdfWidth;
      const totalPdfHeight = canvasHeight / ratio;
      
      let position = 0;
      let heightLeft = totalPdfHeight;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, totalPdfHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = position - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, totalPdfHeight);
        heightLeft -= pdfHeight;
      }
      
      pdf.save('Leonard-Lee-Resume.pdf');

    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      if (downloadButton) downloadButton.style.display = 'block';
    }
  };


  return (
    <div id="resume-content" className="bg-white text-gray-800 p-4 sm:p-12 rounded-lg shadow-2xl printable-area" style={{ fontSize: '90%' }}>
      <header className="flex flex-col sm:flex-row items-center gap-8 mb-12 text-center sm:text-left">
        <Image
          src="https://placehold.co/120x120.png"
          alt="Leonard J. Lee"
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-teal-500/30 shadow-lg"
          data-ai-hint="professional portrait man"
        />
        <div className="w-full">
          <h1 className="text-5xl font-headline text-gray-800">Leonard J. Lee</h1>
          <p className="text-xl text-teal-600 font-semibold mt-1">
            Founder, RapidWebDevelop LLC | Creator of Agent Lee
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm mt-4 text-gray-600">
            <a href="mailto:LeonardLee6@outlook.com" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <Mail size={14} /> LeonardLee6@outlook.com
            </a>
            <a href="tel:+14143038580" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <Phone size={14} /> (414) 303-8580
            </a>
            <a href="https://github.com/4citeB4U" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <Github size={14} /> github.com/4citeB4U
            </a>
            <a href="https://rapidwebdevelop.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <Globe size={14} /> rapidwebdevelop.com
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <h2 className="flex items-center gap-3 text-2xl text-teal-700 border-b-2 border-teal-100 pb-2 mb-4 mt-6">
            <User size={24} /> Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {professionalSummary}
          </p>
        </section>

        <section className="section mb-10 pb-5">
           <h2 className="flex items-center gap-3 text-2xl text-teal-700 border-b-2 border-teal-100 pb-2 mb-4 mt-6">
            <HardHat size={24} /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {projects.map((project, idx) => (
               <div key={idx} className="project-card border border-gray-200 p-2 rounded-lg bg-gray-50/50 hover:shadow-md transition-shadow duration-300 ease-in-out">
                <h3 className="font-semibold text-teal-600 text-lg">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline">
                  Visit Site &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>
        
        <section className="section experience-section">
          <h2 className="flex items-center gap-3 text-2xl text-teal-700 border-b-2 border-teal-100 pb-2 mb-4 mt-6">
            <Briefcase size={24} /> Experience
          </h2>
          <div className="space-y-4 mt-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`experience-card border border-gray-200 p-2 rounded-lg bg-gray-50/50 ${exp.role === 'Landscape Crew Manager' ? 'text-[90%]' : ''}`}>
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-md text-gray-600 mb-2">{exp.company}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-2">
                    {exp.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section skills-section">
          <h2 className="flex items-center gap-3 text-2xl text-teal-700 border-b-2 border-teal-100 pb-2 mb-4 mt-6">
            <Wrench size={24} /> Technical Skills
          </h2>
          <ul className="columns-1 md:columns-2 list-disc list-inside space-y-2">
            {Object.entries(skills).map(([category, skillList]) => (
              <li key={category}>
                <strong className="font-semibold text-gray-800">{category}:</strong> {skillList.join(', ')}
              </li>
            ))}
          </ul>
        </section>

        <section className="section certifications-section">
          <h2 className="flex items-center gap-3 text-2xl text-teal-700 border-b-2 border-teal-100 pb-2 mb-4 mt-6">
            <Award size={24} /> Certifications
          </h2>
          <ul className="columns-1 md:columns-2 list-disc list-inside space-y-2">
            {certifications.map((item, idx) => (
              <li key={idx} className="mb-1">{item}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="flex items-center gap-3 text-2xl text-teal-700 border-b-2 border-teal-100 pb-2 mb-4 mt-6">
            <Star size={24} /> Awards & Recognition
          </h2>
          <ul className="columns-1 md:columns-2 list-disc list-inside space-y-2">
            {awards.map((item, idx) => (
              <li key={idx} className="mb-1">{item}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="flex items-center gap-3 text-2xl text-teal-700 border-b-2 border-teal-100 pb-2 mb-4 mt-6">
            <Users size={24} /> Community Roles
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {communityRoles.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        
        <section className="section">
          <h2 className="flex items-center gap-3 text-2xl text-teal-700 border-b-2 border-teal-100 pb-2 mb-4 mt-6">
            <GraduationCap size={24} /> Education
          </h2>
          <p className="text-lg">
            <strong className="text-gray-900">{education.degree}</strong>
            <br />
            <span className="text-gray-600">
              {education.college} | {education.details}
            </span>
            <br />
            <em className="text-gray-500 text-sm">{education.focus}</em>
          </p>
        </section>
      </main>

      <footer id="download-button" className="mt-12 text-center no-print">
         <Button onClick={handleDownloadPdf} size="lg" className="bg-teal-600 text-white hover:bg-teal-700">
            <Download className="mr-2" />
            Download / Print Resume
        </Button>
      </footer>
    </div>
  );
}
