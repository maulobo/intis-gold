"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "home",
    "download",
    "mockup",
    "how to play",
    "chart",
    "rewards",
    "social media",
    "visit",
  ];

  return (
    <Navbar
      style={{ backgroundColor: "#efb810", color: "foreground" }}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">inti's</p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#chart" color="foreground" aria-current="page">
            chart
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#rewards">
            rewards
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={`#${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Menu;
