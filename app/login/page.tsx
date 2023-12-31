"use client"
import SigninModal from "@/src/components/login-modal";
import { useState } from "react";

export default function LoginPage() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (

      <section className="">
        <div>
         <SigninModal showModal={showModal} closeModal={closeModal} />

        </div>
      </section>


  )
}
