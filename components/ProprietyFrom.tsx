import React from "react";

interface ProprietyFromProps {
  type: "edit" | "new";
}
const ProprietyFrom = ({ type }: ProprietyFromProps) => {
  return (
    <section>
      <header className="flex flex-col gap-5 md:gap-8"></header>
    </section>
  );
};

export default ProprietyFrom;
