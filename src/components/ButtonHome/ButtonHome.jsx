import { Button, ButtonGroup } from '@chakra-ui/react'
import {Link} from "react-router-dom";

export const ButtonHome = () => {
    return (
        <Link to="/">
            <Button colorScheme='blue'>Inicio</Button>
        </Link>
    )
} 