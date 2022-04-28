import * as React from "react";
import {FC, useEffect, useState } from "react";
import { Formik } from "formik";
import {useNavigate, useParams} from "react-router";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { GoBack } from '../../components/modules/goBack';
import { Item } from '../../theme';
import {
  CustomButton,
  InputWrap,
  InputWrapper,
  LabelWrapper,
  PhotoWrap,
  PhotoWrapper,
} from '../../components/modules/formInput';
import CircularPreloader from '../../components/modules/preloader';
import { validationSchema } from '../../components/modules/validate';
import {useTypedSelector} from "../../components/hooks/useTypedselector";
import {useAction} from "../../components/hooks/useAction";
import {fetchBookId} from "../../store/asyncAction";
import {FormStyle, SubmitStyle, ValidateMessage} from "../addBook/style";
import {InputForm} from "../../types";

export const EditFiction:FC<> = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const productInfo = useTypedSelector((state) => state.fiction.book);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const { editBook, clearBook} = useAction()

    useEffect(() => {
        fetchBookId(id);
        return () => clearBook();
    }, [id]);

    const handleSubmit = (values: InputForm,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void) => {
        editBook(values);
        setSubmitting(false);
        navigate(-1);
    };

    const initialValues: InputForm = {
        title: productInfo?.title,
        image: productInfo?.image,
        description: productInfo?.description,
        price: productInfo?.price,
};

    if (!productInfo) {
        return (
            <Box my={5} sx={{display: 'flex',
                justifyContent: 'center'}} >
                    <CircularPreloader />
            </Box>
        );
    }

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
                                    <FormStyle>
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
                                            <ValidateMessage>
                                                {errors.image}
                                            </ValidateMessage>
                                        )}
                                    </FormStyle>
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
                                            <ValidateMessage>
                                                {errors.title}
                                            </ValidateMessage>
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
                                            <ValidateMessage>
                                                {errors.description}
                                            </ValidateMessage>
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
                                            <ValidateMessage>
                                                {errors.price}
                                            </ValidateMessage>
                                        )}
                                    </Box>
                                    <SubmitStyle>
                                        <GoBack/>
                                        <CustomButton type="submit" disabled={isSubmitting}>
                                            Сохранить
                                        </CustomButton>
                                    </SubmitStyle>
                                </form>
                            </>
                        )}
                    </Formik>
                </FormControl>
            </Item>
        </Box>
    );
};

