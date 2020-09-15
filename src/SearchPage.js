import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
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
        image="https://i.ytimg.com/vi/HNooPVy2kUs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB-ygXxEwpwanMCjaiHMFQPV_Mi9w"
        channel="Best PC"
        verified
        subs="521K"
        noOfVideos={382}
        description="Alienware Aurora R9 - Great Overall Gaming"
      />
    </div>
  );
}

export default SearchPage;
