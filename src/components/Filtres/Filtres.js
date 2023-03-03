import './Filtres.css'

function Filtres(){
    return (
        <div className="top-filtres">
            <div className="filtres">
                
                <select className="select" required name="annee" id="annee-select-filtres">
                    <option value="annee-1">Année 1</option>
                    <option value="annee-2">Année 2</option>
                    <option value="annee-3">Année 3</option>
                    <option value="annee-4">Année 4</option>
                    <option value="annee-5">Année 5</option>
                </select>

                <select className="select" required name="cycle" id="cycle-select-filtres">
                    <option value="cycle-cir">CIR</option>
                    <option value="cycle-biast">BIAST</option>
                    <option value="cycle-biost">BIOST</option>
                    <option value="cycle-cent">CENT</option>
                    <option value="cycle-cest">CEST</option>
                    <option value="cycle-csi">CSI</option>
                </select>

                <select className="select" required name="option" id="option-select-filtres">
                    <option value="option-esp">Espagnol</option>
                    <option value="option-ang">Anglais</option>
                    <option value="option-all">Allemand</option>
                    <option value="option-bret">Breton</option>
                    <option value="option-chi">Chinois</option>
                </select>

                <input className="select" required name='date' id='date-input-filtres' type='date' ></input>

                <button className="button-rectangle" type="button">Afficher
                </button>
                

                
            </div>
        </div>
       
    );
}

export default Filtres;