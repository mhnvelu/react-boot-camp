import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
function NewPaletteMetaForm(props) {
  const { palettes, savePalette } = props;
  const [open, setOpen] = useState(false);
  const [newPaletteName, setNewPaletteName] = useState("");

  const handlePaletteName = (e) => {
    setNewPaletteName(e.target.value);
  };

  const handleSavePalette = () => {
    savePalette(newPaletteName);
    setNewPaletteName("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Palette Name</DialogContentText>
          <ValidatorForm onSubmit={handleSavePalette}>
            <TextValidator
              label="Palette Name"
              onChange={handlePaletteName}
              name="paletteName"
              value={newPaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already exists"]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save Palette
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewPaletteMetaForm;
