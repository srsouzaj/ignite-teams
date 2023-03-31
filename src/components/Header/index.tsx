import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from '@assets/logo.png';

interface HeadingInterface {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeadingInterface) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }

            <Logo source={logoImg} />
        </Container>
    )
}