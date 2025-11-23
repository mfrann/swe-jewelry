import "../styles/cards.css";

export function CollectionCard({ name, info }) {
  return (
    <div className="cc-main-container">
      <h1>{name}</h1>
      <p>{info}</p>

      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 7L7 17M8 7h9v9"
          />
        </svg>
      </a>
    </div>
  );
}
