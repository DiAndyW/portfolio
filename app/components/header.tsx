import { Link } from "react-router";

export function Header() {
    return (
        <div className="flex justify-center sticky top-0 z-50">
            <header className="items-center border border-2 border-[#5d97b3] rounded-xl w-7/10 mt-4 bg-black/50">
                <div className="grid grid-cols-12">
                {/* <div className="flex justify-between"> */}
                    <button className="col-span-2">
                        <Link to="/" className="text-[28px]">
                            Andy Wang
                        </Link>
                    </button>
                     
                    <div className="col-start-10 col-span-3 flex items-center justify-end gap-1">
                        <a href='https://github.com/DiAndyW' className="p-1">
                            <img src='../../assets/github-white.svg' className="w-9" />
                        </a>
                        <a href='https://www.linkedin.com/in/di-xuan-wang/' className="p-1 pr-0">
                            <img src='../../assets/InBug-White.png' className="w-10" />
                        </a>
                        <a href='mailto:andy.dxwang@gmail.com' className="pr-4 p-1 pl-0">
                            <img src='../../assets/mail-svgrepo-com.svg' alt='Email' className="w-11" />
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}