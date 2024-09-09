import styled from "styled-components";

/*
1. 
- This form is designed to handle both "creating" and "updating" a shopping item.
- therefore it makes sense to rename this component to "Form"
- Use a more generic prop name like "onSubmitItem" so the function can be used for both creating and updating an item.
- The actuall function is therefore passed as a prop by the parent component.
- You can also pass the submitLabel, depending on whether you want to create or update an item, the default could be "submit"
- To make the form prefilled, you also need the information about which item is to be updated, so we need this information as prop "item"
*/
export default function Form({
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

    if (item.id) {
      onSubmitItem(item.id, newItem);
    } else {
      onSubmitItem(newItem);
    }

    onChangeMode("");
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <StyledFieldset>
          {/* 💡 add a condition for updtaing or creating an Item */}
          {/* <h2>{item.id ? "Update" : "Add"} an item to the list:</h2> */}
          <StyledLabel>
            new shopping item*:
            <StyledInput
              name="name"
              type="text"
              required
              placeholder="e.g., salt"
              // 💡 Pre-fill when "updating"
              defaultValue={item.name || ""}
            />
          </StyledLabel>
          <StyledLabel>
            number*:
            <StyledInput
              name="quantity"
              type="number"
              required
              // 💡 Pre-fill when "updating"
              defaultValue={item.quantity || 1}
            />
          </StyledLabel>
          <StyledLabel>
            category*:
            <select
              name="category"
              required
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
