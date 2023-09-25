export const Bio: string[] = [
  `           
        Hi, I'm CodeBucks, a web developer and UI/UX designer with a         
        passion for creating beautiful, functional, and user-centered
        digital experiences. With 4 years of experience in the field. I
        am always looking for new and innovative ways to bring my
        clients' visions to life.
    `,
  `
        I believe that design is about more than just making things look
        pretty – it's about solving problems and creating intuitive,
        enjoyable experiences for users.
    `,
  `
        Whether I'm working on a website, mobile app, or other digital
        product, I bring my commitment to design excellence and
        user-centered thinking to every project I work on. I look
        forward to the opportunity to bring my skills and passion to
        your next project.
    `,
];



export type StatsType = {
  stats: number;
  name: string
}

export const AboutStats: StatsType[] = [
  { stats: 50, name: "Satisfied Clients" },
  { stats: 40, name: "Project Completed" },
  { stats: 9, name: "Years of experience" },
];



export type ExperienceDataType = {
  id: number;
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

export const ExperienceData: ExperienceDataType[] = [
  {
    id: 1,
    position: "Software Engineer",
    company: "Google",
    companyLink: "https://google.com",
    time: "2022-Present",
    address: "Mountain View, CA",
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
  },
  {
    id: 2,
    position: "Intern",
    company: "Facebook",
    companyLink: "https://facebook.com/",
    time: "Summer 2021",
    address: "Menlo Park, CA",
    work: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
  },
  {
    id: 3,
    position: "Software Developer",
    company: "Amazon",
    companyLink: "https://amazon.com/",
    time: "2020-2021",
    address: "Seattle, WA",
    work: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
  },
  {
    id:4,
    position: "Teaching Assistant",
    company: "MIT",
    companyLink: "https://mit.edu/",
    time: "Fall 2018",
    address: "Massachusetts Ave, Cambridge, MA",
    work: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."
  }
]