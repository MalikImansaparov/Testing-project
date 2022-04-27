import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit"
import {bookActions} from "../../store/booksSlice/bookSlice";
import {fictionActions} from "../../store/booksSlice/fictionSlice";

const allActions = {
    ...bookActions,
    ...fictionActions
}

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}
