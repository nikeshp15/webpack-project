import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from '../images/frame-border.png';
import swordSvg from '../images/sleep.svg';

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>ohh hi react</h1>
                </section>
                <img src={sword} alt="sword" width='250'/>
                <img src={swordSvg} alt="swordSvg" width='250'/>
                <Recipes/>
            </main>
        </>
    )
};

export default App;
