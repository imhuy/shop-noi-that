import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/hero-right.png";
import imageRightPng2 from "@/images/hero-right-2.png";
import imageRightPng3 from "@/images/hero-right-3.png";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng2,
    heading: "Deal Ngập Tràn. Miễn phí vận chuyển",
    subHeading: "Up To 30% 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "An tâm mua hàng giá tốt nhất tại Nội Thấy Akia",
    subHeading: "Mua với g  iá tại xưởng 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  // {
  //   image: imageRightPng,
  //   heading: "Exclusive collection for everyone",
  //   subHeading: "In this season, find the best 🔥",
  //   btnText: "Explore now",
  //   btnLink: "/",
  // },
];
