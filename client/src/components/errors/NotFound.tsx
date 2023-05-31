import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} minHeight={"100vh"} textAlign="center" py={10} px={6}>
            <Heading>
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Oops - we could not find what you were looking for.
            </Text>
            <Link to={"/catalog"}>
                <Button>
                    Go back to shop
                </Button>
            </Link>
        </Flex>
    )
}

export default NotFound