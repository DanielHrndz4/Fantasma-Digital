import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardShop from "../_utils/CardProduct";
import { VideoGames } from "../../assets/interface";
import games from "../../assets/data/games";

const SliderHome: React.FC = () => {
  const [isPS4, setIsPS4] = useState<boolean>(true);
  const [isPS5, setIsPS5] = useState<boolean>(false);
  const [filteredGames, setFilteredGames] = useState<VideoGames[]>([]);

  // Maneja la selección de plataforma
  const handleSelection = (platform: string) => {
    if (platform === "PS4") {
      setIsPS4(true);
      setIsPS5(false);
    } else if (platform === "PS5") {
      setIsPS4(false);
      setIsPS5(true);
    }
  };

  // Configuración del slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  // Efecto para filtrar juegos según la plataforma seleccionada
  useEffect(() => {
    if (isPS4) {
      setFilteredGames(games.slice(0, 20).filter(f => f.esPS4 === true));
    } else if (isPS5) {
      setFilteredGames(games.slice(0, 20).filter(f => f.esPS5 === true));
    }
  }, [isPS4, isPS5]);

  return (
    <div className="w-11/12 m-auto">
      <div className="flex flex-row text-white justify-center items-center pb-10">
        <hr className="border-1 w-60" />
        <h1 className="w-auto flex-shrink-0 px-6 text-5xl font-semibold flex flex-row justify-center items-center">
          Favoritos de
          <span
            className={`cursor-pointer ${isPS4 ? "text-blue-600" : ""} px-2`}
            onClick={() => handleSelection("PS4")}
          >
            PS4
          </span>
          <span>/</span>
          <span
            className={`cursor-pointer ${isPS5 ? "text-blue-600" : ""} px-2`}
            onClick={() => handleSelection("PS5")}
          >
            PS5
          </span>
        </h1>
        <hr className="border-1 w-60" />
      </div>
      <Slider {...settings}>
        {filteredGames.map((game) => (
          <div className="px-2" key={game.titulo}>
            <CardShop game={game} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHome;
