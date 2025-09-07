import "./card.css";

export interface CardProps {
  title?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, loading = false, children }) => {
  return (
    <div className="rl-card">
      {title && <h2 className="rl-card__title">{title}</h2>}

      {loading ? (
        <div className="rl-card__loading">
          <div className="rl-card__skeleton rl-card__skeleton--title"></div>
          <div className="rl-card__skeleton rl-card__skeleton--line"></div>
          <div className="rl-card__skeleton rl-card__skeleton--line"></div>
        </div>
      ) : (
        <div className="rl-card__content">{children}</div>
      )}
    </div>
  );
};

Card.displayName = "Card";