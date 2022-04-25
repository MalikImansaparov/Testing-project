import React from "react";
import {useNavigate} from "react-router";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const ButtonWrapper = styled(Button)`
 margin-bottom: 70px;
 border-radius: 20px;
 padding: 0 20px;
 &:hover {
 color: #ffffff;
 background: #2152d2;
 }
`

export const GoBack = () => {
    const navigate = useNavigate()
    return (
        <>
            <ButtonWrapper variant='text'  onClick={() => navigate(-1)}>
                Назад
            </ButtonWrapper>
        </>
    )
}
