import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiSearchLine,
  RiHome3Fill,
  RiBookReadLine,
  RiAddBoxLine,
  RiHeart3Fill,
  RiCloseLine
} from "react-icons/ri";

const Sidebar = (props) => {
  const { showSidebar, setShowSidebar } = props;

  

  return (
    <div className={`bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between transition-all duration-300 ${showSidebar ? "left-0" : "-left-full"} md:left-0`}>
      {/* Logo */}
      <div className="mt-4 mb-8 ">
        <div className="flex justify-between items-start ">
          <Image
            src="https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logotipo.jpg"
            width={125}
            height={125}
            className="mt-3"
          />
          <div className="p-3 ">
            <RiCloseLine className=" text-2xl hover:cursor-pointer md:hidden box-content" onClick={()=>setShowSidebar(false)}/>
          </div>

        </div>
        {/* UL MENU */}
        <nav className="mt-4 text-gray-400">
          <ul className="flex flex-col space-y-4 mb-8">
            <li>
              <Link
                className="flex items-center gap-4 hover:text-gray-200 transition-colors"
                href={"/"}
              >
                <RiHome3Fill className="text-lg" />
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-4 hover:text-gray-200 transition-colors"
                href={"/"}
              >
                <RiSearchLine className="text-lg" />
                Buscar
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-4 hover:text-gray-200 transition-colors"
                href={"/"}
              >
                <RiBookReadLine className="text-lg" />
                Tu Biblioteca
              </Link>
            </li>
          </ul>
          {/* el otro Nav */}
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                className="flex items-center gap-4 hover:text-gray-200 transition-colors"
                href={"/"}
              >
                <RiAddBoxLine className="text-lg" />
                Crear Playlist
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-4 hover:text-gray-200 transition-colors"
                href={"/"}
              >
                <RiHeart3Fill className="text-lg" />
                Tus me gustas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* footer */}
      <nav className="text-gray-400 flex flex-col space-y-2 text-xs">
        <Link
          className="flex items-center gap-4 hover:text-gray-200 hover:underline transition-colors"
          href={"/"}
        >
          Cookies
        </Link>
        <Link
          className="flex items-center gap-4 hover:text-gray-200 hover:underline transition-colors"
          href={"/"}
        >
          Privacidad
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
