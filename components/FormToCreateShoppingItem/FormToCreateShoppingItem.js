import styled from "styled-components";

export default function FormToCreateShoppingItem({ onAddItem, categories }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData);
    newItem.quantity = Number(newItem.quantity);
    newItem.imageUrl = "placeholder_1.png";

    onAddItem(newItem);
    event.target.reset();
  }

  return (
    <article>
      <form
        // add id for form here as reference
        id={FormToCreateShoppingItem}
        onSubmit={handleSubmit}
        data-js="form"
      >
        <StyledFieldset>
          <h2>Add an item to the list:</h2>
          <StyledLabel>
            new shopping item*:
            <StyledInput
              name="name"
              type="text"
              required
              placeholder="e.g., salt"
            />
          </StyledLabel>
          <StyledLabel>
            number*:
            <StyledInput name="quantity" type="number" required />
          </StyledLabel>
          <StyledLabel>
            category*:
            <select key="category" name="category" data-js="category" required>
              <option value="">please select a category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
              ;
            </select>
          </StyledLabel>
          <StyledLabel>
            comment:
            <StyledInput
              name="comment"
              type="text"
              placeholder="Enter comments here..."
            />
          </StyledLabel>
          <StyledNote>
            Required fields are followed by <span aria-label="required">*</span>
            .
          </StyledNote>
          <StyledButton>Submit</StyledButton>
        </StyledFieldset>
      </form>
    </article>
  );
}

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: lightgreen;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 4px;
`;

const StyledNote = styled.p`
  font-size: 0.5rem;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

const RequiredStar = styled.span`
  font-size: 0.8rem;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 5px;
  background-color: lightgrey;
  border: none;
  gap: 6px;
  align-content: start;
  list-style-type: none;
`;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   padding: 16px;
//   border-radius: 5px;
//   background-color: lightgrey;
//   border: none;
//   gap: 6px;
//   align-content: start;
//   list-style-type: none;
// `;
