import { useState } from "react";
import Link from "next/link"
import { useRouter } from 'next/router'

import { Transition } from "@headlessui/react";
import { AiOutlineSearch } from "react-icons/ai"

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("")

    const router = useRouter()

    function handleSubmit(e) {
        e.preventDefault()
        router.push({
            pathname: '/search/[query]',
            query: { query: query },
        })
        setQuery("")
    }

    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-8 w-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="/">
                                        <a
                                            className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Home
                                        </a>
                                    </Link>


                                    <Link href="/latest">
                                        <a
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Latest
                                        </a>
                                    </Link>


                                    <Link href="/popular">
                                        <a
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Popular
                                        </a>
                                    </Link>

                                    <form className="relative mx-auto text-gray-600" onSubmit={(e) => {
                                        handleSubmit(e)
                                    }}>
                                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                            type="search" name="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                            <AiOutlineSearch />
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {() => (
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/">
                                    <a
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Home
                                    </a>
                                </Link>


                                <Link href="/latest">
                                    <a
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Latest
                                    </a>
                                </Link>


                                <Link href="/popular">
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Popular
                                    </a>
                                </Link>

                                <form className="relative mx-auto text-gray-600" onSubmit={(e) => {
                                    handleSubmit(e)
                                }}>
                                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-20 rounded-lg text-sm focus:outline-none"
                                        type="search" name="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} >
                                    </input>
                                    <button type="submit" className="absolute left-0 top-0 mt-3 ml-56">
                                        <AiOutlineSearch />
                                    </button>
                                </form>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Nav;