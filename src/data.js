import { useEffect, useState } from "react";
import firebase from "./firebase.js";

export const navbarLinks = [
  {
    ref: "#home",
    name: "Home",
  },
  {
    ref: "#about",
    name: "About",
  },
  {
    ref: "#projects",
    name: "projects",
  },
  {
    ref: "#blog",
    name: "blog",
  },
  {
    ref: "#contact",
    name: "contact",
  },
  {
    ref: "https://drive.google.com/file/d/1hfYUFAmMR0ULHEKGkQNfmyJSwvO7kJsw/view?usp=sharing",
    name: "resume",
  },
];

export const projects = [
  {
    name: "Typing-Bolt-Hack",
    description:
      "An automated typing machine in python to hack Typing Bolt webApp using Tesseract OCR engine and wonders of PyAutoGUI.",
    id: 0,
    html_url: "https://github.com/abecus/Typing-Bolt-Hack",
  },
  {
    description:
      "An AI chess engine in Python, implemented using Minimax Algorithm, uses python-chess module as Rule Base System, and pygame module as a GUI.",
    html_url: "https://github.com/abecus/AI-Chess-Engine",
    id: 1,
    name: "AI-Chess-Engine",
  },
  {
    id: 2,
    description:
      "A CLI application for creating Script files by given file extension, with problem statement, metadata, functions definition, and test case for solving LeetCode problems.",
    name: "LCTestSuit",
    html_url: "https://github.com/abecus/LCTestSuit",
  },
  {
    description:
      "Digital Image Processing (DIP) algorithms. Implemented using OpenCV in python. It includes filters, transformations, noise removal, histogram equalization, image enhancements, etc.",
    id: 3,
    name: "DIP",
    html_url: "https://github.com/abecus/DIP",
  },
  {
    id: 4,
    html_url: "https://github.com/abecus/React-Django-AI-TicTacToe",
    description: "https://github.com/abecus/React-Django-AI-TicTacToe",
    name: "React-Django-AI-TicTacToe",
  },
  {
    name: "DS-and-Algorithms",
    html_url: "https://github.com/abecus/DS-and-Algorithms",
    description:
      "A repository for Data-Structures and Algorithms completely written in python. It Includes Graph, Sort, Search, Math Algorithms, Leetcode Problems, and Data-Structures, etc.",
    id: 5,
  },
  {
    description:
      "A PONG Game using GoDot game engine written in GDscript with features like HUD at start page, time counter on every game over, and a scoreboard.",
    id: 6,
    html_url: "https://github.com/abecus/Pong-GoDot",
    name: "Pong-GoDot",
  },
  {
    html_url: "https://github.com/abecus/connect-4",
    description:
      "A two-player, multi-threaded connect-4 game. A server hosting the game and clients playing the game with multiple games running in parallel.",
    id: 7,
    name: "connect-4",
  },
  {
    html_url: "https://github.com/abecus/Django-React-Digit-Recognizer",
    id: 8,
    name: "Django-React-Digit-Recognizer",
    description:
      "A CNN based digit recognizer which takes input as canvas drawing using React and processes it on server-side using a Keras's CNN model.",
  },
  {
    html_url: "https://github.com/abecus/Artificial-Intelligence",
    description:
      "A repository of Artificial Intelligence algorithms, written in Python. This repository has been built to make use of AI algorithms and to learn Artificial Intelligence better.",
    id: 9,
    name: "Artificial-Intelligence",
  },
];

const jobs = [
  {
      "company": "Expedia Group",
      "title": "Software Development Engineer 1",
      "date": "February, 2021 - Present",
      "desc": "Currently working in Expedia's Brain Engineering Team as a Software Development Engineer.\nAt Expedia, I work on building recommendation systems for our travel partners to increase their revenue.\nMy work at Expedia includes:\n• Performing ETL operations using PySpark.\n• Scheduling jobs in Airflow, Migrating Apps, writing SQL queries etc.\n• Performing Machine Learning Cycles (Feature Engineering, Training, Predicting, Deploying Model etc.).\n• Automating and creating tools to make my tasks easier and quicker.",
      "id": 1
  },
  {
      "desc": "Build an algorithm for auto team generating bot. Developed backend for OTP generation and authentication for App users, and also Build an optimal algorithm for comparing and updating the ranks of about 4 million entries of contests, in the database table.",
      "company": "League11",
      "title": "Software Development Intern",
      "id": 2,
      "date": "December - 2020"
  },
  {
      "date": "Summer - 2019",
      "id": 3,
      "company": "Career Launcher",
      "title": "Machine Learning Intern",
      "desc": "Designed and implemented Algorithmic Trading models using Machine-Learning algorithms, also Developed statistical methods to learn and extract pieces of information from raw stock data and created portfolios and did the visualisations of them."
  }
]

// const medium_url = "https://medium.com/@sleepingFish/latest?format=json";

const post = (name, data) => {
  // use this function to post data to the firebase db

  data.forEach((entry) => {
    firebase
      .firestore()
      .collection(name)
      .add(entry)
      .then((doc) => {
        console.log(doc.id, entry);
        return true;
      });
  });
};

export const Post = () => {
  post("navLinks", navbarLinks);
  return <>HI</>;
};

export const useFetchFromFirebase = (collectionName, orderBy = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    let response = firebase.firestore().collection(collectionName);
    if (orderBy.length !== 0) response = response.orderBy(...orderBy);
    response.get().then((data) => {
      let items = [];
      data.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};


// to write first enable writing in firebase then uncomment below code

// post("navLinks", navbarLinks);
