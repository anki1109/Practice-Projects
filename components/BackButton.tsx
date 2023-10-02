import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface backButtonProps{
    onClick:() => void;
}

const backButton:React.FC<backButtonProps> = ({onClick}) => {
 return(
    <>
    <div className='arrowBackwardIcon'>
    <ArrowBackIcon fontSize='large'  onClick={onClick}/>
    </div>
    </>
 )
}

export default backButton;