import Vue from "vue";
import AniButton from "../components/AniButton";
import AniIconText from "../components/AniIconText";
import AniDrawer from "../components/AniDrawer";
import AniBackTop from "../components/AniBackTop";
import AniFollower from "../components/AniFollower";
import AniHeader from "../components/AniHeader";
import AniSideBar from "../components/AniSideBar";
import AniCard from "../components/AniCard";
import AniCodeBlock from "../components/AniCodeBlock";
import AniMain from "../components/AniMain";
import AniScrollBar from "../components/AniScrollBar";
import AniContent from "../components/AniContent";
import Message from "../components/Message/index";
import AniProgress from "../components/AniProgress";
import AniHeaderLink from "../components/AniHeaderLink";
import AniBox from "../components/AniBox";
import AniRow from "../components/Row/index";
import AniCol from "../components/Col/index";
import AniFloatButton from "../components/AniFloatButton/index";
import AniCheckbox from "../components/AniCheckbox";
import AniTooltip from "../components/AniTooltip";
import AniDialog from "../components/AniDialog";
import AniSwitch from "../components/AniSwitch";
import AniBottomBar from "../components/AniBottomBar";
import AniBottomBarItem from "../components/AniBottomBarItem";
import AniTopLoading from "../components/AniTopLoading";
import AniPager from "../components/AniPager";
import AniRate from "../components/AniRate";

import "../less/main.less";

const Components = {
  AniButton,
  AniIconText,
  AniHeader,
  AniHeaderLink,
  AniFollower,
  AniBackTop,
  AniDrawer,
  AniCard,
  AniCodeBlock,
  AniContent,
  AniMain,
  AniScrollBar,
  AniSideBar,
  AniRow,
  AniCol,
  AniFloatButton,
  AniBox,
  AniProgress,
  AniDialog,
  AniTooltip,
  AniSwitch,
  AniCheckbox,
  AniBottomBarItem,
  AniBottomBar,
  AniPager,
  AniRate,
  AniTopLoading
};
Vue.prototype.$message = Message;
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
