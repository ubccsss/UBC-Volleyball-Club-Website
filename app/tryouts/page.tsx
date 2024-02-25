"use client"

import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation"
import { revalidatePath } from "next/cache"
import { custom } from "zod";
import Link from 'next/link';
import Image from 'next/image'


export default function Page() {
    const [selectedTryouts, setSelectedTryouts] = useState("women");
    const router = useRouter();

    const handleSignup =  () => {
        console.log(selectedTryouts);
        router.push(`/tryouts/registration?tryout=${selectedTryouts}`);
      };
    
    return (
      <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex items-center justify-center">
            <a className="cursor-pointer" onClick={() => router.back()}>
                <Image height={30} width={30} src="/backarrow.svg" alt='back arrow'/>
            </a>
        </div>
        <div className="flex max-w-[980px] flex-col gap-2">
          <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Fall 2023 Registration
          </h1>
          <p className="max-w-[700px] text-center text-lg text-black">
            Sign up for tryouts. Please choose a slot from below. You will be redirected to the 
            payment page once you have successfully signed up.
          </p>
        </div>
        <div className="flex items-center justify-center">
            <Button
                variant={selectedTryouts === 'women' ? 'tryoutsselected' : 'tryouts'}
                onClick={() => setSelectedTryouts('women')}
                className="m-4"
            >
                <div>
                    <h1 className="font-extrabold">
                        Women's Tryouts
                    </h1>
                    <p>
                        January 1 at 1:00pm
                    </p>
                </div>
            </Button>
            <Button
                variant={selectedTryouts === 'men' ? 'tryoutsselected' : 'tryouts'}
                onClick={() => setSelectedTryouts('men')}
                className="m-4"
            >
                <div>
                    <h1 className="font-extrabold">
                        Men's Tryouts
                    </h1>
                    <p>
                        January 1 at 1:00pm
                    </p>
                </div>
            </Button>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Button className="mb-6" onClick={handleSignup}>
                SIGN UP
            </Button>
            <h1>
                Already registered? <Link className="text-[#22276c] hover:underline" href="/login">Sign in.</Link>
            </h1>
            
        </div>
        <div className="flex gap-4"></div>
      </section>
    )
  }
  