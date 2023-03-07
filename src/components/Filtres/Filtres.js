import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import './Filtres.css'

function Filtres(props){
    const [matieres, setMatieres] = useState([]);
    const [groupes, setGroupes] = useState([]);
    const [intervenants, setIntervenants] = useState([]);
    const [salles, setSalles] = useState([]);
    

    useEffect(() => {
        getMatieres();
        getGroupes();
        getIntervenants();
        getSalles();
    }, []);

    function getMatieres() {
        const url = process.env.REACT_APP_API_ENDPOINT + '/v1.0/matieres';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setMatieres(data);
        })
        .catch(error => console.error(error));
    }

    function getGroupes() {
        const url = process.env.REACT_APP_API_ENDPOINT + '/v1.0/groupes';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setGroupes(data);
        })
        .catch(error => console.error(error));
    }

    
    function getIntervenants() {
        const url = process.env.REACT_APP_API_ENDPOINT + '/v1.0/intervenants';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setIntervenants(data);
        })
        .catch(error => console.error(error));
    }

    function getSalles() {
        const url = process.env.REACT_APP_API_ENDPOINT + '/v1.0/salles';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setSalles(data);
        })
        .catch(error => console.error(error));
    }

    //fonction qui récupère les valeurs des select
    function getSelectValues(select) {
        let matiere = document.getElementById('select-matiere-Filtres').value;
        let groupe = document.getElementById('select-groupe-Filtres').value;
        let intervenant = document.getElementById('select-intervenant-Filtres').value;
        let salle = document.getElementById('select-salle-Filtres').value;
        let date = document.getElementById('date-input-Filtres').value;

        if (matiere === '') {
            matiere = '0';
        }
        if (groupe === '') {
            groupe = '0';
        }
        if (intervenant === '') {
            intervenant = '0';
        }
        if (salle === '') {
            salle = '0';
        }
        if (date === '') {
            date = '0';
        }

        getSessions(date, groupe, matiere, intervenant, salle);

        function getSessions(date, groupe, matiere, intervenant, salle){
            const url = process.env.REACT_APP_API_ENDPOINT + '/v1.0/sessions/date='+date+'/groupe='+groupe+'/matiere='+matiere+'/intervenant='+intervenant+'/salle='+salle;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                props.setSessions(data);
            })
            .catch(error => console.log(error));
        }
    }

    
    return (
        <div className="top-filtres">
            <div className="filtres">

                <select className="select" id='select-matiere-Filtres' defaultValue=''>
                    <option className='select-default' value=''>Matière</option>
                    {matieres.map((item) => (
                        <option value={item.id} key={item.matiere}>
                            {item.matiere}
                        </option>
                    ))}
                </select>
                
                <select className="select" id='select-groupe-Filtres' defaultValue=''>
                    <option className='select-default' value=''>Groupe</option>
                    {groupes.map((item) => (
                        <option value={item.id} key={item.groupe}>
                            {item.groupe}
                        </option>
                    ))}
                </select>

                <select className="select" id='select-intervenant-Filtres' defaultValue=''>
                    <option className='select-default' value=''>Intervenant</option>
                    {intervenants.map((item) => (
                        <option value={item.id} key={item.nom}>
                            {item.nom.toUpperCase() + ' ' + item.prenom}
                        </option>
                    ))}
                </select>
                
                <select className="select" id='select-salle-Filtres' defaultValue=''>
                    <option className='select-default' value=''>Salle</option>
                    {salles.map((item) => (
                        <option value={item.salle} key={item.salle}>
                            {item.salle}
                        </option>
                    ))}
                </select>

                <input className="select" required name='date' id='date-input-Filtres' type='date' ></input>
                
                <div id="button-afficher-Filtres">
                    <button className="button-rectangle" type="button" onClick={ () => getSelectValues()}>Afficher
                    </button>
                </div>
                
            </div>
        </div>
       
    );
}

export default Filtres;