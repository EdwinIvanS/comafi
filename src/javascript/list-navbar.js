import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import StyleIcon from "@mui/icons-material/Style";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CollectionsIcon from "@mui/icons-material/Collections";

export const listNav = [
  {
    id: 1,
    name: "Inicio",
    path: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    name: "Acerca de nosotros",
    path: "/AboutUs",
    icon: GroupsIcon,
  },
  {
    id: 3,
    name: "Catalógo",
    path: "/Catalog",
    icon: StyleIcon,
  },
  {
    id: 4,
    name: "Contacto",
    path: "/Contact",
    icon: RecentActorsIcon,
  },
  {
    id: 5,
    name: "Galeria",
    path: "/Gallery",
    icon: CollectionsIcon,
  }
];
