import React, { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Search from "./search";

const Result = () => {

    const [responseData, setResponseData] = useState({});
    const { infoType, id } = useParams();

    useEffect(() => {
        axios.get(`http://swapi.dev/api/${infoType}/${id}/`)
            .then((response) => {
                setResponseData(response.data);
            })
            .catch(error => console.log("X", error))
    }, [infoType, id])

    return (
        <div>
            <Search />
            {
                infoType === 'people' ? (
                    <div>
                        <h1>{responseData.name}</h1>
                        <h3>Height: {responseData.height}</h3>
                        <h3>Mass: {responseData.mass}</h3>
                        <h3>Hair Color: {responseData.hair_color}</h3>
                        <h3>Skin Color: {responseData.skin_color}</h3>
                    </div>
                ) :
                    <div>
                        <h1>{responseData.name}</h1>
                        <h3>Climate: {responseData.climate}</h3>
                        <h3>Terrain: {responseData.terrain}</h3>
                        <h3>Surface Water: {responseData.surface_water}</h3>
                        <h3>Population: {responseData.population}</h3>
                    </div>
            }
        </div>
    );
};

export default Result;