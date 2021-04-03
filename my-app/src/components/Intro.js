import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

export default function Intro() {
  return (
    <div className="intro">
      <p>
        VaxBay is a COVID-19 vaccines appointments tracker, and the data will
        update as much as possible. Refresh the page as you want. We understand
        how hard to find open appointments which close to us, so hopefully, this
        project can help our neighbors in the bay area find the best and
        fast vaccine appointment in ours local. 
      </p>
      <div>
        <FavoriteBorderIcon />
        <LocalFloristIcon />
        <InsertEmoticonIcon />
        <FavoriteIcon />
        <FavoriteBorderIcon />
      </div>
    </div>
  );
}
