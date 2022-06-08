import React, { useEffect } from "react";
import { SpinePlayer } from "@esotericsoftware/spine-player";
import "@esotericsoftware/spine-player/dist/spine-player.css";
import "./AnitoBox.css";

const AnitoBox = (props) => {
  useEffect(() => {
    const test = () => {
      // let jsonLoc = "http://esotericsoftware.com/files/examples/4.0/spineboy/export/spineboy-pro.json";
      // let atlasLoc = "http://esotericsoftware.com/files/examples/4.0/spineboy/export/spineboy.atlas";
      let jsonLoc = "http://jrevita.com/spine/kiwig.json";
      let atlasLoc = "http://jrevita.com/spine/kiwig.atlas.txt";
      let target = props.name;

      new SpinePlayer(target, {
        jsonUrl: jsonLoc,
        atlasUrl: atlasLoc,
        animation: "idle_1",
        skin: "Body/body_2",
        alpha: true,
        backgroundColor: "#00000000"
      });
    };
    test();
  }, []);

  return (
      <div id={props.name} className="anito-box"></div>
  );
};

export default AnitoBox;
