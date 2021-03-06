import { Summary } from "../Summary";
import { TransacctionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransacctionsTable />
    </Container>
  );
}
