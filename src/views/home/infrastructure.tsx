export default function Infrastructure() {
  return (
    <section
      aria-labelledby="infrastructure-title"
      className="v-dusk rounded-tr-band rounded-bl-band relative overflow-x-clip pb-26 text-center text-white lg:pb-0 lg:text-left"
    >
      <div
        aria-hidden="true"
        className="v-circles-pattern rounded-tr-band rounded-bl-band pointer-events-none absolute inset-0"
      />

      <div className="v-shell relative flex flex-col lg:h-100 lg:flex-row lg:items-center lg:gap-x-24.5">
        <div className="-mx-7 -mt-46.5 lg:-mx-10 lg:-mt-5 lg:-mb-15 lg:w-138 lg:shrink-0">
          <img
            src="/illustration-phones.svg"
            alt=""
            width={552}
            height={579}
            loading="lazy"
            className="mx-auto w-full max-w-96 lg:max-w-none"
          />
        </div>

        <div className="mx-auto mt-1.25 max-w-135 lg:mx-0 lg:mt-0 lg:w-135">
          <h2 id="infrastructure-title" className="text-title-lg font-semibold">
            State of the Art Infrastructure
          </h2>
          <p className="text-body mt-2.5 font-light lg:mt-1.25">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
}
