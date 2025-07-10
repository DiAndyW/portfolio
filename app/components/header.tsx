import { Link } from "react-router";

//add some kind of parameter to the link so then the tab gets highlighted
export function Header() {
    return (
        <div className="flex justify-center sticky top-0">
            <header className="items-center border rounded-xl p-4 w-4/5 mt-4 bg-[#000000]">
                <div className="flex justify-between">
                    <button className="">
                        <Link to="/">
                            Andy Wang
                        </Link>
                    </button>

                    <div className="flex flex-row">
                        <a href='https://github.com/DiAndyW'>
                            <img src='../../assets/github-mark.svg' className='w-[45px]' />
                        </a>
                        <a href='https://www.linkedin.com/in/di-xuan-wang/'>
                            <img src='../../assets/LI-In-Bug.png' className='w-[53px]' />
                        </a>
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