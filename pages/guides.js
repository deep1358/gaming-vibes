import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";
import styles from "../styles/Guides.module.css";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        ".netlify/functions/guides",
        user && {
          headers: {
            Authorization: `Bearer ${user.token.access_token}`,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Must be Logged in!!");
          }
          return res.json();
        })
        .then((data) => {
          setGuides(data);
          setError(null);
        })
        .catch((e) => {
          setError(e.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
      {guides &&
        guides.map((guide) => (
          <div key={guide.title} className={styles.card}>
            <h3>{guide.title}</h3>
            <h4>Guided by: {guide.author}</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              soluta necessitatibus sint modi. Neque animi sint et maiores
              veritatis modi quaerat nemo fugit quia molestias mollitia, nisi
              sit necessitatibus. Quas beatae laudantium nisi odit quia placeat,
              quasi consectetur molestias perspiciatis ipsa quis doloremque.
              Impedit, repellat dolorem! Amet aut iusto laudantium!
            </p>
          </div>
        ))}
    </div>
  );
}
