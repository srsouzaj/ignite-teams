import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, ButtonIconTypeStyleTypes } from './styles';

interface ButtonIconInterface extends TouchableOpacityProps {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleTypes
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: ButtonIconInterface) {
    return (
        <Container {...rest}>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    );
}