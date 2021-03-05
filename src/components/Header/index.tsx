import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import styles from "../../styles/Components/Header.module.css";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { useState } from "react";

type Props = {
  type: string;
};

function HeaderComponent({ type }: Props) {
  const [isNotificationOpened, setIsNotificationOpened] = useState(false);

  let headerClass = "";
  let logged = false;
  let form = false;

  switch (type) {
    case "form":
      headerClass = `${styles.headerForm}`;
      form = true;
      break;
    case "logged":
      headerClass = `${styles.headerLogged}`;
      logged = true;
      break;
    case "notLogged":
      headerClass = `${styles.headerLogged}`;
      break;
    default:
      break;
  }

  function toggleNotification() {
    if (isNotificationOpened) {
      setIsNotificationOpened(false);
    } else {
      setIsNotificationOpened(true);
    }
  }

  return (
    <header className={`${styles.header} ${headerClass}`}>
      <Link href="/">
        <a>
          <Image src="/logo.svg" alt="Precisando" width={200} height={100} />
        </a>
      </Link>

      {logged ? (
        <div className={styles.userContainer}>
          {isNotificationOpened ? (
            <div className={styles.notifications}>
              <IoMdNotifications size={40} onClick={toggleNotification} color="#DF6767" />
              <div></div>
            </div>
          ) : (
            <IoMdNotificationsOutline size={40} onClick={toggleNotification} color="#DF6767" />
          )}
          <img src="https://storage.googleapis.com/precisando-bucket/IMG_20210218_125616_829~2.jpg" className={styles.user} unselectable="off" />
        </div>
      ) : form ? (
        <div></div>
      ) : (
        <div className={styles.buttonContainer}>
          <Link href="/login">
            <a>
              <Button size="medium" color="white">
                Entrar
              </Button>
            </a>
          </Link>
          <Link href="/register">
            <a>
              <Button size="medium" color="primary">
                Cadastrar
              </Button>
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}

export default HeaderComponent;
