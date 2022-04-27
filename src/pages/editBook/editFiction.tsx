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

type editTypes = {
    id: number
    title: string;
    description: string;
    prices: number;
    image: number;
}


export const EditFiction:FC<editTypes> = () => {
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

    const handleSubmit = (values, { setSubmitting }) => {
        editBook(values);
        setSubmitting(false);
        navigate(-1);
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
                        initialValues={productInfo}
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

