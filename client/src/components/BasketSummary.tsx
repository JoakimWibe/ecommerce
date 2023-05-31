import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, } from "@chakra-ui/react"
import { useStoreContext } from "../context/StoreContext"
import { currencyFormat } from "../util/util";

const BasketSummary = () => {
    const { basket } = useStoreContext();
    const subtotal = basket?.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
    const deliveryFee = subtotal > 10000 ? 0 : 500;

    return (
        <TableContainer mt={10} mx={5} w={{ base: "auto", md: "3xl", lg: "5xl" }}>
            <Table variant='simple'>
                <TableCaption>*Orders above $100 qualify for free delivery</TableCaption>
                <Thead bg={"gray.200"}>
                    <Tr>
                        <Th>Subtotal</Th>
                        <Th>*Delivery fee</Th>
                        <Th>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{currencyFormat(subtotal)}</Td>
                        <Td>{currencyFormat(deliveryFee)}</Td>
                        <Td>{currencyFormat(subtotal + deliveryFee)}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer >
    )
}

export default BasketSummary