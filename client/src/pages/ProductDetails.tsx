/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Product } from "../models/product";
import agent from "../api/agent";
import {
    Box,
    Text,
    Container,
    Stack,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import NotFound from "../components/errors/NotFound";
import Loading from "../components/layout/Loading";
import { currencyFormat } from "../util/util";
import { useStoreContext } from "../context/StoreContext";

const ProductDetails = () => {
    const { basket, setBasket, removeItem } = useStoreContext();
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const item = basket?.items.find(i => i.productId === product?.id);



    useEffect(() => {
        if (item) {
            setQuantity(item.quantity);
        }
        id && agent.Catalog.details(parseInt(id))
            .then(response => setProduct(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id, item]);

    const handleInputChange = (event: any) => {
        if (event.target.value >= 0) {
            setQuantity(parseInt(event.target.value));
        }
    }

    const handleUpdateCart = () => {
        setSubmitting(true);
        if (!item || quantity > item.quantity) {
            const updatedQuantity = item ? quantity - item.quantity : quantity;
            agent.Basket.addItem(product?.id!, updatedQuantity)
                .then(basket => setBasket(basket))
                .catch(error => console.log(error))
                .finally(() => setSubmitting(false));
        } else {
            const updatedQuantity = item.quantity - quantity;
            agent.Basket.removeItem(product?.id!, updatedQuantity)
                .then(() => removeItem(product?.id!, updatedQuantity))
                .catch(error => console.log(error))
                .finally(() => setSubmitting(false));
        }
    }

    if (loading) {
        return <Loading message="Loading product..." />
    }

    if (!product) {
        return <NotFound />
    }

    return (
        <Container pt={20} maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={product.name}
                        src={
                            product.pictureUrl
                        }
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={"100%"}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box>
                        <Heading>
                            {product.name}
                        </Heading>
                        <Text>
                            {currencyFormat(product.price)}
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text>
                                {product.description}
                            </Text>
                        </VStack>
                        <Box>
                            <Text>
                                Product Details
                            </Text>
                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Brand:
                                    </Text>{' '}
                                    {product.brand}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Type:
                                    </Text>{' '}
                                    {product.type}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Quantity in stock:
                                    </Text>{' '}
                                    {product.quantityInStock}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                    <Flex gap={3} alignItems={"center"}>
                        <FormLabel>Quantity:</FormLabel>
                        <Input w={"sm"} type="number" value={quantity} onChange={handleInputChange} />
                        <Button isDisabled={item?.quantity === quantity || !item && quantity === 0} onClick={handleUpdateCart} isLoading={submitting} loadingText={"Loading..."}>
                            {item ? "Update quantity" : "Add to cart"}
                        </Button>
                    </Flex>
                </Stack>
            </SimpleGrid>
        </Container >
    )
}
export default ProductDetails;