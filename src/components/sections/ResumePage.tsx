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
  HeartHandshake,
  Sprout,
  Star,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const professionalSummary =
  'Visionary technologist and infrastructure leader with 20+ years spanning software, logistics, city operations, and AI development. Creator of the LEEWAY™ framework and Agent Lee, a voice-powered AI assistant. Adept in React, Python, Docker, heavy equipment ops, and real-world logistics architecture.';

const projects = [
  {
    title: 'LEEWAY Standards Docs',
    description: 'CDL & Logistics LMS documentation portal',
    url: 'https://4citeb4u.github.io/LEEWAYSTANDARDSdocs/',
  },
  {
    title: 'Always Trucking & Loading LMS',
    description: 'Full dispatch and CDL training portal',
    url: 'https://alwaystruckingandloading.com',
  },
  {
    title: 'Auto Tire Shop',
    description: 'Auto service shop interface',
    url: 'https://4citeb4u.github.io/Auto-Tireshop/',
  },
  {
    title: 'Investor Pitch',
    description: 'AI-narrated investor pitch for RapidWebDevelop',
    url: 'https://4citeb4u.github.io/RapidWebDevelopLLCInvestorPitchDeck/',
  },
  {
    title: 'Leola’s Library',
    description: 'Book reader and inventory platform',
    url: 'https://4citeb4u.github.io/leolasliabrary/',
  },
  {
    title: 'The Waterhole Project',
    description: 'Community engagement and resource directory',
    url: 'https://4citeb4u.github.io/Thewaterholeprojectt/',
  },
];

const experiences = [
  {
    role: 'RapidWebDevelop LLC – Founder / Full Stack Developer',
    description:
      'Developed 30+ advanced web and AI applications. Creator of Agent Lee, voice tools, CRM and LMS platforms.',
  },
  {
    role: 'City of Milwaukee – Equipment & Infrastructure Technician',
    description:
      'Worked on bridges, building restoration, concrete work, stairwells, electrical, plumbing and streetcar maintenance (The Hop).',
  },
  {
    role: 'Nevels Joe Landscaping – Project Manager',
    description:
      'Led landscaping projects on Milwaukee lakefront including tree layouts, sculpture park, museum grounds, and memorial paths.',
  },
  {
    role: 'Carriers Logistics LLC – Owner / Fleet Manager',
    description:
      'Managed junk removal and community services; trained youth and returning citizens in logistics.',
  },
];

const skills = {
  Programming: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'React'],
  'Backend & AI': [
    'FastAPI',
    'Node.js',
    'Gemini',
    'Whisper',
    'LLaMA',
    'Docker',
  ],
  'Dev Tools': ['GitHub', 'VS Code', 'EmailJS', 'PowerShell'],
  Trades: ['Millwright', 'CDL', 'Electrical', 'Plumbing', 'Carpentry'],
};

const awardsAndCertifications = [
  'Fleet Maintenance Commendation – City of Milwaukee',
  'TWIC Card – Federal Credentialing',
  'Streetcar Operator Recognition – The Hop, Milwaukee',
  'Public Works Safety Award',
  'FEMA IS-100.C Certified',
  'DOT/TSI Safety Training',
  'CPR/AED Certified',
  'OSHA 10 Hour Certification',
  'Youth Mentorship Leader Award',
];

const education = {
  degree: 'Associate of Applied Science – Business',
  college: 'Milwaukee Area Technical College',
  gpa: 'GPA: 3.8',
};

export function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white text-gray-800 p-4 sm:p-12 rounded-lg shadow-2xl">
      <header className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <Image
          src="https://placehold.co/120x120.png"
          alt="Leonard J. Lee"
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
          data-ai-hint="professional portrait man"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-5xl font-headline">Leonard J. Lee</h1>
          <p className="text-xl text-primary font-semibold mt-1">
            Founder, RapidWebDevelop LLC | Creator of Agent Lee
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
          <p className="text-gray-700 leading-relaxed text-lg">
            {professionalSummary}
          </p>
        </section>

        <section className="section">
          <h2 className="flex items-center gap-3">
            <Star size={28} /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="project-card bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Visit Site &rarr;
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="flex items-center gap-3">
            <Briefcase size={28} /> Experience
          </h2>
          <ul>
            {experiences.map((exp, idx) => (
              <li key={idx} className="mb-2">
                <strong className="text-gray-900">{exp.role}</strong>
                <br />
                <span className="text-gray-600">{exp.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="flex items-center gap-3">
            <Wrench size={28} /> Skills
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
            <Award size={28} /> Awards & Certifications
          </h2>
          <ul className="columns-1 md:columns-2">
            {awardsAndCertifications.map((item, idx) => (
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
              {education.college} – {education.gpa}
            </span>
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
