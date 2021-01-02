
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Zhijie Lan",
  title: "Hi all, I'm Zj",
  subTitle: emoji("A passionate Software Developer 🚀 having 3 years experience of building Windows and Linux applications for the Air Traffic Control Automation System with C++ / Java / Qt and some other cool libraries and frameworks."),
  resumeLink: "",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/Zj-Lan",
  linkedin: "https://www.linkedin.com/in/zlan/",
  gmail: "zlan@mun.ca",
  gitlab: "https://gitlab.com/Lanzzzzz",
  facebook: "https://www.facebook.com/lanzzj/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
  title: "Tech Skills",
  subTitle: "I'm a diligent quick-learner who keeps polishing skills and exploring cutting-edge technology.",
  skills: [
    emoji("⚡ Develop well-designed object-oriented programs in C++, Java, etc."),
    emoji("⚡ Analyze, visualize, or train data using Python, Pandas, NumPy, Matplotlib, and Jupyter Notebook."),
    emoji("⚡ Develop video games using game engines such as Unity and Unreal."),
    emoji("⚡ Learn and master new tech skills in a short time, such as learning web development skills (JavaScript, css, etc.) to deploy this portfolio site in 2~3 days.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },     
    {
      skillName: "Html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }, 
    {
      skillName: "Jupyter",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    }, 
    {
      skillName: "Data Analysis",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Machine Vision",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-square"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Memorial University of Newfoundland",
      logo: require("./assets/images/MUN.png"),
      subHeader: "Master of Applied Science in Computer Engineering",
      duration: "Sep. 2019 - Apr. 2021",
      desc: "GPA: 3.87/4.0"
    },
    {
      schoolName: "Chengdu University of Information Technology",
      logo: require("./assets/images/CUIT.png"),
      subHeader: "Bachelor of Engineering in Communication Engineering",
      duration: "Sep. 2011 - Jul. 2015",
      desc: "GPA: 3.1/4.0",
      descBullets: [
        "Outstanding Leader of Student Union, 01/2015",
        "Second Grade Scholarship, 10/2013",
        "Third Grade Scholarship, 11/2012"
      ]
    }
  ]
}

const projectInfo = {
  display: true,
  projects :[
    {
      title: "Presentation software",
      desc: "Presentation software that combines features of PowerPoint, Prezi, and Keynote.",
      descBullets: ["Java","Swing","Trident"],
      img: require("./assets/images/projects/Color.gif"),
      live: "",
      code: "https://github.com/Zj-Lan/Java-Swing_PreZoom_Presentation_Software"
    },    
    {
      title: "Plate Recognition",
      desc: "A Machine Vision course project that can locate vehicle license Plates from images and recognize the characters.",
      descBullets: ["C++","OpenCV", "Machine Vision", "Machine Learning"],
      img: require("./assets/images/projects/recog.PNG"),
      live: "",
      code: "https://github.com/Zj-Lan/OpenCV_Vehicle-License-Plate-Recognition"
    },
    {
      title: "2D Platform Game",
      desc: "A 2D platform game built using Unity. Click \"SEE LIVE\" to play it online! ",
      descBullets: ["C#","Unity3D"],
      img: require("./assets/images/projects/platform.gif"),
      live: "https://zj-lan.github.io/Unity_Platform-game/",
      code: "https://github.com/Zj-Lan/Unity_Platform-game"
    },
    {
      title: "Ball Adventure",
      desc: "A third-person game built using Unity. Click \"SEE LIVE\" to play it online! ",
      descBullets: ["C#","Unity3D"],
      img: require("./assets/images/projects/ball.gif"),
      live: "https://zj-lan.github.io/Unity_Ball-Adventure/",
      code: "https://github.com/Zj-Lan/Unity_Ball-Adventure"
    },
    {
      title: "Shooting Game",
      desc: "A first-person shooting game built using Unity. Click \"SEE LIVE\" to play it online! ",
      descBullets: ["C#","Unity3D"],
      img: require("./assets/images/projects/shoot.gif"),
      live: "https://zj-lan.github.io/Unity_Shooting-game/",
      code: "https://github.com/Zj-Lan/Unity_Shooting-game"
    }
    
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Object-oriented Programming (C++ / Java)",  //Insert stack or technology you have experience in
      progressPercentage: "95%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Game Development (Unity / Unreal)",
      progressPercentage: "60%"
    },
    {
      Stack: "Machine Learning (Python / Pandas / NumPy)",
      progressPercentage: "55%"
    },
    {
      Stack: "Web Development (JavaScript / html / css)",
      progressPercentage: "39%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Wisesoft",
      companylogo: require("./assets/images/wisesoft.jpg"),
      date: "Sep. 2015 – Jun. 2019",
      desc: "Worked at the Civil Aviation Department which is responsible for the Air Traffic Control Automation System.",
      descBullets: [
        "The Best Employee of the Year 2016 (10 out of 500 employees).",
        "Independently developed and maintained the Aircraft Situation Data Displays system, the core software of the department.",
        "Engaged in software development, design, debugging, and testing of the C++ / Java / Qt code.",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Jiuzhou Electronic",
      companylogo: require("./assets/images/jiuzhou.jpg"),
      date: "Jul. 2014 – Aug. 2014",
      desc: "Worked as a Software Engineer Intern at Software Department developing Intelligent Light System.",
      descBullets: [
        "Tested and maintained various software and complied related files.",
        "Revised some of the functions and bugs of the software and program.",
        "learned about code structure and regular workflow."
      ]
    },
    {
      role: "Quality Assurance Intern",
      company: "IT Product Test Center",
      companylogo: require("./assets/images/jiance.jpg"),
      date: "Jul. 2013 – Aug. 2013",
      desc: "Worked as a Quality Assurance Intern at Software Testing Division.",
      descBullets: [
        "Tested software to locate the bugs.",
        "Wrote testing summaries and reports.",
        "Assisted the colleagues in completing related tasks."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true",  // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I HAVE DONE IN WORK",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(709)222-5545",
  emailAddress: "zlan@mun.ca",
  location: "Canada",
  hireable: "Yes", 
};

//Twitter Section

const twitterDetails = {
  userName : "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
export { greeting, socialMediaLinks, skillsSection, educationInfo, projectInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
