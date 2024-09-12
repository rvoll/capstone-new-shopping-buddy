import styled from "styled-components";

export default function FormToCreateShoppingItem({
  onSubmitItem,
  submitLabel,
  categories,
  item = {},
  onChangeMode,
  mode,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData);
    newItem.quantity = Number(newItem.quantity);
    newItem.imageUrl = "placeholder_1.png";

    // - If the item has an ID (means it's being updated -> item prop is not an emtpy array), call "onSubmitItem "with the item ID.
    //   - Otherwise, call "onSubmitItem" for creating a new item.
    if (item.id) {
      onSubmitItem(item.id, newItem);
    } else {
      onSubmitItem(newItem);
    }
    // Resets the form mode after submission. So the from is "hidden"
    // by assigning mode ""
    onChangeMode("");
  }

  // Now create two versions - in the index.js???
  // and make the edit and the submit button (in the form component?) work for them
  // after this prefill the edit one with the info for (in index.js)

  return (
    <article>
      <form onSubmit={handleSubmit} data-js="form">
        <StyledFieldset>
          <h2>
            {item.id ? "Edit the " + item.name : "Add an item to the list"}:
          </h2>
          <StyledLabel>
            {item.id ? "item to be edited*: " : "new shopping item*:"}
            <StyledInput
              name="name"
              type="text"
              required
              placeholder="e.g., salt"
              defaultValue={item.name || ""}
            />
          </StyledLabel>
          <StyledLabel>
            number*:
            <StyledInput
              name="quantity"
              type="number"
              required
              defaultValue={item.quantity || ""}
            />
          </StyledLabel>

          <StyledLabel>
            category*:
            <select
              key="category"
              name="category"
              data-js="category"
              required
              defaultValue={mode === "edit" ? item.category : ""}
            >
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
              defaultValue={item.comment || ""}
              placeholder="Enter comments here..."
            />
          </StyledLabel>
          <StyledNote>
            Required fields are followed by <span aria-label="required">*</span>
            .
          </StyledNote>
          <StyledButton>Submit</StyledButton>
          {/* type="button" (instead of submit) prevents checking obligatory fields*/}
          <button
            type="button"
            onClick={() => onChangeMode(mode === ("add" || "edit") && "")}
          >
            cancel
          </button>
          {/* a button here - in the form would be preferrable, but - it would 
          need to be able to ignore the obligatory fields */}
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
