import {
  About,
  Appbar,
  Footer,
  Hero,
  HeroBg,
  Projects,
  Services,
  Technologies,
  Testimonials,
} from "@/modules/landing";
import { FabButton } from "@/components/ui/fab-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-8">
      <a href="whatsapp://send?phone=50370181141">
        <FabButton className={"bg-[#00805a] text-white"}>
          <Image
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            width={32}
            height={32}
          />
        </FabButton>
      </a>

      <header className="md:grid-template-rows-[auto_auto] mx-auto grid max-w-7xl items-center gap-x-8 gap-y-4 px-8 md:grid-cols-2">
        <div className="md:col-start-1 md:col-end-3 md:row-start-1">
          <Appbar />
        </div>
        <div className="md:col-start-1 md:row-start-2">
          <Hero />
        </div>
        <div className="justify-self-end md:col-start-2 md:row-start-2 md:row-end-3">
          <HeroBg />
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-8">
        <About />
        <Services />
        <Technologies />
        <Projects />
        <Testimonials />
      </main>

      <footer className="bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-8 p-8 px-8 md:grid-cols-3">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
