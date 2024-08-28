import styled from "styled-components";
import { useState } from "react";

export default function FormToCreateShoppingItem() {
  // const form = document.querySelector('[data-js="form"]');

  // form.addEventListener("submit", (event) => {
  //   event.preventDefault();
  // });

  // const [name, setName] = useState("e.g. salt");

  return (
    <article>
      <container>
        <h1>Add an item to the list:</h1>
        <form>
          <StyledFieldset>
            <label>
              new shopping item:
              <input data-js="name" type="string" label="name" />
            </label>
            <label>
              number:
              <input data-js="quantity" type="number"></input>
            </label>
            <label>
              category:
              <input data-js="category" type="string"></input>
            </label>
            <label>
              comment:
              <input data-js="comment" type="string"></input>
            </label>
          </StyledFieldset>
          <button type="submit">Submit</button>
        </form>
        <p>
          Required fields are followed by <span aria-label="required">*</span>.
          <br></br>
          all but "comment" mandatory:
        </p>
      </container>
    </article>
  );
}

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  align-content: start;
  list-style-type: none;
`;

// StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   padding: 0;
//   align-content: start;
// `;

// const StyledFormContainer = styled.container`
//   display: flex;
//   flex-direction: column;
//   padding: 0;
//   align-content: start;
// `;

// <p>Required fields are followed by <span aria-label="required">*</span>.</p>
//   <form>
//     <input data-js="" type="">
//       Item 1
//     </input>
//     <input data-js="" type="">
//       Item 2
//     </input>
//     <input data-js="" type="">
//       Item 3
//     </input>
//   </form>
