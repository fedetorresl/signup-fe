import React from "react";
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Find a doctor", href: "#services", current: false },
  { name: "Apps", href: "#", current: false },
  { name: "Testimonials", href: "#", current: false },
  { name: "About us", href: "#", current: false },
  { name: "Login", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-white fixed w-full py-3 px-5 z-10">
      <>
        <div className="h-full mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-end sm:items-stretch">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-black font-bold"
                          : "text-gray-300 hover:text-black",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
              </Disclosure.Button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-blue-100 text-white"
                    : "text-gray-300 hover:bg-blue-100 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
};
