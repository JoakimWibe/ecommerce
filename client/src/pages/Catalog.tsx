import { useEffect } from "react";
import ProductList from "../components/ProductList"
import Loading from "../components/layout/Loading";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { fetchProductsAsync, productSelectors } from "../store/catalogSlice";

export const Catalog = () => {
    const products = useAppSelector(productSelectors.selectAll);
    const { productsLoaded, status } = useAppSelector(state => state.catalog)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) {
            dispatch(fetchProductsAsync())
        }
    }, [dispatch, productsLoaded])

    if (status.includes("pending")) return <Loading message="loading products..." />

    return (
        <ProductList products={products} />
    )
}
