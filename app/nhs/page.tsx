'use client'

import { Award, BookOpenCheck, ClipboardList, Users } from 'lucide-react'

type HonorSociety = {
  organization: string
  advisors: string[]
  bylaws: string
  bylawsLink?: string
  requirements: string[]
}

const honorSocieties: HonorSociety[] = [
  {
    organization: 'National Honor Society',
    advisors: ['Denise Cimpko-Beller'],
    bylaws: 'National Honor Society By-Laws',
    bylawsLink: 'https://sites.google.com/brrsd.k12.nj.us/brhs-nhs-2021-2022?usp=sharing',
    requirements: [
      'Students must have a current GPA of 3.5.',
      'Students must have reference letters from three advisors attesting to leadership, service, and character.',
      'Students must have documented 50 hours of community service.',
      'Students have around 3 weeks to put together their submission packet.',
    ],
  },
  {
    organization: 'French Honor Society',
    advisors: ['Jenn Haff', 'Shilpa Wakde'],
    bylaws: 'French Honor Society By-Laws',
    bylawsLink: 'https://docs.google.com/document/d/1zOxfcPCCDHr6J5MthHdXdsZRWxGNdDVEUJi1UUtAbbA/edit?usp=sharing',
    requirements: [
      'Must be a current Sophomore, Junior, or Senior.',
      'Must be currently enrolled in French III or above.',
      'Must have a minimum weighted GPA of A- in French in high school.',
      'Must have a minimum weighted overall GPA of at least B-.',
      'Must complete five hours of community service per membership year.',
      'Must attend one French department activity per membership year.',
    ],
  },
  {
    organization: 'Latin Honor Society',
    advisors: ['Lucinda Jaffe', 'Elizabeth Farshtay'],
    bylaws: 'Latin Honor Society By-Laws',
    bylawsLink: 'https://docs.google.com/document/d/14zyqXMPWwISTAsjGhVq-57qDBRfwesr67Xc2Vo4olVU/edit?usp=sharing',
    requirements: [
      'Must be currently enrolled in Latin III or above.',
      'Cumulative GPA in Latin III or above must be at least 90%.',
    ],
  },
  {
    organization: 'National Art Honor Society',
    advisors: ['Sarah Nasson'],
    bylaws: 'National Art Honor Society By-Laws',
    bylawsLink: 'https://docs.google.com/document/u/0/d/1Gs_b2kuQdIvZjbi1PdJJY8NP4p-Wqh25vuliXJiSGj0/edit',
    requirements: [
      'Must currently be enrolled in a fine arts course.',
      'Must apply with a portfolio of 10 artworks via slide presentation.',
      'Must have a minimum weighted GPA of A- in an honors or AP class, or B+ in a regular academic art class.',
    ],
  },
  {
    organization: 'Thespian Honor Society (Troupe 5154)',
    advisors: ['Heather Diaforli-Day'],
    bylaws: 'Thespian Honor Society By-Laws',
    bylawsLink: 'https://docs.google.com/document/d/11QmfHbKb9O5gBrS16N_e2r66qHHPUV65LXLJ3erkvSU/edit?usp=sharing',
    requirements: [
      'Must have earned a minimum of twenty-five (25) points (points guide).',
      'Works toward the betterment of the theatre community at BRHS.',
      'GPA requirement: 2.5 for members, 3.0 for officers.',
    ],
  },
  {
    organization: 'Chinese Honor Society',
    advisors: ['Chia Ying Liu-Jeng'],
    bylaws: 'Chinese Honor Society By-Laws',
    bylawsLink: 'https://drive.google.com/file/d/14-oJhRrVmT-tKFc_set_XopoBZYwaEKO/view?usp=sharing',
    requirements: [
      'Must be in 10th or 11th grade.',
      'Must have completed at least 3 semesters of Chinese.',
      'Must have a minimum grade of A- in Chinese courses.',
      'Must have a minimum cumulative GPA of 3.75.',
      'Must complete 10 hours of community service.',
      'Must submit a $15 application fee.',
    ],
  },
  {
    organization: 'Italian Honor Society',
    advisors: ['Giuseppina Bologno', 'Giuseppina Di Martino'],
    bylaws: 'Italian Honor Society By-Laws',
    bylawsLink: 'https://drive.google.com/open?id=1K11q5MrDz4YIV43vr3wKTWNuFhqMhUf-McZeAxL9Aok',
    requirements: [
      'Must be a current Sophomore, Junior, or Senior.',
      'Must be currently enrolled in Italian III or above.',
      'Must have a minimum weighted GPA of A- in Italian in high school.',
      'Must have a minimum weighted overall GPA of at least B-.',
      'Must complete five hours of community service per membership year.',
      'Must attend one Italian department activity per membership year.',
    ],
  },
  {
    organization: 'Mu Alpha Theta Math Honor Society',
    advisors: ['Giuseppina Bologno', 'Giuseppina Di Martino'],
    bylaws: 'Mu Alpha Theta Math Honor Society By-Laws',
    bylawsLink: 'https://docs.google.com/document/d/1K11q5MrDz4YIV43vr3wKTWNuFhqMhUf-McZeAxL9Aok/edit?usp=sharing',
    requirements: [
      'Must have completed the equivalent of two years of college preparatory mathematics (such as Algebra II and Geometry), or be concurrently enrolled in Algebra II.',
      'Must have at least a B+ (>=86.5%) for Academic/Standard or a C+ (>=76.5%) for Honors/AP in the current math class.',
      'Must have and maintain a weighted GPA of 3.0.',
      'Must join Google Classroom (5w6diwk) and complete the membership application form.',
    ],
  },
  {
    organization: 'Quill & Scroll Honor Society',
    advisors: ['Victor Smoke', 'Bruce Moran'],
    bylaws: 'Quill and Scroll By-Laws',
    bylawsLink: 'https://docs.google.com/document/d/13XZbva-lTOquD85TmboDqU-TWHJISfb_wyz4Wt2jU0w/edit?usp=sharing',
    requirements: [
      '70% attendance to club meetings.',
      '3.0 overall GPA and good academic standing in all classes (no loss of credit status).',
      '10 published articles.',
      'Recommendation of Editors-in-Chief.',
      'Submit special request chit detailing why you wish to join.',
      'Must demonstrate consistent high performance in journalism/media role (external allowed with reference), and/or in a Humanities course at BRHS.',
    ],
  },
  {
    organization: 'Tri-M Honor Society',
    advisors: ['Tom Bourgault'],
    bylaws: 'Coming Soon',
    requirements: ['Coming Soon'],
  },
  {
    organization: 'Spanish Honor Society',
    advisors: ['Jenn Rousos'],
    bylaws: 'Spanish Honor Society By-Laws',
    bylawsLink: 'https://docs.google.com/document/d/1hdXcpA8ZF-xf7HmVb36vAerKsYe8KCedP_-dp9UPucA/edit?usp=sharing',
    requirements: [
      'Enrollment in Spanish III or a higher-level Spanish course.',
      'A minimum average grade of B (82%) or higher in all Honors-level Spanish courses.',
      'A minimum average grade of A- (90%) or higher in all Academic-level Spanish courses.',
      'Completion of at least 15 hours of community service.',
    ],
  },
]

export default function NHS() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">BRHS Honor Societies</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore all BRHS honor societies, advisor contacts, by-laws, and invitation requirements in one place.
          </p>
        </header>

        <section aria-labelledby="honor-societies-overview" className="glass-effect rounded-lg p-6 mb-8">
          <h2 id="honor-societies-overview" className="text-2xl font-bold text-white mb-4">Application Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <Users className="w-5 h-5" />
                <h3 className="font-semibold text-white">Organizations</h3>
              </div>
              <p className="text-gray-300 text-sm">{honorSocieties.length} honor societies are currently listed.</p>
            </div>
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <BookOpenCheck className="w-5 h-5" />
                <h3 className="font-semibold text-white">By-Laws</h3>
              </div>
              <p className="text-gray-300 text-sm">Review each society's by-laws before submitting your packet.</p>
            </div>
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <ClipboardList className="w-5 h-5" />
                <h3 className="font-semibold text-white">Requirements</h3>
              </div>
              <p className="text-gray-300 text-sm">Invitation requirements vary by program, GPA, and service expectations.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="societies-list">
          <h2 id="societies-list" className="sr-only">Honor societies list</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {honorSocieties.map((society) => (
              <article key={society.organization} className="glass-effect rounded-lg p-6 border border-dark-700/60">
                <h3 className="text-2xl font-bold text-white mb-4">{society.organization}</h3>

                <div className="mb-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-1">Advisor(s)</p>
                  <p className="text-gray-200">{society.advisors.join(', ')}</p>
                </div>

                <div className="mb-4 rounded-lg border border-dark-700 bg-dark-800 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-1">By Laws</p>
                  <p className="text-gray-200">{society.bylaws}</p>
                  {society.bylawsLink && (
                    <a
                      href={society.bylawsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-primary hover:underline"
                    >
                      View By-Laws
                    </a>
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Invitation Requirements</p>
                  <ul className="space-y-2">
                    {society.requirements.map((requirement) => (
                      <li key={requirement} className="flex items-start text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></span>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
