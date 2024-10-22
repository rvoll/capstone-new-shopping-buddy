import styled from "styled-components";
import { categories } from "@/lib/categoriesData";

export default function FormToCreateShoppingItem({
  onSubmitItem,

  item = {},
  onChangeMode,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData);
    newItem.quantity = Number(newItem.quantity);
    {
      !item.id && (newItem.imageUrl = "placeholder_free.png");
    }

    if (item.id) {
      onSubmitItem(item.id, newItem);
    } else {
      onSubmitItem(newItem);
    }
    onChangeMode("default");
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <StyledFieldset>
          <h2>
            {item.id ? "Edit the " + item.name : "What else do you need?"}
          </h2>
          <StyledLabel htmlFor="name">
            {item.id ? "item to be edited*: " : "new item*:"}
          </StyledLabel>
          <StyledInput
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g., salt"
            defaultValue={item.name || ""}
          />
          <StyledLabel htmlFor="quantity">quantity*:</StyledLabel>
          <StyledInput
            id="quantity"
            name="quantity"
            type="number"
            required
            defaultValue={item.quantity || ""}
          />
          <StyledLabel htmlFor="category">category*:</StyledLabel>
          <select
            id="category"
            name="category"
            required
            defaultValue={item.category || ""}
          >
            <option value="">please select a category</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
            ;
          </select>

          <StyledLabel htmlFor="comment">comment:</StyledLabel>
          <StyledInput
            id="comment"
            name="comment"
            type="text"
            defaultValue={item.comment || ""}
            placeholder="preferably sea salt"
          />
          <StyledNote>
            Required fields are followed by <span aria-label="required">*</span>
            .
          </StyledNote>
          <StyledButton>submit</StyledButton>
          <button type="button" onClick={() => onChangeMode("default")}>
            cancel
          </button>
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
