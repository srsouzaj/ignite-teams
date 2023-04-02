import { Container, Subtitle, Title } from "./styles";

interface HighlightInterface {
    title: string;
    subtitle: string;
}

export function Highlight({ title, subtitle }: HighlightInterface) {
    return (
        <Container>
            <Title>
                {title}
            </Title>

            <Subtitle>
                {subtitle}
            </Subtitle>
        </Container>
    )
}