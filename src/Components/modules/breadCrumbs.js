import React from "react";
import styled from "@emotion/styled";
import {useLocation, useParams} from "react-router-dom";

export const BreadcrubsWrapper = styled('div')`
  justify-content: end;
  width: 1060px;
  border-radius: 20px;
  background: #ffffff;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  color: #487349;
  margin-bottom: 30px;
`;

export const BreadCrumb = () => {
    const location = useLocation();
    const {id} = useParams()
    const {pathname} = location
    return (
        <div>
            {pathname && (
                <BreadcrubsWrapper>
                    {pathname === '*' ? 'Книги > ' : null}
                    {pathname === `/books/${id}` ? 'Книги > Редактирование книги' : null}
                    {pathname === '/book/add'
                        ? 'Сотрудники  >  Добавление книги'
                        : null}
                    {pathname === `/employers/${id}`
                        ? 'Сотрудники  >  Редактирование сотрудника'
                        : null}
                    {pathname === '/products/add'
                        ? 'Продукты  >  Добавление продукта'
                        : null}
                    {pathname === `/products/${id}`
                        ? 'Продукты  >  Редактирование продукта'
                        : null}

                </BreadcrubsWrapper>
            )}
        </div>
    );
};


