import { Container, LoadIndicator, Logo } from './styles';

import logoImg from '@assets/logo.png';


export function Loading() {
    return (
        <Container>
            <Logo source={logoImg} />
            <LoadIndicator />
        </Container>
    );
}