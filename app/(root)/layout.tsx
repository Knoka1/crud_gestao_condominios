import React from "react";
import HeaderBar from "@/components/MenuLayout/HeaderBar";
import Footer from "@/components/MenuLayout/Footer";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex h-screen w-full font-inter ">
      <div className="flex flex-col w-full">
        <HeaderBar />
        <div>
          <div className="flex w-full flex-col overflow-x-hidden items-center justify-between p-8">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default layout;
