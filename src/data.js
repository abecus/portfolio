// import React, { useEffect, useState } from "react";

export const blogs = [
  {
    id: 1,
    title: "Typing Effect in React",
    img: "https://miro.medium.com/max/700/0*MJ2a1P8c2VpZ9RN1",
    desc:
      "Today, we will learn how to implement a Typing Effect in React from scratch. Start by creating a starter react app using npx create-react-app my-app or follow the procedure from here.Go to App.js remove all redundant Elements and add a h1tag where the typing effect will take place.Now import to add additional hooks using import {useEfect, useState} from 'react'Create an array of words that will be type one by one",
    link: "https://sleepingfish.medium.com/typing-effect-in-react-56697def0473",
  },
  {
    id: 2,
    title:
      "All Pythagorean Triplets Less Than Equal to N in Optimal Time Complexity",
    img: "https://miro.medium.com/max/700/0*kQfRs44MJgeLqkx5",
    desc:
      "Pythagorean Triplets are set of three ordered positive integers (x,y,z) such that x^2 + y^2 = z^2 where, x < y < z <= N. There are several techniques for generating Pythagorean Triplets for example using Gaussian Integers and using Euclid’s formula. They can be used to generate all primitive Pythagorean Triplets, which again can be used to generate all non-primitive Pythagorean triplets by using the fact that the non Primitive Pythagorean triples are a positive integer multiple of primitive Pythagorean Triplets. Generating Pythagorean triplets simply using two loops by iterating over x and y for all possible x and y, and checking if they satisfy Equation (1), takes time O(N² ). ",
    link:
      "https://levelup.gitconnected.com/all-pythagorean-triplets-less-than-equal-n-in-optimal-time-complexity-babfbe742337",
  },
  {
    id: 3,
    title: "Mandelbrot Set with Python",
    img: "https://miro.medium.com/max/555/1*3NMRrHfC0BMw_BggU8GPvg.png",
    desc:
      "A Mandelbrot set marks the set of points in the complex plane such that the corresponding Julia set is connected and not computable. The Mandelbrot set is the set obtained from the recurrence relation, Z_(n) = Z²_(n-1) + c, where, Z_(0) = c. where c is a complex number” — Wolfram Mathworld.Mandelbrot set  created using python script The colors in a Mandelbrot set represents the iterations at which that complex number diverges to infinity (we can use here some threshold instead of infinity).",
    link:
      "https://levelup.gitconnected.com/mandelbrot-set-with-python-983e9fc47f56",
  },
  {
    id: 4,
    title: "Search Technique on Graphs: Breadth-First Search",
    img: "https://miro.medium.com/max/700/1*p4bHowcZgckG1dNjACgPWg.jpeg",
    desc:
      "Breadth-first search (BFS) is a common search technique on graphs. BFS is a companion of depth-first search (DFS). While DFS traverses the graph depth-wise, BFS does it breadth-wise. It’s used to find a node in a graph. It may also be used to get the path to that node from a given node or to just traverse all the nodes and edges in a graph.",
    link:
      "https://medium.com/better-programming/search-technique-on-graphs-breadth-first-search-dab467f73ff8",
  },
  {
    id: 5,
    title: "Search Technique on Graphs: Depth-First Search",
    img: "https://miro.medium.com/max/1000/0*Sufk8bfmJcaFJz1e",
    desc:
      "Depth-First Search (DFS) is a common search technique on graphs. It is used to find a node in a graph and may also be used to get the path to that node from a given node or to just traverse all the nodes and edges in a graph. It can also be augmented to do many more interesting things such as finding connected components, strongly connected components, minimum spanning tree, cycles in graphs, topological sort, etc.",

    link:
      "https://medium.com/swlh/vanilla-search-techniques-on-graphs-dfs-and-bfs-c5cff5d0937d",
  },
  {
    id: 6,
    title: "Graph Theory Algorithms “Simplified”",
    img: "https://miro.medium.com/max/700/1*3wUddlYo5oG7r_qpuxs55g.png",
    desc:
      "Graph theory is a very broad branch of mathematics and it is highly applicable in real-world problems. Originally, graph theory was “invented” to solve real-world problems and after that, it was hijacked by abstract mathematicians like all other branches of mathematics.In this tutorial and subsequent tutorials, we will look at some graph theory algorithms and their implementations in Python. Now, back to the meat of the subject.",
    link:
      "https://medium.com/better-programming/graph-theory-algorithms-simplified-9a6868cc222",
  },
];

export const projectToShow = [
  "AI-Chess-Engine",
  "Artificial-Intelligence",
  "DIP",
  "connect-4",
  // "Django-React-Todo-WebApp",
  "DS-and-Algorithms",
  "LCTestSuit",
  "Pong-GoDot",
  "React-Django-AI-TicTacToe",
  "Typing-Bolt-Hack",
  "Django-React-Digit-Recognizer",
];

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
    ref:
      "https://drive.google.com/file/d/1hfYUFAmMR0ULHEKGkQNfmyJSwvO7kJsw/view?usp=sharing",
    name: "resume",
  },
];

// const medium_url = "https://medium.com/@sleepingFish/latest?format=json";
