import Image from "next/image";
import styles from "../styles/pages/Home.module.css";
import Button from "../components/Button";
import Input from "../components/SearchInput";
import Header from "../components/Header";
import Link from "next/link";

function Home() {
  return (
    <>
      <Header type="notLogged" />
      <div className={styles.container}>
        <h2>Estes são os itens disponíveis no momento</h2>

        <Input />

        <div className={styles.card}>
          <Image src="/guarda-roupa.png" width={230} height={200} />
          <section>
            <h2>Guarda Roupa em Boas Condições</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Link href="/item-description">
              <a>
                <Button size="small" color="primary">
                  Preciso
                </Button>
              </a>
            </Link>
          </section>
        </div>
        <div className={styles.card}>
          <Image src="/guarda-roupa.png" width={230} height={200} />
          <section>
            <h2>Guarda Roupa em Boas Condições</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Link href="/item-description">
              <a>
                <Button size="small" color="primary">
                  Preciso
                </Button>
              </a>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
