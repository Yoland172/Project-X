import superman_header from "../../../assets/img/mocks/superman_header.jpg";
import batman_header from "../../../assets/img/mocks/batman_header.jpg";
import batma_header1 from "../../../assets/img/mocks/batman_headerCopy.jpg";
export interface SlideItem {
  img: string;
  name: string;
  year: string;
}

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
