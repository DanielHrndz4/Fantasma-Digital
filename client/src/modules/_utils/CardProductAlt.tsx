import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { VideoGames } from '../../assets/interface';

interface CardShopAltProps{
    game: VideoGames
}

const CardShopAlt: React.FC<CardShopAltProps> = ({game}) => {
    return (
        <div className='glass m-auto w-full h-full rounded-sm overflow-hidden text-white shadow-2xl'>
            <div className='overflow-hidden hover:cursor-pointer bg-black border-0'>
                <img src={`./img/videogames/${game.titulo.replace('_', ' ')}.png`} alt={game.titulo.replace('_', ' ')}
                    className='w-full rounded-t-sm hover:scale-125 transform ease-in-out duration-500' />
            </div>
            <div className='overflow-hidden flex flex-col text-center mx-2 my-3 hover:cursor-default'>
                <h1 className='truncate-text my-2'>{game.titulo}</h1>
                <div className='w-full flex flex-row gap-2'>
                    <button className='w-full py-1 text-md bg-blue-600 rounded-sm mt-2 text-white'>Detalles</button>
                    <button className='w-auto py-1 px-3 text-md bg-black rounded-sm mt-2 text-white'><FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </div>
    )
}

export default CardShopAlt