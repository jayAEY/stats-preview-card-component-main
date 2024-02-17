import { useState } from "react";

function App() {
  return (
    <main className="min-w-svw min-h-svh flex justify-center items-center bg-[--very-dark-blue]">
      <div className="flex flex-col w-80 justify-center items-center bg-[--dark-desaturated-blue] text-[--slightly-transparent-white] rounded-lg">
        <img src="../images/image-header-mobile.jpg"></img>
        <h1> Get insights that help your business grow.</h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        10k+ companies 314 templates 12m+ queries
      </div>
    </main>
  );
}

export default App;
