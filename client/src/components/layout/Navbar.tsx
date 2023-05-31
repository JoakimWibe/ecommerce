import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Stack,
    Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { ImCart } from "react-icons/im"

const Links = [
    { title: "Home", path: "/" },
    { title: "Catalog", path: "/catalog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
];


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box position={"fixed"} w={"full"} zIndex={1} px={4}>
            <Flex direction={{ base: "row-reverse", md: "row" }
            } h={16} alignItems={'center'} justifyContent={'space-between'} >
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box>Ecommerce Store</Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <Link to={link.path} key={link.title}>{link.title}</Link>
                        ))}
                        <Link to={'/shopping-cart'}>
                            <Icon as={ImCart} />
                        </Link>
                    </HStack>
                </HStack>
            </Flex >

            {
                isOpen ? (
                    <Box pb={4} display={{ md: 'none' }} >
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <Link to={link.path} key={link.title}>{link.title}</Link>
                            ))}
                            <Link to={'/shopping-cart'}>
                                <Icon as={ImCart} />
                            </Link>
                        </Stack>
                    </Box >
                ) : null}
        </Box>
    );
}