import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import AllCampaign from "../Pages/AllCampaign/AllCampaign";
import AddCampaign from "../Pages/AddCampaign/AddCampaign";
import MyDonation from "../Pages/MyDonation/MyDonation";
import MyCampaign from "../Pages/MyCampaign/MyCampaign";

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
        element:<AllCampaign></AllCampaign>
      }, {
        path: '/addCampaign',
        element:<AddCampaign></AddCampaign>
      }, {
        path: '/myCampaign',
        element:<MyCampaign></MyCampaign>
      }, {
        path: '/myDonations',
        element:<MyDonation></MyDonation>
      }
    ]
  }
])

export default routes;