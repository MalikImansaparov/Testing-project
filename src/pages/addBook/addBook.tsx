import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { GoBack } from '../../components/modules/goBack';
import { Item } from '../../theme';
import {
  DefaultPhoto,
  InputWrap,
  InputWrapper,
  LabelWrapper,
  PhotoWrap,
  PhotoWrapper,
} from '../../components/modules/formInput';
import {CustomButton, FormStyle, SubmitStyle, ValidateMessage} from './style';
import Upload from '../../assets/images/upload.svg';
import { validationSchema } from '../../components/modules/validate';
import { useAction } from '../../components/hooks/useAction';
import {InputForm} from "../../types";

export const AddBook: FC<InputForm> = () => {
  const navigate = useNavigate();
  const addBook = useAction();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = (
    values: InputForm,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    addBook(values);
    setSubmitting(false);
    navigate(-1);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const initialValues: InputForm = {
    title: '',
    image: null,
    description: '',
    price: 0,
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} my={5}>
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
              setFieldValue,
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
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setFieldValue(
                              'image',
                              URL.createObjectURL(event.target.files[0])
                            );
                            setSelectedImage(event.target.files[0]);
                          }}
                        />
                        {imageUrl && selectedImage ? (
                          <Box>
                            <PhotoWrap component="img" src={imageUrl} alt="" />
                            <Typography>Изменить фото</Typography>
                          </Box>
                        ) : (
                          <Box>
                            <DefaultPhoto component="img" src={Upload} alt="" />
                            <Typography>Добавить фото</Typography>
                          </Box>
                        )}
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
                    <GoBack />
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
