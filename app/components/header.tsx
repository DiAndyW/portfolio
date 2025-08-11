import { Link } from "react-router";

//add some kind of parameter to the link so then the tab gets highlighted
export function Header() {
    return (
        <div className="flex justify-center sticky top-0 z-50">
            <header className="items-center border rounded-xl w-7/10 mt-4 bg-[#000000]">
                <div className="grid grid-cols-12">
                {/* <div className="flex justify-between"> */}
                    <button className="col-span-2">
                        <Link to="/" className="text-[28px]">
                            Andy Wang
                        </Link>
                    </button>

                    <div className="col-start-11 col-span-2 flex items-center justify-end gap-2">
                        <a href='https://github.com/DiAndyW' className="m-2 w-1/5">
                            <img src='../../assets/github-mark.png' />
                        </a>
                        <a href='https://www.linkedin.com/in/di-xuan-wang/' className="m-2 ml-0 w-1/5">
                            <img src='../../assets/LI-In-Bug.png' />
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}