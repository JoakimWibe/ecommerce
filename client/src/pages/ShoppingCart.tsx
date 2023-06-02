import { Heading, Flex, Table, Image, Text, TableContainer, Tbody, Td, Th, Thead, Tr, Divider, IconButton, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useStoreContext } from "../context/StoreContext";
import { useState } from "react";
import agent from "../api/agent";
import { currencyFormat } from "../util/util";
import BasketSummary from "../components/BasketSummary";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    const { basket, setBasket, removeItem } = useStoreContext();
    const [status, setStatus] = useState({
        loading: false,
        name: ""
    });

    function handleAddItem(productId: number, name: string) {
        setStatus({ loading: true, name });
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: "" }));
    }

    function handleRemoveItem(productId: number, quantity = 1, name: string) {
        setStatus({ loading: true, name });
        agent.Basket.removeItem(productId, quantity)
            .then(() => removeItem(productId, quantity))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: "" }));
    }

    if (!basket) return <Heading>Your shopping cart is empty</Heading>

    return (
        <Flex direction={"column"} minH={"100vh"} justifyContent={"center"} alignItems={"center"} width={"full"}>
            <TableContainer mx={5} w={{ base: "auto", md: "3xl", lg: "5xl" }}>
                <Heading mb={5}>Shopping cart</Heading>
                <Divider mb={5} />
                <Table variant="simple">
                    <Thead bg={"gray.200"}>
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
                                <Td>
                                    <Link to={`/catalog/${item.productId}`}>
                                        <Flex alignItems={"center"}>
                                            <Image mr={5} height={50} src={item.pictureUrl} alt={item.name} />
                                            <Text>{item.name}</Text>
                                        </Flex>
                                    </Link>
                                </Td>
                                <Td>{currencyFormat(item.price)}</Td>
                                <Td>
                                    <Flex alignItems={"center"} gap={5}>
                                        <Button onClick={() => handleRemoveItem(item.productId, 1, "rem" + item.productId)} isLoading={status.loading && status.name === "rem" + item.productId}>-</Button>
                                        <Text>{item.quantity}</Text>
                                        <Button onClick={() => handleAddItem(item.productId, "add" + item.productId)} isLoading={status.loading && status.name === "add" + item.productId}>+</Button>
                                    </Flex>
                                </Td>
                                <Td>
                                    <Flex alignItems={"center"} gap={20}>
                                        <Text>${((item.price / 100) * item.quantity).toFixed(2)}</Text>
                                        <IconButton onClick={() => handleRemoveItem(item.productId, item.quantity, "del" + item.productId)} isLoading={status.loading && status.name === "del" + item.productId} icon={<DeleteIcon />} aria-label={"deletes item from basket."} />
                                    </Flex>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <BasketSummary />
            <Flex mt={10} mx={5} w={{ base: "auto", md: "3xl", lg: "5xl" }} justifyContent={"end"}>
                <Link to={"/checkout"}>
                    <Button>Checkout</Button>
                </Link>
            </Flex>
        </Flex>
    )
}

export default ShoppingCart