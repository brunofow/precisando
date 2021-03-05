import { BiSend } from 'react-icons/bi'

import Header from "../components/Header";

import styles from "../styles/pages/Chat.module.css";

export default function Chat() {
  return (
    <>
      <Header type="logged" />
      <div className={styles.container}>
        <div className={styles.chatContainer}>
          <div className={styles.details}>
            <div>
              <img src="https://github.com/brunofow.png" />
              <div className={styles.userInfo}>
                <strong>Bruno Campos</strong>
                <p>São Paulo-SP</p>
              </div>
            </div>
            <strong>Guarda Roupas em Boas Condições</strong>
          </div>

          <div className={styles.sendText}>
            <input type="text" placeholder="Digite aqui uma mensagem" />
            <button>
              <BiSend size={30} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
