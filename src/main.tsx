import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MainPage from "./MainPage.tsx";
import Blog from "./blog.tsx";

export function Blog2() {
  const { id } = useParams();
  console.log(id);
  return (<div>Hi, I'm Franco Gutierrez</div>)
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/blog/:id' element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
