import React, { useState, useEffect } from 'react'
import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const UpdateAuthor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/authors-api/" + id)
            .then((res) => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch((err) => { navigate("/error", err) });
    }, [id, navigate])

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/authors-api/${id}`, author)
            .then((res) => { navigate("/"); })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <div className="container text-center">
            <div className="container text-left">
                <Link to="/">Home</Link>
            </div>
            <h1>Favorite Authors</h1>
            <h5>Edit author:</h5>
            {errors.map((error, index) => (<p className="text-danger" key={index}>{error}</p>))}
            {loaded && (<AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />)}
        </div>
    )
}

export default UpdateAuthor;