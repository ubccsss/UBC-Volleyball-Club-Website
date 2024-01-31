/* eslint-disable @next/next/no-img-element */
export default function NotFoundPage() {

  return (
    <div className="container relative hidden h-[calc(100vh-65px)] flex-col items-center justify-center sm:grid lg:max-w-none lg:px-0">
        <h1 className="text-2xl font-semibold tracking-tight text-muted-foreground">
            The Page you are looking for cannot be found... <br/><a className="text-slate-800 underline underline-offset-4 hover:text-primary" href="/">Go Back Home.</a>
        </h1>
    </div>
  )
}
