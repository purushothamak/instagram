import Icons from "@mui/icons-material";

export interface SidebarOption {
  title: string;
  icon: keyof typeof Icons;
  path: string;
}
const sidebarOptions: SidebarOption[] = [
  { title: "Home", icon: "Home", path: "/" },
  { title: "Search", icon: "Search", path: "/SearchUser" },
  { title: "Explore", icon: "Explore", path: "/explore" },
  { title: "New Post", icon: "Add", path: "/AddPost" },
  { title: "Favorites", icon: "Favorite", path: "/favorites" },
  { title: "Profile", icon: "Person", path: "/userprofile" },
  { title: "Settings", icon: "Settings", path: "/settings" },
];

export default sidebarOptions;
