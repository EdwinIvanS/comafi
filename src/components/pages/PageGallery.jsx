import Grid from "@mui/material/Grid";
import { listGaleria } from "../../javascript/list-galeria";

export default function PageGallery() {
  return (
    <div className="container" style={{padding: "15px", marginBottom:"10px"}}>
      <Grid container spacing={2}>
        {listGaleria.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              style={{ width: "90%" }}
              loading="lazy"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
