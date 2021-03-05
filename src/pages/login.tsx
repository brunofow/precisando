import { useRef } from "react";
import Link from "next/link";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Header from "../components/Header";
import FormContainer from "../components/FormContainer";
import Input from "../components/Input";
import Button from "../components/Button";

import styles from '../styles/pages/Form.module.css';

interface FormData {
  email: string;
  password: string;
}

function login() {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <>
      <Header type="form" />
      <div className={styles.container}>
        <h2>Olá, bem-vindo de volta!</h2>
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" placeholder="E-mail" />
            <Input name="password" placeholder="Senha" type="password" />
            <div className={styles.buttonContainer}>
              <Button size="large" color="secondary">
                Entrar
              </Button>
              <Link href="/register">
                <a>Não possui cadastro? Clique aqui</a>
              </Link>
            </div>
          </Form>
        </FormContainer>
      </div>
    </>
  );
}

export default login;
