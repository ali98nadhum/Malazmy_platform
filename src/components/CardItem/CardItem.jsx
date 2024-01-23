import React from "react";
import "./CardItem.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CardItem = ({ imageCagegory , title ,id}) => {
  return (
    <div>
      <Link to={`/subcategory/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageCagegory}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="title"
            style={{
              fontFamily: "Almarai, sans-serif",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
      </Link>
    </div>
  );
};

export default CardItem;
