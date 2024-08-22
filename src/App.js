import { Provider, useSelector } from "react-redux";
import DashBoard from "./components/DashBoard/DashBoard";
import Header from "./components/Header/Header";
import AddWidgetForm from "./components/Forms/AddWidgetForm";

function App() {
  const isAddWidget = useSelector((store) => store?.widget?.isAddWidget);

  return (
    <div className="bg-slate-100 w-full h-full">
      <Header />
      <DashBoard />
      {isAddWidget && <AddWidgetForm />}
    </div>
  );
}

export default App;
