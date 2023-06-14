import Home from "./pages/Home/Home";
import MyPage from "./pages/User/MyPage/MyPage";
import LoginForm from "./pages/User/Login/LoginForm";
import RegisterForm from "./pages/User/Register/RegisterForm";
import EnvPosting from "./pages/EnvPosting/EnvPosting";
import Community from "./pages/Community/Community";
import CommunityWrite from "./pages/Community/CommunityWrite";
import CommunityDetail from "./pages/Community/CommunityDetail";
import CommunityEdit from "./pages/Community/CommunityEdit";
import Charger from "./pages/Charger/Charger";

export const ROUTE = {
  Home: {
    path: "/",
    link: "/",
    element: Home,
  },
  LOGIN: {
    path: "/login",
    link: "/login",
    element: LoginForm,
  },
  REGISTER: {
    path: "/register",
    link: "/register",
    element: RegisterForm,
  },
  MYPAGE: {
    path: "/mypage",
    link: "/mypage",
    element: MyPage,
  },
  ENVINFO: {
    path: "/envposting",
    link: "/envposting",
    element: EnvPosting,
  },
  COMMUNITYWRITE: {
    path: "/community/write",
    link: "/community/write",
    element: CommunityWrite,
  },
  COMMUNITYDetail: {
    path: "/community/:postId",
    link: "/community/:postId",
    element: CommunityDetail,
  },
  COMMUNITY: {
    path: "/community",
    link: "/community",
    element: Community,
  },
  COMMUNITYEdit: {
    path: "/community/:postId/edit",
    link: "/community/:postId/edit",
    element: CommunityEdit,
  },
  CHARGER: {
    path: "/charger",
    link: "/charger",
    element: Charger,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
