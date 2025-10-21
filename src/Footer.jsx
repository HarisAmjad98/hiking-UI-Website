import React from "react";
import logo from "./assets/logo.png";

export default function Footer() {
    return (
        <footer className="text-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-85">
                    <div className="text-center sm:text-left">
                        <a href="/" className="inline-block">
                            <img src={logo} alt="logo" className="w-16 mx-auto sm:mx-0" />
                        </a>

                        <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-md mx-auto sm:mx-0">
                            Get out there & discover your next slope, mountain & destination!
                        </p>

                        <p className="mt-10 sm:mt-12 text-xs text-gray-500">
                            © 2019 MNTN, Inc. • Terms & Privacy
                        </p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-yellow-500 font-semibold mb-3 sm:mb-4">
                            More on The Blog
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded" >
                                    About MNTN
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
                                >
                                    Contributors & Writers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded">
                                    Write For Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded" >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-yellow-500 font-semibold mb-3 sm:mb-4">
                            More on MNTN
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded" >
                                    The Team
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded" >
                                    Jobs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded" >
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t border-white/10 lg:hidden" />
            </div>
        </footer>
    );
}
