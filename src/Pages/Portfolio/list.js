import { CardProjects, Container } from "./PortfolioStyled"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const List = ({ itens }) => {

  return (
    <CardProjects>
      {itens.map((item) => (
        <Card  className="ConfCards"  sx={{ minWidth: 270 }}>
          <CardMedia
            component="img"
            height="160"
            image={item.image}
            alt="pokedex"
          />
          <CardContent className="CardText">
            <Typography gutterBottom variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">GitHub</Button>
            <Button size="small">Live Demo</Button>
          </CardActions>
        </Card>
      ))}
    </CardProjects>
  )
}



export default List;


