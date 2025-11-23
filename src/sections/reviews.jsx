import { ReviewCard } from "../components/reviewCard";
import "../styles/reviews.css";

export function Reviews() {
  return (
    <section className="r-main-container" id="search">
      <h1 id="h1">MOST REVIEWS</h1>
      <section className="r-main-card">
        <ReviewCard
          src="src/assets/persons/p-4.webp"
          name="Jihn Yun"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />

        <ReviewCard
          src="src/assets/persons/p-5.webp"
          name="Val"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />

        <ReviewCard
          src="src/assets/persons/p-4.webp"
          name="Jihn Yun"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />

        <ReviewCard
          src="src/assets/persons/p-5.webp"
          name="Val"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />

        <ReviewCard
          src="src/assets/persons/p-6.webp"
          name="Rich"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />

        <ReviewCard
          src="src/assets/persons/p-6.webp"
          name="Rich"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />

        <ReviewCard
          src="src/assets/persons/p-5.webp"
          name="Val"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />

        <ReviewCard
          src="src/assets/persons/p-6.webp"
          name="Rich"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />

        <ReviewCard
          src="src/assets/persons/p-6.webp"
          name="Rich"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />
      </section>
    </section>
  );
}
