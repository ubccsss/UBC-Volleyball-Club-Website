import { Button } from "@/src/components/ui/button";

export default function Page() {
    return (
      <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col gap-2">
          <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Fall 2023 Registration
          </h1>
          <p className="max-w-[700px] text-center text-lg text-muted-foreground">
            Sign up for tryouts. Please choose a slot from below. You will be redirected to the 
            payment page once you have successfully signed up.
          </p>
        </div>
        <div className="flex items-center justify-center">
            <Button>
                <div>
                    <h1>
                        Women's Tryouts
                    </h1>
                    <p>
                        January 1 at 1:00pm
                    </p>
                </div>
            </Button>
            <Button>
                <div>
                    <h1>
                        Men's Tryouts
                    </h1>
                    <p>
                        January 1 at 1:00pm
                    </p>
                </div>
            </Button>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Button>
                Sign up
            </Button>
            <h1>
                Already registered? Sign in.
            </h1>
        </div>
        <div className="flex gap-4"></div>
      </section>
    )
  }
  