import "../styles/collection.css";
import { CollectionCard } from "../components/collectionCard";

export function CollectionText() {
  return (
    <section className="c-main-container" id="collection">
      <div className="c-text">
        <div className="c-h1">
          <h1> A COLLECTION AS UNIQUE AS YOU</h1>
        </div>
        <div className="c-p">
          <p>
            Browse our exclusive collections, from engagement rings to statement
            necklaces. Whether you're celebrating a special occasion or treating
            yourself
          </p>
        </div>
      </div>

      <div className="c-links">
        <CollectionCard
          name="RING"
          info="Browse our collections, about rings you need"
        />
        <CollectionCard
          name="EARRING"
          info="Browse our collections, about earring you need"
        />
        <CollectionCard
          name="BRECELET"
          info="Browse our collections, about brecelet you need"
        />
        <CollectionCard
          name="NECKLACE"
          info="Browse our collections, about necklace you need"
        />
        <CollectionCard
          name="WATCH"
          info="Browse our collections, about watch you need"
        />
      </div>
    </section>
  );
}
