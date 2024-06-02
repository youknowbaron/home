// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Võ",
  middleName: "Xuân",
  lastName: "Bách",
  message: "| Programmer | Mobile Developer | Outdoorman |",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/youknowbaron/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/la.vox.52/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/iam.lalala/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/bachvo97/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/avatar.JPG"),
  imageSize: 375,
  messages:
    [
      "My name is Vo Xuan Bach, Senior Mobile Developer with 5+ years of experience crafting quality, maintainable code for native and cross-platform applications. Fluent in Flutter Framework and iOS development, delivering reliable and performant solutions that exceed requirements. ",
      "I am looking for opportunities as a software engineer with an expert team of developers who will help advance my career progression to a higher position.",
    ],
  resume: require("../editable-stuff/resume.pdf"),
};

const projects = {
  show: true,
  heading: "Recent Projects",
  data: [
    {
      name: "SEKONIC LD",
      description: "Connecting to the metering device via Bluetooth (BLE) 5.0. Triggering measurement and receiving photometric values from the connected device.",
      android_url: "",
      ios_url: "",
      technical_stack: ["Swift", "SwiftUI", "MVVM", "CoreBluetooth", "Swinject", "SQLite", "Charts", "Render PDF", "Localizations", "CI/CD"],
    },
    {
      name: "Wherever",
      description: "Finding famous spots for traveling. Able to download spot information and view it in offline mode.",
      android_url: "",
      ios_url: "",
      technical_stack: ["Flutter", "Riverpod", "GoRouter", "Dio", "Hive", "RxDart", "Google Maps", "flutter_downloader", "Localizations", "Firebase", "CI/CD"],
    },
    {
      name: "GREET",
      description: "Organizing a streaming, inviting friends, and selling tickets. Enjoying watching videos together while having a conversation with up to 8 people.",
      android_url: "",
      ios_url: "",
      technical_stack: ["Swift", "UIKit", "Alamofire", "Amplify", "Agora", "RxSwift", "RxFlow", "ReactorKit", "Firebase"],
    },
    {
      name: "TWG+",
      description: "The application provides information about TWG’s hospital system also the doctors belong to the group. Providing quick booking appointments for medical examinations and getting advice from doctors.",
      android_url: "https://play.google.com/store/apps/details?id=vn.com.twgroup.twgroup_healthcare",
      ios_url: "https://apps.apple.com/us/app/id1518166857",
      technical_stack: ["Flutter", "BLoC Pattern", "Dio", "Geolocator", "SQLite", "WebView", "Firebase"],
    },
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Mobile Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "vobach1997ts@gmail.com",
};

const showExperiencesDetails = true;
const experiences = {
  show: true,
  heading: "Experiences",
  showDetails: false,
  data: [
    {
      title: "04/2021 - Present",
      cardTitle: "Senior Mobile Developer",
      cardSubtitle: "Execution Lab",
      cardDetailedText: showExperiencesDetails ? [
        "• Developing hybrid and native mobile applications.",
        "• Setting up CI/CD for fast distribution using GitHub Actions and Fastlane.",
        "• Releasing applications to Google Play and App Store.",
        "• Organizing workshops to share knowledge about technology and lifestyle.",
      ] : [],
    },
    {
      title: "03/2020 - 03/2021",
      cardTitle: "Mobile Developer",
      cardSubtitle: "IT Department - Technical World Group",
      cardDetailedText: showExperiencesDetails ? [
        "• Developing internal software, mobile applications.",
        "• Using Flutter with BLoC Pattern to build hybrid apps.",
      ] : [],
    },
    {
      title: "08/2019 - 02/2020",
      cardTitle: "Android Developer",
      cardSubtitle: "Cloud Nine Solutions",
      cardDetailedText: showExperiencesDetails ? [
        "• Working with Maps SDKs: Google Maps, ZDC Map, Map Box.",
        "• Implementing ISMS to manage and secure information.",
        "• Attending weekly workshops about technology, life, experiences, ...",
      ] : [],
    },
    {
      title: "08/2018 - 07/2019",
      cardTitle: "Android Developer",
      cardSubtitle: "VINOVA",
      cardDetailedText: showExperiencesDetails ? [
        "• Developing internal software, mobile applications.",
        "• Maintaining and upgraded old applications.",
        "• Working with CI/CD Jenkins, Fastlane.",
        "• Using advanced techniques such as Kotlin and Android Jetpack.",
        "• Learning and sharing Android techniques in seminar / workshop weekly.",
      ] : [],
    },
    {
      title: "06/2018 - 07/2018",
      cardTitle: "Android Intern",
      cardSubtitle: "VINOVA",
      cardDetailedText: showExperiencesDetails ? [
        "• Learning about developing Android applications.",
        "• Building small projects."
      ] : [],
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, projects, skills, leadership, getInTouch, experiences };
