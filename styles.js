import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
// body {
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
//     Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
// }
// // more global styles here...
// `;

// const ListItem = styled.li`
//   background-color: crimson;
// `;

// const StyledList = styled.ul`
//   list-style-type: none;
// `;

// .main {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// .heading {
//   margin: 100px;
//   font-size: 50px;
// }

// .link {
//   font-size: 30px;
//   padding: 20px;
//   width: fit-content;
//   border: 2px solid #000;
//   background-color: #d2d2d2;
//   border-radius: 10px;
//   color: #000;
//   text-decoration: none;
// }
