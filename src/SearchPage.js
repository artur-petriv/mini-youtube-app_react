import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filted">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJwnl6a50TYz7UpGD2rGtXdmO9B2V4Oik3BcFWwd=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Best PC"
        verified
        subs="521K"
        noOfVideos={382}
        description="Alienware Aurora R9 - Great Overall Gaming"
      />
      <hr />

      <VideoRow
        title="Защита информации в сети / Белые хакеры"
        views="189K"
        timestamp="2 months ago"
        subs="243K"
        channelImage="https://yt3.ggpht.com/a-/AOh14GiszfMNpU0-SdpHUg6ln31JXkpzxe0BXDpnhw=s68-c-k-c0x00ffffff-no-rj-mo"
        channel="АйТиБорода"
        image="https://i.ytimg.com/vi/4oLzvhDRZT4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA7otNukUm_kAC9EPbk30q7DIgr5A"
        description="Это необычный выпуск. В нем я постарался приоткрыть аспекты жизни и работы специалиста по уязвимостям и ..."
      />
    </div>
  );
}

export default SearchPage;
