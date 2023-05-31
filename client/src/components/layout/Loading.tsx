import { Flex, Spinner, Text } from "@chakra-ui/react"

interface Props {
    message?: string;
}

const Loading = ({ message = "Loading..." }: Props) => {
    return (
        <Flex gap={10} direction={"column"} minH={"100vh"} justifyContent={"center"} alignItems={"center"} width={"full"}>
            <Spinner size='xl' />
            <Text>{message}</Text>
        </Flex>
    )
}

export default Loading;