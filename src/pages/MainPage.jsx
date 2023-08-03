import axios from "axios";
import React, { useEffect } from "react";
import { options } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { ActionTypes } from "../constants/actionTypes";
import { getGenres, getMovies, setLoading } from "../redux/actions/actions";

import ListMovies from "../components/ListMovies";

const MainPage = () => {
  const dispatch = useDispatch();
const state = useSelector((store)=> store.movieReducer)
  useEffect(() => {
    // loadingi true yapar
    dispatch(setLoading(true));

    // popüler film verisini çek

    dispatch(getMovies());

    // kategori verilerini çek ve stora aktar
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
     {/*
       * herbir kategori için o ketagoriye ait
       * filmleri listeleyecek bileşeni ekran basma
       */}
      {state.genres.map((genre)=> (<ListMovies key={genre.id} genre={genre}/>))}
    </div>
  );
};

export default MainPage;
