import "../styles/hero.css";

export function Hero() {
  return (
    <section className="hr-container-main">
      <div className="hr-text-container">
        <div className="hr-text">
          <h1>THE BEST LUXURY JEWLERY IN STOCKS</h1>
          <p>The Ouroboros</p>
          <p>A Poweful Symbol of the Cycles of Life</p>
        </div>
        <div className="hr-link">
          <a href="#shop">
            New Collection
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
      </div>
      <div className="hr-image-container">
        <img
          src="src/assets/mockup.webp"
          alt="imagenes referenciales"
          width={515}
          height={510}
        />
      </div>
    </section>
  );
}
