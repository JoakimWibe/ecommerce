import { Heading, Flex, Table, Image, Text, TableContainer, Tbody, Td, Th, Thead, Tr, Divider, IconButton, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { currencyFormat } from "../util/util";
import BasketSummary from "../components/BasketSummary";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "../store/basketSlice";

const ShoppingCart = () => {
    const { basket, status } = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();

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
                                        <Button onClick={() => dispatch(removeBasketItemAsync({
                                            productId: item.productId, quantity: 1, name: "rem"
                                        }))} isLoading={status === "pendingRemoveItem" + item.productId + "rem"}>-</Button>
                                        <Text>{item.quantity}</Text>
                                        <Button onClick={() => dispatch(addBasketItemAsync({ productId: item.productId }))} isLoading={status === "pendingAddItem" + item.productId}>+</Button>
                                    </Flex>
                                </Td>
                                <Td>
                                    <Flex alignItems={"center"} gap={20}>
                                        <Text>${((item.price / 100) * item.quantity).toFixed(2)}</Text>
                                        <IconButton onClick={() => dispatch(removeBasketItemAsync({
                                            productId: item.productId, quantity: item.quantity, name: "del"
                                        }))} isLoading={status === "pendingRemoveItem" + item.productId + "del"} icon={<DeleteIcon />} aria-label={"deletes item from basket."} />
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