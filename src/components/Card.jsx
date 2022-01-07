import React from 'react';

const Card = (props) => {

    const { index, flag, name, population, region, capital} = props;
    return (
        <div className="card" title={index}>
            <div className="image-container">
                <img src={flag} alt={name + "flag"} className="image"/>
            </div>
            <div className="details">
                <div className="title">
                    <h2>{name}</h2>
                </div>
                <p>{`population: ${population}`}</p>
                <p>{`Region: ${region}`}</p>
                <p>{`Capital: ${capital}`}</p>
            </div>
        </div>
    )

}

export default Card;