import { IoIosNotificationsOutline, IoMdMenu } from "react-icons/io";
import { Profile } from "../atoms/Profile";
import { useState } from "react";
import { Button } from "../atoms/Button";

export const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    function handleShowSidebar(){
        setShowSidebar(!showSidebar)
    }

    return (
        <nav className="bg-white fixed w-full px-[5%] py-4 flex border-b-2 justify-between md:px-[10%]">
            <h1 className="font-bold text-sky-800 text-lg">Bee News</h1>
            <ul className={`absolute flex flex-col justify-between pb-8 left-0 top-0 bg-white border-r-2 h-dvh transition-all duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-96'} xl:translate-x-0 xl:relative xl:h-max xl:border-none xl:pb-0 xl:text-sm xl:items-center`}>
                <div className="flex flex-col xl:flex-row xl:items-center">
                    <li className="pl-6 pr-20 py-5 xl:px-8 xl:py-0">
                        <a href="">Stories</a>
                    </li>
                    <li className="pl-6 pr-20 py-5 xl:px-8 xl:py-0">
                        <a href="">Creator</a>
                    </li>
                    <li className="pl-6 pr-20 py-5 xl:px-8 xl:py-0">
                        <a href="">Community</a>
                    </li>
                    <li className="pl-6 pr-20 py-5 xl:px-8 xl:py-0">
                        <a href="">Subscribe</a>
                    </li>
                </div>
                <div className="px-2 w-full xl:hidden">
                    <Button name={"Login Now"}/>
                </div>
            </ul>
            <div className="flex items-center gap-5">
                <div className="relative">
                    <div className="absolute bg-sky-600 left-1 w-2 h-2 rounded-full"></div>
                    <IoIosNotificationsOutline className="text-2xl"/>
                </div>
                <Profile/>
                <IoMdMenu 
                className="text-xl flex xl:hidden"
                onClick={handleShowSidebar}
                />
            </div>
        </nav>
    )
}