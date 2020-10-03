import React, {FC} from 'react';
import {ReactComponent as MenuIconSVG} from '../../../../public/assets/svg/menu-24px.svg';
import {ReactComponent as SearchIconSVG} from '../../../../public/assets/svg/search-24px.svg';
import {ReactComponent as NotificationsIconSVG} from '../../../../public/assets/svg/notifications-24px.svg';
import {ReactComponent as LanguageIconSVG} from '../../../../public/assets/svg/language-24px.svg';
import {ReactComponent as AccountCircleIconSVG} from '../../../../public/assets/svg/account_circle-24px.svg';
import './Topbar.scss';
import {ThemeSwitcher} from '../theme-switcher/ThemeSwitcher';

export const Topbar: FC = () => (
    <div className="topbar">
      <MenuIconSVG/>
      <div className="search"><SearchIconSVG/>Search</div>
      <NotificationsIconSVG/>
      <LanguageIconSVG/>
      <AccountCircleIconSVG/>
      <ThemeSwitcher/>
    </div>
);
