import Link from "next/link";
import { RiMore2Line,RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

const Header = (props) => {
  const {setShowSidebar} = props
  return (
    <header className="fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-lightgreycolor  flex items-center justify-between p-2">
      <div>
        <button>
          <RiMore2Line onClick={()=>setShowSidebar(true)} className="text-2xl  p-2 box-content hover:cursor-pointer md:hidden" />
        </button>
        <div className="hidden md:flex items-center gap-4 text-3xl ">
          <RiArrowLeftLine className="p-2 box-content hover:cursor-pointer"/>
          <RiArrowRightLine className="p-2 box-content hover:cursor-pointer"/>

        </div>
      </div>
        <div className="gap-3 flex items-center">
          <Link href={""} className=" hover:text-gray-200  px-6 py-3 transition-colors text-gray-400 font-bold">Registrarse</Link>
          <Link href={""} className="bg-gray-200  px-4 py-2 rounded-full text-gray-800 font-bold hover:scale-x-105 transition-transform ">Iniciar sesión</Link>
        </div>
    </header>
  );
};

export default Header;
