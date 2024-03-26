import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <>
      <div className="" onClick={toggle}>
        <p className="pt-12 text-xl font-semibold">{title}</p>
      </div>
      <div>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
      <Collapse isOpened={open}>
        {" "}
        <p className="px-12 pt-6 text-lg font-normal leading-8">{desc}</p>
      </Collapse>
    </>
  );
};
export default AccordionItem;
