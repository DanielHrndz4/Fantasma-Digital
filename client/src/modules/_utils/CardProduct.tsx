import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { VideoGames } from '../../assets/interface';
import { moneyFormat } from '../../assets/_functions/Functions';

interface CardShopProps{
    game: VideoGames
}

const CardShop: React.FC<CardShopProps> = ({game}) => {
    return (
        <div className='bg-white m-auto w-full h-full rounded-sm overflow-hidden'>
            <div className='overflow-hidden hover:cursor-pointer bg-black border-0'>
                <img src={`./img/videogames/${game.titulo.replace('_', ' ')}.png`} alt={game.titulo.replace('_', ' ')}
                    className='w-full rounded-t-sm hover:scale-125 transform ease-in-out duration-500' />
            </div>
            <div className='overflow-hidden flex flex-col text-center mx-2 my-3 hover:cursor-default'>
                <div className='flex flex-row gap-2 pb-1 justify-center'>
                    {game.esPS4 && <h6 className='px-1 text-[12px] rounded-sm bg-blue-600 text-white'>PS4</h6>}
                    {game.esPS5 && <h6 className='px-1 text-[12px] rounded-sm bg-black text-white'>PS5</h6>}
                </div>
                <h1 className='truncate-text my-2'>{game.titulo}</h1>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <h2 className='text-lg font-bold'>US {moneyFormat(game.precioActual)}</h2>
                    <h3 className='text-gray-700 text-sm line-through'>{game.precioOriginal ? `US ${moneyFormat(game.precioOriginal)}` : null}</h3>
                </div>
                <div className='w-full flex flex-row gap-2'>
                    <button className='w-full py-1 text-md bg-blue-600 rounded-sm mt-2 text-white'>Detalles</button>
                    <button className='w-auto py-1 px-3 text-md bg-black rounded-sm mt-2 text-white'><FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </div>
    )
}

export default CardShop