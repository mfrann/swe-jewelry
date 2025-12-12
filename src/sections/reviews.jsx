import { ReviewCard } from "../components/reviewCard";
import "../styles/reviews.css";

export function Reviews() {
  return (
    <section className="r-main-container" id="reviews">
      <h1 id="h1">MOST REVIEWS</h1>
      <section className="r-main-card">
        <ReviewCard
          src="/assets/persons/p-1.webp"
          name="Emma Thompson"
          comment="Absolutely stunning pieces! The quality is exceptional and the customer service was wonderful. I really love it."
        />

        <ReviewCard
          src="/assets/persons/p-2.webp"
          name="Sara Munay"
          comment="I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things."
        />

        <ReviewCard
          src="/assets/persons/p-3.webp"
          name="Jessica Pearson"
          comment="Best online jewelry shopping experience I've had! Fast shipping and the earrings are even more beautiful in person."
        />

        <ReviewCard
          src="/assets/persons/p-4.webp"
          name="Laura Bennet"
          comment="The craftsmanship is incredible. I bought a ring for my anniversary and my wife was blown away. Will definitely be a returning customer!"
        />

        <ReviewCard
          src="/assets/persons/p-5.webp"
          name="Amanda Chen"
          comment="Love how unique and elegant their designs are. The pieces feel luxurious without being overly expensive. Great quality."
        />

        <ReviewCard
          src="/assets/persons/p-6.webp"
          name="Rachel Williams"
          comment="Outstanding service from start to finish. They helped me choose the perfect gift and it arrived on time. The recipient absolutely loved it!"
        />

        <ReviewCard
          src="/assets/persons/p-5.webp"
          name="Harvey Specter"
          comment="Such beautiful, timeless pieces. I appreciate the attention to detail and the sustainable packaging. This is my new go-to jewelry store"
        />

        <ReviewCard
          src="/assets/persons/p-7.webp"
          name="Sophie Argent"
          comment="I'm obsessed with my new jewelry! The designs are modern yet classic, and the quality is top-notch.10/10 would recommend!"
        />

        <ReviewCard
          src="/assets/persons/p-5.webp"
          name="Madison Taylor"
          comment="Exceeded my expectations! The bracelet I ordered is delicate and elegant, exactly what I was looking for."
        />
      </section>
    </section>
  );
}
