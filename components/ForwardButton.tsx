import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './style.scss';

interface forwardButtonProps {
    onClick:() => void;
}
const forwardButton:React.FC<forwardButtonProps> = ({onClick}) => {
   return(
 
    <div className='arrowForwardIcon' onClick={onClick}>
    <ArrowForwardIcon fontSize='large' />
    </div>
   
   )
}

export default forwardButton;