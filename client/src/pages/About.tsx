import { Container, Text, Flex, Button, Alert, AlertIcon, AlertTitle, List, ListItem } from "@chakra-ui/react"
import agent from "../api/agent"
import { useState } from "react";

const About = () => {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidationError() {
        agent.TestErrors.getValidationError()
            .then(() => console.log("Should not see this"))
            .catch(error => setValidationErrors(error))
    }

    return (
        <Container pt={20}>
            <Text>Error for testing purposes</Text>
            <Flex direction={"column"} w={"full"}>
                <Button onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Test 400 error</Button>
                <Button onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Test 401 error</Button>
                <Button onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Test 404 error</Button>
                <Button onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>Test 500 error</Button>
                <Button onClick={getValidationError}>Test validation error</Button>
            </Flex>
            {validationErrors.length > 0 &&
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Validation errors</AlertTitle>
                    <List>
                        {validationErrors.map((error) => (
                            <ListItem key={error}>{error}</ListItem>
                        ))}
                    </List>
                </Alert>
            }
        </Container>
    )
}

export default About