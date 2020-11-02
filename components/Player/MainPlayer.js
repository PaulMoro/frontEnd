import React from "react";
import AlbumStyles from "../Albums/AlbumStyles";
import ListTrack from "./molecules/Mol__ListTrack";
import ContainerSong from "./molecules/Mol__ContainerSong.js";
import SectionPopular from "./molecules/SectionPopular.js";

import mainStyle from "./styles/mainStyle";

const MainPlayer = () => {
  return (
    <>
      <SectionPopular />
      <ContainerSong />
      <ListTrack />
    </>
  );
};

export default MainPlayer;
