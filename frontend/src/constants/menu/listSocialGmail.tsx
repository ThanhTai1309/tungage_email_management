import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons/faTelegramPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface ISocialGmail {
  title: string;
  href: string;
  icon: ReactNode;
}
const listSocialGmail: ISocialGmail[] = [
  {
    title: "Gmail",
    href: "mailto:thanhtung2888@gmail.com?subject=Inquiry&body=Hello%20Thanh%20Tung,%0D%0A%0D%0AI%20have%20a%20question%20regarding...",
    icon: <FontAwesomeIcon icon={faTelegramPlane} />,
  },
];
export default listSocialGmail;