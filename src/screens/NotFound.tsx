import React from "react";
import { useNavigate } from "react-router-dom";

import { NavBar } from "../layout";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section>
      <NavBar />
      <main className="flex h-screen flex-col items-center justify-center">
        <p className="mb-10 text-2xl">
          Looks like the page you are trying to access does not exist.
        </p>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </main>
    </section>
  );
};
