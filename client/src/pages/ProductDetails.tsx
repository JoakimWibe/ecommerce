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
} from '@chakra-ui/react';
import NotFound from "../components/errors/NotFound";
import Loading from "../components/layout/Loading";
import { currencyFormat } from "../util/util";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        id && agent.Catalog.details(parseInt(id))
            .then(response => setProduct(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id]);


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

                    <Button>
                        Add to cart
                    </Button>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}

export default ProductDetails