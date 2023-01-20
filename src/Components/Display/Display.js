import { useSelector } from "react-redux";
import "./Display.css";

const Display = () => {

    const filteredGames = useSelector(state => {return state});

    const titlesToBeRendered = filteredGames.map(game => {
        return <section key={game.title} className="display"><h2>{game.title}</h2></section>
    })

    return (
        <>
            {titlesToBeRendered}
        </>
    );
}

export default Display;