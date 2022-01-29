import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: #272829;
`;

export const Content = styled.div`
  height: 100%;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinksContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo: any = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${(color: any) => color.Color};
  margin-right: ${(props: any) => props.Margin};
`;

export const ListNavigation = styled.li`
  width: 68px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 15px;
  cursor: pointer;

  svg {
    color: white;
  }

  a,
  svg {
    transition: all 0.4s ease;
  }

  :hover {
    a,
    svg {
      color: red;
    }
  }
`;

export const LinksNavigation = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

export const ToolsContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const IconsContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  svg {
    font-size: 20px;
    margin-right: 20px;
    color: white;
  }
`;
