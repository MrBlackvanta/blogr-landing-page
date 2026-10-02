import { Header } from "@/components/layout";
import { Features, Hero, Infrastructure, OpenSource } from "@/views/home";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Infrastructure />
        <OpenSource />
      </main>
    </>
  );
}
