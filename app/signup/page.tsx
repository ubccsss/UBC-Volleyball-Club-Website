"use client"

import SignupModal from "@/src/components/signup-modal";
import { useState } from "react";

export default function SignupPage() {
    
    const [showSignupModal, setShowSignupModal] = useState(true);
  
    const closeSignupModal = () => {
      setShowSignupModal(false);
    };
    
    return (
        
      <section className="">
          <div>
            <SignupModal showSignupModal={showSignupModal} closeSignupModal={closeSignupModal}/>

          </div>
      </section>
    )
  }
  