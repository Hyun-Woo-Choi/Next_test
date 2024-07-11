import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';

import { useState } from 'react';

interface BlurbCardProps {
  ISBN: string;
  Author_Translated: string | null;
  Author: string;
  Title_Translated: string | string;
  Original_Title: string | string;
  Translated_By: string;
  Korean_Publisher: string;
  Korean_Edition_Publication_Date: string;
  Original_Publication_Year: string;
  Genre_1: string;
  Genre_2: string;
  Genre_3: string | null;
  Genre_4: string | null;
  Genre_5: string | null;
  Author_of_Korean_Ethnicity: string;
  Blurb_Translated: string | null;
}

const BlurbCard: React.FC<BlurbCardProps> = ({
  ISBN,
  Author_Translated,
  Author,
  Title_Translated,
  Original_Title,
  Translated_By,
  Korean_Publisher,
  Korean_Edition_Publication_Date,
  Original_Publication_Year,
  Genre_1,
  Genre_2,
  Genre_3,
  Genre_4,
  Genre_5,
  Author_of_Korean_Ethnicity,
  Blurb_Translated,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalContentMouseDown = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    // Prevent closing the modal when clicking inside it
    e.stopPropagation();
  };

  const ModalContent = (
    <div onMouseDown={handleModalContentMouseDown}>
      <Typography>{Original_Title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {Title_Translated}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        by {Author}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Date of Translated Publication:
        {Korean_Edition_Publication_Date}
      </Typography>
      <br />
      <Typography variant="body2" color="text.secondary">
        Genre
        <hr />
        {Genre_1}
        <hr />
        {Genre_2},
        <hr />
        {Genre_3},
        <hr />
        {Genre_4}
      </Typography>
    </div>
  );

  try {
    var imageUrl = require(`../static/Book_Covers_SK/${ISBN}.JPG`);
  } catch (error) {
    // var imageUrl = require("https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000&t=st=1700365885~exp=1700366485~hmac=080cf6f7e768fa2d3497b467c311e9876c103eb6794306b996db727e817a7817");
    console.log(error);
  }

  return (
    <Card sx={{ width: 345, margin: 1 }} onClick={handleCardClick}>
      <CardMedia
        component="img"
        alt="Book Cover"
        height="515"
        image={imageUrl}
      />
      <CardContent sx={{ height: 90 }}>
        <Typography gutterBottom variant="h5" component="div">
          {Original_Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Author}
        </Typography>
        <Modal open={isModalOpen} onClose={handleCardClick}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '20px',
            }}
          >
            {ModalContent}
          </div>
        </Modal>
      </CardContent>
    </Card>
  );
};

export default BlurbCard;
