import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PageLoader from "./components/commons/Loader/PageLoader";

const Home = lazy(
  () => import(/* webpackChunkName: "home-page" */ "./pages/index")
);
const Detail = lazy(
  () => import(/* webpackChunkName: "detail-page" */ "./pages/detail")
);
const Pokebag = lazy(
  () => import(/* webpackChunkName: "pokebag-page" */ "./pages/pokebag")
);

export default function App() {
  return (
    <Router>
      <Suspense fallback>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokebag" element={<Pokebag/>} />
          <Route path="/:id" element={<Detail/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
