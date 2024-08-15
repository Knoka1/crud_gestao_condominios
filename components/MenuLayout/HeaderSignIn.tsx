import React from "react";
import { Button } from "../ui/button";
import AvatarCustom from "../UiCustom/AvatarCustom";

const HeaderSignIn = () => {
  const user = true;
  {
    return user ? (
      <AvatarCustom />
    ) : (
      <Button className="hover:bg-cyan-500 rounded-full bg-slate-100 text-cyan-500 hover:text-white">
        SignIn
      </Button>
    );
  }
};

export default HeaderSignIn;
