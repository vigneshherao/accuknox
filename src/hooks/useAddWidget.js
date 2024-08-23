import { useDispatch } from "react-redux";
import { addData } from "../utils/dataSlice";
import { toast } from "react-toastify";
import { closeWidget } from "../utils/widgetSlice";

const useAddWidget = (nameRef, textRef1, textRef2, activeCategory) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeWidget());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const widgetName = nameRef.current.value;
    const widgetText1 = textRef1.current.value;
    const widgetText2 = textRef2.current.value;

    dispatch(
      addData({
        categoryName: activeCategory,
        widget: {
          name: widgetName,
          type: "pieChart",
          data:
            widgetText1 && widgetText2
              ? {
                  labels: [widgetText1, widgetText2],
                  values: [
                    Math.floor(Math.random() * 90) + 10,
                    Math.floor(Math.random() * 90) + 10,
                  ],
                  colors: [getRandomColor(), getRandomColor()],
                }
              : null,
        },
      })
    );

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    handleClose();
    toast.success("Widget added successfully!");
  };

  return [handleSubmit, handleClose];
};

export default useAddWidget;
