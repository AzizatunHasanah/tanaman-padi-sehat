import Beranda from "../views/pages/beranda";
import News from "../views/pages/news";
import Faqs from "../views/pages/faqs";
import TentangKami from "../views/pages/tentang-kami";
import Detail from "../views/pages/detail";
import Favorite from "../views/pages/favorite";

const routes = {
  "/": Beranda, // default page
  "/beranda": Beranda,
  "/favorite": Favorite,
  "/news": News,
  "/faqs": Faqs,
  "/tentang-kami": TentangKami,
  "/detail/:id": Detail,
};

export default routes;
