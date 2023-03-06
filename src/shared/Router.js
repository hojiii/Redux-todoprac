import React from 'react'
import Home from '../page/Home';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Detail from '../page/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Detail/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router