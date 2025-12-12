import "../styles/about.css";

export function AboutUs() {
  return (
    <section className="au-container-main" id="about">
      <div className="au-container-text">
        <h2>COME MEET US</h2>
        <p>35 To Vinh Dien, Ha Noi, Viet Nam</p>
        <p>Service time: 10AM - 22PM(Mon-Fri)</p>

        <a href="https://github.com/mfrann/swe-jewelry" className="au-link">
          CHAT NOW
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
      <div className="au-container-image">
        <img
          src="src/assets/ambient/office.webp"
          alt="ambient-office-image"
          width={550}
          height={700}
        />
      </div>
    </section>
  );
}
