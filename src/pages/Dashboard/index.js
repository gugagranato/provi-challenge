import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SideMenu from '../../components/SideMenu';
import { useAuth } from '../../context/AuthProvider';
// import { Container } from './styles';

function Dashboard() {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    toast.dark('Bye bye', {
      position: "top-right",
      autoClose: 1100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => signOut(), 1100);
  }
  return (
    <>
      <SideMenu />
      <button onClick={handleSignOut} type="button" style={{ margin: 200 }}>sair</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>

  );
}

export default Dashboard;