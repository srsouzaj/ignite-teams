import { TouchableOpacityProps } from 'react-native';

import { Container, Title, FilterStyleInterface } from './styles';

type FilterTypes = TouchableOpacityProps & FilterStyleInterface & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest }: FilterTypes) {
    return (
        <Container isActive={isActive} {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    );
}