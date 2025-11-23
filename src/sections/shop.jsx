import "../styles/shop.css";

export function Shop() {
  return (
    <div className="s-main-container">
      <div className="s-text">
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
              d="M5 12h14M5 12l4 4m-4-4l4-4"
            />
          </svg>
          Woman Accessories
        </a>
        <h1>
          <strong>
            <span>S</span>we
          </strong>
          is for Everyone
        </h1>
        <a href="#">
          Man Accessories
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
              d="M5 12h14m-4 4l4-4m-4-4l4 4"
            />
          </svg>
        </a>
      </div>

      <div className="s-img">
        <img src="src/assets/woman.webp" alt="woman accessories" width={500} />
        <img src="src/assets/man.webp" alt="man accessories" width={500} />
      </div>
    </div>
  );
}
