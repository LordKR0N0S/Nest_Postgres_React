import { useEffect, useState } from "react";
import { CardsBlock, Container, Title, Wrapper } from "./DealsPage.styled";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

const DealsPage = () => {
  const [deals, setDeals] = useState(null);
  const token = useSelector((state) => state.auth.token);

  const getDeals = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_ROUTE_API}/deals`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await response.json();
    setDeals(data);
  };

  useEffect(() => {
    getDeals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Open deals</Title>
        <CardsBlock>
          {deals &&
            deals.length > 0 &&
            deals.map((deal) => (
              <Card
                key={deal.id}
                title={deal.title}
                amount={deal.amount}
                daysLeft={deal.daysLeft}
                picture={deal.picture}
                sold={deal.sold}
                ticket={deal.ticket}
                yieldItem={deal.yieldItem}
              />
            ))}
        </CardsBlock>
      </Wrapper>
    </Container>
  );
};

export default DealsPage;
