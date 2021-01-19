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
    ref:
      "https://drive.google.com/file/d/1hfYUFAmMR0ULHEKGkQNfmyJSwvO7kJsw/view?usp=sharing",
    name: "resume",
  },
];

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
