import React from "react";
import { styled } from "@mui/material";

const Logo = styled("img")({
  width: 100,
  padding: 5,
});

export default function Header() {
  const logo =
    "https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png";
  return (
    <>
      <Logo src={logo} alt="logo" />
    </>
  );
}
