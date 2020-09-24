import heartIcon from '../../assets/menu/heart.svg';
import subscribeIcon from '../../assets/menu/subscribe.svg';
import viewIcon from '../../assets/menu/view.svg';
import settingsIcon from '../../assets/menu/settings.svg';

export default [
  { icon: heartIcon, name: '내가 좋아하는 작품' },
  { icon: subscribeIcon, name: '내가 구독한 아티스트' },
  { icon: viewIcon, name: '최근에 본 전시회' },
  { icon: settingsIcon, name: '설정', route: 'Settings' },
];
