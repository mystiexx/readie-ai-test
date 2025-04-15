import React, { useState } from "react";
import Avatar from "../avatar";
import { useAuth } from "@/hooks/use-auth";
import { AlignJustify } from "lucide-react";
import Modal from "../modal";

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  return (
    <div>
      <Modal show={show} onClose={() => setShow(!show)} />
      <div className="flex justify-between p-6">
        <div className="hidden lg:block" />
        <div className="block lg:hidden" onClick={()=> setShow(true)}>
          <AlignJustify />
        </div>

        <div className="flex items-center gap-2">
          <p className="text-lynch font-normal">Hello, {user?.fullName}</p>
          <Avatar width={"35px"} height={"35px"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
