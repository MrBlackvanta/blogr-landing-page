import { Header } from "@/components/layout";
import { Features, Hero } from "@/views/home";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Features />
      </main>
    </>
  );
}
