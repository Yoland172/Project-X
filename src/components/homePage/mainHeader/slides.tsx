import superman_header from "../../../assets/img/superman_header.jpg";
import batman_header from "../../../assets/img/batman_header.jpg";
import batma_header1 from "../../../assets/img/batman_headerCopy.jpg";
import { SlideItem, settingForSlider } from "../../../types/types";

export const slides: SlideItem[] = [
    {
      img: superman_header,
      name: "Superman",
      year: "2006",
    },
    {
      img: batma_header1,
      name: "Batman I",
      year: "2003",
    },
    {
      img: batman_header,
      name: "Batman II",
      year: "2001",
    },
  ];

export const settingsForSlider: settingForSlider = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    autoplaySpeed: 4000,
  };