import { Header } from "@/components/layout";
import { Features, Hero, Infrastructure } from "@/views/home";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Infrastructure />
      </main>
    </>
  );
}
