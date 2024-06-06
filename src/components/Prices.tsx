import convertNumbThousand from "@/utils/convertNumbThousand";
import React, { FC } from "react";

export interface PricesProps {
  className?: string;
  price?: number;
  contentClass?: string;
}

const Prices: FC<PricesProps> = ({
  className = "",
  price = 33,
  contentClass = "py-1  md:py-1.5   text-sm font-medium",
}) => {
  return (
    <div className={`${className}`}>
      <div className={`flex items-center   ${contentClass}`}>
        <span className='  font-bold text-lg !leading-none'>
          {convertNumbThousand(price)} <span className='text-xs'>đ</span>
        </span>
      </div>
    </div>
  );
};

export default Prices;
