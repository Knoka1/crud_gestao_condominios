import React from "react";
import { Button } from "./ui/button";
import Avatar from "./Avatar";

const HeaderSignIn = () => {
  const user = false;
  {
    return user ? (
      <Avatar />
    ) : (
      <Button className="hover:bg-cyan-500 rounded-full bg-slate-100 text-cyan-500 hover:text-white">
        SignIn
      </Button>
    );
  }
};

export default HeaderSignIn;
