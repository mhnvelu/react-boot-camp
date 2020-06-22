import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
function NewPaletteMetaForm(props) {
  const { palettes, savePalette, open, closeForm } = props;
  //   const [open, setOpen] = useState(false);
  const [newPaletteName, setNewPaletteName] = useState("");

  const handlePaletteName = (e) => {
    setNewPaletteName(e.target.value);
  };

  const handleSavePalette = () => {
    savePalette(newPaletteName);
    setNewPaletteName("");
    closeForm();
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
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Enter Palette Name</DialogTitle>
      <ValidatorForm onSubmit={handleSavePalette}>
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
  );
}

export default NewPaletteMetaForm;
