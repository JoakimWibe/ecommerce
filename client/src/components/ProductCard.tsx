import { Button, Text, Heading, Stack, Image, Center, Flex } from "@chakra-ui/react";
import { Product } from "../models/product"
import { Link } from "react-router-dom";
import { currencyFormat } from "../util/util";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { addBasketItemAsync } from "../store/basketSlice";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { status } = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch();

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
                        <Button onClick={() => dispatch(addBasketItemAsync({ productId: product.id }))} isLoading={status.includes("pendingAddItem" + product.id)} loadingText='Loading...'>Add to cart</Button>
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