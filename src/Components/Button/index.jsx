import { rosa } from "../../Styles/global";
import { Container } from "./styles";
export default function Button({
  tipo = "",
  id = "",
  deletarTech,
  children,
  colorSchema = "",

  ...rest
}) {
  return (
    <Container tipo={tipo} colorSchema={colorSchema} type="button" {...rest}>
      {children}
    </Container>
  );
}
