import { Convert as ConvertStyle, WaterMark, LabelConvert, TextConvert } from '../../style/style.js';

const Convert = {
    Container: (props) => {
        return(
            <ConvertStyle {...props}>
                {props.children}
            </ConvertStyle>
        );
    },

    Mark: (props) => {
        return(
            <WaterMark {...props}>
                {props.children}
            </WaterMark>
        );
    },

    Label: (props) => {
        return(
            <LabelConvert {...props}>
                {props.children}
            </LabelConvert>
        );
    },

    Text: (props) => {
        return(
            <TextConvert {...props}>
                {props.children}
            </TextConvert>
        );
    }
};

export default Convert;