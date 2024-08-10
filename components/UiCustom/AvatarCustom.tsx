import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AvatarCustom = () => {
  return (
    <div className="flex items-center space-x-2">
      <p className="hidden md:inline font-pacifico">José Da Silva</p>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarCustom;
