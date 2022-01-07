import React from 'react';
import Card from './Card';

const Countries = (props) => {

    const { countries, isFetch } = props;

    const renderCountries = (countries) =>{
        return countries.map((__, index) => {
            return (
                isFetch && <Card key={`card_${index}`} index={index}
                borders = {countries[index].borders}
                flag={countries[index].flags.svg}
                name={countries[index].name.common}
                capital={countries[index].capital}
                region={countries[index].region} />
            )
        })

    }
    if (isFetch){
        if(countries.length > 0){
            return (
                <div className="container-80">
                    <div className="container-grid">
                        {renderCountries(countries)}
                    </div>
                </div>
            )
        }else{
            return (
                <div className="container-80">
                    <h2>Nose encontraron coincidencias</h2>
                </div>
            )
        }
    }else{
        <div className="container-80">
            <h2>Cargando paises...</h2>
        </div>
    }
}

export default Countries;