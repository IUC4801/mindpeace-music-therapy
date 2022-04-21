import React, {useContext} from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../api/Theme";
import { HomeOutlined, PlaylistPlay, SearchOutlined} from "@material-ui/icons";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>LIBRARY</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>MY PLAYLIST</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/adult"}  title={"Adult"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/teenager"}  title={"Teenager"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/children"}  title={"Children"}/>
            </div>
        </aside>
    );
}

export default SideBar;