import {
  About,
  Appbar,
  Footer,
  Hero,
  HeroBg,
  Projects,
  Services,
} from "@/modules/landing";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-16">
      <header className="sm:grid-template-rows-[auto_auto] mx-auto grid max-w-7xl gap-8 sm:grid-cols-2">
        <div className="sm:col-start-1 sm:col-end-3 sm:row-start-1">
          <Appbar />
        </div>
        <div className="sm:col-start-1 sm:row-start-2">
          <Hero />
        </div>
        <div className="sm:col-start-2 sm:row-start-2 sm:row-end-3">
          <HeroBg />
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-8">
        <About/>
        <Services />
        <Projects />
      </main>

      <footer className="bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-8 p-8 md:grid-cols-3">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
