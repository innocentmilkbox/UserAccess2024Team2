import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//Lazy-loaded components
const CommonIssue = lazy(() => import("Views/CommonProblem/CommonIssue/LayoutScripts/Cppl_CommonIssue"));

const Loading = () => {
   return (
      <>Loading...</>
   )
}
const RouterComponent = () => {
    return (
        <Suspense fallback={<Loading></Loading>}>
            <Routes>
                <Route path="common-issue" element={<CommonIssue />}></Route>
            </Routes>
        </Suspense>
    );
};

export default RouterComponent;


 