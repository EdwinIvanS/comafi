import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useState } from "react";

export default function Formulario() {

  const [sessionEnabled, setSessionEnabled] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleOnClic = () => {
    setSessionEnabled(true);
    const containerEmail = document.querySelector(".container-contact-email");
    containerEmail.style.display="none";
  }

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

    // También puedes agregar otras validaciones, como validar el formato del email o el teléfono
    setErrors(validationErrors);

    // Si no hay errores, puedes enviar el formulario
    if (Object.keys(validationErrors).length === 0) {
      // Aquí puedes realizar el envío del formulario o la acción que desees
      console.log('Formulario enviado con éxito!');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
        <div className={!sessionEnabled ? "centered contactanos" : "none"}>
          <div className="container-contact-email">
            <input
              type="text"
              placeholder="Email Address"
              name="EmailAdrees"
              value={email}
              onChange={handleEmailChange}
            />
            <Button
              className="contactanos-btn"
              variant="contained"
              onClick={handleOnClic}
              style={{ display: sessionEnabled ? "none" : "block" }}
            >
              Contactanos
            </Button>
          </div>
        </div>
        {sessionEnabled && (
          <div
            className="container-1 mt-4 contacto"
            style={{ maxWidth: "85%" }}
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
                    id="input-with-sx"
                    label="Nombre"
                    variant="standard"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </div>
                <div className="text-input">
                  <LocalPhoneIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Telefono"
                    variant="standard"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                </div>
                <div className="text-input">
                  <AlternateEmailIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    variant="standard"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    helperText={errors.email}
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
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                />
              </Box>
              <div
                className="centered"
                style={{ paddingBottom: "30px" }}
              >
                <Button variant="contained" onClick={handleFormSubmit}>
                  Enviar
                </Button>
              </div>
            </Box>
          </div>
        )}
      </div>
    </>
  );
}