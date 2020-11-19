import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { FiLogIn } from 'react-icons/fi';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../../context/AuthProvider';
import logo from '../../assets/logo.png';
import backgroundImg from '../../assets/6573.jpg';

import { Container, ContainerLogin, Title, InputId, TitleButton, ContainerImage } from './styles';

function Login() {
  const { signIn } = useAuth();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {

    setInputValue('ProviUser')
    setTimeout(() => {
      signIn({
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      })

    }, 1100)
    toast.success('Você está logado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    event.preventDefault();
  }

  return (
    <Container>
      <ContainerLogin>

        <img src={logo} alt="logo" width={400} />

        <Title>Faça seu login</Title>
        <form onSubmit={handleSubmit}>

          <div>
            <InputId type="text" placeholder="Clique no botão para logar" disabled value={inputValue} />

          </div>
          <Button variant="contained" startIcon={<FiLogIn />} type="submit" style={{ marginTop: 40 }}>
            <TitleButton>Admin</TitleButton>
          </Button>
        </form>
      </ContainerLogin>
      <ContainerImage>
        <img src={backgroundImg} alt="https://br.freepik.com/vetores/pessoas" style={{ height: '100vh' }} />
      </ContainerImage>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </Container>
  );
}

export default Login;