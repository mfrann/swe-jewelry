import { ReviewCard } from "../components/reviewCard";
import "../styles/reviews.css";

export function Reviews() {
  return (
    <section className="r-main-container">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </section>
  );
}
