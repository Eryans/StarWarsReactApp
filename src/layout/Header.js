import NavBar from "../component/NavBar";

export default function Header(){
    return(
        <header className="bg-primary text-white">
            <section className="px-3 py-5">
                <h1>Star Wiki</h1>
                <p className="border-bottom">L'appli des infos Star Wars fourni par Swapi !</p>
            </section>
            <NavBar />
        </header>
    );
}