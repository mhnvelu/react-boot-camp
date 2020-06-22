import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Picker } from "emoji-mart";
function NewPaletteMetaForm(props) {
  const { palettes, savePalette, closeForm } = props;
  const [newPaletteName, setNewPaletteName] = useState("");
  const [stage, setStage] = useState("form");

  const handlePaletteName = (e) => {
    setNewPaletteName(e.target.value);
  };

  const handleSavePalette = (emoji) => {
    savePalette({ newPaletteName: newPaletteName, emoji: emoji.id });
    setNewPaletteName("");
    closeForm();
  };

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  const handleClose = () => {
    closeForm();
  };

  useEffect(() => {
    const setValidation = () => {
      ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
        palettes.every(
          ({ paletteName }) =>
            paletteName.toLowerCase() !== newPaletteName.toLowerCase()
        )
      );
    };
    setValidation();
  });

  return (
    <div>
      <Dialog open={stage === "emoji"} onClose={handleClose}>
        <DialogTitle>Choose a Palette emoji</DialogTitle>
        <Picker
          onSelect={handleSavePalette}
          title="Pick a Palette emoji"
          emoji="point_up"
        />
      </Dialog>

      <Dialog open={stage === "form"} onClose={handleClose}>
        <DialogTitle>Enter Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new Palette. Make sure it's unique.
            </DialogContentText>
            <TextValidator
              label="Palette Name"
              onChange={handlePaletteName}
              name="paletteName"
              value={newPaletteName}
              fullWidth
              margin="normal"
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already exists"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default NewPaletteMetaForm;
