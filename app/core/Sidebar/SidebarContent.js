import React, { useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";

import { useRouter } from "next/router";
import CustomScrollbars from "../../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from "../../../constants/ThemeSetting";
import IntlMessages from "../../../util/IntlMessages";
import { useDispatch, useSelector } from "react-redux";
import { setPathName } from "../../../redux/actions";
import { useAuth } from "../../../util/use-auth";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = () => {
  const navStyle = useSelector(({ settings }) => settings.navStyle);
  const themeType = useSelector(({ settings }) => settings.themeType);
  const dispatch = useDispatch();
  const router = useRouter();
  const { signOut } = useAuth();

  const getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  useEffect(() => {
    dispatch(setPathName(router.pathname));
    console.log(navStyle);
  }, [router.pathname]);

  const selectedKeys = router.pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
            mode="inline"
          >
            <Menu.Item
              key="main/dashboard/crypto"
              style={{ marginTop: "100px" }}
            >
              <Link href="/main/dashboard/crypto">
                <a>
                  <img src="../../../images/home.png" />
                  <span
                    className="gx-ml-4"
                    style={{
                      display:
                        navStyle !== "NAV_STYLE_FIXED" ? "none" : "inline",
                    }}
                  >
                    <IntlMessages id="sidebar.dashboard.home" />
                  </span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="main/dashboard/financeWallet">
              <Link href="/main/dashboard/financeWallet">
                <a>
                  <img src="../../../images/trade.png" />
                  <span
                    className="gx-ml-4"
                    style={{
                      display:
                        navStyle !== "NAV_STYLE_FIXED" ? "none" : "inline",
                    }}
                  >
                    <IntlMessages id="sidebar.dashboard.financeWallet" />
                  </span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="main/dashboard/tradingbot">
              <Link href="/main/dashboard/tradingbot">
                <a>
                  <img src="../../../images/bot.png" />
                  <span
                    className="gx-ml-4"
                    style={{
                      display:
                        navStyle !== "NAV_STYLE_FIXED" ? "none" : "inline",
                    }}
                  >
                    <IntlMessages id="sidebar.dashboard.tradingbot" />
                  </span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="main/dashboard/exchange">
              <Link href="/main/dashboard/exchange">
                <a>
                  <img src="../../../images/exchange.png" />
                  <span
                    className="gx-ml-4"
                    style={{
                      display:
                        navStyle !== "NAV_STYLE_FIXED" ? "none" : "inline",
                    }}
                  >
                    <IntlMessages id="sidebar.dashboard.exchange" />
                  </span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="main/dashboard/setting">
              <Link href="/main/dashboard/setting">
                <a>
                  <img src="../../../images/setting.png" />
                  <span
                    className="gx-ml-4"
                    style={{
                      display:
                        navStyle !== "NAV_STYLE_FIXED" ? "none" : "inline",
                    }}
                  >
                    <IntlMessages id="sidebar.dashboard.setting" />
                  </span>
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
        <Menu className="gx-position-absolute gx-bottom-0 gx-w-100">
          <Menu.Item key="main/dashboard/help">
            <Link href="/main/dashboard/help">
              <a>
                <img src="../../../images/help.png" />
                <span
                  className="gx-ml-4"
                  style={{
                    display: navStyle !== "NAV_STYLE_FIXED" ? "none" : "inline",
                  }}
                >
                  <IntlMessages id="sidebar.dashboard.help" />
                </span>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="main/dashboard/logout">
            <a onClick={() => signOut()}>
              <img src="../../../images/logout.png" />
              <span
                className="gx-ml-4"
                style={{
                  display: navStyle !== "NAV_STYLE_FIXED" ? "none" : "inline",
                }}
              >
                <IntlMessages id="sidebar.dashboard.logout" />
              </span>
            </a>
          </Menu.Item>
          <Menu.Item
            key="main/dashboard/line"
            className="gx-mt-4"
            style={{
              display: navStyle !== "NAV_STYLE_FIXED" ? "none" : "block",
            }}
          >
            <div className="gx-bg-grey gx-mx-2" style={{ height: "2px" }}></div>
          </Menu.Item>
          <Menu.Item
            key="main/dashboard/profiles"
            className="gx-mt-3"
            style={{
              display: navStyle !== "NAV_STYLE_FIXED" ? "none" : "block",
            }}
          >
            <div className="gx-flex-row gx-justify-content-center">
              <div>
                <img src="../../../images/man.png" />
              </div>
              <div className="gx-ml-2 gx-flex-column gx-justify-content-center">
                <h5 className="gx-mb-1">Norman Gordon</h5>
                <h6 className="gx-mb-0">norman@gmail.com</h6>
              </div>
            </div>
          </Menu.Item>
          <Menu.Item
            key="main/dashboard/linkedin"
            className="gx-mt-5 gx-mb-3"
            style={{
              display: navStyle !== "NAV_STYLE_FIXED" ? "none" : "block",
            }}
          >
            <h5 className="gx-text-center">Come join us:</h5>
            <div className="gx-flex-row gx-justify-content-center">
              <img src="../../../images/facebook.png" className="gx-mx-1" />
              <img src="../../../images/twitter.png" className="gx-mx-1" />
              <img src="../../../images/linkedin.png" className="gx-mx-1" />
            </div>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;
