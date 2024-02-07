/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react"
import Link from "next/link"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import AccountButton from "@/src/components/pages/signin/modal/account-type-button"
import SignupForm from "@/src/components/pages/signin/modal/signup-form"
import styles from "@/src/styles/modal.module.css"

export default function SignupPage() {
  //Account Type
  const [selectedAccount, setSelectedAccount] = useState("player")
  const [showSelectAccountType, setShowSelectAccountType] = useState(true)

  // Player
  const [showPlayerContent, setShowPlayerContent] = useState(false)

  // Admin
  const [showAdminContent, setShowAdminContent] = useState(false)
  const [showAdminConfirmation, setShowAdminConfirmation] = useState(false)

  // Carousel
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const states = ["player", "coach", "admin"]

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
      handleAccountSelect(states[api.selectedScrollSnap()])
    })
  }, [api])

  const handleAccountSelect = (accountType: any) => {
    console.log(accountType)
    if (selectedAccount === accountType) {
      setSelectedAccount(selectedAccount)
    } else {
      setSelectedAccount(accountType)
    }
  }

  const handleAccountType = () => {
    if (selectedAccount === "player") {
      setShowSelectAccountType(false)
      setShowPlayerContent(true)
      setShowAdminContent(false)
    } else if (selectedAccount === "admin" || selectedAccount === "coach") {
      setShowSelectAccountType(false)
      setShowPlayerContent(false)
      setShowAdminContent(true)
    }
  }

  const handleAdminSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(event)

    // TODO
    // check passwords match
    // sends email

    setShowAdminContent(false)
    setShowAdminConfirmation(true)
  }

  const handlePlayerSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // TODO
    // need more info
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Welcome! Create a UBC Volleyball Account...
      </h1>
      <div className="flex flex-col items-center gap-2">
        <div>
          {showSelectAccountType && (
            <div className="flex flex-col items-center">
              <h1 className="mt-16 pb-12 text-2xl font-bold not-italic text-black">
                First things first, you are a...
              </h1>
              <div>
                <Carousel setApi={setApi} className="w-full max-w-xs">
                  <CarouselContent>
                    <CarouselItem key="player">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">Player</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem key="coach">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">Coach</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem key="admin">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">Admin</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                  {/* {current} of {count} */}
                </div>
              </div>
              <Button onClick={handleAccountType}>Continue</Button>
            </div>
          )}

          {showAdminContent && (
            <SignupForm
              title="Create your admin account"
              onSubmit={handleAdminSignup}
              buttonText="SIGN UP"
              inputFields={[
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  placeholder: "Email",
                },
                {
                  type: "password",
                  id: "password",
                  name: "password",
                  placeholder: "Password",
                },
                {
                  type: "password",
                  id: "confirmpass",
                  name: "confirmpass",
                  placeholder: "Confirm Password",
                },
              ]}
            />
          )}

          {showPlayerContent && (
            <SignupForm
              title="Player Registration"
              onSubmit={handlePlayerSignup}
              buttonText="SIGN UP"
              inputFields={[
                { type: "name", id: "name", name: "name", placeholder: "Name" },
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  placeholder: "Email",
                },
                {
                  type: "password",
                  id: "password",
                  name: "password",
                  placeholder: "Password",
                },
              ]}
            />
          )}

          {showAdminConfirmation && (
            <div className={styles["confirm-container"]}>
              <h1 className={styles["confirm-title"]}>Thank you!</h1>
              <h2 className={styles["confirm-text"]}>
                Your registration has been submitted and is currently being
                verified. We will contact you shortly.
              </h2>
              <Button asChild>
                <Link href="/">Go Home</Link>
              </Button>
            </div>
          )}

          {/* {!showAdminConfirmation && (
            <div className={styles['signup-section']}>
              <h1 className={styles['sign-up-text']}> Already registered?</h1>
              <a className={styles['sign-up-link']} href="/login"> Sign in.</a>
            </div>
            )} */}
        </div>
      </div>
    </section>
  )
}
