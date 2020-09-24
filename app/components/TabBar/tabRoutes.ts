import homeIcon from '../../assets/tabbar/home.svg';
import searchIcon from '../../assets/tabbar/search.svg';
import createIcon from '../../assets/tabbar/create.svg';
import mypageIcon from '../../assets/tabbar/mypage.svg';
import menuIcon from '../../assets/tabbar/menu.svg';

export default [
  {
    icon: homeIcon,
    route: 'Home',
    routeAlias: [
      'Notification',
    ],
  },
  {
    icon: searchIcon,
    route: 'Search',
    routeAlias: [
      'ReviewExhibition',
    ],
  },
  {
    icon: createIcon,
    route: 'Create',
  },
  {
    icon: mypageIcon,
    route: 'Manage',
  },
  {
    icon: menuIcon,
    route: 'Profile',
    routeAlias: [
      'ExhibitionList',
    ],
    size: 24,
  },
];
