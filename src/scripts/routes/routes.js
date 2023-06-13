import Beranda from '../views/pages/beranda';
import TentangPadi from '../views/pages/tentang-padi';
import News from '../views/pages/news';
import Faqs from '../views/pages/faqs';
import TentangKami from '../views/pages/tentang-kami';
import Detail from '../views/pages/detail';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/tentang-padi': TentangPadi,
  '/news': News,
  '/faqs': Faqs,
  '/tentang-kami': TentangKami,
  '/detail': Detail,
};

export default routes;
