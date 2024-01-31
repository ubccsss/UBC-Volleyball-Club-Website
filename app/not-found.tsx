/* eslint-disable @next/next/no-img-element */
export default function NotFoundPage() {

  return (
    <div className="container relative hidden h-[calc(100vh-65px)] flex-col items-center justify-center sm:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900">
          <img className="h-full w-full object-cover" src="https://www.ubcvolleyball.club/uploads/6/9/6/2/69627653/background-images/1589257857.jpeg" alt="Login hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        </div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          UBC Competitive Volleyball Club
        </div>
        {/* <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”
            </p>
            <footer className="text-sm">
              Sofia Davis
            </footer>
          </blockquote>
        </div> */}
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Looks like you are lost...
            </h1>
            <button className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
