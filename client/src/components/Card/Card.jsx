/* eslint-disable react/prop-types */
import { Container, Title, TextBlock, TextRows, Text } from "./Card.styled";

const Card = ({
  title,
  amount,
  daysLeft,
  picture,
  sold,
  ticket,
  yieldItem,
}) => {
  return (
    <Container picture={picture}>
      <Title>{title}</Title>
      <TextBlock>
        <TextRows>
          <Text>{amount}</Text>
          <Text>Ticket - {ticket}</Text>
        </TextRows>
        <TextRows>
          <Text>{yieldItem}</Text>
          <Text>{daysLeft}</Text>
        </TextRows>
        <TextRows>
          <Text>{sold}</Text>
        </TextRows>
      </TextBlock>
    </Container>
  );
};

export default Card;
