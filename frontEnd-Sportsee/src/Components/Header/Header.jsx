import { useState, useEffect } from "react";
import "./__header.scss";
import HorizontalList from "../HorizontalList/HorizontalList";
import VerticalList from "../VerticaList/VerticalList";


export default function Header() {
  return (
    <><HorizontalList/><VerticalList/></>
  );
}
