import React from "react";
import { Button } from "./ui/button";
import Avatar from "./Avatar";

const HeaderSignIn = () => {
  const user = false;
  {
    return user ? (
      <Avatar />
    ) : (
      <Button className="bg-slate-500 hover:bg-cyan-500">SignIn</Button>
    );
  }
};

export default HeaderSignIn;
