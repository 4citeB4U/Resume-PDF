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
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const professionalSummary =
  'Self-taught developer, builder, and business owner with 15+ years of experience in logistics, operations, and tech innovation. Creator of dozens of full-stack projects across voice AI, logistics forms, business portfolios, CRM platforms, and community tools. Combines hands-on blue-collar experience with advanced AI and automation development. Comfortable on the road, in the field, or writing code in the terminal.';

const experiences = [
  {
    role: 'Founder / Full-Stack Developer',
    company: 'RapidWebDevelop LLC / Agent Lee – Milwaukee, WI (2022 – Present)',
    items: [
      'Developed 30+ repositories including:',
      'AgentLee3 / AgentLee2 / AgentX23: Modular AI voice assistant (LiveKit, Gemini, Whisper)',
      'LEECRM: JavaScript-based CRM for small businesses',
      'LEEWAYSTANDARDSdocs: HTML-based LMS for trucking/logistics',
      'TruckForms / contractrwd / AlwaysFormTheBest: HTML forms for contracts & inspections',
      'LeonardsBusinessCard / damionalwaystruckingcard / StatusCPRTraining: Digital business cards',
      'TheMomentum / TheInfluencer / TheBrand: Branding sites',
      'leolasliabrary / library-app: Book inventory and reading apps',
      'DirectHealthCare2U: Private shell-based CRM system',
      'Built Agent Lee AI System using React, FastAPI, Docker',
      'Designed gamified front-end LMS platforms',
      'Forked and contributed to GPT-engineer, BitNet, Whisper',
    ],
  },
  {
    role: 'Owner / Fleet Manager',
    company: 'Carriers Logistics LLC – Milwaukee, WI (2008 – Present)',
    items: [
      'Created logistics/delivery service',
      'Built internal tracking tools',
      'Organized donation drives',
    ],
  },
  {
    role: 'Night Driver Supervisor',
    company: 'Crothall Laundry Services – Oak Creek, WI (2010 – 2014)',
    items: ['Managed industrial delivery routes', 'Oversaw fleet maintenance'],
  },
  {
    role: 'Senior Area Manager',
    company: 'International Profit Associates – Buffalo Grove, IL (2004 – 2007)',
    items: ['Led B2B business dev & training'],
  },
  {
    role: 'Landscape Crew Manager',
    company: 'Nevels Joe Landscape Co. – Grafton, WI (2001 – 2004)',
    items: ['Managed team schedules and design'],
  },
];

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  Backend: ['Python', 'FastAPI', 'Node.js', 'Docker', 'Shell'],
  'AI & Voice': ['Gemini 2.5', 'Whisper', 'LiveKit', 'GPT-engineer', 'LLaMA'],
  Tools: ['GitHub', 'Trello', 'Peachtree', 'EmailJS', 'Slack', 'Microsoft Office'],
};

const certifications = [
  'Class A CDL (H, N, P, T Endorsements)',
  'OSHA 10 Certified',
  'CPMM (Certified Property Maintenance Manager)',
  'FEMA IS-100.C',
  'DOT/TSI Compliance Training (SMS Awareness, Distracted Driving, Sleep Apnea, Rail Nomenclature)',
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
  details: 'Graduated August 2019 | GPA: 3.8',
  focus: 'Leadership, Project Management, Urban Studies, Logistics & Supply Chain'
};

export function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white text-gray-800 p-4 sm:p-12 rounded-lg shadow-2xl printable-area">
      <header className="flex flex-col sm:flex-row items-center gap-8 mb-12 text-center sm:text-left">
        <Image
          src="https://placehold.co/120x120.png"
          alt="Leonard J. Lee"
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
          data-ai-hint="professional portrait man"
        />
        <div className="w-full">
          <h1 className="text-5xl font-headline">Leonard J. Lee</h1>
          <p className="text-xl text-primary font-semibold mt-1">
            Milwaukee, WI
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm mt-4 text-gray-600">
            <a
              href="mailto:LeonardLee6@outlook.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={14} /> LeonardLee6@outlook.com
            </a>
            <a
              href="tel:+14143038580"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={14} /> (414) 303-8580
            </a>
            <a
              href="https://github.com/4citeB4U"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github size={14} /> github.com/4citeB4U
            </a>
            <a
              href="https://rapidwebdevelop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Globe size={14} /> rapidwebdevelop.com
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <h2 className="flex items-center gap-3">
            <User size={28} /> Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {professionalSummary}
          </p>
        </section>

        <section className="section">
          <h2 className="flex items-center gap-3">
            <Briefcase size={28} /> Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
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

        <section className="section">
          <h2 className="flex items-center gap-3">
            <Wrench size={28} /> Technical Skills
          </h2>
          <ul>
            {Object.entries(skills).map(([category, skillList]) => (
              <li key={category}>
                <strong>{category}:</strong> {skillList.join(', ')}
              </li>
            ))}
          </ul>
        </section>

         <section className="section">
          <h2 className="flex items-center gap-3">
            <Award size={28} /> Certifications
          </h2>
          <ul className="columns-1 md:columns-2">
            {certifications.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="flex items-center gap-3">
            <Star size={28} /> Awards & Recognition
          </h2>
          <ul className="columns-1 md:columns-2">
            {awards.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="flex items-center gap-3">
            <Users size={28} /> Community Roles
          </h2>
          <ul>
            {communityRoles.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        
        <section className="section">
          <h2 className="flex items-center gap-3">
            <GraduationCap size={28} /> Education
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

      <footer className="mt-12 text-center no-print">
        <Button onClick={handlePrint} size="lg">
          <Download className="mr-2" />
          Download / Print Resume
        </Button>
      </footer>
    </div>
  );
}
