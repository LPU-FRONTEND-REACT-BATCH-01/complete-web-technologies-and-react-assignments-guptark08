import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route 
} from "react-router-dom";

import RootLayout from "@/shared/components/layouts/RootLayout";
import NotFoundPage from "@/shared/components/NotFoundPage";

// Feature Pages (Pharmacy project ke features)
import HomePage from "@/features/home/pages/HomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    /* Parent Route: Isme humara RootLayout hai jo Header/Navbar handle karega.
       errorElement: Pura app crash hone se bachayega agar koi error aaye.
    */
    <Route 
      path="/" 
      element={<RootLayout />} 
      errorElement={<NotFoundPage />}
    >
      {/* index: Ye batata hai ki jab path exact "/" ho, toh ye page dikhao.
      */}
      <Route index element={<HomePage />} />

      {/* Future Features Examples:
         <Route path="auth/*" element={<AuthRoutes />} /> 
         <Route path="orders" element={<OrderListPage />} />
      */}

      {/* Wildcard: Agar koi galat URL daale (404) */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);