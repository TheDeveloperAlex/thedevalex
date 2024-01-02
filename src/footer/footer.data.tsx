import {
  IconGithub,
  IconLinkedin,
  IconTelegram,
  IconWhatsapp,
} from "../components/icons";
import { social } from "./footer.types";

export const socials: social[] = [
  {
    name: "telegram",
    link: "https://t.me/the_dev_Alex",
    image: <IconTelegram />,
  },
  {
    name: "github",
    link: "https://github.com/TheDeveloperAlex",
    image: <IconGithub />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/alexandr-semenenko-b9704421b/",
    image: <IconLinkedin />,
  },
  {
    name: "whatsapp",
    link: "https://wa.me/qr/O6FGPHIEVTUHB1",
    image: <IconWhatsapp />,
  },
];
