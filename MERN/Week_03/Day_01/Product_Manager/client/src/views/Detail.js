import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Detail = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    const editProduct = (productId) => {
        axios.get("http://localhost:8000/api/products/" + productId).then(() => {
            navigate(`/products/${productId}/edit`);
        });
    };

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/delete/" + productId)
            .then((res) => {
                console.log('Product Deleted', res.data.product)
                navigate("/");
            });
    };

    return (
        <div className="container d-flex flex-column justify-content-center col-sm-6">
            <Link to="/">Home</Link>
            <div className="card mt-3">
                <h4 className="card-header">{product.title}</h4>
                <div className="card-body">
                    <h6 className="card-subtitle">${product.price}</h6>
                    <p className="card-text text-center">{product.description}</p>
                    <button
                        className="btn btn-info mr-2"
                        onClick={() => editProduct(product._id)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteProduct(product._id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Detail;