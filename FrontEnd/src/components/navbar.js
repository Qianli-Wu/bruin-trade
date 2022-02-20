import React, { Fragment } from "react";
import get_icon, { Icons } from "./icons_SVG.js"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'
import UserServices from './../backend_services/user_services.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function NavBar() {

    const login = useSelector((state) => state.loginStatus.login)
    const location = useSelector((state) => state.userInfo.location)
    const numCartItem = 0;
    
    return (
        <div className="w-full flex flex-row justify-center">
            <div className="flex flex-row justify-between items-center pt-50px w-1352px">
                <div className="flex flex-row justify-start items-center">
                    <Link to="/" className="mr-50px cursor-pointer">
                        {get_icon(Icons.logo)}
                    </Link>
                    <div className="flex items-center justify-between rounded-25px bg-white h-50px w-800px text-gray-200">
                        <input id="search term" className="w-full border-0 mx-5 py-2 rounded-lg focus:outline-none text-14px text-gray-500 placeholder-gray-200" placeholder="Search for used goods around you"/>
                        <button onClick={() => {}} className="flex justify-center items-center rounded-25px bg-gradient-to-r from-blue-400 to-blue-500 opacity-60 w-50px h-35px mr-10px hover:cursor-pointer">
                            <div className="w-20px h-20px">
                                {get_icon(Icons.search_icon)}
                            </div>
                        </button>
                    </div>
                </div>
            
                {
                    login ? (
                        <div id="logged in" className="w-auto h-full flex flex-row justify-end items-center space-x-45px">
                            <div className="flex flex-row justify-between items-center space-x-30px">
                                <NavbarLable label="Location">
                                    <div className="flex flex-row justify-start items-center space-x-1">
                                        <div className="w-20px h-20px">
                                            {get_icon(Icons.location)}
                                        </div>
                                        <div className="text-9px text-gray-400 align-middle leading-none">
                                            <div>{location ?? "No Location"}</div>
                                        </div>
                                    </div>
                                </NavbarLable>

                                <NavbarLable label="Cart">
                                    <div className="static h-full">
                                        <div className="absolute w-45px h-45px">
                                            {get_icon(Icons.cart)}
                                        </div>
                                        <div className="absolute w-45px flex flex-row justify-center ml-1 text-gold text-14px leading-none font-semibold">
                                            {numCartItem ?? 0}
                                        </div>
                                    </div>
                                </NavbarLable>
                            </div>
                            

                            <NavbarProfile />
                            
                        

                        </div>
                    ) : (
                        <div id="not logged in" className="h-full w-auto flex flex-row items-center justify-end">
                            <Link to="/singup">
                                <button className="ml-172px w-100px h-50px text-gray-400 border-solid border-2 border-gray-400 rounded-25px" >Sign Up</button>
                            </Link>
                            <Link to="/login">
                                <button className="ml-25px space-x-4px bg-gradient-to-r from-blue-400 to-blue-500 opacity-60 rounded-25px w-100px h-50px text-white" >Login</button>
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>
    );
}


function NavbarLable(props) {
    return (
        <div className="flex flex-col h-45px">
            <div className="text-12px text-gray-500 font-semibold">{props.label}</div>
            <div className="h-full flex flex-col justify-center hover:cursor-pointer">
                {props.children}
            </div>
            
        </div>
    );
}

function NavbarProfile() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function logout() {

        const res = await UserServices.logout(dispatch);

        if(res.status !== 200) {
            //error handle
            console.log("Error: " + res);
        } else {
            console.log("logout successful");
            navigate('/')
        }
    }

    function DropdownMenuItem({ label, callBackFunction }) {
        return (
            <Menu.Item>
                {({ active }) => (
                <button
                    onClick={() => callBackFunction()}
                    className={`${
                    active ? 'bg-blue-50' : ''
                    } group flex rounded-md items-center w-full text-14px text-gray-500'`}
                >
                    <div className="h-40px">
                        <div className="w-full h-full flex items-center px-12px">
                            {label}
                        </div>
                    </div>
                </button>
                )}
            </Menu.Item>
        );
    }

    const username = useSelector((state) => state.userInfo.username)
    const profileImage = useSelector((state) => state.userInfo.profileImage)

    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <div className="flex flex-row justify-between items-center hover:cursor-pointer">
                            <div id="image" className="w-50px h-50px rounded-25px overflow-hidden">
                                <img src={profileImage} className="w-full h-full object-cover" />
                            </div>
                            <div id="text" className="flex flex-col text-gray-500 font-semibold text-10px mx-1">
                                <div>Hello,</div>
                                <div>{username}</div>
                            </div>
                            {get_icon(Icons.dropdown)}
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <DropdownMenuItem label="Orders" callBackFunction={() => navigate('/')}/>
                        <DropdownMenuItem label="Sold" callBackFunction={() => navigate('/')}/>     
                        <DropdownMenuItem label="Logout" callBackFunction={() => logout()}/>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

export default NavBar;


/*

 return (
        <Menu>
            <Menu.Button>
                <div className="flex flex-row justify-between items-center hover:cursor-pointer">
                    <div id="image" className="w-50px h-50px rounded-25px overflow-hidden">
                        <img src={profileImage ?? "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"} className="w-full h-full object-cover" />
                    </div>
                    <div id="text" className="flex flex-col text-gray-500 font-semibold text-10px mx-1">
                        <div>Hello,</div>
                        <div>{username}</div>
                    </div>
                    {get_icon(Icons.dropdown)}
                </div>
            </Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    {({ active }) => (
                    <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                    >
                    Logout
                    </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
        
        */