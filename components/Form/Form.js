import styled from "styled-components";

/*
- This form is designed to handle both "creating" and "updating" a shopping item.
- therefore it makes sense to rename this component to "Form"
- Use a more generic prop name like "onSubmitItem" so the function can be used for both creating and updating an item.
- The actuall function is therefore passed as a prop by the parent component.
- You can also pass the "submitLabel", depending on whether you want to create or update an item, the default could be "submit"
- To make the form prefilled, you also need the information about which item is to be updated, so we need this information as prop "item"
*/
export default function Form({
  onSubmitItem, // Function to handle item submission (create or update).
  submitLabel, // Label for the submit button (e.g., "Submit" or "Update").
  categories,
  item = {}, // Default is an empty object, holds the item data if available for editing.
  onChangeMode, // Function to change the mode (e.g., from "edit" to "create").
  mode, // Current mode of the form, either "create" or "edit".
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData);
    newItem.quantity = Number(newItem.quantity);
    newItem.imageUrl = "placeholder_1.png";

    /*
    - If the item has an ID (means it's being updated -> item prop is not an emtpy array), call "onSubmitItem "with the item ID.
    - Otherwise, call "onSubmitItem" for creating a new item.
    */
    if (item.id) {
      onSubmitItem(item.id, newItem);
    } else {
      onSubmitItem(newItem);
    }
    // Resets the form mode after submission. So the from is "hidden"
    onChangeMode("");
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <StyledFieldset>
          {/* Condition to show either "Update" or "Add" based on item existence */}
          <h2>{item.id ? "Update" : "Add"} an item to the list:</h2>
          <StyledLabel>
            new shopping item*:
            <StyledInput
              name="name"
              type="text"
              required
              placeholder="e.g., salt"
              //  If updating an item, pre-fill the input with its current name.
              defaultValue={item.name || ""}
            />
          </StyledLabel>
          <StyledLabel>
            number*:
            <StyledInput
              name="quantity"
              type="number"
              required
              // 💡 Pre-fill with the existing quantity or default to 1.
              defaultValue={item.quantity || 1}
            />
          </StyledLabel>
          <StyledLabel>
            category*:
            <select
              name="category"
              required
              // Pre-fill the selected category if in "edit" mode, otherwise leave it blank.
              defaultValue={mode === "edit" ? item.category : ""}
            >
              <option value="">please select a category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </StyledLabel>
          <StyledLabel>
            comment:
            <StyledInput
              name="comment"
              type="text"
              placeholder="Enter comments here..."
              // 💡 Pre-fill when "updating"
              defaultValue={item.comment || ""}
            />
          </StyledLabel>
          <StyledNote>
            Required fields are followed by <span aria-label="required">*</span>
            .
          </StyledNote>
          {/* Here you use what is in the submitLabel prop. So either "submit" or "update" */}
          <StyledButton>{submitLabel}</StyledButton>
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
