import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import { VideoGames } from "../../assets/interface";

interface GamesPropsDetails {
    game: VideoGames;
}

const Details: React.FC<GamesPropsDetails> = ({ game }) => {
    const html = () => {
        return (
            <div className="h-full flex flex-row">
                <div className="w-full">
                    <img src={game.imagen} alt={game.titulo} className="w-[75%]" />
                </div>
                <div className="w-full">
                    <h1>{game.titulo}</h1>
                </div>
            </div>
        );
    };

    Swal.fire({
        width: '75%',
        html: ReactDOMServer.renderToString(html()),
    });

    return null; // Este componente no renderiza nada en la UI, solo lanza la alerta.
};

export default Details;
