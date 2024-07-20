import "./OfertaEspecial.css"
import chuchu from '/tenis.png'
export default function OfertaEspecial() {
    return (
        <div className="container-oferta">
            <div className="img">
                <img src={chuchu} alt="fundo" class="fundo" width="500px" />
            </div>
            <div className="txt">
                <h3 className="corof">Oferta especial</h3>
                <h1 style={{color: '#474747'}}>Air Jordan edição de colecionador</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi vitae autem, dolores quibusdam
                    exercitationem sapiente doloribus maxime earum, quae quod reprehenderit.</p>
                <a href="/ofertas">
                    <button className="button"> Ver oferta </button>
                </a>
            </div>
        </div>
    )
}