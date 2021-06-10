import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardMedia, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const CoffeCard = (props) => {
  const {avatarUrl, title, subtitle, description, imageUrl} = props;
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={avatarUrl}/>
        }
        action={
          <IconButton>
            <ShareIcon/>
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />

      <CardMedia
        style={{height: "150px"}}
        image={imageUrl}
      />

      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  )
}

export default CoffeCard;