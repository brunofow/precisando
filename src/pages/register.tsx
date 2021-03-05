import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FormHandles } from '@unform/core';
import { Form } from "@unform/web";
import Header from "../components/Header";
import FormContainer from "../components/FormContainer";
import Input from "../components/Input";
import ImageInput from '../components/ImageInput';
import Button from "../components/Button";

import styles from '../styles/pages/Form.module.css';

interface FormData {
  name: string;
  email: string;
  password: string;
}

function Cadastro() {
  const [ stateData, setStateData ] = useState({});
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: FormData) {
    setStateData(data);
    console.log(data);
  }

  return (
    <>
      <Header type="form" />
      <div className={styles.container}>
        <h2>
          Olá, está precisando de algo? <br /> Ou precisando se desfazer de algo
          em boas condições?
        </h2>
        <h3>
          Cadastre-se na nossa plataforma para procurar, ou doar alguma coisa.
        </h3>
        <FormContainer>
          <Form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
            <ImageInput name="avatar" placeholder="Clique para carregar uma imagem" />
            <Input name="name" placeholder="Nome" />
            <Input name="email" placeholder="E-mail" type="email" />
            <Input name="confirmEmail" placeholder="Confirmar E-mail" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <Input name="confirmPassword" placeholder="Confirmar Senha" type="password" />
            <Input name="cep" placeholder="Cep"/>

            <div className={styles.buttonContainer}>
              <Button type="submit" size="large" color="secondary">
                Entrar
              </Button>
              <Link href="/login">
                <a>Não possui cadastro? Clique aqui</a>
              </Link>
            </div>
          </Form>
        </FormContainer>
      </div>
    </>
  );
}

export default Cadastro;
