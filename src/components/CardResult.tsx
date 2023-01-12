import Image from "next/image";
import React from "react";
import CTA from "./CTA";

function CardResult() {
  return (
    <div className="w-91%">
      <div>
        <div>
          <div>
            <Image />
          </div>
          <div>
            <Image />
          </div>
          <div>
            <Image />
          </div>
        </div>
      </div>
      <CTA text="Go with Misty" />
    </div>
  );
}

export default CardResult;
