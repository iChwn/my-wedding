import routeUrl from './routeUrl';

type SidebarMenuItem = {
  id: number;
  title: string;
  route: string;
  isActive: boolean;
};

const simple_sidebar_menu: SidebarMenuItem[] = [
  {
    id: 1,
    title: 'Home',
    route: routeUrl.home,
    isActive: true
  }, 
];


export default simple_sidebar_menu;