import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
function ColorPickerForm(props) {
  const { colors, isPaletteFull, addColor } = props;
  const [currentColor, setCurrentColor] = useState("blue");
  const [newColorName, setNewColorName] = useState("");
  useEffect(() => {
    const setValidation = () => {
      ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
        colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
      );

      ValidatorForm.addValidationRule("isColorColorUnique", (value) =>
        colors.every(({ color }) => color !== currentColor)
      );
    };

    setValidation();
  });

  const handleChange = (e) => {
    setNewColorName(e.target.value);
  };

  const handleSubmit = () => {
    let newColor = { name: newColorName, color: currentColor };
    addColor(newColor);
    setNewColorName("");
  };

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={(newColor) => {
          setCurrentColor(newColor.hex);
        }}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          label="Color Name"
          onChange={handleChange}
          name="colorName"
          value={newColorName}
          validators={["required", "isColorNameUnique", "isColorColorUnique"]}
          errorMessages={[
            "Enter Color name",
            "Name already exists",
            "Color already exists",
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
          type="submit"
          disabled={isPaletteFull}>
          {isPaletteFull ? "PALETTE FULL" : "ADD COLOR"}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default ColorPickerForm;
