"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import CompanyLogo from "@components/company_logo";
import CustomButton from "@components/button";
import classNames from "@app/utils";

function LocalAuthButtons({ className }) {
  return (
    <div className={className}>
      <CustomButton
        name="Register"
        href="/register"
        className={classNames("text-blue-500 mx-4 outline-none")}
      />
      <CustomButton
        name="Login"
        href="/login"
        className={classNames(
          "block w-full rounded-md bg-blue-500 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        )}
      />
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropDownMenuItems = [
    {
      name: "Airplane",
      description: "Travel around the globe high on life",
      href: "#",
      icon: "/icons/plane-alt.svg",
    },
    {
      name: "Passenger Train",
      description: "All train and no play makes Jack a dull boy",
      href: "#",
      icon: "/icons/train-tram.svg",
    },
    {
      name: "Cargo Train",
      description:
        "Charter a cargo train to send goods to multiple destinations",
      href: "#",
      icon: "/icons/luggage-cart.svg",
    },
  ];
  const navbarLinkItems = [
    { name: "Manage", href: "/manage" },
    { name: "Charter", href: "/charter" },
    { name: "Cargo", href: "/cargo" },
  ];

  return (
    <header className="bg-white">
      <nav
        className="flex w-full items-center justify-between px-4"
        aria-label="Global"
      >
        {/* <!-- Company logo --> */}
        <div className="flex lg:flex-1">
          <CompanyLogo />
        </div>

        {/* <!-- Mobile menu closed button --> */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* <!-- Menu --> */}
        <Popover.Group className="hidden md:flex md:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-500 outline-none">
              Book
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {dropDownMenuItems.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <Image
                          src={item.icon}
                          alt="Menu icon"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-base text-gray-400"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {navbarLinkItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 text-gray-500"
            >
              {item.name}
            </Link>
          ))}
        </Popover.Group>

        <LocalAuthButtons
          className={classNames(
            "hidden md:flex md:flex-1 md:justify-end items-center"
          )}
        />
      </nav>

      {/* <!-- Mobile menu --> */}
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <CompanyLogo />

            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Book
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...dropDownMenuItems].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {navbarLinkItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <LocalAuthButtons
                className={classNames("flex justify-between py-6")}
              />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
