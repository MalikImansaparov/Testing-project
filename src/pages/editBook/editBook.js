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
import {fetchBookId} from "../../store/asyncAction";


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
    const productInfo = useSelector((state) => state.allBooks.book);
    console.log(productInfo)
    const id = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        dispatch(fetchBookId(id))
        return () => {
            dispatch(clearBook())
        }
    },[dispatch])

    const handleSubmit = (values,{ setSubmitting }) => {
        dispatch((values))
        setSubmitting(false);
        navigate(-1)
    }

    const initialValues = {
        title: productInfo?.title,
        image: productInfo?.image,
        description: productInfo?.description,
        price: productInfo?.price,
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
                                                    name="image"
                                                    accept="image/*"
                                                    id="contained-button-file"
                                                    multiple
                                                    type="file"
                                                    onChange={(event) => {
                                                        setFieldValue('image', event.currentTarget.files[0])
                                                        setSelectedImage(event.target.files[0])
                                                    }}
                                                />
                                                {imageUrl && selectedImage ? (
                                                    <PhotoWrap component="img" src={imageUrl} alt="" />
                                                ) : (
                                                    <PhotoWrap
                                                        component="img"
                                                        src={values.image}
                                                        alt=""
                                                    />
                                                )}
                                                <Typography>Изменить фото</Typography>
                                            </PhotoWrapper>
                                        </label>
                                        {errors.image && touched.image && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.image}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ mb: '30px' }}>
                                        <LabelWrapper>Наименование</LabelWrapper>
                                        <InputWrapper
                                            name="title"
                                            onChange={handleChange}
                                            type="string"
                                            value={values.title}
                                            onBlur={handleBlur}
                                        />
                                        {errors.title && touched.title && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.title}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ mb: '30px' }}>
                                        <LabelWrapper>Автор</LabelWrapper>
                                        <InputWrapper
                                            name="description"
                                            onChange={handleChange}
                                            type="string"
                                            value={values.description}
                                            onBlur={handleBlur}
                                        />
                                        {errors.description && touched.description && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '13px',
                                                    color: 'error.main',
                                                    mt: '12px',
                                                    ml: '14px',
                                                }}
                                            >
                                                {errors.description}
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


