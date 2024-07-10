import { Typography } from '@mui/material';
import { ThemeProvider, createTheme, experimentalStyled as styled } from '@mui/material';
import { blue } from '@mui/material/colors';

const theme = createTheme({
    status: {
        danger: blue[500],
    },
});

const CustomText = styled(Typography)(({ theme }) => ({
    color: theme.status.danger,
}));


function Message(props) {
    return (
        <ThemeProvider theme={theme}>
            <div className='Message-wrapper'>
                <CustomText variant="caption" display="block">
                    {props.author}
                </CustomText>
                <p className="Message-text">{props.text}</p>
            </div>
        </ThemeProvider>

    );
}

export default Message;