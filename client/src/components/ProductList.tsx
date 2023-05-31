import { Flex } from "@chakra-ui/react"
import { Product } from "../models/product"
import ProductCard from "./ProductCard"

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <Flex flexWrap={"wrap"} pt={20} w={"full"} justifyContent={"center"} gap={3}>
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Flex>
    )
}

export default ProductList