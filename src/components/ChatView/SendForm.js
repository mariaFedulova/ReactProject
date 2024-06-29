import { TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, { forwardRef, useRef } from "react";

const SendForm = forwardRef(((props, ref) => {
    return (
        <form className='SendForm' >
            <TextField autoFocus className='SendForm-input' id="outlined-basic" variant="outlined" value={props.value} onChange={props.handleChange} placeholder='Text something' size="small" ref={ref} />
            <Button variant="text" endIcon={<SendIcon />} onClick={props.sendMessage}></Button>
        </form>
    );
}))

export default SendForm;