import Navbar from '../_navbar/Navbar';
import Brands from '../_utils/Brands';
import SliderHome from '../_slider/SliderHome';
import VideoGamesHome from '../_videogames/VideoGamesHome';

const Home: React.FC = () => {

    return (
        <main className='w-full h-screen relative'>
            <div className='absolute inset-0 flex justify-center'>
                <Navbar />
            </div>
            <div className="relative w-full h-full">
                <img
                    src="./img/background/bggame.png"
                    alt="Fondo"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: 0.55 }} // Ajusta la opacidad según lo necesites
                ></div>
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"
                    style={{ background: 'linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(0,0,0,0) 35%)' }}
                ></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center w-1/2 m-auto pb-[150px]'>
                    <p className='flex flex-row w-full justify-center items-center'>
                        <hr className='border-1.5 border-white w-20' />
                        <span className='m-4 text-white'>GAMEWORLD DISTRIBUTORS</span>
                        <hr className='border-1.5 border-white w-20' />
                    </p>
                    <h1 className='text-white text-4xl font-bold text-center'>
                        Connecting Players & Games in an Immersive environment.
                    </h1>
                </div>
            </div>

            {/* <div className='flex flex-row bg-black items-center justify-center pb-12 pt-4'>
                <Brands brand="playstation" />
            </div> */}

            <div className='w-full bg-black py-20'>
                <SliderHome />
            </div>

            <div className='w-full'>
                <VideoGamesHome />
            </div>

        </main>
    );
}

export default Home;
