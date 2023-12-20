import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import {useSelector} from "react-redux";

const HeroBanner = () => {
  const [background, setBackground] = useState("");

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg = data?.results[Math.floor([Math.random() * 20])]?.backdrop_path;
    setBackground(bg);

  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="hero_banner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome to FilmVista</span>
          <span className="subTitle">Your Gateway to Cinematic Wonders</span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movies and tv shows..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button onClick={searchQueryHandler}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
