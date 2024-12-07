import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import AllCampaign from "../Pages/AllCampaign/AllCampaign";
import AddCampaign from "../Pages/AddCampaign/AddCampaign";
import MyDonation from "../Pages/MyDonation/MyDonation";
import MyCampaign from "../Pages/MyCampaign/MyCampaign";
import PrivateRoute from "../Components/PrivateRoute";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DetailsPage from "../Details/Details";
import UpdatePage from "../Pages/Update/UpdatePage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>
        
      }, {
        path: '/allCampaign',
        element: <AllCampaign></AllCampaign>,
        loader:()=>fetch('http://localhost:5000/campaign')
      }, {
        path: '/addCampaign',
        element: <PrivateRoute>
          <AddCampaign></AddCampaign>
        </PrivateRoute>
      }, {
        path: '/myCampaign',
        element: <PrivateRoute>
          <MyCampaign></MyCampaign>
        </PrivateRoute>,
      }, {
        path: '/myDonations',
        element: <PrivateRoute>
          <MyDonation></MyDonation>
        </PrivateRoute>
      },
      {
        path: "campaign/:_id",
        element: <PrivateRoute>
          <DetailsPage></DetailsPage>
        </PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/campaign/${params._id}`)
      }, {
        path: "/campaign/update/:id",
        element: <PrivateRoute>
          <UpdatePage></UpdatePage>
        </PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/campaign/update/${params.id}`)
      },
      {
        path: "/login",
        element:<Login></Login>
      }, {
        path: "/register",
        element:<Register></Register>
      }, 
        
      
    ]
  }
])

export default routes;