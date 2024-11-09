import { posts } from "../../model/posts/postsModels";

export function getPost (req:any, res:any){
    res.json({ posts });
}