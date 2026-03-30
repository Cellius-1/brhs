import Link from 'next/link'

interface ConcentrationSection {
  title: string
  courses: string[]
}

interface Concentration {
  name: string
  overview: string
  minCredits: number
  capstone: string
  sections: ConcentrationSection[]
}

const concentrations: Concentration[] = [
  {
    name: '3D Design & Production',
    overview:
      'These courses build practical problem-solving through structured planning and production processes connected to authentic real-world design and fabrication challenges.',
    minCredits: 17.5,
    capstone: 'Complete one of the following: Capstone Project or 3D Art & Design (Honors).',
    sections: [
      {
        title: 'Drafting & Design Course Options (at least one course)',
        courses: [
          'Architectural Drafting & Design (5 credits)',
          'Digital 3D Modeling (5 credits)',
          'Interior Design & Styling (2.5 credits)',
          'Introduction to Engineering Design (5 credits)',
          'Principles of Architecture (5 credits)',
        ],
      },
      {
        title: 'Creation & Production Course Options (at least one course)',
        courses: [
          '3D Prototyping (2.5 credits)',
          'Advanced Ceramics (2.5 credits)',
          'Apparel Design & Creation (Honors) (5 credits)',
          'Ceramics: Hand Building (2.5 credits)',
          'Ceramics: Wheel Throwing (2.5 credits)',
          'Digital Fabrication (2.5 credits)',
          'Fiber Arts Technique (2.5 credits)',
          'Jewelry Design (2.5 credits)',
          'Sewing Technique (2.5 credits)',
          'Wood Design and Fabrication I (5 credits)',
          'Service Learning (1-2.5 credit hours)',
        ],
      },
    ],
  },
  {
    name: 'Business',
    overview:
      'The business pathway develops entrepreneurship, marketing, finance, management, and professional communication through real-world projects and decision-making.',
    minCredits: 17.5,
    capstone: 'Required capstone: Capstone Project.',
    sections: [
      {
        title: '5 Credit Course Options',
        courses: [
          'Accounting I',
          'Accounting II (Honors)',
          'Advanced Placement Business with Personal Finance',
          'AP Macroeconomics',
          'AP Microeconomics',
        ],
      },
      {
        title: '2.5 Credit Course Options',
        courses: [
          'Business & Criminal Law',
          'Career Exploration and Awareness',
          'Entrepreneurship & Business Management',
          'Financial Planning',
          'International Business',
          'Introduction to Business',
          'Leadership & Philanthropy',
          'Marketing',
          'Service Learning (1-2.5 credit hours)',
        ],
      },
    ],
  },
  {
    name: 'Computer Science',
    overview:
      'Students learn coding, software design, data analysis, and cybersecurity through project-based learning that mirrors modern technology pathways.',
    minCredits: 17.5,
    capstone: 'Required capstone: Capstone Project.',
    sections: [
      {
        title: '5 Credit Course Options',
        courses: [
          'AP Computer Science Principles',
          'AP Computer Science A',
          'Advanced Placement Cybersecurity',
          'Advanced Topics in Computer Science',
        ],
      },
      {
        title: '2.5 Credit Course Options',
        courses: [
          'Computer Science I',
          'Computer Science II',
          'Cybersecurity I',
          'Cybersecurity II',
          'Data Science',
          'Service Learning (1-2.5 credit hours)',
        ],
      },
    ],
  },
  {
    name: 'Engineering & Robotics',
    overview:
      'This pathway focuses on designing, building, and testing solutions through engineering design, robotics systems, and applied problem-solving.',
    minCredits: 17.5,
    capstone: 'Required capstone: Capstone Project.',
    sections: [
      {
        title: '5 Credit Course Options',
        courses: [
          'Introduction to Engineering Design',
          'Introduction to Engineering (Honors)',
          'Advanced Mathematics: Topics in Engineering',
          'Principles of Engineering',
          'Introduction to Electronics',
        ],
      },
      {
        title: '2.5 Credit Course Options',
        courses: [
          'Robotics Concept & Design',
          'Robotics Programming',
          'Service Learning (1-2.5 credit hours)',
        ],
      },
    ],
  },
  {
    name: 'Media & Content Creation',
    overview:
      'Students tackle authentic media-production challenges while building technical workflow, narrative development, audience awareness, and publication-ready communication skills.',
    minCredits: 17.5,
    capstone: "Complete one of the following: Capstone Project or The Director's Workshop (Honors).",
    sections: [
      {
        title: 'Audio & Visual Communication Course Options (at least one course)',
        courses: [
          'Audio & Music Engineering',
          'Digital Music Composition (2.5 credits)',
          'Digital Fine Arts I (2.5 credits)',
          'Digital Fine Arts II (2.5 credits)',
          'Digital Photography (2.5 credits)',
          'Narrative & Documentary Production (2.5 credits)',
          'Podcasting (2.5 credits)',
          'Shorts & Reels (2.5 credits)',
          'Storytelling (2.5 credits)',
          'Service Learning (1-2.5 credit hours)',
        ],
      },
      {
        title: 'Written Communication Course Options (at least one course)',
        courses: [
          'Advanced Creative Writing (2.5 credits)',
          'Advanced Journalism (2.5 credits)',
          'Introduction to Creative Writing (2.5 credits)',
          'Introduction to Screenwriting (2.5 credits)',
          'Journalism (2.5 credits)',
          'Sports Journalism (2.5 credits)',
          'Service Learning (1-2.5 credit hours)',
        ],
      },
    ],
  },
  {
    name: 'Music',
    overview:
      'The music pathway develops performance, composition, collaboration, and technical production through ensembles, music technology, and applied musicianship.',
    minCredits: 17.5,
    capstone: 'Required capstone: Visual & Performing Arts Capstone (Honors).',
    sections: [
      {
        title: '5 Credit Course Options',
        courses: [
          'Concert Band',
          'Wind Ensemble (Honors)',
          'Symphonic Band (Honors)',
          'Mixed Choir',
          'Symphonic Choir (Honors)',
          'Select Treble Choir (Honors)',
          'String Orchestra 9',
          'Symphony Orchestra (Honors)',
        ],
      },
      {
        title: '2.5 Credit Course Options',
        courses: [
          'Audio & Music Engineering',
          'Digital Music Composition',
          'Service Learning (1-2.5 credit hours)',
          'Introduction to Guitar I',
          'Intermediate Guitar II',
          'Guitar Ensemble / Guitar III',
          'AP Music Theory',
        ],
      },
    ],
  },
  {
    name: 'Visual Arts',
    overview:
      'The visual arts pathway supports artistic technique, visual communication, and portfolio development through studio practice, critique, and exhibition-oriented work.',
    minCredits: 17.5,
    capstone:
      'Complete one of the following: Advanced Studio Art (Honors), Advanced Placement Art & Design, or Visual & Performing Arts Capstone (Honors).',
    sections: [
      {
        title: '5 Credit Course Options',
        courses: [
          '3D Art & Design (Honors)',
          'Advanced Studio Art (Honors)',
          'Art History',
          'Advanced Placement Art & Design - Drawing',
          'Advanced Placement Art & Design - 2D Design',
          'Advanced Placement Art History',
          'Studio Art',
        ],
      },
      {
        title: '2.5 Credit Course Options',
        courses: [
          'Advanced Ceramics',
          'Art for Meditation and Relaxation',
          'Art and Science',
          'Character Design',
          'Ceramics: Hand Building',
          'Ceramics: Wheel Throwing',
          'Digital Fine Arts I',
          'Digital Fine Arts II',
          'Digital Photography',
          'Drawing and Sketching',
          'Watercolor Painting',
          'Service Learning (1-2.5 credit hours)',
        ],
      },
    ],
  },
]

export default function CareerConcentrationsPage() {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-4"
          >
            Back to Course Catalog
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">BR Career Concentrations</h1>
          <p className="text-gray-300 mb-2">
            Career concentrations are multi-year coherent course progressions that let students align coursework to post-secondary college and career interests.
          </p>
          <p className="text-gray-400 text-sm mb-2">
            Enrollment is available through the PowerSchool Parent/Student Portal or your assigned school counselor.
          </p>
          <p className="text-gray-400 text-sm">
            To complete a concentration, students must earn at least 17.5 credits from approved courses, including a capstone experience.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {concentrations.map((concentration) => (
            <section
              key={concentration.name}
              className="rounded-2xl border border-dark-700 bg-dark-800/70 p-5"
            >
              <h2 className="text-xl font-semibold text-white mb-2">{concentration.name} Concentration</h2>
              <p className="text-sm text-gray-300 mb-3">{concentration.overview}</p>
              <p className="text-xs text-gray-400 mb-1">Minimum credits: {concentration.minCredits}</p>
              <p className="text-xs text-gray-400 mb-4">{concentration.capstone}</p>

              <div className="space-y-4">
                {concentration.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-semibold text-red-400 mb-2">{section.title}</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      {section.courses.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
