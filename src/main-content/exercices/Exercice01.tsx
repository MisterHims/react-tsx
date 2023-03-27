import { Container, Typography } from "@mui/material";

const Exercice01 = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Typography variant="h4" component="h1" gutterBottom>
        Bulma
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Approche et utilisation du framework CSS
      </Typography>
      <Typography variant="body1">
        Bulma est un puissant outil très simple à prendre en main, qui, à l'aide
        de simples classes, permet de spécifier le comportement des éléments que
        composent notre application.
      </Typography>
      <Typography variant="body1">
        Dans le cas présent, il sera justement utilisé pour cette principale
        fonction, les différents components ne seront quant à eux que très peu
        utilisés au profit de ceux fournis par Material UI.
      </Typography>
    </div>
  );
};

export default Exercice01;
