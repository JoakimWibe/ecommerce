import { Button, Text, Heading, Stack, Image, Center, Flex } from "@chakra-ui/react";
import { Product } from "../models/product"
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../api/agent";
import { useStoreContext } from "../context/StoreContext";
import { currencyFormat } from "../util/util";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const [loading, setLoading] = useState(false)
    const { setBasket } = useStoreContext();

    const handleAddItem = (productId: number) => {
        setLoading(true);
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }

    return (
        <Center py={6} px={10}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ base: 'full', md: '540px' }}
                height={{ base: 'auto', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1}>
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={product.pictureUrl}
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading textAlign={"center"}>
                        {product.name}
                    </Heading>
                    <Text mb={4}>
                        {currencyFormat(product.price)}
                    </Text>
                    <Text
                        textAlign={'center'}
                        px={3}>
                        {product.brand} / {product.type}
                    </Text>
                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Button onClick={() => handleAddItem(product.id)} isLoading={loading} loadingText='Loading...'>Add to cart</Button>
                        <Link to={`/catalog/${product.id}`}>
                            <Button>View</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    );
}

export default ProductCard;