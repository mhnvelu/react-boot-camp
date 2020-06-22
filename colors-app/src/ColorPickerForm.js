import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";

const styles = {
  colorPicker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColor: {
    width: "100%",
    marginTop: "1rem",
    padding: "1rem",
    fontSize: "2rem",
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
    margin: "normal",
    padding: "0.5rem",
  },
};
function ColorPickerForm(props) {
  const { colors, isPaletteFull, addColor, classes } = props;
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
    <div className={classes.root}>
      <ChromePicker
        className={classes.colorPicker}
        color={currentColor}
        onChangeComplete={(newColor) => {
          setCurrentColor(newColor.hex);
        }}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          className={classes.colorNameInput}
          variant="filled"
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
          className={classes.addColor}
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

export default withStyles(styles)(ColorPickerForm);
