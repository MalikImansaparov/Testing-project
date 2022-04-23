import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import {GoBack} from "../../Components/modules/goBack";
import {Item} from "../../theme";
import {
    InputWrap,
    InputWrapper,
    LabelWrapper,
    PhotoWrap,
    SelectWrapper
} from "../../Components/modules/formInput";
import {CustomButton, PhotoWrapper} from "./style";
import {addBook, clearBook} from "../../store/booksSlice/bookSlice";




const validationSchema = Yup.object({
    name: Yup.string().required('Наименование обязательный'),
    picture: Yup.string().required('Загрузите картину'),
    authors: Yup.string().required('Автор обязательный'),
    quantity: Yup.string().required('Укажите количество страниц'),
    price: Yup.number().required('Укажите цену'),
    year: Yup.number().required('Укажите год выпуска'),
});

export const EditBook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useParams()
    const productInfo = useSelector((state) => state.allBooks.book);
    console.log(productInfo)
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleSubmit = (values,{ setSubmitting }) => {
            dispatch((values))
            setSubmitting(false);
            navigate(-1)
        }

        useEffect(() => {
           dispatch(addBook(id))
            // return (() => {
            //    dispatch(clearBook())
            // })
        },[dispatch, id])

    const initialValues = {
        firstName: productInfo?.title,
        picture: productInfo?.image,
        author: productInfo?.authors,
        price: productInfo?.price,
        quantity: productInfo?.pages,
        year: productInfo?.year,
    };

    return (
        <Box sx={{display: 'flex',justifyContent: 'center'}} my={5}>
            <Item sx={{ width: '1060px' }}>
                <FormControl>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              isSubmitting,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              setFieldValue
                          }) => (
                            <>
                                <form onSubmit={handleSubmit}>
                                    <Box
                                        sx={{
                                            my: '30px',
                                            display: 'grid',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <label htmlFor="contained-button-file">
                                            <PhotoWrapper>
                                                <InputWrap
                                                    name="picture"
                                                    accept="image/*"
                                                    id="contained-button-file"
                                                    multiple
                                                    type="file"
                                                    onChange={(event) => {
                                                        setFieldValue('picture', event.currentTarget.files[0])
                                                        setSelectedImage(event.target.files[0])
                                                    }}
                                                />
                                                {imageUrl && selectedImage ? (
                                                    <PhotoWrap component="img" src={imageUrl} alt="" />
                                                ) : (
                                                    <PhotoWrap
                                                        component="img"
                                                        src={values.picture}
                                                        alt=""
                                                    />
                                                )}
                                                <Typography>Изменить фото</Typography>
                                            </PhotoWrapper>
                                        </label>
                                        {errors.picture && touched.picture && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.picture}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ mb: '30px' }}>
                                        <LabelWrapper>Наименование</LabelWrapper>
                                        <InputWrapper
                                            name="firstName"
                                            onChange={handleChange}
                                            type="string"
                                            value={values.firstName}
                                            onBlur={handleBlur}
                                        />
                                        {errors.firstName && touched.firstName && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.firstName}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ mb: '30px' }}>
                                        <LabelWrapper>Автор</LabelWrapper>
                                        <InputWrapper
                                            name="name"
                                            onChange={handleChange}
                                            type="string"
                                            value={values.author}
                                            onBlur={handleBlur}
                                        />
                                        {errors.author && touched.author && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.author}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ mb: '30px' }}>
                                        <LabelWrapper>Категории</LabelWrapper>
                                        <SelectWrapper
                                            name="category"
                                            type="string"
                                            value={values.category}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            sx={{ display: 'block' }}
                                        >
                                            <option value="" label="Выберите категорию" />
                                            <option value="Удобрения" label="Удобрения" />
                                            <option value="Средства защиты" label="Средства защиты" />
                                            <option value="Грунт" label="Грунт" />
                                            <option value="Почва" label="Почва" />
                                        </SelectWrapper>
                                        {errors.category && touched.category && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.category}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ mb: '30px' }}>
                                        <LabelWrapper>Цена</LabelWrapper>
                                        <InputWrapper
                                            name="price"
                                            onChange={handleChange}
                                            type="number"
                                            value={values.price}
                                            onBlur={handleBlur}
                                        />
                                        {errors.price && touched.price && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.price}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ mb: '30px' }}>
                                        <LabelWrapper>Год издания</LabelWrapper>
                                        <InputWrapper
                                            name="year"
                                            onChange={handleChange}
                                            type="text"
                                            value={values.year}
                                            onBlur={handleBlur}
                                        />
                                        {errors.year && touched.year && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.year}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ mb: '30px' }}>
                                        <LabelWrapper>Количество страниц</LabelWrapper>
                                        <InputWrapper
                                            name="quantity"
                                            onChange={handleChange}
                                            type="text"
                                            value={values.quantity}
                                            onBlur={handleBlur}
                                        />
                                        {errors.quantity && touched.quantity && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.quantity}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <GoBack/>
                                        <CustomButton type="submit" disabled={isSubmitting}>
                                            Сохранить
                                        </CustomButton>
                                    </Box>
                                </form>
                            </>
                        )}
                    </Formik>
                </FormControl>
            </Item>
        </Box>
    );
};


