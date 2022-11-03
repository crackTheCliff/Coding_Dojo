import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [searchId, setSearchId] = useState(1);
    const [infoTypes, setInfoTypes] = useState('people');

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/" + infoTypes + "/" + searchId)
    }

    return (
        <form onSubmit={onSubmit} className="row mt-5">
            <div className="col-sm-6 form-group">
                <div className="row">
                    <label htmlFor="category" className="col-sm-4">Search For: </label>
                    <select onChange={e => setInfoTypes(e.target.value)} className="col-sm-8 form-control" name="category" value={infoTypes}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        {/* <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option> */}
                    </select>
                </div>
            </div>

            <div className="col-sm-6 form-group">
                <div className="row">
                    <div className="form-group col-sm-5 row">
                        <label htmlFor="id" className="col-sm-4"> ID: </label>
                        <input onChange={e => setSearchId(e.target.value)} className="col-sm-8 form-control" type="number" name="id" />
                    </div>
                    <div className="form-group col-sm-7">
                        <button className="col-sm-12 btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Search;