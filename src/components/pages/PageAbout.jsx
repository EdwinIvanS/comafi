import SportsScoreIcon from "@mui/icons-material/SportsScore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupsIcon from "@mui/icons-material/Groups";

export default function PageAbout() {
  return (
    <>
      <div className="container padding-bottom">
        <h1>Empresa</h1>
        <div className="container-card-empresa">
          <div className="card_empresa">
            <div>
              <SportsScoreIcon />
              <span>Visión</span>
            </div>
            <p>
              En el 2028 ser la empresa líder en importación y distribución de
              insumos para construcción en Panamá, reconocida por nuestra
              excelencia en la calidad de productos y servicios, así como por
              nuestra contribución al desarrollo sostenible del sector de la
              construcción en el país.
            </p>
          </div>
          <div className="card_empresa">
            <div>
              <VisibilityIcon />
              <span>Misión</span>
            </div>
            <p>
              En Comafi, nuestra misión es proveer soluciones integrales en
              insumos para construcción, satisfaciendo las necesidades de
              nuestros clientes y superando sus expectativas. Trabajamos con un
              enfoque de responsabilidad y ética, garantizando la disponibilidad
              oportuna de productos de alta calidad para contribuir al progreso
              y la eficiencia en los proyectos de construcción en Panamá.
            </p>
          </div>
        </div>

        <div className="card_empresa">
          <div>
            <GroupsIcon />
            <span>¿Quiénes somos?</span>
          </div>
          <p>
            En Comafi, somos un equipo de profesionales apasionados por la
            industria de la construcción y el comercio internacional. Nos
            enorgullecemos de ofrecer un catálogo diverso de insumos para
            construcción, seleccionados cuidadosamente para cumplir con los más
            altos estándares de calidad. Nuestra experiencia y conocimiento en
            logística nos permiten garantizar entregas puntuales y eficientes,
            asegurando que las grandes empresas en Panamá tengan acceso a los
            materiales necesarios para llevar a cabo sus proyectos de
            construcción de manera exitosa.
          </p>
          <p>
            Nuestro compromiso con la excelencia y el servicio al cliente nos
            impulsa a mantener relaciones sólidas y a largo plazo con nuestros
            proveedores y clientes. Además, estamos dedicados a adoptar
            prácticas comerciales sostenibles que tengan un impacto positivo en
            la comunidad y el medio ambiente.
          </p>
          <p>
            En Comafi, creemos que la innovación y la mejora continua son
            fundamentales para seguir siendo líderes en el mercado y para
            contribuir al crecimiento y desarrollo de la industria de la
            construcción en Panamá.
          </p>
        </div>
      </div>
    </>
  );
}
