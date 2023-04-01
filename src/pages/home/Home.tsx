import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
 
const Home = () => {
  return (
    <div className="content">
        <h1 className="font-extrabold sm:text-5xl lg:text-6xl tracking-tight">
          L'obstination <br/> est le chemin de la réussite.
        </h1>
        <p>
          Utilisons-là à bon escient et réussissons là où d'autres ont échoués. Et ne jamais oublier que c'est en tombant qu'on apprend à se relever.
        </p>
        <Button component={Link} to="/docs" variant="contained" color="primary" size="large">
          Get started
        </Button>
    </div>
  );
};

export default Home;
