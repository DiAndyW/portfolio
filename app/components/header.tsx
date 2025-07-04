import { Link } from "react-router";

//add some kind of parameter to the link so then the tab gets highlighted
export function Header() {
    return (
        <>
            <header className="flex justify-between items-center border-b p-4">
                <button>
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
            </header>
        </>
    );
}