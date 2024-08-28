import styled from "styled-components";
// import { useState } from "react";

export default function FormToCreateShoppingItem({ categories }) {
  // const form = document.querySelector('[data-js="form"]');

  // form.addEventListener("submit", (event) => {
  //   event.preventDefault();
  // });

  // NOW: implement state for form input

  return (
    <article>
      <container>
        <h1>Add an item to the list:</h1>
        <form>
          <StyledFieldset>
            <label>
              <span aria-label="required">*</span>shopping item name:
              <input data-js="name" type="string" defaultValue="e.g., salt" />
            </label>
            <label>
              <span aria-label="required">*</span>number:
              <input data-js="quantity" type="number"></input>
            </label>
            {/* dropdown menu for categories, suboptimal formatting change later */}
            <label>
              <span aria-label="required">*</span>category:
              <select data-js="category">
                <option value="default">Choose category</option>
                <option value="Bakery">Bakery</option>
                <option value="Fruit">Fruit</option>
              </select>
            </label>
            <label>
              comment:
              <input data-js="comment" type="string"></input>
            </label>
            <StyledNote>
              Required fields are followed by{" "}
              <span aria-label="required">*</span>.
            </StyledNote>
            <button type="submit">Submit</button>
          </StyledFieldset>
        </form>
      </container>
    </article>
  );
}

const StyledNote = styled.p`
  font-size: 0.5rem;
`;

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
