import { Link } from "react-router";

//add some kind of parameter to the link so then the tab gets highlighted
export function Header() {
    return (
        <div className="flex justify-center sticky top-0 z-50">
            <header className="items-center border rounded-xl p-4 w-4/5 mt-4">
                <div className="flex justify-between">
                    <button className="">
                        <Link to="/">
                            Andy Wang
                        </Link>
                    </button>

                    <div>
                        <button className="py-2 px-4">
                            <Link to="/experience">
                                Experience
                            </Link>
                        </button>
                        <button className="py-2 px-4">
                            <Link to="/projects">
                                Projects
                            </Link>
                        </button>
                        <button className="py-2 px-4">
                            <Link to="/about">
                                About
                            </Link>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}