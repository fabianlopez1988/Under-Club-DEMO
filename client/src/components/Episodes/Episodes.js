import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEpisodes } from "../../store/episodes";
import { useNavigate } from "react-router-dom";

import "./Episodes.css";
import Carousel from "react-bootstrap/Carousel";

const Episodes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllEpisodes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const episodes = useSelector((state) => state.episode);

  return (
    <div>
      <section className="episode">
        <div className="episode_title-container">
          <h1 className="episode_title">EPISODIOS</h1>
        </div>
        <div className="episode-title-paragraph_container">
          <div className="episode-paragraph_container">
            <p className="episode_paragraph">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy.
            </p>
          </div>
          <div></div>
          <div className="episode_line"></div>
        </div>
      </section>
      <section>
        <Carousel>
          {episodes?.data?.map((episode) => (
            <Carousel.Item>
              <div className="episode-container">
                <div className="episode-container-flyer">
                  <img className="" src={episode.flyer} alt={episode.id} />
                </div>
                <div className="episode-container_intro">
                  <div className="episode-container-intro_grid">
                    <div></div>
                    <div>
                      <p>{episode.intro}</p>
                    </div>
                  </div>
                  <div className="episode-container_button">
                    <div></div>
                    <div>
                      <a href={episode.url} target="_blank" rel="noreferrer">
                        <button
                          className="episode-container_intro_button"
                          src={episode.url}
                        >
                          VER
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Episodes;
