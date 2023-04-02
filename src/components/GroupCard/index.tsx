import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface GroupCardInterface extends TouchableOpacityProps {
    title: string;
}

export function GroupCard({ title, ...rest }: GroupCardInterface) {
    return (
        <Container {...rest}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}