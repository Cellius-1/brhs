'use client'

import { useState } from 'react'
import { Users, Search, Filter, Mail } from 'lucide-react'

const clubs = [
  {
    name: 'Academic League',
    description: 'Test your trivia knowledge! Similar to Jeopardy, compete in twenty-five disciplines including geography, math, science, mythology, English literature, songs, movies, sports, arts, and entertainment.',
    advisor: 'Eleni Arapaki',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'Animal Shelter and Rescue',
    description: 'Raise awareness for animals at the Somerset County animal shelter. Organize fundraisers to support our local shelter.',
    advisor: 'Laura James',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Animated Media Club',
    description: 'Discuss animated shows, movies, and trends in the animation industry. Activities include presentations, watching animated projects, games, contests, and activities.',
    advisor: 'Kristen Vogel',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Artificial Intelligence and Machine Learning',
    description: 'Learn to apply AI and machine learning to writing and research! Collaborate on research papers, gain hands-on experience coding AI models. Active participants earn authorship on research papers. Meet most Fridays after school in Room 1002.',
    advisor: 'Michael Crovo',
    category: 'STEM',
    googleClassroom: 'ba4c4aq',
  },
  {
    name: 'Badminton Club',
    description: 'Have fun playing badminton! Sessions start Spring 2026.',
    advisor: 'Kimberly Hart, Farrah Walters',
    category: 'Sports & Recreation',
    googleClassroom: 'gvmvq5vv',
  },
  {
    name: 'Biology Olympiad',
    description: 'Prepare to compete in the Biology Olympiad. Strong content knowledge in Biological Science required.',
    advisor: 'Cherie Pieroni',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'Black Student Union (BSU)',
    description: 'A safe space for Black students at BRHS. Hold discussions, events, and support our community covering Black history, representation, struggles, and unique aspects of our community.',
    advisor: 'Sarah Cleary, Tracee Cobbs',
    category: 'Cultural',
    googleClassroom: '',
  },
  {
    name: 'Book Club',
    description: 'Meet once a month to discuss a mutually agreed upon novel.',
    advisor: 'Michelle Henry',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Book-Movie Club',
    description: 'Read books, watch the movie version and compare, contrast, and critique.',
    advisor: 'Jennifer Austin',
    category: 'Arts & Media',
    googleClassroom: 'ze3hibd',
  },
  {
    name: 'BR Aerospace',
    description: 'Plan, design, and construct model rockets for The American Rocketry Challenge. Gain experience in cooperative engineering and resource management. Meetings on Wednesdays.',
    advisor: 'Fangze Shang',
    category: 'STEM',
    googleClassroom: 'ulh7qz3',
  },
  {
    name: 'BR American Cancer Society',
    description: 'Student-led chapter dedicated to ending cancer through patient support, advocacy, fundraising. Volunteering opportunities at local cancer clinics and medical research. Meet Thursdays after school.',
    advisor: 'Priya Mangano',
    category: 'Service',
    googleClassroom: 'qwy3ofu',
  },
  {
    name: 'BR Audible Smiles',
    description: 'Advocate and provide aid for people with hearing loss who cannot afford assistive services. Host fundraisers, community events, and activities.',
    advisor: 'Christine Peliotis',
    category: 'Service',
    googleClassroom: '2dc5ej6',
  },
  {
    name: 'BRHS Dance Team',
    description: 'Student-created club where dancers come together to create choreography to perform at various school events.',
    advisor: 'Bill Deniz',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'BR Engineers',
    description: 'Expose interested students to basic principles of engineering through informative lectures and affordable projects covering a broad spectrum of engineering fields. Bi-weekly Wednesdays after school in room 2001.',
    advisor: 'Fangze Shang',
    category: 'STEM',
    googleClassroom: 'dxmkjgn',
  },
  {
    name: 'BR Movie Club',
    description: 'Vote on a book to read, then watch the movie together. Hold fundraisers to donate to organizations related to the books/movies.',
    advisor: 'Jennifer Austin',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'BR Theatre Arts',
    description: 'Home to all theatre happenings at BRHS. Produce a fall play and spring musical each year. Committed to creativity, expression, inclusion, and service.',
    advisor: 'Heather Diaforli-Day',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'BRHS Ed Foundation Club',
    description: 'Assist in raising awareness of educational grants provided to BR School District faculty via fundraising events, website design, and volunteering.',
    advisor: 'Keriann Fry',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'BRHS Red Cross',
    description: 'Build character and provide tools for leadership, communication skills, and community service. Develop awareness by interacting with those in need.',
    advisor: 'Greg Filipski',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Bridgewater Raritan Democrats',
    description: 'Meet other democrats, learn about the United States political system, and meet people who share your views.',
    advisor: 'Denise Cimpko-Beller, Adam Pianka',
    category: 'Government & Politics',
    googleClassroom: '',
  },
  {
    name: 'BRTV',
    description: 'BRHS Television Station. Broadcasts announcements every morning and delivers live shows on Wednesdays (What\'s Up Wednesday), Thursdays (Panther PowerPlays), and Fridays (BRHS News). Rehearsals on Tuesdays, Wednesdays, and Thursdays during lunch in BRTV Studio (Rooms 218 and 221).',
    advisor: 'Chris Black, Scott Linzer',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'C.O.D.E. - Create Outline Develop Enhance',
    description: 'Learn computer science and apply it in various ways. Work on coding projects and compete in national hackathons and the American Computer Science League. All levels welcome. Meet monthly on Wednesdays and Fridays in room 2001.',
    advisor: 'Fangze Shang',
    category: 'STEM',
    googleClassroom: 'uqms3hr',
  },
  {
    name: 'Chemistry Olympiad',
    description: 'Prepare to compete in the Chemistry Olympiad on campus. Strong content knowledge in Chemistry required.',
    advisor: 'Cherie Pieroni',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'Chess Club',
    description: 'Interactive setting for students to share their passion for chess through games, tactics, strategies, and more. Meet Thursdays during Unit Lunch in 517.',
    advisor: 'Michael Dalpe',
    category: 'Sports & Recreation',
    googleClassroom: '2soknyp',
  },
  {
    name: 'Childhood Cancer Charity Club',
    description: 'Raise money to support the wellbeing and happiness of pediatric cancer patients and support families financially with medical expenses.',
    advisor: 'Patricia Farina',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Chinese Club',
    description: 'Club revolved around Chinese culture and helping Chinese families locally and around the world. Meeting location: 710, time: lunch only.',
    advisor: 'Chia Ying Liu-Jeng',
    category: 'Cultural',
    googleClassroom: '',
  },
  {
    name: 'Chinese Honor Society',
    description: 'Promote Chinese language and culture. Must be members of Chinese Honor Society. Meeting location: 710, time: lunch only.',
    advisor: 'Chia Ying Liu-Jeng',
    category: 'Honor Society',
    googleClassroom: '',
  },
  {
    name: 'Christian Club',
    description: 'Nondenominational club focusing on faith, biblical principles, and service to the community. Meet Tuesdays at 2:15 in library classroom c.',
    advisor: 'Linda Schulte, Michelle Knepper',
    category: 'Cultural',
    googleClassroom: '',
  },
  {
    name: 'Criminalistics Club',
    description: 'Explore crime-solving and scientific techniques used by forensic specialists through presentations, case studies, and activities. Learn about crime scene investigation, toxicology, fingerprint analysis, and more. A or D days during second half of lunch in room 819.',
    advisor: 'Lindsay Hamilton',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'Class of 2026',
    description: 'Class Council for the Class of 2026.',
    advisor: 'Sarah Cleary, Michele Mammone',
    category: 'Class Council',
    googleClassroom: '',
  },
  {
    name: 'Class of 2027',
    description: 'Class Council for the Class of 2027.',
    advisor: 'Cynthia Slootmaker',
    category: 'Class Council',
    googleClassroom: '',
  },
  {
    name: 'Class of 2028',
    description: 'Class Council for the Class of 2028.',
    advisor: 'Keriann Fry',
    category: 'Class Council',
    googleClassroom: '',
  },
  {
    name: 'Class of 2029',
    description: 'Class Council for the Class of 2029.',
    advisor: 'Anthony Appezzato, Elle Greulich',
    category: 'Class Council',
    googleClassroom: '',
  },
  {
    name: 'Clay Club',
    description: 'Work on personal and group projects including outdoor sculpture and student-led learning activities centered around clay/glazing techniques. Charity fundraiser "Empty Bowls" and other events.',
    advisor: 'Angela Morin, Jason Draine',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Computational Linguistics Club',
    description: 'Study language systems, grammar structures, and different alphabets. Solve puzzles about linguistics like decoding rare and artificial languages.',
    advisor: 'Fangze Shang',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'Creative Writing',
    description: 'Meet weekly to write and share stories based on a common theme. Best stories will be published through Amazon at the end of the year.',
    advisor: 'Erin Leigh',
    category: 'Arts & Media',
    googleClassroom: 'j5nsfpu',
  },
  {
    name: 'Cryptocurrency Club',
    description: 'Host educational presentations, practice trading cryptocurrencies online, and host competitions and projects.',
    advisor: 'Laura Stroka',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'CureQuest',
    description: 'Raise money through bake sales, toy drives, and fundraisers. All proceeds donated to cancer research hospitals like St. Jude Children\'s Hospital. Students receive service hours.',
    advisor: 'Michele Mammone',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'CyBR Hacks',
    description: 'Learn cybersecurity and coding through interactive games, competitions, and community events. Win prizes, earn scholarships, and explore the digital world.',
    advisor: 'Ken Mascola',
    category: 'STEM',
    googleClassroom: '',
  },
  {
    name: 'Dear Asian Youth (DAY)',
    description: 'Youth-led, global organization uplifting Asian communities through education, activism, and celebration. Bi-weekly meetings in room 811 with presentations and activities sharing Asian cultures. All BRHS students welcome.',
    advisor: 'Stephanie Makala',
    category: 'Cultural',
    googleClassroom: '',
  },
  {
    name: 'DECA',
    description: 'Prepares emerging leaders and entrepreneurs for careers in marketing, finance, hospitality and management.',
    advisor: 'Shilpa Wakde',
    category: 'Business',
    googleClassroom: 'y5rf3ko',
  },
  {
    name: 'DNA Sequencing - Waksman at BRHS',
    description: 'Partner with Rutgers University to complete DNA sequencing and bioinformatics research project. Work in laboratory with bacterial cultures, gel electrophoresis, restriction digests, PCR, etc.',
    advisor: 'Cheryl Pieroni',
    category: 'STEM',
    googleClassroom: '5aqgi7y',
  },
  {
    name: 'Economics Challenge Club',
    description: 'Compete in National Economic Challenge online exams against students across the country. Meet twice a month for 30 minutes starting a few months prior to competition in January.',
    advisor: 'Abbe Rubin',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'Epic Yearbook',
    description: 'Record the events of the school year in a 400 page full-color yearbook written and designed by our talented team.',
    advisor: 'Michael Bittner, Keriann Fry',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Euphonixs',
    description: 'Student-led club of 10-15 singers. Volunteer at nursing homes, children\'s hospitals and other public facilities to perform by singing and playing instruments.',
    advisor: 'Christine Peliotis',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Fashion and Design Club',
    description: 'Express creativity and passion for fashion design. Explore designer shows, analyze and predict trends, create designs and construct pieces. Donate to Dressforsuccess organization.',
    advisor: 'Sarah Javier',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Fellowship of Christian Athletes',
    description: 'Group of athletes who want to serve our community and have fun. Learn what it means to be a Christian athlete, make new friends, help others, and share faith.',
    advisor: 'Kathleen Doherty, Kristen Mehrbach',
    category: 'Cultural',
    googleClassroom: '',
  },
  {
    name: 'Finance Club',
    description: 'Learn about finance and financial literacy.',
    advisor: 'Catherine Stampoulous',
    category: 'Business',
    googleClassroom: '',
  },
  {
    name: 'FIRST Robotics Team 303',
    description: 'Build a competition robot every year. Meetings 3 afternoons per week (increasing to almost daily January-April). Competitions are full weekends, at least 3 a year. Activities include science fairs, fundraisers, and hosting a junior competition. Room 208.',
    advisor: 'Jim Griffin, Novena Petryk-Cordi, Kristen Mehrbach',
    category: 'STEM',
    googleClassroom: '',
  },
  {
    name: 'Fishing Club',
    description: 'Discuss marine and freshwater fishing. Learn fundamentals of angling, equipment selection, bait, tying knots, and techniques. Discuss local regulations and fishing seasons for safety and sustainability. All anglers welcome.',
    advisor: 'Jeremy Marton, Edward G Filipski',
    category: 'Sports & Recreation',
    googleClassroom: '',
  },
  {
    name: 'Footlighters Stage Tech Club',
    description: 'Work with peers and trained professionals to further knowledge of technical aspects of the auditorium space. Provide support for audio and visual needs of school events.',
    advisor: 'Heather Diaforli-Day',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Forensics Speech and Debate',
    description: 'Foster communication, collaboration, critical thinking, and creative skills. Improve student engagement and boost confidence. Open to all grades. Practice begins first week of October.',
    advisor: 'Alben Fischer, Melissa Pierce',
    category: 'Academic',
    googleClassroom: '2dj5cv5k',
  },
  {
    name: 'French Club',
    description: 'Cultural activities involving France and other Francophone countries. Meetings bi-weekly at 2:15. All are welcome; you don\'t need to be studying French.',
    advisor: 'Jennifer Haff, Adrienne Lutz',
    category: 'Cultural',
    googleClassroom: '3tqcrck6',
  },
  {
    name: 'French Honor Society',
    description: 'Honor society for students enrolled in French III and above; application required. Application process explained at meeting in September.',
    advisor: 'Jennifer Haff, Shilpa Wakde',
    category: 'Honor Society',
    googleClassroom: 'ynpjs3vz',
  },
  {
    name: 'Fund Flow',
    description: 'Raises money and awareness for community needs.',
    advisor: 'Alben Fischer',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Future Business Leaders of America (FBLA)',
    description: 'For all students interested in business. Compete in regional, state, and national business competitions.',
    advisor: 'Michael Bittner, Keriann Fry',
    category: 'Business',
    googleClassroom: 'u3nwwqn',
  },
  {
    name: 'GSA',
    description: 'A safe space for LGBTQ+ students and their allies to socialize, support each other, and work for change.',
    advisor: 'Lauren Amisial, April Lutzky, Jaime Bandel',
    category: 'Cultural',
    googleClassroom: '',
  },
  {
    name: 'Habitat for Humanity',
    description: 'Advocate for affordable housing for all. Work with local Raritan Valley HFH. Multiple volunteer and fundraising opportunities. Meet monthly in room 415.',
    advisor: 'Christine Romeo, Linley Sullivan',
    category: 'Service',
    googleClassroom: 'lknhalkb',
  },
  {
    name: 'Hacksters',
    description: 'Student-led community combining innovation and inclusivity with creativity and technical skills. Explore STEM through hands-on projects, coding, and mentorship.',
    advisor: 'Katherine Holt',
    category: 'STEM',
    googleClassroom: '',
  },
  {
    name: 'HOPE Squad',
    description: 'Dedicated to suicide prevention and mental health. Promote a positive, supportive BRHS community and reduce mental health stigma through fun, inclusive events.',
    advisor: 'Lauren Amisial, April Lutzky',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Indoor Percussion',
    description: 'Co-curricular ensemble December through April. Extension of Marching Band Percussion with performance positions in front ensemble (pit) and battery section (drumline). Open to all musicians. Meet weekly Wednesday and Saturday.',
    advisor: 'Nicholas Mossa',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'INSPIRE',
    description: 'Help students new to BR and the United States. Offer campus maps, buddy system, deeper support within school community, helping with teachers, social network, and academic success.',
    advisor: 'Jaime Bandel, Delfina Picchio',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Italian Honors Society',
    description: 'For students meeting academic criteria in Italian. Must be in level 3 Italian classes. Meet in 2011 during lunch.',
    advisor: 'Giuseppina Di Martino, Fiorella Bologno',
    category: 'Honor Society',
    googleClassroom: '',
  },
  {
    name: 'Jazz Band',
    description: 'Monday Jazz Band is auditioned ensemble for trumpet, trombone, saxophone, piano, guitar, bass, drumset, and percussion students grades 9-12. Travels to festivals and performances. Panther Jazz is a second ensemble open to all vocalists & instrumentalists, no auditions required.',
    advisor: 'Nicholas Mossa, Tom Bourgault',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Key Club',
    description: 'Provide service opportunities and hours for students.',
    advisor: 'Alec Levine',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Knitting and Crochet Club',
    description: 'Students who already enjoy or want to learn how to knit or crochet are welcome.',
    advisor: 'Michelle Henry',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Korean Culture Club',
    description: 'Learn about the language, culture, music, food, and more of Korea.',
    advisor: 'Michelle Henry',
    category: 'Cultural',
    googleClassroom: '',
  },
  {
    name: 'Latin Honor Society',
    description: 'For members of the Latin Honor Society. Meetings Monday in Room 2015. Applications open in the Spring.',
    advisor: 'Lucinda Jaffe, Elizabeth Farshtey',
    category: 'Honor Society',
    googleClassroom: '',
  },
  {
    name: 'Latinx Club',
    description: 'Welcome people from all Latin America to discuss important topics within our community and encourage communication with Latinx students in our school. Meet in Room 2019 at 10:50 am.',
    advisor: 'Melissa Erickson',
    category: 'Cultural',
    googleClassroom: 'noq2npo',
  },
  {
    name: 'Learn To Be (LTB)',
    description: 'Nationwide organization connecting volunteer tutors to students in need. Tutors choose grade/age and subject, with flexible time & date. Meetings every other Tuesday after school in Room 827.',
    advisor: 'Carrie Feeney',
    category: 'Service',
    googleClassroom: 'uhyyfkp',
  },
  {
    name: 'Library Friends Society',
    description: 'Foster stronger relationship with Somerset County Public Library at Bridgewater. Volunteer, collect book donations, and help plan fundraisers. Partner with Friends of the Somerset County Library.',
    advisor: 'Michelle Henry',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Literary Magazine',
    description: 'Submit writings and artwork throughout the year. Stay informed about upcoming events, contests, poetry readings, and submissions.',
    advisor: 'Michael Dalpe',
    category: 'Arts & Media',
    googleClassroom: 'u3ccayac',
  },
  {
    name: 'Lorelei Ensemble',
    description: 'Choral Ensemble for soprano and alto voices. Audition materials forthcoming. Ensemble meets Wednesdays from 2:15-3:15 in Rm 124.',
    advisor: 'Lisa Rotondi',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Lunch Buddies',
    description: 'Build friendships during lunch periods.',
    advisor: 'Carol Gleason, Renee Zaleski',
    category: 'Social',
    googleClassroom: '',
  },
  {
    name: 'Make-A-Wish Club',
    description: 'Raise funds for Make-A-Wish, an organization focused on granting wishes to children with critical illnesses.',
    advisor: 'Kelly Mangan',
    category: 'Service',
    googleClassroom: 'yoplzv2',
  },
  {
    name: 'Marching Band',
    description: 'Co-curricular performing arts ensemble open to all students grades 9-12. Seasonal activity from late summer to early November. Wind instrumentalists, percussionists, and color guard. Appears at varsity football games and runs competitive season September-November.',
    advisor: 'Nicholas Mossa, Tom Bourgault',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Math League',
    description: 'Compete in several math competitions including Central Jersey Math League (travel), New Jersey Math League (home) and AMC. Competitions once or twice a month in Room 228.',
    advisor: 'James Griffin',
    category: 'Academic',
    googleClassroom: 'bnu37ql',
  },
  {
    name: 'Mind and Medicine Club',
    description: 'Explore biology and the brain. Opportunities for labs, networking, international competitions. Meet biweekly on Thursdays after school.',
    advisor: 'Katherine Holt',
    category: 'STEM',
    googleClassroom: 'fhvhqri',
  },
  {
    name: 'Mock Trial Team',
    description: 'Experience being a litigator in the Vincent J. Apruzzese High School Mock Trial Competition. Play roles of attorney, witness or case manager. Starts in October.',
    advisor: 'Kristen Mehrbach',
    category: 'Academic',
    googleClassroom: '6suabif',
  },
  {
    name: 'Model United Nations',
    description: 'Public speaking club focused on diplomacy and international geopolitics. Learn crucial public speaking, collaboration, critical thinking, and research skills. Students represent a nation to debate on solving international conflicts.',
    advisor: 'Yanessa Santiago, Eileen Boosemann',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: "Morgan's Message",
    description: 'Organization dedicated to raising awareness and providing support for mental health issues, especially among student-athletes. Reduce stigma and ensure student-athletes have resources to cope with pressures.',
    advisor: 'Michelle Henry',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Mountain Biking Club',
    description: 'Share passion for mountain biking and natural terrains. Unify students through group rides and practice working with bicycles. Bi-weekly or monthly meets in Room 813 or 820.',
    advisor: 'Jeremy Marton',
    category: 'Sports & Recreation',
    googleClassroom: 'sqkstvy',
  },
  {
    name: 'Mu Alpha Theta Club',
    description: 'Math Club teaching Advanced Mathematics including Linear Algebra, Calculus Concepts, Complex Analysis, and Number Theory. Feature games, events, and lots of fun! Meet in room 2011 during lunch.',
    advisor: 'Giuseppina Bologno, Giuseppina Di Martino',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'BRHS Muslim Students Association',
    description: 'Open to all students. Club meets once a month.',
    advisor: 'Alexandra Aldrich',
    category: 'Cultural',
    googleClassroom: 'nsz5cvp',
  },
  {
    name: 'Music Records Club',
    description: 'Analyze one band/artist each meeting, dive into history and explain meanings of songs and albums. Discuss influential artists and their impact. Share fun facts about music culture, genres, and how it changed over the years. Print posters for fundraisers!',
    advisor: 'Anna Leinenbach',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'National Art Honors Society',
    description: 'Distinguished group of 58,000 outstanding art students nationally recognized. Participate in school and community beautification projects. Apply in September with application and portfolio of 10-12 best pieces. Meet bi-weekly Mondays and Wednesdays in room 105.',
    advisor: 'Sarah Nasson',
    category: 'Honor Society',
    googleClassroom: '',
  },
  {
    name: 'National Honor Society',
    description: 'Service organization with emphasis on scholarship and character. Junior and senior students with GPA of 3.5 or higher receive invitations in January. Commit to 20 hours community service, $20 dues, maintain academic standing. Officer meetings twice a month.',
    advisor: 'Denise Cimpko-Beller',
    category: 'Honor Society',
    googleClassroom: '',
  },
  {
    name: 'Neurodiversity Ambassadors - Bridgewater',
    description: 'Organize events to support neurodiverse individuals.',
    advisor: 'Cynthia Slootmaker',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'New Comers Club',
    description: 'Assist students who have moved into district and are new to BR. Provide campus tours, regular meetings to get to know other new students and answer questions about campus resources.',
    advisor: 'Jodi Antunes',
    category: 'Social',
    googleClassroom: '',
  },
  {
    name: 'NJ Science League',
    description: 'Compete in 4 meets from January through April. Teams formed for biology, chemistry and physics.',
    advisor: 'Lilia Klubuk',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'Operation Elementary',
    description: 'Community initiative allowing high school students to give back through school and community events. Visit elementary schools to read to kids, help in school renewal, or participate in parties and activities.',
    advisor: 'Michele Kussmaul, Eileen Boosmann',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Philosophy Club',
    description: 'Monthly discussions about various philosophy topics. Discuss philosophical and ethical dilemmas based on popular authors. Engage in Socratic Dialogues. May have guest speakers (philosophy authors/professors) or informal cafe style discussions.',
    advisor: 'Stacey Fleissner',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'PickleBall Club',
    description: 'Meet on Wednesdays during spring (likely late March/early April) at Tennis Courts to play pickleball.',
    advisor: 'Katherine Holt',
    category: 'Sports & Recreation',
    googleClassroom: '',
  },
  {
    name: 'Pinoys of Today',
    description: 'Filipino Culture Club celebrating Filipino heritage and traditions.',
    advisor: 'Farrah Walters, Eugene Pirog',
    category: 'Cultural',
    googleClassroom: '',
  },
  {
    name: 'Piu Vivace',
    description: 'Unique Orchestra Club for students who like to play fun music with like-minded friends. Form small groups as well as play in a large ensemble.',
    advisor: 'Hsiao-Yu Lin Griggs',
    category: 'Arts & Media',
    googleClassroom: '34xb3l2d',
  },
  {
    name: 'Project BR',
    description: 'Local volunteering within Bridgewater and Raritan: donations, soup kitchens, school/park cleanups, work with animal shelters, food drives, and senior centers.',
    advisor: 'Linley Sullivan',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Psychology for Youth Club',
    description: 'Create a community dedicated to psychology that spreads knowledge and awareness about the study of the mind, personality, and mental health. Encourage engagement in social and psychological issues. Meet twice a month on Tuesdays in room 414.',
    advisor: 'Katherine Holt',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'Quantum Computing Club',
    description: 'Focus on cutting-edge aspect of hardware computer engineering. Learn about quantum computer advantages over regular computers, design, and how it operates (hardware and software).',
    advisor: 'Fangze Shang',
    category: 'STEM',
    googleClassroom: '',
  },
  {
    name: 'Quill & Scroll Honor Society',
    description: 'International honor society for high school journalists.',
    advisor: 'Victor Smoke, Bruce Moran',
    category: 'Honor Society',
    googleClassroom: '',
  },
  {
    name: 'Raritan Food Pantry Club',
    description: 'Focus on giving back to the community. Collect donations for the pantry, create seasonal decorations. Meet at least once a month either during lunch or after school in Room 1013. New members always welcome!',
    advisor: 'Laura James',
    category: 'Service',
    googleClassroom: 'sduygru',
  },
  {
    name: 'REACT: Relief, Empowerment, Aid, Care, Trust',
    description: 'Provide support to individuals in stressful climates—particularly those in underdeveloped regions. Through fundraisers, care packages, collaborations, and drives, collect and donate books, stationery, clothing, care products, and toys.',
    advisor: 'Robert Thorp',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Republicans',
    description: 'Meet other conservative students while learning about the US political system and getting involved in local politics.',
    advisor: 'Eugene McAteer',
    category: 'Government & Politics',
    googleClassroom: '',
  },
  {
    name: 'RPG Club',
    description: 'Dungeons and Dragons: Meets weekly Wednesdays from 2:13 - 4:00 in Library Classroom A/B.',
    advisor: 'Abbe Rubin, Xenia Stryzak',
    category: 'Sports & Recreation',
    googleClassroom: '',
  },
  {
    name: 'Samaritan Homeless Interim Program',
    description: 'Partner with local organization to help homeless citizens.',
    advisor: '',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Science Bowl Team',
    description: 'Compete in weekend competitions with rapid-fire, challenging questions in Biology, Chemistry, Physics and Math. BRHS offers an A and B team.',
    advisor: 'Cherie Pieroni',
    category: 'Academic',
    googleClassroom: '',
  },
  {
    name: 'Science Olympiad',
    description: 'Open to anyone passionate about science and interested in competing. Meet Wednesdays to prepare for regional Science Olympiad in events including biology, chemistry, anatomy, ecology, astronomy, physics, robotics, coding, and more!',
    advisor: 'Priya Mangano',
    category: 'Academic',
    googleClassroom: 'myxbnb7',
  },
  {
    name: 'Sending Sunshine',
    description: 'Affiliated with organization connecting with senior centers to support and uplift senior citizens. Registered charity in more than 26 countries. Hold monthly meetings to make cards and write letters, then deliver to nearby senior center.',
    advisor: 'Kristen Vogel',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Ski and Snowboard Club',
    description: 'Offers students in grades 9-12 opportunity to ski and snowboard at Blue Mountain. Juniors and Seniors have opportunity for overnight trip to Lake Placid, NY.',
    advisor: 'Ed O\'Melia',
    category: 'Sports & Recreation',
    googleClassroom: '',
  },
  {
    name: 'Sports Debate',
    description: 'Discuss relevant news in the world of sports. Debate prompts provided and volunteers selected to cordially debate. Moderators guide discussion, winners determined by group vote. Meet once or twice a month during lunch.',
    advisor: 'Philip D\'Apolito',
    category: 'Sports & Recreation',
    googleClassroom: '6ggnx4l',
  },
  {
    name: 'Stop the Bleed Club',
    description: 'STOP THE BLEED® Clubs enable students to introduce and build effective programs to prepare and empower community members to act if tragedy strikes.',
    advisor: 'Shawna Ciccotelli',
    category: 'Service',
    googleClassroom: 'snbgezas',
  },
  {
    name: 'Student Council',
    description: 'Represent students of Bridgewater-Raritan High School, provide vehicle for student voice, and unify student body through social activities and community service. Made up of elected representatives in core six positions and general assembly elected first quarter.',
    advisor: 'Sarah Cleary, Michele Mammone',
    category: 'Student Government',
    googleClassroom: '',
  },
  {
    name: 'Students Against Destructive Decisions (SADD)',
    description: 'Share information with peers about significant dangers of alcohol, drug abuse, tobacco, and other teen-related topics. Dedicated to safety and wellness by advocating for healthy decision-making. Meet 1-2 times monthly starting first week of October.',
    advisor: 'Christopher Levin, Mark Palazzi',
    category: 'Service',
    googleClassroom: 'fa2z62mc',
  },
  {
    name: 'The Colors for Coats Club',
    description: 'Spread awareness about Health Literacy.',
    advisor: 'Erica Caughron',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'The Garden Club',
    description: 'Create safe space for native plants and pollinators that enriches BRHS Learning Community. Maintain and improve Garden space, compost food waste with local food bank, teach elementary students about healthy ecosystems. Meet biweekly March through October.',
    advisor: 'Stephanie Makala',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'The Portugas',
    description: 'Dive into rich culture of Portugal. Explore Portuguese language, music, food, or traditions. Enjoy fun activities, cultural events, and connect with others. No experience needed!',
    advisor: 'Elle Greulich',
    category: 'Cultural',
    googleClassroom: 'kh5dziw',
  },
  {
    name: 'The Prowler, Student Newspaper',
    description: 'BRHS newspaper and news site publication. Represent the high school as primary news source. Coverage includes sports, art features, news briefs, club spotlights, charity profiles, literary and film reviews, op-eds and more. Published digitally and in print.',
    advisor: 'Victor Smoke, Bruce Moran',
    category: 'Arts & Media',
    googleClassroom: 'iiznqux',
  },
  {
    name: 'Theoretical Physics Club',
    description: 'Express benefits of research into theoretical physics and educate students on simple topics of theoretical physics in lunch-time meetings. Meet D-Days during first half of lunch, bi-weekly.',
    advisor: 'Colleen Harenberg',
    category: 'STEM',
    googleClassroom: '',
  },
  {
    name: 'Thespian Honor Society',
    description: 'Troupe #5154 recognizes, rewards, and encourages student achievement in all aspects of theatre – performance and production. Students honored on national level with access to opportunities beyond school.',
    advisor: 'Heather Diaforli-Day',
    category: 'Honor Society',
    googleClassroom: '',
  },
  {
    name: 'TOGETHER TERMINATE TD1',
    description: 'Nonprofit organization bringing awareness and raising funds for cure of Type One Diabetes. Bring joy to people with Type 1 by visiting them in hospital. Host bake sales, school events, turkey trots, awareness sessions, and sell bracelets. Donate to hospitals and make care kits.',
    advisor: 'Sean P. Foley',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'uEmpower',
    description: 'Part of non-profit devoted to uplifting women across the world by providing resources, mentorship, and opportunities. Plan events encouraging empowerment among women.',
    advisor: '',
    category: 'Service',
    googleClassroom: '',
  },
  {
    name: 'Unified Club',
    description: 'Mix of general and special education students providing supportive, educational and social peer group. Variety of experiences working with and advocating for people with disabilities through positive social experiences.',
    advisor: 'Carey Marago',
    category: 'Social',
    googleClassroom: '',
  },
  {
    name: 'Video Game Club',
    description: 'Play video games together and socialize. Meetings include playing co-op Switch games and more.',
    advisor: 'Mario Benevento',
    category: 'Sports & Recreation',
    googleClassroom: '',
  },
  {
    name: 'Voices of India',
    description: 'Diverse Indian students sharing their culture with BR community by exploring many different languages spoken in India. Get confident in speaking, reading, and writing Indian languages such as Hindi, Tamil, Gujarati, Telugu, and more. Learn through entertainment culture like movies and music. Food provided, everyone welcome!',
    advisor: 'Elizabeth Farshtey',
    category: 'Cultural',
    googleClassroom: '',
  },
  {
    name: 'Winter Guard',
    description: 'Students in grades 9-12 who share love of performing. Same color guard from marching band but performs independently indoors for winter season with uniquely themed show set to soundtrack.',
    advisor: 'Nicholas Mossa',
    category: 'Arts & Media',
    googleClassroom: '',
  },
  {
    name: 'Women in STEM',
    description: 'Empower and inspire girls through variety of opportunities at high school level. Increase awareness of women\'s potential and help girls recognize their own potential.',
    advisor: 'Carrie Feeney',
    category: 'STEM',
    googleClassroom: '',
  },
  {
    name: 'Young Voters Club',
    description: 'Educate students on politics and voting.',
    advisor: 'Sarah Cleary',
    category: 'Government & Politics',
    googleClassroom: '',
  },
]

const categories = [
  'All',
  'Academic',
  'Arts & Media',
  'Business',
  'Class Council',
  'Cultural',
  'Government & Politics',
  'Honor Society',
  'Service',
  'Social',
  'Sports & Recreation',
  'STEM',
  'Student Government',
]

export default function Clubs() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.advisor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' || club.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Clubs & Activities
          </h1>
          <p className="text-xl text-gray-400 mb-2">
            Over 100 clubs to explore your passions and make new friends
          </p>
          <p className="text-lg text-gray-500">
            {filteredClubs.length} {filteredClubs.length === 1 ? 'club' : 'clubs'} available
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clubs by name, description, or advisor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 card-hover flex flex-col"
            >
              {/* Category Badge */}
              <div className="mb-3">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                  {club.category}
                </span>
              </div>

              {/* Club Name */}
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {club.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-4">
                {club.description}
              </p>

              {/* Advisor */}
              {club.advisor && (
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="line-clamp-1">{club.advisor}</span>
                </div>
              )}

              {/* Google Classroom */}
              {club.googleClassroom && (
                <div className="mt-auto pt-4 border-t border-dark-700">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Google Classroom</span>
                    <code className="text-sm bg-dark-800 px-3 py-1 rounded text-primary font-mono">
                      {club.googleClassroom}
                    </code>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">
              No clubs found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-12 glass-effect rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to Start a New Club?
          </h3>
          <p className="text-gray-400 mb-6">
            Have an idea for a club that doesn't exist yet? Contact Student Activities to learn about starting your own club!
          </p>
          <a
            href="mailto:studentactivities@brrsd.k12.nj.us"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Student Activities
          </a>
        </div>
      </div>
    </div>
  )
}
