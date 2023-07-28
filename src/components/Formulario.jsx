import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function Formulario() {
  return (
    <div className="container-1 mt-4 contacto">
      <h1>Contactenos</h1>
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
            <TextField id="input-with-sx" label="Nombre" variant="standard" />
          </div>
          <div className="text-input">
            <LocalPhoneIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Telefono" variant="standard" />
          </div>
          <div className="text-input">
            <AlternateEmailIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Email" variant="standard" />
          </div>
        </Box>
        <Box
          sx={{
            "& .MuiTextField-root": { mr: 1, width: "100%" },
          }}
        >
          <TextField id="outlined-textarea" label="Descripción" multiline />
        </Box>
        <div className="centered">
          <Button variant="contained">Enviar</Button>
        </div>
      </Box>
    </div>
  );
}