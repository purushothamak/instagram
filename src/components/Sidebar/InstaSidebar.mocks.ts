import Icons from '@mui/icons-material';

export interface SidebarOption {
    title: string;
    icon: keyof typeof Icons;

}
const sidebarOptions: SidebarOption[] = [
    { title: 'Home', icon: 'Home' },
    { title: 'Search', icon: 'Search' },
    { title: 'Explore', icon: 'Explore' },
    { title: 'New Post', icon: 'Add' },
    { title: 'Favorites', icon: 'Favorite' },
    { title: 'Profile', icon: 'Person' },
    { title: 'Settings', icon: 'Settings' },
];

export default sidebarOptions;