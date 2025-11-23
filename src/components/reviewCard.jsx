import "../styles/reviews.css";

export function ReviewCard({ src, name, comment }) {
  return (
    <section className="r-card-container">
      <div className="r-img">
        <img src={src} alt="imagen persona 1" width={75} />
      </div>
      <div className="r-text">
        <h1>{name}</h1>
        <p>{comment}</p>
      </div>
    </section>
  );
}
