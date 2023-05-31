import { useEffect, useState } from "react"
import { Basket } from "../models/basket";
import agent from "../api/agent";
import Loading from "../components/layout/Loading";
import { Heading, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Divider, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const ShoppingCart = () => {
    const [loading, setLoading] = useState(true);
    const [basket, setBasket] = useState<Basket | null>(null);

    useEffect(() => {
        agent.Basket.get()
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <Loading message="Loading shopping cart..." />

    if (!basket) return <Heading>Your basket it empty</Heading>

    return (
        <Flex direction={"column"} minH={"100vh"} justifyContent={"center"} alignItems={"center"} width={"full"}>
            <TableContainer mx={5} w={{ base: "auto", md: "3xl", lg: "5xl" }}>
                <Heading mb={5}>Shopping cart</Heading>
                <Divider mb={5} />
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Price</Th>
                            <Th>quantity</Th>
                            <Th>Subtotal</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {basket.items.map(item => (
                            <Tr key={item.productId}>
                                <Td>{item.name}</Td>
                                <Td>${(item.price / 100).toFixed(2)}</Td>
                                <Td>{item.quantity}</Td>
                                <Td>${((item.price / 100) * item.quantity).toFixed(2)}</Td>
                                <Td>
                                    <IconButton icon={<DeleteIcon />} aria-label={"deletes item from basket."} />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>

    )
}

export default ShoppingCart