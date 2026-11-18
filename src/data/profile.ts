/**
 * Single source of truth for all portfolio content.
 * Every fact below is taken from Ponn Babu R's résumé.
 * To add LinkedIn / GitHub / App Store links later, fill in the `social`
 * fields or a project's `links` — the UI shows them automatically.
 */

export const profile = {
  name: 'Ponn Babu R',
  firstName: 'Ponn Babu',
  title: 'iOS Developer',
  tagline: 'Swift · SwiftUI · UIKit',
  location: 'Madurai, Tamil Nadu, India',
  email: 'ponnbabu.r@gmail.com',
  phone: '+91 8248310531',
  phoneHref: 'tel:+918248310531',
  resume: 'Ponn_Babu_Resume.pdf',
  photo: 'profile.webp',
  photoFallback: 'profile.jpg',
  currentRole: 'iOS Developer at Zoho Corporation',
  summary:
    'iOS Developer with 4+ years of experience building and maintaining mobile applications using Swift, UIKit and SwiftUI. Currently working at Zoho Corporation on the ServiceDesk Plus on-premises iOS application. Experienced in API integration, application optimization, debugging and collaborating with cross-functional teams to deliver reliable, user-friendly mobile solutions. Committed to continuous learning and writing quality code.',
  languages: ['Tamil', 'English'],
  social: {
    // Not listed on the résumé — add your URLs here and they will appear in the hero, contact and footer.
    linkedin: '' as string,
    github: '' as string,
  },
}

export const stats = [
  { value: '4+', label: 'Years building iOS apps' },
  { value: '3', label: 'Companies' },
  { value: '6+', label: 'App Store apps contributed to' },
  { value: '1', label: 'Code Player award' },
]

export type SkillGroup = {
  id: string
  title: string
  blurb: string
  icon: 'code' | 'layers' | 'wrench' | 'plug' | 'gauge'
  items: { name: string; note: string }[]
}

export const skills: SkillGroup[] = [
  {
    id: 'lang',
    title: 'Languages & UI',
    blurb: 'Native interfaces built the Apple way.',
    icon: 'code',
    items: [
      { name: 'Swift', note: 'Primary language across every role' },
      { name: 'SwiftUI', note: 'Declarative UI at AppStation' },
      { name: 'UIKit', note: 'Production UI at Osiz & AppStation' },
    ],
  },
  {
    id: 'arch',
    title: 'Architecture',
    blurb: 'Structure that keeps codebases maintainable.',
    icon: 'layers',
    items: [
      { name: 'MVVM', note: 'Testable view-model driven screens' },
      { name: 'MVC', note: 'Apple’s classic UIKit pattern' },
      { name: 'Clean Architecture', note: 'Clear separation of concerns' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    blurb: 'From first commit to the App Store.',
    icon: 'wrench',
    items: [
      { name: 'Xcode', note: 'Building, profiling & debugging' },
      { name: 'Instruments', note: 'Tracking down crashes & performance' },
      { name: 'GitHub', note: 'Version control & code reviews' },
      { name: 'App Store Connect', note: 'Release management' },
      { name: 'TestFlight', note: 'Beta distribution' },
      { name: 'CocoaPods', note: 'Dependency management' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Services',
    blurb: 'Connecting apps to the real world.',
    icon: 'plug',
    items: [
      { name: 'RESTful APIs', note: 'API integration across products' },
      { name: 'Alamofire', note: 'Networking layer' },
      { name: 'Firebase', note: 'Backend services' },
      { name: 'CoreLocation', note: 'Location-aware features' },
      { name: 'Push Notifications', note: 'User engagement' },
    ],
  },
  {
    id: 'practices',
    title: 'Practices',
    blurb: 'Quality is a habit, not a phase.',
    icon: 'gauge',
    items: [
      { name: 'Performance Optimization', note: 'Faster, smoother apps' },
      { name: 'Testing', note: 'Regular testing for code quality' },
      { name: 'Debugging', note: 'Crash & usability troubleshooting' },
      { name: 'Agile / Scrum', note: 'Sprints, stand-ups, code reviews' },
    ],
  },
]

export type Job = {
  id: string
  company: string
  role: string
  location: string
  start: string
  end: string
  duration: string
  current?: boolean
  summary: string
  points: string[]
  tech: string[]
}

export const experience: Job[] = [
  {
    id: 'zoho',
    company: 'Zoho Corporation',
    role: 'iOS Developer',
    location: 'Chennai, Tamil Nadu, India',
    start: 'Jun 2025',
    end: 'Present',
    duration: 'Since Jun 2025',
    current: true,
    summary: 'Contributing to the ServiceDesk Plus on-premises iOS application.',
    points: [
      'Working as an iOS Developer on the ServiceDesk Plus on-premises iOS application.',
      'Contributing to the development and maintenance of the iOS application using Swift and iOS development frameworks.',
    ],
    tech: ['Swift', 'iOS SDK', 'Xcode'],
  },
  {
    id: 'appstation',
    company: 'AppStation Pvt Ltd',
    role: 'iOS Developer',
    location: 'Trivandrum, Kerala, India',
    start: 'Jun 2024',
    end: 'Jun 2025',
    duration: '1 yr',
    summary: 'Worked on the QSFA, Qatar Cancer Society and Q Weather iOS apps with UIKit and SwiftUI.',
    points: [
      'Developed and maintained iOS applications using Swift, UIKit and SwiftUI.',
      'Collaborated with design and backend teams to build efficient, user-friendly applications.',
      'Worked on app optimization, API integration and implementing new features based on requirements.',
      'Ensured code quality and app performance through regular testing and debugging; troubleshot crashes and usability issues using Xcode and Instruments.',
    ],
    tech: ['Swift', 'SwiftUI', 'UIKit', 'REST APIs', 'Instruments'],
  },
  {
    id: 'osiz',
    company: 'Osiz Technologies Pvt Ltd',
    role: 'iOS Developer',
    location: 'Madurai, Tamil Nadu, India',
    start: 'Mar 2022',
    end: 'Jun 2024',
    duration: '2 yrs 3 mos',
    summary: 'Worked on the Koinpark and KPK Park iOS apps.',
    points: [
      'Developed and maintained the iOS app for Koinpark, an Osiz-owned crypto exchange platform.',
      'Used Swift and UIKit to build high-performance mobile applications.',
      'Collaborated with backend developers and UI/UX designers to implement features and enhance app functionality.',
      'Conducted bug fixes, app optimization and regular updates to improve security, performance and user experience.',
      'Participated in Agile workflows, including sprint planning, daily stand-ups and code reviews.',
    ],
    tech: ['Swift', 'UIKit', 'Agile', 'Code Reviews'],
  },
]

/* ------------------------------------------------------------------ */
/*  Applications I've built — verified against public App Store data   */
/*  (iTunes lookup, Nov 2026). Icons & screenshots load from Apple's    */
/*  CDN and remain the property of their respective publishers.        */
/* ------------------------------------------------------------------ */

const mz = 'https://is1-ssl.mzstatic.com/image/thumb/'

export type AppProject = {
  id: string
  name: string
  fullName?: string
  publisher: string
  category: string
  storeGenre: string
  description: string
  features: string[]
  contribution: string[]
  highlight: string
  tech: string[]
  appStoreUrl: string
  linkLabel: string
  icon: string
  screenshots: string[]
  accent: [string, string]
}

export type CompanyGroup = {
  id: string
  company: string
  shortName: string
  role: string
  period: string
  location: string
  intro: string
  apps: AppProject[]
}

export const portfolioIntro = [
  'I’ve had the opportunity to work on and contribute to multiple production iOS applications across diverse industries, including cryptocurrency and digital assets, sports and fitness, healthcare, weather forecasting, and enterprise IT management.',
  'My experience spans building user-focused iOS applications and contributing to products used in real-world business environments.',
]

export const portfolioStats = [
  { value: '3', label: 'Companies' },
  { value: '6+', label: 'Application projects' },
  { value: 'Multiple', label: 'Industry domains' },
  { value: 'Production', label: 'iOS applications' },
]

export const companies: CompanyGroup[] = [
  {
    id: 'osiz',
    company: 'Osiz Technologies Pvt Ltd',
    shortName: 'OSIZ',
    role: 'iOS Developer',
    period: 'Mar 2022 – Jun 2024',
    location: 'Madurai, Tamil Nadu',
    intro: 'Crypto and digital-asset apps built with Swift and UIKit, in an Agile team with backend developers and UI/UX designers.',
    apps: [
      {
        id: 'koinpark',
        name: 'Koinpark',
        publisher: 'KOIN PARK PRIVATE LIMITED',
        category: 'Cryptocurrency · Digital Assets',
        storeGenre: 'Finance',
        description: 'A cryptocurrency platform on iOS for buying, selling and trading digital assets in India.',
        features: [
          'Buy, sell and trade 250+ cryptocurrencies, including Bitcoin and Ethereum',
          'INR deposits and withdrawals via UPI, IMPS, NEFT and RTGS',
          'Quick KYC onboarding',
          'Two-factor authentication for account security',
        ],
        contribution: [
          'Contributed to building and developing the Koinpark iOS application as part of the Osiz team.',
          'Built features with Swift and UIKit in collaboration with backend developers and UI/UX designers.',
          'Delivered bug fixes, optimizations and regular updates to improve security, performance and user experience.',
        ],
        highlight: 'Building and developing the iOS app with Swift & UIKit.',
        tech: ['Swift', 'UIKit'],
        appStoreUrl: 'https://apps.apple.com/in/app/koinpark/id6448510693',
        linkLabel: 'View on App Store',
        icon: mz + 'Purple221/v4/3c/38/02/3c3802dd-2c0a-5629-6c5c-1c2d00970b86/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg',
        screenshots: [
          'PurpleSource221/v4/ef/98/ee/ef98ee5d-9919-b7f6-8892-c52d9a6845b6/6.7-1.png',
          'PurpleSource211/v4/a2/8d/d5/a28dd5c9-fc2a-a530-8dfb-ef0274fbc44f/6.7-2.png',
          'PurpleSource211/v4/9d/06/f2/9d06f25d-d593-2d6d-511c-c7f98b8d3284/6.7-3.png',
          'PurpleSource211/v4/c5/17/29/c517290f-4657-ead3-c9f9-adb7dcf7d1ff/6.7-4.png',
          'PurpleSource211/v4/f3/67/0e/f3670ec7-810d-bb6d-dd9c-859617f78ed1/6.7-5.png',
          'PurpleSource221/v4/fe/ab/d8/feabd8d0-b01b-7d27-99e8-cbc477cc6085/6.7-6.png',
        ].map((x) => mz + x + '/392x848bb.jpg'),
        accent: ['#f5a623', '#f05138'],
      },
      {
        id: 'kpk-park',
        name: 'KPK Park',
        publisher: 'KOIN PARK PRIVATE LIMITED',
        // NOTE: the public App Store listing describes KPK Park as a crypto staking app (genre: Finance).
        category: 'Crypto Staking · Finance',
        storeGenre: 'Finance',
        description: 'A staking app from the Koinpark ecosystem for earning passive income on cryptocurrency holdings.',
        features: [
          'Stake cryptocurrencies to earn passive income',
          'Designed to be simple and user-friendly',
          'Built on transparent blockchain technology',
        ],
        contribution: [
          'Contributed to the iOS application development of KPK Park as part of the Osiz team.',
          'Implemented features with Swift and UIKit alongside backend and UI/UX teammates.',
          'Worked on bug fixes, optimization and updates for performance and user experience.',
        ],
        highlight: 'iOS application development with Swift & UIKit.',
        tech: ['Swift', 'UIKit'],
        appStoreUrl: 'https://apps.apple.com/in/app/kpk-park/id6478159374',
        linkLabel: 'View on App Store',
        icon: mz + 'Purple211/v4/55/5f/40/555f40dd-729b-5ec9-f84e-e572256f033f/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
        screenshots: [
          'PurpleSource122/v4/5b/bc/a1/5bbca16e-b870-02f6-bc9f-e5329bd71759/89b9e2e1-e520-481d-8b64-21e8dabec7ea_5.5-1.png',
          'PurpleSource112/v4/af/c3/f3/afc3f3d4-fbac-dd5a-f0c4-f36f75968cba/4bbf1b3d-73fc-4206-a5d3-48b7067a9a12_5.5-2.png',
          'PurpleSource112/v4/59/a1/57/59a15777-f25e-3594-3121-3892cf3b5eb7/8b5c3081-5783-4337-a893-d31490a5da75_5.5-3.png',
          'PurpleSource112/v4/11/f7/27/11f72749-57bd-f252-e757-128c0f1a0ed5/93c8161d-0802-4dac-b806-620cfcbbb0e5_5.5-4.png',
          'PurpleSource112/v4/b5/1b/14/b51b14cd-6e62-c60b-e153-4d1793b40485/1baf0ca6-d1a4-4018-ac07-4a582a7ac632_5.5-5.png',
          'PurpleSource112/v4/e3/9f/d4/e39fd45c-d582-fe40-0dbf-e70b9cae6f58/62cd43e3-036f-4fd9-bad2-b5073f410c76_5.5-6.png',
        ].map((x) => mz + x + '/392x696bb.png'),
        accent: ['#8b5cf6', '#22d3ee'],
      },
    ],
  },
  {
    id: 'appstation',
    company: 'AppStation Pvt Ltd',
    shortName: 'AppStation',
    role: 'iOS Developer',
    period: 'Jun 2024 – Jun 2025',
    location: 'Trivandrum, Kerala',
    intro: 'Public-facing apps for organizations in Qatar — sports, healthcare and weather — built with Swift, UIKit and SwiftUI.',
    apps: [
      {
        id: 'qsfa',
        name: 'QSFA',
        fullName: 'Qatar Sports For All',
        publisher: 'Qatar Sports For All Federation',
        category: 'Sports & Fitness',
        storeGenre: 'Sports',
        description: 'Helps users discover sports locations, explore facilities and access activity information — with Apple Health integration.',
        features: [
          'Discover sports venues and activities across Qatar',
          'Locations and directions to facilities',
          'Connects with Apple Health to show daily steps and distance',
          'Available in Arabic and English',
        ],
        contribution: [
          'Contributed to iOS development and integration work on the QSFA app as part of the AppStation team.',
          'Worked on API integration and new features based on requirements, using Swift, UIKit and SwiftUI.',
          'Helped ensure code quality and performance through testing, debugging and Instruments profiling.',
        ],
        highlight: 'iOS development & integration work, including Apple Health.',
        tech: ['Swift', 'UIKit', 'SwiftUI', 'REST APIs'],
        appStoreUrl: 'https://apps.apple.com/us/app/qsfa/id1316984329',
        linkLabel: 'View on App Store',
        icon: mz + 'Purple221/v4/20/43/36/204336c9-5ac3-2102-9457-69ae5b4df485/AppIcon-0-0-1x_U007emarketing-0-6-0-0-85-220.png/512x512bb.jpg',
        screenshots: [
          'PurpleSource211/v4/1f/ac/8f/1fac8fc2-9ce3-b0ea-4ba8-e9b8f0ec2e3b/6d5b2b4e-bef4-48d1-9296-523b48ed11ce_Simulator_Screenshot_-_iPhone_8_Plus_-_2023-09-04_at_10.47.03.png',
          'PurpleSource211/v4/c8/bc/8d/c8bc8d78-a228-ed26-dfc8-acefea47bc80/083497e5-44db-4e8c-bf04-8e97c29382eb_Simulator_Screenshot_-_iPhone_8_Plus_-_2023-09-04_at_10.46.30.png',
          'PurpleSource221/v4/be/18/2f/be182fdc-16fb-75a9-c578-880a83f8c1e7/b26556fa-16b0-4822-bcfe-c00933f1dc9a_Simulator_Screenshot_-_iPhone_8_Plus_-_2023-09-04_at_10.45.27.png',
          'PurpleSource221/v4/d5/ea/d3/d5ead3ad-15f4-f1c4-96ae-f9191dd05b58/3555b5f6-335f-4e66-a17d-230485b26a1f_Simulator_Screenshot_-_iPhone_8_Plus_-_2023-09-04_at_10.45.35.png',
          'PurpleSource211/v4/ab/1e/79/ab1e7935-c067-06b3-1d94-0e1112d40935/bfd37a33-0a32-410d-bde8-0267319f174c_Simulator_Screenshot_-_iPhone_8_Plus_-_2023-09-04_at_10.46.15.png',
          'PurpleSource211/v4/35/93/c1/3593c198-158d-6fc4-953a-e93e75a6c298/b09de172-bfeb-4d26-83e0-3a664bfee9ad_Simulator_Screenshot_-_iPhone_8_Plus_-_2023-09-04_at_10.44.57.png',
        ].map((x) => mz + x + '/392x696bb.png'),
        accent: ['#8a1538', '#e11d48'],
      },
      {
        id: 'qcs',
        name: 'QCS',
        fullName: 'Qatar Cancer Society',
        publisher: 'Qatar Cancer Society',
        category: 'Healthcare · Charity',
        storeGenre: 'Lifestyle',
        description: 'A healthcare and charity app offering cancer awareness updates, donation information, newsletters and access to expert advice.',
        features: [
          'Cancer awareness updates and news',
          'Donation information and tracking',
          'Awareness newsletters',
          'Access to expert advice',
          'Bilingual: Arabic and English',
        ],
        contribution: [
          'Contributed to developing a meaningful, healthcare-focused iOS experience as part of the AppStation team.',
          'Collaborated with design and backend teams on features, API integration and optimization.',
          'Troubleshot crashes and usability issues using Xcode and Instruments.',
        ],
        highlight: 'A meaningful, healthcare-focused mobile experience.',
        tech: ['Swift', 'UIKit', 'SwiftUI', 'REST APIs'],
        appStoreUrl: 'https://apps.apple.com/us/app/qatar-cancer-society/id1448365698',
        linkLabel: 'View on App Store',
        icon: mz + 'Purple116/v4/6e/58/75/6e5875bd-ddd3-b08a-ab5f-7c854e3bacd3/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-0-85-220.png/512x512bb.jpg',
        screenshots: [
          'Purple115/v4/96/35/78/9635789b-dad3-f63d-a499-3c0fd75002dd/mzl.qbwgguuy.png',
          'Purple115/v4/ea/97/f2/ea97f2be-87da-cebe-8296-8ac7800ec822/mzl.emqwglej.png',
          'Purple115/v4/66/02/4c/66024c64-bc52-26b3-865a-cfbb79a448e5/mzl.yjrjfwiu.png',
          'Purple125/v4/d5/20/da/d520da07-5caa-1902-070e-1c3ea1588f30/mzl.fqasttkn.png',
        ].map((x) => mz + x + '/392x696bb.png'),
        accent: ['#a855f7', '#ec4899'],
      },
      {
        id: 'qweather',
        name: 'Q Weather',
        fullName: 'Q Weather – أرصاد قطر',
        publisher: 'QMD – Qatar Meteorology Department',
        category: 'Weather & Forecasting',
        storeGenre: 'Weather',
        description: 'Current conditions, forecasts, wind information, weather maps and reports for Qatar and international locations.',
        features: [
          'Current weather and forecasts for Qatar and international cities',
          'Animated weather and wind maps',
          'Local weather news and reports',
          'Marine forecasts',
        ],
        contribution: [
          'Contributed to iOS development of the Q Weather app as part of the AppStation team.',
          'Worked on API integration, new features and app optimization using Swift, UIKit and SwiftUI.',
          'Helped maintain quality and performance through regular testing and debugging.',
        ],
        highlight: 'iOS development for a national weather service app.',
        tech: ['Swift', 'UIKit', 'SwiftUI', 'REST APIs'],
        appStoreUrl: 'https://apps.apple.com/us/app/q-weather-%D8%A3%D8%B1%D8%B5%D8%A7%D8%AF-%D9%82%D8%B7%D8%B1/id1463392050',
        linkLabel: 'View on App Store',
        icon: mz + 'Purple211/v4/c7/eb/0a/c7eb0a87-c6b0-0fa6-9ed4-29d0ba0d03a2/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/512x512bb.jpg',
        screenshots: [
          'PurpleSource211/v4/16/ea/cb/16eacb7b-8d28-6853-f3b6-200d156ebcf7/a8ff38d1-4653-4891-8e30-51dee0e3d05d_iPhone5.5_1.png',
          'PurpleSource211/v4/8e/79/56/8e7956e0-a75c-c91b-c7f5-a4734c44465f/image.png',
          'PurpleSource211/v4/dd/0a/40/dd0a4041-34d7-d519-d53a-84564659c4d2/7f2536bd-12c8-477e-8896-84dd0a32a6bf_iPhone5.5_3.png',
          'PurpleSource211/v4/6c/6e/49/6c6e4998-841f-011d-dc47-2bbfd5deb741/3f64880e-2fbe-4025-a951-5f065c94f48f_iPhone5.5_4.png',
          'PurpleSource221/v4/b4/15/e0/b415e0f0-4aa2-f472-4ebb-927b0160df4d/532059b6-7ec4-4448-9392-3b81a4a76baa_iPhone5.5_5.png',
          'PurpleSource211/v4/6c/fe/ac/6cfeac4e-d3d7-8f52-9ac9-bec85de74f3f/b0974d83-8823-4391-826a-1437281891bb_iPhone5.5_6.png',
        ].map((x) => mz + x + '/392x696bb.png'),
        accent: ['#0ea5e9', '#2563eb'],
      },
    ],
  },
  {
    id: 'zoho',
    company: 'Zoho Corporation',
    shortName: 'Zoho',
    role: 'iOS Developer',
    period: 'Jun 2025 – Present',
    location: 'Chennai, Tamil Nadu',
    intro: 'Enterprise-grade iOS development on the ServiceDesk Plus on-premises application.',
    apps: [
      {
        id: 'servicedesk-plus',
        name: 'ServiceDesk Plus',
        fullName: 'Zoho ServiceDesk Plus | On-premises',
        publisher: 'Zoho Corporation',
        category: 'Enterprise IT Service Management',
        storeGenre: 'Business',
        description: 'An enterprise service management app that helps organizations manage IT service requests, incidents and support workflows.',
        features: [
          'Submit, track and manage service requests',
          'Tasks, work logs and solutions on the go',
          'Asset management, including barcode and QR scanning',
          'Approvals, notifications and chat with end users',
          'Companion to an organization’s on-premises ServiceDesk Plus deployment',
        ],
        contribution: [
          'Contributing to enterprise-grade iOS application development on the ServiceDesk Plus on-premises app as part of the Zoho team.',
          'Developing and maintaining the iOS application using Swift and iOS development frameworks.',
        ],
        highlight: 'Contributing to enterprise-grade iOS development.',
        tech: ['Swift', 'iOS SDK'],
        appStoreUrl: 'https://apps.apple.com/in/app/servicedesk-plus-on-premises/id460035266',
        linkLabel: 'View on App Store',
        icon: mz + 'Purple221/v4/3f/62/76/3f6276e5-6423-de41-b7ac-5153f01dfbda/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg',
        screenshots: [
          'PurpleSource211/v4/bd/57/8a/bd578af2-b651-160a-dc1e-c2ac567e212e/0c0a7413-9363-4253-baf5-df800cf23b23_Home.png',
          'PurpleSource221/v4/6f/88/7a/6f887af3-1716-540c-193e-a8072e1369a7/50a0d25c-9894-461e-b31d-f3ff06b8f58e_Request_List.png',
          'PurpleSource221/v4/a2/3c/94/a23c9405-c0c5-8644-c372-bfdcdd429e8e/e361dd8c-bfc8-4ebc-8c53-3476c4b9ca4e_Request_Details.png',
          'PurpleSource221/v4/f4/a9/80/f4a980b5-243c-937b-19dd-ea517540aa0b/4b5fc9b4-61c5-46a6-a3cf-5e6fbbbda470_Add_Request.png',
          'PurpleSource211/v4/b0/e1/b5/b0e1b5f6-3496-e05e-deca-157ff6100715/0c57aebe-1331-46cd-a260-a3c0be092951_Approvals.png',
          'PurpleSource211/v4/9a/61/dc/9a61dc27-895d-4a69-8864-d403ad0ef961/03e47d4f-7388-4442-a98a-5df92dd7da8c_Assets.png',
          'PurpleSource221/v4/ab/91/b8/ab91b86b-0037-b7f5-20ed-c21f6ee0994b/080a668a-a606-4b3c-a2c6-2c374a737623_Chat.png',
        ].map((x) => mz + x + '/392x696bb.png'),
        accent: ['#e42527', '#226db4'],
      },
    ],
  },
]

export const allApps = companies.flatMap((c) => c.apps.map((a) => ({ ...a, companyId: c.id, company: c.company, role: c.role, period: c.period })))

export const education = {
  degree: 'B.Tech — Information Technology',
  school: 'Adithya Institute of Technology',
  period: 'Aug 2017 – Oct 2021',
}

export const awards = [
  {
    title: 'Code Player',
    period: '2023 – 2024',
    text: 'Recognized as a Code Player for exceptional coding skills and contributions to project development.',
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Apps' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
