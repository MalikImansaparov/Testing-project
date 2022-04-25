import * as Yup from "yup";

export const validationSchema = Yup.object({
    title: Yup.string().required('Наименование обязательный'),
    image: Yup.string().required('Загрузите картину'),
    description: Yup.string().required('Автор обязательный'),
    price: Yup.number().required('Укажите цену'),
});
