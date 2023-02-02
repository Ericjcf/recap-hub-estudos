import { Container } from "./styles";

export default function Select({
  color,
  label,
  register,
  children,
  name,
  ...rest
}) {
  return (
    <Container color={color}>
      {label ? <label>{label}</label> : null}
      {register ? (
        <select {...register(name)} {...rest}>
          {children}
        </select>
      ) : (
        <select {...rest}>{children}</select>
      )}
    </Container>
  );
}
