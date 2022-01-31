import React, { useState } from "react";
import * as S from "../../../styles/components/header";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const Header: React.FC = () => {
  const [navigation, setNavigation] = useState([
    {
      href: "#",
      routeName: "Home",
    },
    {
      href: "#",
      routeName: "Movies",
    },
    {
      href: "#",
      routeName: "Shows",
    },
    {
      href: "#",
      routeName: "Pages",
    },
  ]);

  const [icons, setIcons] = useState([
    {
      icon: <AiOutlineSearch />,
    },
    {
      icon: <AiOutlineBell />,
    },
    {
      icon: <FiSettings />,
    },
    {
      icon: <FaRegUser />,
    },
  ]);

  return (
    <S.Container>
      <S.Content>
        <S.LinksContainer>
          <S.Logo Margin={"30px"} Color="#FFF">
            <S.Logo Color="#F00">Good</S.Logo>
            Movies
          </S.Logo>
          {navigation.map((item, index) => (
            <S.ListNavigation key={index}>
              <S.LinksNavigation>{item.routeName}</S.LinksNavigation>
              {item.routeName === "Pages" ? <IoIosArrowDown /> : ""}
            </S.ListNavigation>
          ))}
        </S.LinksContainer>
        <S.ToolsContainer>
          <S.IconsContent>{icons.map((icon) => icon.icon)}</S.IconsContent>
        </S.ToolsContainer>
      </S.Content>
    </S.Container>
  );
};

export default Header;
