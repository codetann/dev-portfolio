import * as styles from "./Card.styles";

interface CardProps {
  icon: JSX.Element;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

function Card({ icon, title, children }: CardProps) {
  return (
    <styles.Container>
      <styles.Info>
        <styles.Icon>{icon}</styles.Icon>
        <styles.Title>{title}</styles.Title>
      </styles.Info>
      {children}
    </styles.Container>
  );
}

export { Card };
