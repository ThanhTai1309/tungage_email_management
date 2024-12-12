import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTelegramPlane, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FACEBOOK_LINK, INSTAGRAM_LINK, YOUTUBE_LINK } from "../directions/social.direction";

// Interface definition
interface ISocialMenu {
  title: string;
  href: string;
  icon: ReactNode;
}

// Array of social menu items
const listSocialMenu: ISocialMenu[] = [
  {
    title: "Facebook",
    href: `${FACEBOOK_LINK}`,
    icon: <FontAwesomeIcon icon={faFacebook} />
  },
  {
    title: "Instagram",
    href: `${INSTAGRAM_LINK}`,
    icon: <FontAwesomeIcon icon={faInstagram} />
  },
  {
    title: "YouTube",
    href: `${YOUTUBE_LINK}`,
    icon: <FontAwesomeIcon icon={faYoutube} />
  },
  {
    title: "Gmail",
    href: "mailto:thanhtung2888@gmail.com?subject=Inquiry&body=Hello%20Thanh%20Tung,%0D%0A%0D%0AI%20have%20a%20question%20regarding...",
    icon: <FontAwesomeIcon icon={faTelegramPlane} />,
  }
];

export default listSocialMenu;
