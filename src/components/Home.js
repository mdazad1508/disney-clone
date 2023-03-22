import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Trending from "./Trending";
import { useEffect } from "react";
import {  setMovie } from "../features/movie/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";
//import { collection } from "firebase/firestore";
//import { doc, collection, query, where, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import Originals from "./Orignals";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  

  useEffect(() => {
     
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

    const foo = async () => {
      const colRef = collection(db, "movies");
      const snapshot = await getDocs(colRef);
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            console.log("nothing matched");
            break;
        }
        
    });
     
      dispatch(
        setMovie({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    };
    foo();
  }, [userName,dispatch]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Originals />
      <Recommends />
      <NewDisney />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
