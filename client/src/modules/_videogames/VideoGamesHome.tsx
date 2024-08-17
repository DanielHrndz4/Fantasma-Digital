import React, { useState } from 'react';
import CardShopAlt from '../_utils/CardProductAlt';
import games from '../../assets/data/games';

const VideoGamesHome: React.FC = () => {
    const [filter, setFilter] = useState<string>("All");

    // Función para filtrar videojuegos
    const filteredVideogames = games.filter((game) => {
        if (filter === "All") return true;
        if (filter === "PS4") return game.esPS4;
        if (filter === "PS5") return game.esPS5;
        return false;
    }).slice(0, 12);
    return (
        <div className="relative w-full h-full">
            <img
                src="./img/background/videogames_banner.webp"
                alt="Fondo"
                className="w-full h-full object-cover"
            />
            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: 0.55 }} // Ajusta la opacidad según lo necesites
            ></div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"
                style={{ background: 'linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(0,0,0,0) 15%), linear-gradient(180deg, rgba(1,1,1,1) 0%, rgba(0,0,0,0) 45%)' }}
            ></div>
            <div className="absolute inset-0 p-4 flex flex-col items-center justify-center w-full h-full">
                {/* Controles de filtro */}
                <h1 className='pb-8 text-5xl text-white font-semibold capitalize'>Juegos recién lanzados</h1>
                <div className="mb-4 flex justify-center w-full">
                    <button
                        className={`mx-2 px-4 py-1 rounded-sm font-semibold ${filter === "All" ? 'bg-blue-600 text-white' : 'hover:bg-blue-500 glass text-white'}`}
                        onClick={() => setFilter("All")}
                    >
                        All
                    </button>
                    <button
                        className={`mx-2 px-4 py-1 rounded-sm font-semibold ${filter === "PS4" ? 'bg-blue-600 text-white' : 'hover:bg-blue-500 glass text-white'}`}
                        onClick={() => setFilter("PS4")}
                    >
                        PS4
                    </button>
                    <button
                        className={`mx-2 px-4 py-1 rounded-sm font-semibold ${filter === "PS5" ? 'bg-blue-600 text-white' : 'hover:bg-blue-500 glass text-white'}`}
                        onClick={() => setFilter("PS5")}
                    >
                        PS5
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 w-full max-w-screen-xl">
                    {
                        filteredVideogames.map((game) => (
                            <CardShopAlt key={game.titulo} game={game} />
                        ))
                    }
                </div>
                {/* <div className='w-full max-w-screen-xl pt-6 flex flex-row justify-center items-center'>
                    <button
                        className={`px-8 py-2 shrink-0 uppercase mr-6 rounded-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white`}
                    >
                        Ver todo
                    </button>
                    <hr className='border-1 w-full'/>
                </div> */}
            </div>

        </div>
    )
}

export default VideoGamesHome