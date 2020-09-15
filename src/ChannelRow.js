import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
  title,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} />
    </div>
  );
}

export default ChannelRow;
