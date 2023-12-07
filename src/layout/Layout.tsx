import { useOutlet } from "react-router-dom";

import { NavBar } from "./NavBar";

export const Layout = () => {
  const outlet = useOutlet();
  return (
    <section className="flex h-auto w-full flex-col scroll-smooth">
      <NavBar />
      <main className="grow overflow-hidden pt-32">{outlet}</main>
    </section>
  );
};
