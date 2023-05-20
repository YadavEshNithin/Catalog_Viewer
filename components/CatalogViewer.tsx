"use client"

import React, { useState, useEffect } from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
       root: {
        flexGrow: 1,
        padding: theme.spacing(2), 
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9 aspect ratio
    
    },
    thumbnailContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: theme.spacing(2),
    },
    thumbnail: {
        width: 150,
        height: 150,
        padding:3,
        margin: theme.spacing(1),
        objectFit: 'cover',
        cursor: 'pointer',
        transition: 'filter 0.3s ease-in-out',
        '&.active': {
            filter: 'grayscale(0%)',
        },
        '&:hover': {
            filter: 'grayscale(70%)',
            
            
        },
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
}));

const CatalogViewer: React.FC = () => {
    const classes = useStyles();
    const fetchedImages = [
        {
            id: 1,
            src: "/img1.jpeg",
            title: "Image 1",
            description: "Description 1 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
        {
            id: 2,
            src: "/img2.jpeg",
            title: "Image 2",
            description: "Description 2 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
        {
            id: 3,
            src: "/img3.jpeg",
            title: "Image 3",
            description: "Description 3 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
        {
            id: 4,
            src: "/img4.jpeg",
            title: "Image 4",
            description: "Description 4 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
        {
            id: 5,
            src: "/img5.jpeg",
            title: "Image 5",
            description: "Description 5 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
        {
            id: 6,
            src: "/img6.jpeg",
            title: "Image 6",
            description: "Description 6 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
        {
            id: 7,
            src: "/img7.jpeg",
            title: "Image 7",
            description: "Description 7 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
        {
            id: 8,
            src: "/img8.jpeg",
            title: "Image 8",
            description: "Description 8 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
        {
            id: 9,
            src: "/img9.jpeg",
            title: "Image 9",
            description: "Description 9 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
        {
            id: 10,
            src: "/img10.jpeg",
            title: "Image 10",
            description: "Description 10 :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem quod porro sed vero delectus quia, obcaecati sit repellat repellendus? Commodi autem dignissimos asperiores nihil. Necessitatibus deleniti fugit veniam! Voluptatem est a asperiores tenetur neque nihil architecto magnam vitae nobis. Dolores eveniet dignissimos rerum! Assumenda quidem vel magnam minus quaerat.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    useEffect(() => {
                let slideshowInterval: NodeJS.Timeout | null = null;
        
                if (isPlaying) {
                    slideshowInterval = setInterval(() => {
                        setCurrentIndex((prevIndex) => (prevIndex === fetchedImages.length - 1 ? 0 : prevIndex + 1));
                    }, 3000);
                }
        
                return () => {
                    if (slideshowInterval) {
                        clearInterval(slideshowInterval);
                    }
                };
            }, [isPlaying, fetchedImages.length]);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? fetchedImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === fetchedImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePlayPause = () => {
        setIsPlaying((prevState) => !prevState);
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={classes.root}>
           
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={`${classes.media} border-4 border-gray-400 rounded-lg`}
                            image={fetchedImages[currentIndex].src}
                            title={fetchedImages[currentIndex].title}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {fetchedImages[currentIndex].title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {fetchedImages[currentIndex].description}
                            </Typography>
                        </CardContent>
                    </Card>
                    <div className={classes.buttonsContainer}>
                        <Button variant="outlined" color="primary" onClick={handlePrevious}>
                            Previous
                        </Button>
                        <Button variant="outlined" color="primary" onClick={handleNext}>
                            Next
                        </Button>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePlayPause}
                        style={{ marginTop: '16px', 
                        display:"flex", margin:"auto" }}
                    >
                        {isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    
                    <div className={classes.thumbnailContainer}>
                        {fetchedImages.map((image, index) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.title}
                                className={`${classes.thumbnail} ${
                                    index === currentIndex ? 'active' : ''
                                } hover:border-4 border-sky-300 rounded-lg bg-slate-400`}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>
                    
                </Grid>
            </Grid>
        </div>
    );
};

export default CatalogViewer;





// {
//     "name": "prompt",
//     "version": "0.1.0",
//     "private": true,
//     "scripts": {
//       "dev": "next dev",
//       "build": "next build",
//       "start": "next start",
//       "lint": "next lint"
//     },
//     "dependencies": {
//       "@material-ui/core": "^4.12.4",
//       "@material-ui/icons": "^4.11.3",
//       "autoprefixer": "10.4.14",
//       "bcrypt": "^5.1.0",
//       "mongodb": "^5.4.0",
//       "mongoose": "^7.1.1",
//       "next": "13.4.1",
//       "next-auth": "^4.22.1",
//       "postcss": "8.4.23",
//       "react": "^18.2.0",
//       "react-dom": "^18.2.0",
//       "tailwindcss": "3.3.2"
//     },
//     "devDependencies": {
//       "typescript": "5.0.4"
//     }
//   }
  