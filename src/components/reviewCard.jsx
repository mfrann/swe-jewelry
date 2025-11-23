import "../styles/reviews.css";

export function ReviewCard() {
  return (
    <section className="r-card-container">
      <div className="r-img">
        <img
          src="src/assets/persons/p-1.webp"
          alt="imagen persona 1"
          width={150}
        />
      </div>
      <div className="r-text">
        <h1>Serge</h1>
        <p>
          I loved the store, they were about to close but they gave us time and
          didn't rush us. We bought lots of beautiful little things.
        </p>
      </div>
    </section>
  );
}
