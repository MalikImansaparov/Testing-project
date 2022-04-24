import React from "react";
import styled from "@emotion/styled";
import {useLocation, useParams} from "react-router-dom";

export const BreadcrubsWrapper = styled('div')`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-left: 50px;
`;

export const BreadCrumb = () => {
    const location = useLocation();
    const {id} = useParams()
    const {pathname} = location
    return (
        <div>
            {pathname && (
                <BreadcrubsWrapper>
                    {pathname === '/' ? 'Main' : null}
                    {pathname === `/book/${id}` ? 'Main > Edit Book' : null}
                    {pathname === '/book/add'
                        ? 'Main  >  Add book'
                        : null}
                </BreadcrubsWrapper>
            )}
        </div>
    );
};


