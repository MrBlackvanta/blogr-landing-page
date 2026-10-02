import { openSourceFeatures } from "@/data";

export default function OpenSource() {
  return (
    <div className="overflow-x-clip pt-15.5 pb-25 lg:pt-29 lg:pb-30.75">
      <div className="v-shell lg:flex lg:justify-end">
        <div className="lg:flex lg:w-7/5 lg:items-center lg:gap-x-10">
          <picture className="-mx-21.25 block lg:mx-0 lg:w-243.5 lg:min-w-0">
            <source
              media="(min-width: 64rem)"
              srcSet="/illustration-laptop-desktop.svg"
              width={974}
              height={786}
            />
            <img
              src="/illustration-laptop-mobile.svg"
              alt=""
              width={498}
              height={359}
              loading="lazy"
              className="mx-auto w-full max-w-124.5 lg:max-w-none"
            />
          </picture>

          <div className="mx-auto mt-7.5 flex max-w-79.5 flex-col gap-10 text-center sm:max-w-135 lg:mx-0 lg:mt-0 lg:w-135 lg:shrink-0 lg:gap-19.5 lg:text-left">
            {openSourceFeatures.map(({ title, body }) => (
              <div key={title}>
                <h2 className="text-feature lg:text-feature-lg text-ink font-semibold">
                  {title}
                </h2>
                <p className="text-body mt-7.25 font-light">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
