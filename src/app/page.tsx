import {
  About,
  Appbar,
  Footer,
  Hero,
  Projects,
  Services,
  Technologies,
  Testimonials,
} from "@/modules/landing";
import { FabButton } from "@/components/ui/fab-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-16">
      <a href="whatsapp://send?phone=50370181141">
        <FabButton className={"bg-[#25D366] text-white"}>
          <Image
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            width={32}
            height={32}
          />
        </FabButton>
      </a>

      <header className="flex flex-col gap-y-8 px-8">
        <Appbar />
        <Hero />
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-8">
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
