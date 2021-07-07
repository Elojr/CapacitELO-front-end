import { ReactNode } from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const Links = [
    {
        name: 'Matérias',
        path: '/',
    },
    {
        name: 'Perfil',
        path: '/',
    },
]

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
    <Link href={path}>{children}</Link>
)

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={'#ffffff'} px={4}>
                <Flex
                    h={'16'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <h1>exame.</h1>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map(({ name, path }) => (
                                <NavLink key={path} path={path}>
                                    {name}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                            >
                                <Avatar size={'sm'} src={''} />
                            </MenuButton>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map(({ name, path }) => (
                                <NavLink key={path} path={path}>
                                    {name}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}
