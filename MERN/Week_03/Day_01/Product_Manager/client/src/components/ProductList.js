import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios
            .delete("http://localhost:8000/api/products/delete/" + productId)
            .then((res) => {
                removeFromDom(productId);
            });
    };

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Product Name:</th>
                        <th>Product Price:</th>
                        <th>Product Description:</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {props.products.map((product) => {
                    return (
                        <tbody key={product._id}>
                            <tr>
                                <td>
                                    <Link to={"/products/" + product._id}>{product.title}</Link>
                                </td>
                                <td>${product.price}</td>
                                <td className="text-center">{product.description}</td>
                                <td>
                                    <button
                                        onClick={(e) => {
                                            deleteProduct(product._id);
                                        }}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};

export default ProductList;