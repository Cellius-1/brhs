'use client'

import { useState } from 'react'
import { Heart, Phone, Mail, Award, Users, ExternalLink, Info } from 'lucide-react'

type Counselor = {
  name: string
  room: string
  ext: string
  grade9: string
  grade10: string
  grade11: string
  grade12: string
  bookmeLink: string
}

const counselors: Counselor[] = [
  {
    name: 'Anthony Appezzato',
    room: '924',
    ext: '47-7213',
    grade9: 'Duo - Gu',
    grade10: 'Chf - Fa, Ric - Riv',
    grade11: 'Brj - Cori, Pant - Park',
    grade12: 'Blon - Brah, Fam - Fri, Khao - Kote, Marj - Martine, O - Og, Thon - Tor',
    bookmeLink: 'https://appezzato.youcanbook.me/',
  },
  {
    name: 'Xavier Brooks',
    room: '923',
    ext: '47-7219',
    grade9: "O'n - Pol",
    grade10: 'Loq - Mil, Riw - Roj',
    grade11: 'K - Lan, Parl - Pas',
    grade12: 'Frj - He, Martinf - Math',
    bookmeLink: 'https://xbrooks.youcanbook.me/',
  },
  {
    name: 'Justina Del Rio',
    room: '917',
    ext: '47-7215',
    grade9: 'Tj - Z',
    grade10: 'Rok - Roz, Shef - Ul',
    grade11: 'Pat - Reo, Shah',
    grade12: 'Mati - Mene, Oh - Ramak',
    bookmeLink: 'https://ms-del-rio-4.youcanbook.me/',
  },
  {
    name: 'Bryan Devlin',
    room: '915',
    ext: '47-7212',
    grade9: 'A - Bham',
    grade10: 'Rp - Rz, Um - Z',
    grade11: 'Pau - Perr, Shai - U',
    grade12: 'Menf - Mitc, Ramal - Sci',
    bookmeLink: 'https://bryandevlin.youcanbook.me/',
  },
  {
    name: 'Suzanne Geoghan',
    room: '910',
    ext: '47-7214',
    grade9: 'Pom - Sar',
    grade10: 'Mim - Par, S - Sai',
    grade11: 'Lao - Mat, Pers - Ph',
    grade12: 'Hf - Khan, Mitd - Moh',
    bookmeLink: 'https://sgeoghan.youcanbook.me/',
  },
  {
    name: 'Elle Greulich',
    room: '911',
    ext: '47-7210',
    grade9: 'Kellb - Maru',
    grade10: 'Hb - Khan, Saj - San',
    grade11: 'Eo - G, Pi - Poc',
    grade12: 'Brai - Cif, Moi - Mora',
    bookmeLink: 'https://egreulich.youcanbook.me/',
  },
  {
    name: 'Laura Karns',
    room: '918',
    ext: '47-7216',
    grade9: "Marv - O'm",
    grade10: 'Khao - Lop, Schf - Scho',
    grade11: 'H - J, Prat - Rad',
    grade12: 'Cig - Fal, Mue - Murd',
    bookmeLink: 'https://drkarns.youcanbook.me/',
  },
  {
    name: 'Tito Santos',
    room: '920',
    ext: '47-7217',
    grade9: 'Gv - Kella',
    grade10: 'Fb - Ha, Schp - Sen',
    grade11: 'Corj - En, Rae - Rama',
    grade12: 'A - Blom, Mure - Nal',
    bookmeLink: 'https://titosantos.youcanbook.me/',
  },
  {
    name: 'Evan Seavey',
    room: '919',
    ext: '47-7218',
    grade9: 'Bhao - Chom',
    grade10: 'A - Ba, Seo - Shap',
    grade11: 'Ramb - Redd, V - Z',
    grade12: 'Nam - Ng, Scj - Thom',
    bookmeLink: 'https://seavey.youcanbook.me/',
  },
  {
    name: 'Imrin Thind',
    room: '914',
    ext: '47-7221',
    grade9: 'Sas - Ti',
    grade10: 'Pas - Rib, Shaq - Shee',
    grade11: 'Mau - Pans, Rede - Ren',
    grade12: 'Kotf - Mari, Nga - Nz',
    bookmeLink: 'https://ithind.youcanbook.me/',
  },
  {
    name: 'Sapphire Toussaint',
    room: '913',
    ext: '47-7222',
    grade9: 'Chon - Dun',
    grade10: 'Bb - Che, Sao - Sche',
    grade11: 'A - Bri, Pod - Pras',
    grade12: 'Morb - Mud, Tos - Z',
    bookmeLink: 'https://mstoussaint.youcanbook.me/',
  },
]

export default function Counseling() {
  const [selectedCounselorName, setSelectedCounselorName] = useState(counselors[0].name)
  const selectedCounselor = counselors.find(c => c.name === selectedCounselorName) || counselors[0]

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            School Counseling
          </h1>
          <p className="text-xl text-gray-400">
            Supporting your academic, personal, social, and professional development
          </p>
        </div>

        {/* About Us Section */}
        <div className="glass-effect rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-white">About Us</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              The School Counseling Department at BRHS is a comprehensive and innovative center, which assists students in grades 9 - 12 with academic, personal, social, and professional development. Counselors are pro-active in their approach and emphasize technology to support learning goals.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-white font-semibold mb-2">Award-Winning Program</p>
              <p className="text-sm">
                The New Jersey School Boards Association has selected the BRHS School Counseling Department as a winner of the <strong>School Leader award for 2002</strong>. The department received the award for their innovative program "Integrating Technology in the Developmental Guidance Model."
              </p>
            </div>
          </div>
        </div>

        {/* Counselor Finder */}
        <div className="glass-effect rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-white">Contact Your Counselor</h2>
          </div>
          <div className="bg-dark-800 rounded-lg p-5 border border-dark-700 mb-6">
            <label htmlFor="counselor-select" className="block text-sm font-semibold text-gray-300 mb-2">
              Choose your counselor
            </label>
            <select
              id="counselor-select"
              value={selectedCounselorName}
              onChange={(e) => setSelectedCounselorName(e.target.value)}
              className="w-full rounded-lg border border-dark-600 bg-dark-900 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-describedby="counselor-select-help"
            >
              {counselors.map((counselor) => (
                <option key={counselor.name} value={counselor.name}>
                  {counselor.name}
                </option>
              ))}
            </select>
            <p id="counselor-select-help" className="text-xs text-gray-400 mt-2">
              Select your counselor to view room number, extension, student assignment split, and booking access.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-dark-800 rounded-lg p-5 border border-dark-700 lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-1">{selectedCounselor.name}</h3>
              <p className="text-gray-400 text-sm mb-4">Room {selectedCounselor.room} | Ext. {selectedCounselor.ext}</p>

              <h4 className="text-sm uppercase tracking-wide text-primary font-semibold mb-2">Students Served</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-dark-700 bg-dark-900 p-3">
                  <p className="text-gray-400">Grade 9</p>
                  <p className="text-white">{selectedCounselor.grade9}</p>
                </div>
                <div className="rounded-lg border border-dark-700 bg-dark-900 p-3">
                  <p className="text-gray-400">Grade 10</p>
                  <p className="text-white">{selectedCounselor.grade10}</p>
                </div>
                <div className="rounded-lg border border-dark-700 bg-dark-900 p-3">
                  <p className="text-gray-400">Grade 11</p>
                  <p className="text-white">{selectedCounselor.grade11}</p>
                </div>
                <div className="rounded-lg border border-dark-700 bg-dark-900 p-3">
                  <p className="text-gray-400">Grade 12</p>
                  <p className="text-white">{selectedCounselor.grade12}</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
              <h4 className="text-lg font-bold text-white mb-2">BookMe Link</h4>
              <p className="text-sm text-gray-300 mb-4">
                Open the link, and use it to book an available time with <strong>{selectedCounselor.name}</strong>.
              </p>
              <a
                href={selectedCounselor.bookmeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-black font-semibold hover:opacity-90 transition-opacity"
                aria-label={`Open BookMe for ${selectedCounselor.name}`}
              >
                Open BookMe
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-xs text-gray-400 mt-3">
                If your counselor page does not appear right away, use your counselor Google Classroom link to go directly to their booking page.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-dark-800 border border-dark-700">
            <p className="text-gray-300 text-sm">
              Parents/guardians may also contact the counselor directly by phone or email for support.
            </p>
          </div>
        </div>

        {/* Hope Squad */}
        <div className="glass-effect rounded-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <Info className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-white">Need Immediate Support? Contact Hope Squad Club</h2>
          </div>
          <p className="text-gray-300 mb-4">
            If you need to talk to someone, reach out to <strong>Hope Squad Club</strong> or the Counseling Office.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
              <h3 className="text-lg font-semibold text-primary mb-2">Google Classroom</h3>
              <p className="text-gray-300">Class: Hope Squad Club</p>
              <p className="text-sm text-gray-400 mt-1">Join code is shared by counselors and advisors.</p>
            </div>
            <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
              <h3 className="text-lg font-semibold text-primary mb-2">How to Reach Out</h3>
              <p className="text-gray-300">Visit the Counseling Office or email:</p>
              <a href="mailto:HSGuidance@brrsd.k12.nj.us" className="text-primary hover:underline break-all">
                HSGuidance@brrsd.k12.nj.us
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="glass-effect rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Supervisor</h3>
                <p className="text-white font-medium">Alan Iachini</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Office Phone</h3>
                <a href="tel:9082318660" className="flex items-center text-gray-300 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  (908) 231-8660 ext. 477200
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                <a href="mailto:HSGuidance@brrsd.k12.nj.us" className="flex items-center text-gray-300 hover:text-primary transition-colors break-all">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  HSGuidance@brrsd.k12.nj.us
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Fax</h3>
                <p className="text-gray-300">(908) 253-9480</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
