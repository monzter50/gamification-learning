import styled from "styled-components";

const ButtonLearn = styled.button`
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    padding:${props => props.padding};
    font-size:${props => props.fontSize};
    color:${props => props.primary ? 'white':'#333'} ;
    background-color:${props => props.primary ? '#1ea7fd':'transparent'} ;
    box-shadow:${props => props.primary ? 'transparent':'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'}  ;
`;

export {
    ButtonLearn
};