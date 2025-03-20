import { Route, Routes } from "react-router-dom";
import AddPostForm from "./features/posts/AddPostForm";
import PostLists from "./features/posts/PostLists";
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

function App() {
  return (
    // <main>
    // {/* <AddPostForm/>
    // <PostLists/> */}
    /* </main> */
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostLists />} />

          <Route path="post">
          <Route index element = {<AddPostForm/>} /> 
          <Route path=":postId" element = {<SinglePostPage/>}/> 
          <Route path="edit/:postId" element = {<EditPostForm/>}/>      
          </Route>
      </Route>
    </Routes>
  );
}

export default App;
