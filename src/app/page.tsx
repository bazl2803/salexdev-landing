import { Appbar, Hero, Services } from "@/modules/landing";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 font-sans">
      <Appbar />
      <Hero />
      <Services />
    </div>
  );
}
