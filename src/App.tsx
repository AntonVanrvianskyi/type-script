import React from 'react';
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostsPage from "./pages/PostsPage";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path={'/'} element={<HomePage/>}/>

      <Route path={'/todos'} element={<TodosPage/>}/>
      <Route path={'/albums'} element={<AlbumsPage/>}/>
      <Route path={'/comments'} element={<CommentsPage/>}>
        <Route path={':postId'} element={<PostsPage/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
