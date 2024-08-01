import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { BookData } from '../types';
import styles from './blurbs.module.css';
import Image from 'next/image';

interface BlurbCardProps {
  book: BookData;
}

const BlurbCard: React.FC<BlurbCardProps> = ({ book }) => {
  const {
    ISBN,
    Author,
    Original_Title,
    Title_Translated,
    Korean_Edition_Publication_Date,
    Genre_1,
    Genre_2,
    Genre_3,
    Genre_4,
  } = book;

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

  return (
    <Card
      className={styles.blurb_card}
      sx={{ width: 345, margin: 1 }}
      onClick={handleCardClick}
    >
      <Image
        src={`/static/images/${ISBN}.JPG`}
        alt="Book Cover"
        width={345}
        height={515}
        onError={(e) => {
          e.currentTarget.src =
            'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000&t=st=1700365885~exp=1700366485~hmac=080cf6f7e768fa2d3497b467c311e9876c103eb4306b996db727e817a7817';
        }}
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
