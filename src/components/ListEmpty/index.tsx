import { Container, Message } from "./styles";

interface ListEmptyInterface {
    message: string;
}

export function ListEmpty({ message }: ListEmptyInterface) {
    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    )
}