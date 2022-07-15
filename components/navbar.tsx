import Link from "next/link";
import { useContext } from "react";
import { authContext } from "@contexts/auth";

const Navbar = () => {
  let { authenticated, setAuthenticated } = useContext(authContext);

  const changeCookie = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <div className="w-full h-14 mb-2 flex justify-between items-center shadow-md sticky top-0 bg-amber-500">
      <a onClick={changeCookie} className="cursor-pointer uppercase text-amber-900 font-bold p-2 ml-10 sticky">
        posts
      </a>
      <div className="ml-2 flex flex-row">
        <div className="text-amber-100 p-2 mr-10 bg-amber-600 hover:bg-amber-700 rounded-lg cursor-pointer sticky duration-100">
          <Link href="/new">
            Add new posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
