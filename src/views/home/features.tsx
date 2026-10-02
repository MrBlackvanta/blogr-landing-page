import { editorFeatures } from "@/data";

export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="relative overflow-hidden pt-25 pb-68.25 lg:pt-37.5 lg:pb-14.25"
    >
      <div className="v-shell">
        <h2
          id="features-title"
          className="text-title lg:text-title-lg text-ink relative text-center font-semibold"
        >
          Designed for the future
        </h2>

        <div className="mt-9.5 flex flex-col gap-10 lg:-mt-35 lg:flex-row lg:items-center lg:gap-x-21.25">
          <picture className="-mx-10 block lg:order-last lg:mx-0 lg:w-5/6 lg:shrink-0">
            <source
              media="(min-width: 64rem)"
              srcSet="/illustration-editor-desktop.svg"
              width={925}
              height={882}
            />
            <img
              src="/illustration-editor-mobile.svg"
              alt=""
              width={406}
              height={331}
              loading="lazy"
              className="mx-auto w-full max-w-200 lg:max-w-none"
            />
          </picture>

          <div className="mx-auto flex max-w-79.5 flex-col gap-10 text-center sm:max-w-135 lg:mx-0 lg:w-135 lg:max-w-1/2 lg:shrink-0 lg:translate-y-3.5 lg:gap-19.5 lg:text-left">
            {editorFeatures.map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-feature lg:text-feature-lg text-ink font-semibold">
                  {title}
                </h3>
                <p className="text-body mt-6 font-light lg:mt-7.25">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
