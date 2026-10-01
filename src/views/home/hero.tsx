import { PillButton } from "@/components/ui";

export default function Hero() {
  return (
    <section className="v-flare rounded-bl-band relative overflow-hidden">
      <div
        aria-hidden="true"
        className="v-hero-pattern pointer-events-none absolute inset-0"
      />

      <div className="v-shell relative flex min-h-150 flex-col items-center pt-49 text-center text-white lg:pt-56.5">
        <h1 className="text-display lg:text-display-lg max-w-230 font-semibold text-balance">
          A modern publishing platform
        </h1>
        <p className="text-lead lg:text-lead-lg font-light">
          Grow your audience and build your online brand
        </p>

        <div className="mt-8.5 flex flex-wrap justify-center gap-4 lg:mt-10.5">
          <PillButton>Start for Free</PillButton>
          <PillButton variant="outline">Learn More</PillButton>
        </div>
      </div>
    </section>
  );
}
