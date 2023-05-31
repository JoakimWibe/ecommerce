import { useState, useEffect } from "react";
import { Product } from "../models/product"
import ProductList from "../components/ProductList"
import agent from "../api/agent";
import Loading from "../components/layout/Loading";

export const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
            .then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <Loading message="loading products..." />

    return (
        <ProductList products={products} />
    )
}
