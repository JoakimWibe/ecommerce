import { Container, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';


const ServerError = () => {
    const { state } = useLocation();

    return (
        <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} width={"full"} minHeight={"100vh"} py={32} px={6}>
            {state?.error ? (
                <Container>
                    <Heading
                        display="inline-block"
                        as="h2"
                        size="2xl">
                        {state.error.title}
                    </Heading>
                    <Divider my={5} />
                    <Text fontSize="18px" mt={3} mb={2}>
                        {state.error.detail || "internal server error"}
                    </Text>
                </Container>
            ) : (
                <Text fontSize="18px" mt={3} mb={2}>
                    Server error
                </Text>
            )}
        </Flex>
    )
}

export default ServerError;
