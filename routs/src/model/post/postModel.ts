export interface Post {
    title: string;
    text: string;
    imageURL: string;
    id: string;
    editTitle?: boolean;
    editText?: boolean;
}

export let posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];