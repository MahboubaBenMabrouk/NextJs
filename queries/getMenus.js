import { gql } from "@apollo/client";


export const GET_MENUS = gql`
query GET_MENUS {
  headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
    edges {
      node {
        id
      label
      url
      path
      
      }
    }
  }
}
`
export default GET_MENUS