import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleType, Container, Title } from "./styles";

interface ButtonInterface extends TouchableOpacityProps {
    title: string;
    type?: ButtonTypeStyleType;
}

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonInterface) {
    return (
        <Container type={type} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}