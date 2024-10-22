import { Button, ButtonGroup } from '@chakra-ui/react'
import {Link} from "react-router-dom";

export const ButtonHome = () => {
    return (
        <Link to="/">
            <Button colorScheme='pink'>Inicio</Button>
        </Link>
    )
} 