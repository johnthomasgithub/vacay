import { useDispatch } from "react-redux";

const dispatch = useDispatch();
import { showToaster } from "../features/toaster/toasterSlice";

const toggleToaster = (message: string) => {
  let timeout;
  clearTimeout(timeout);
  dispatch(showToaster(message));
  timeout = setTimeout(() => {
    dispatch(showToaster(null));
  });
  2000;
};

export default toggleToaster;
