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
  title: string;
  place: string;
  placeLink?: string;
  time: string;
  address: string;
  body: string;
}

export const ExperienceData: ExperienceDataType[] = [
  {
    id: 1,
    title: "Software Engineer",
    place: "Google",
    placeLink: "https://google.com",
    time: "2022-Present",
    address: "Mountain View, CA",
    body: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
  },
  {
    id: 2,
    title: "Intern",
    place: "Facebook",
    placeLink: "https://facebook.com/",
    time: "Summer 2021",
    address: "Menlo Park, CA",
    body: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
  },
  {
    id: 3,
    title: "Software Developer",
    place: "Amazon",
    placeLink: "https://amazon.com/",
    time: "2020-2021",
    address: "Seattle, WA",
    body: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
  },
  {
    id:4,
    title: "Teaching Assistant",
    place: "MIT",
    placeLink: "https://mit.edu/",
    time: "Fall 2018",
    address: "Massachusetts Ave, Cambridge, MA",
    body: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."
  }
]

export const EducationData: ExperienceDataType[] = [
  {
    id: 1,
    title: "Software Engineer",
    place: "Google",
    time: "2022-Present",
    address: "Mountain View, CA",
    body: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
  },
  {
    id: 2,
    title: "Intern",
    place: "Facebook",
    time: "Summer 2021",
    address: "Menlo Park, CA",
    body: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
  },
  {
    id: 3,
    title: "Software Developer",
    place: "Amazon",
    time: "2020-2021",
    address: "Seattle, WA",
    body: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
  },
  {
    id:4,
    title: "Teaching Assistant",
    place: "MIT",
    time: "Fall 2018",
    address: "Massachusetts Ave, Cambridge, MA",
    body: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."
  }
]


// Projects 

export type ProjectArrayType = {
  id: number;
  image: string;
  type: string | "Featured Project";
  title: string;
  description?: string;
  link: string;
  github?: string;
};

export const Projects: ProjectArrayType[] = 
[
    {
      id: 1,
      image: "/images/projects/crypto-screener-cover-image.jpg",
      type: "Featured Project",
      title: "Crypto Screener Application",
      description: "CodeBucks is a web application that allows users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
      link: "https://codebucks.netlify.app/",
      github: "https://github.com/codebucks/codebucks"
    },
    {
      id: 2,
      image: "/images/projects/nft-collection-website-cover-image.jpg",
      type: "Website Template",
      title: "NFT collection Website",
      link: "https://codebucks.netlify.app/",
      github: "https://github.com/codebucks/codebucks"
    },
    {
      id: 3,
      type: "Website",
      image: "/images/projects/portfolio-cover-image.jpg",
      title: "Fashion Studio Website",
      link: "https://codebucks.netlify.app/",
      github: "https://github.com/codebucks/codebucks"
    },
    {
      id: 4,
      image: "/images/projects/crypto-screener-cover-image.jpg",
      type: "Featured Project",
      title: "Crypto Screener Application",
      description: "CodeBucks is a web application that allows users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
      link: "https://codebucks.netlify.app/",
      github: "https://github.com/codebucks/codebucks"
    },
    {
      id: 5,
      image: "/images/projects/nft-collection-website-cover-image.jpg",
      type: "Website Template",
      title: "NFT collection Website",
      link: "https://codebucks.netlify.app/",
      github: "https://github.com/codebucks/codebucks"
    },
    {
      id: 6,
      type: "Website",
      image: "/images/projects/portfolio-cover-image.jpg",
      title: "Fashion Studio Website",
      link: "https://codebucks.netlify.app/",
      github: "https://github.com/codebucks/codebucks"
    },
    {
      id: 7,
      image: "/images/projects/crypto-screener-cover-image.jpg",
      type: "Featured Project",
      title: "Crypto Screener Application",
      description: "CodeBucks is a web application that allows users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
      link: "https://codebucks.netlify.app/",
      github: "https://github.com/codebucks/codebucks"
    },
]

// Articles
export type ArticlesCardType = {
  id: number,
  type: "featured" | string;
  image: string,
  title: string,
  description: string,
  link: string,
  time: string,
  willTake: string;
}

export const ArticlesData: ArticlesCardType[] = [
  {
    id: 1,
    type: "featured",
    image: "/images/projects/crypto-screener-cover-image.jpg",
    title: "Crypto Screener Application",
    description: "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
    link: "https://codebucks.netlify.app/",
    time: "January 28, 2023",
    willTake: "9 min"
  },
  {
    id: 2,
    type: "featured",
    image: "/images/projects/nft-collection-website-cover-image.jpg",
    title: "Create loading screen",
    description: "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.",
    link: "https://codebucks.netlify.app/",
    time: "January 27, 2023",
    willTake: "10 min"
  },
  {
    id: 3,
    type: "normal",
    image: "/images/projects/crypto-screener-cover-image.jpg",
    title: "Crypto Screener Application",
    description: "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
    link: "https://codebucks.netlify.app/",
    time: "January 28, 2023",
    willTake: "9 min"
  },
  {
    id: 4,
    type: "normal",
    image: "/images/projects/crypto-screener-cover-image.jpg",
    title: "Create loading screen",
    description: "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.",
    link: "https://codebucks.netlify.app/",
    time: "January 27, 2023",
    willTake: "10 min"
  },
]