import { useState } from "react";

function App() {
  return (
    <main className="min-w-svw min-h-svh font-inter flex justify-center items-center bg-[--very-dark-blue]">
      <div className="flex flex-col w-80 justify-center items-center text-center bg-[--dark-desaturated-blue] text-[--slightly-transparent-white] rounded-lg">
        <div className="w-full h-[200px] rounded-t-md bg-[--soft-violet] mix-blend-multiply"></div>
        <img
          className="-mt-[200px] h-[200px] w-full rounded-t-md"
          src="../images/image-header-mobile.jpg"
        />
        <section className="flex flex-col gap-6 my-10 mx-4 ">
          <h1 className="text-[1.75rem] leading-8 font-[700] font-lexendDeca text-[--white]">
            Get <span className="text-[--soft-violet]">insights</span> that help
            your business grow.
          </h1>
          <p className="text-[14px] mx-4 mb-5 tracking-wide leading-6">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <h1 className="-mb-5 text-[1.75rem] leading-8 font-[700]  text-[--white]">
            10k+
          </h1>
          <p className="text-[0.85rem] font-lexendDeca uppercase text-[--slightly-transparent-white]">
            companies
          </p>
          <h1 className="-mb-5 text-[1.75rem] leading-8 font-[700]  text-[--white]">
            314
          </h1>
          <p className="text-[0.85rem] font-lexendDeca uppercase text-[--slightly-transparent-white]">
            templates
          </p>
          <h1 className="-mb-5 text-[1.75rem] leading-8 font-[700]  text-[--white]">
            12m+
          </h1>
          <p className="text-[0.85rem] font-lexendDeca uppercase text-[--slightly-transparent-white]">
            queries
          </p>{" "}
        </section>
      </div>
    </main>
  );
}

export default App;
