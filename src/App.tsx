import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
import { NewUserModal } from "./components/NewUserModal";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);


  function handleOpenNewUserModal() {
    setIsNewUserModalOpen(true)
  }
  function handleCloseNewUserModal() {
    setIsNewUserModalOpen(false)
  }
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
