import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import videogames from "../../assets/data/videogame.data";
import CardShop from "../_utils/CardProduct";

const SliderHome: React.FC = () => {
    const [isPS4, setIsPS4] = useState<boolean>(true);
    const [isPS5, setIsPS5] = useState<boolean>(false);

    const handleSelection = (platform: string) => {
        if (platform === "PS4") {
            setIsPS4(true);
            setIsPS5(false);
        } else if (platform === "PS5") {
            setIsPS4(false);
            setIsPS5(true);
        } else {
            setIsPS4(true);
            setIsPS5(true);
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    const filteredGames = videogames.filter(game => 
        (isPS4 && game.esPS4) || (isPS5 && game.esPS5)
    ).slice(0, 10);

    return (
        <div className="w-11/12 m-auto">
            <div className="flex flex-row text-white justify-center items-center pb-10">
                <hr className="border-1 w-60" />
                <h1 className="w-auto flex-shrink-0 px-6 text-5xl font-semibold flex flex-row justify-center ite">
                    Favoritos de 
                    <span 
                        className={`cursor-pointer ${isPS4 ? 'text-blue-600' : ''} px-2`} 
                        onClick={() => handleSelection("PS4")}
                    >
                        PS4
                    </span>
                    <span>/</span>
                    <span 
                        className={`cursor-pointer ${isPS5 ? 'text-blue-600' : ''} px-2`} 
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
