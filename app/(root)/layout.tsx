import React from "react";
import HeaderBar from "@/components/MenuLayout/HeaderBar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex h-screen w-full font-inter">
      <div className="flex flex-col w-full">
        <HeaderBar />
        <div className="flex min-h-screen flex-col items-center justify-between p-8">
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
