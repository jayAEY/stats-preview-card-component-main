import { useState } from "react";

function App() {
  return (
    <main className="min-w-svw min-h-svh font-inter flex justify-center items-center bg-[--very-dark-blue]">
      <div className="flex flex-col w-80 justify-center items-center text-center bg-[--dark-desaturated-blue] text-[--slightly-transparent-white] rounded-lg lg:flex-row-reverse lg:w-[985px] lg:h-[370px]">
        <div className="w-full h-[200px] rounded-t-lg bg-[--soft-violet] mix-blend-multiply lg:h-full lg:rounded-none" />
        <img
          className="-mt-[200px] h-[200px] w-full rounded-t-lg lg:-mr-[466px] lg:mt-0 lg:h-full lg:rounded-b-lg"
          src="../images/image-header-mobile.jpg"
        />
        <section className="flex flex-col gap-6 my-10 mx-4 lg:w-[95%] lg:h-full lg:justify-between lg:text-left lg:px-16 lg:py-12 lg:pr-20 lg:m-0">
          <h1 className="text-[1.75rem] leading-8 font-[600] font-inter text-[--white] lg:text-[2rem] lg:leading-10">
            Get
            <span className="text-[--soft-violet] font-[700]"> insights </span>
            that help your business grow.
          </h1>
          <p className="text-[14px] mx-4 tracking-wide leading-6 lg:-mt-8 lg:mx-0 lg:text-[13px] lg:w-[320px]">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <section
            id="stats"
            className="flex flex-col gap-5 lg:flex-row lg:gap-14"
          >
            <div className="flex flex-col gap-5">
              <h2 className="-mb-5 text-[1.5rem] leading-8 font-[700] text-[--white] lg:text-[1.3rem]">
                10k+
              </h2>
              <p className="text-[0.74rem] font-lexendDeca uppercase tracking-wider text-[--slightly-transparent-white] lg:text-[0.7rem]">
                companies
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="-mb-5 text-[1.5rem] leading-8 font-[700] text-[--white] lg:text-[1.3rem]">
                314
              </h2>
              <p className="text-[0.74rem] font-lexendDeca uppercase tracking-wider text-[--slightly-transparent-white] lg:text-[0.7rem]">
                templates
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="-mb-5 text-[1.5rem] leading-8 font-[700] text-[--white] lg:text-[1.3rem]">
                12M+
              </h2>
              <p className="text-[0.74rem] font-lexendDeca uppercase tracking-wider text-[--slightly-transparent-white] lg:text-[0.7rem]">
                queries
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
