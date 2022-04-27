import React from "react";
import {FC, useEffect, useState} from "react";
import { Formik } from "formik";
import { useNavigate} from "react-router";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { useDispatch} from 'react-redux';
import { GoBack } from '../../components/modules/goBack';
import {Item} from "../../theme";
import {
  DefaultPhoto,
  InputWrap,
  InputWrapper,
  LabelWrapper,
  PhotoWrap,
  PhotoWrapper,
} from '../../components/modules/formInput';
import {CustomButton} from "./style";
import Upload from '../../assets/images/upload.svg'
import { validationSchema } from '../../components/modules/validate';
import {InputForm} from "../../components/bookTypes";
import {useAction} from "../../components/hooks/useAction";

export const AddFiction:FC<InputForm> = () => {
    const navigate = useNavigate();
    const addBook = useAction();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleSubmit = (values,{ setSubmitting }) => {
            addBook(values)
            setSubmitting(false);
            navigate(-1)
        }

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    const initialValues = {
        title: '',
        image: '',
        description: '',
        price: '',
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
                                                        setFieldValue('image',
                                                            URL.createObjectURL(event.target.files[0])
                                                        )
                                                        setSelectedImage(event.target.files[0])
                                                    }}
                                                />
                                                { imageUrl && selectedImage ?
                                                    <Box>
                                                        <PhotoWrap component="img" src={imageUrl} alt='' />
                                                        <Typography>Изменить фото</Typography>
                                                    </Box>:
                                                    <Box>
                                                        <DefaultPhoto component="img" src={Upload} alt="" />
                                                        <Typography>Добавить фото</Typography>
                                                    </Box>
                                                }
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


