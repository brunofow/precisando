import { useRouter } from "next/router";

import Header from "../components/Header";
import Button from "../components/Button";

import styles from "../styles/pages/ItemDescription.module.css";
import Link from "next/link";

export default function ItemDescription() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header type="logged" />
      <div className={styles.container}>
        <div className={styles.itemContainer}>
          <div className={styles.images}>
            <img src="/guarda-roupa.png" />
            <img src="/guarda-roupa.png" />
            <img src="/guarda-roupa.png" />
            <img src="/guarda-roupa.png" />
          </div>
          <div className={styles.userContainer}>
            <div>
              <img src="https://github.com/brunofow.png" />
              <div className={styles.userInfo}>
                <strong>Bruno Campos</strong>
                <p>São Paulo-SP</p>
              </div>
            </div>
            <Link href="/chat">
              <a>
                <Button size="medium" color="primary">
                  Conversar
                </Button>
              </a>
            </Link>
          </div>
          <div className={styles.description}>
            <h2>Guarda Roupas em boas Condições</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
