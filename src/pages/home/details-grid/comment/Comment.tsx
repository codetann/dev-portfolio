import * as styles from "./Comment.styles";

interface CommentProps {
  name: string;
  title: string;
  comment: string;
  photo: string;
}

export function Comment({ name, title, comment, photo }: CommentProps) {
  return (
    <styles.Container>
      <styles.Details>
        <styles.Image src={photo} />
        <styles.Info>
          <styles.Name>{name}</styles.Name>
          <styles.Title>{title}</styles.Title>
        </styles.Info>
      </styles.Details>
      <styles.Comment>
        <i>"{comment}"</i>
      </styles.Comment>
    </styles.Container>
  );
}
