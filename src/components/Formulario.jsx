import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

export default function Formulario() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});  
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {setName(value);} 
    else if (name === "phone") {setPhone(value);} 
    else if (name === "email") {setEmail(value);} 
    else if (name === "description") {setDescription(value);}
  };

  const handleFormSubmit = (event) => {   
    event.preventDefault();
    // Aquí puedes realizar las validaciones personalizadas según tus requerimientos
    const validationErrors = {};
    if (name.trim() === '') { validationErrors.name = 'El nombre es requerido';}
    if (phone.trim() === '') {validationErrors.phone = 'El teléfono es requerido';}
    if (email.trim() === '') {validationErrors.email = 'El email es requerido';}
    if (description.trim() === "") {
      validationErrors.description = "La descripción es requerida";
    }
    if (!checked) {
      validationErrors.terms = "Debes aceptar los términos y condiciones";
    }

    // También puedes agregar otras validaciones, como validar el formato del email o el teléfono
    setErrors(validationErrors);

    // Si no hay errores, puedes enviar el formulario
    if (Object.keys(validationErrors).length === 0) {
      // Aquí puedes realizar el envío del formulario o la acción que desees
      console.log('Formulario enviado con éxito!');
    }
  };

  return (
    <>
      <div
        className="container-1"
        style={{
          background: "#f5f5f5",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        <h1>Contactanos</h1>
        <div
          className="card"
          style={{
            maxWidth: "85%",
            margin: "auto",
            padding: "30px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            border: "none",
          }}
        >
          <SupportAgentIcon />
          <p>
            Hacemos que tu experiencia sea más satisfactoria; atendemos tus
            inquietudes y necesidades en línea, de todo tu proceso de compra y
            tramites con una asesoría especializada.
          </p>
        </div>
        <div
          className="container-1 mt-4 contacto"
          style={{
            maxWidth: "85%",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="centered"></div>
          <Box sx={{ "& > :not(style)": { m: 2 } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-evenly",
              }}
            >
              <div className="text-input">
                <AccountCircleIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="filled-basic"
                  label="Nombre"
                  variant="filled"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  autoComplete="off"
                />
              </div>
              <div className="text-input">
                <LocalPhoneIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="filled-basic"
                  label="Telefono"
                  variant="filled"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  autoComplete="off"
                />
              </div>
              <div className="text-input">
                <AlternateEmailIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  autoComplete="off"
                />
              </div>
            </Box>
            <Box
              sx={{
                "& .MuiTextField-root": { mr: 1, width: "100%" },
              }}
            >
              <TextField
                id="outlined-textarea"
                label="Descripción"
                multiline
                variant="filled"
                name="description"
                value={description}
                onChange={handleInputChange}
                error={!!errors.description}
                helperText={errors.description}
                autoComplete="off"
              />
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Acepto los términos y condiciones"
              error={!!errors.terms}
              helperText={errors.terms}
            />
            <div className="centered" style={{ paddingBottom: "30px" }}>
              <Button variant="contained" onClick={handleFormSubmit}>
                Enviar
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}