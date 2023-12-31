import React, { ReactNode, createContext, useContext, useState } from 'react';

interface Comment {
    commentEachId: number;
    text: string;
}

interface CommentContextType {
    comments2: Record<number, Comment[]>;
    addComment: (commentEachId: number, text: string) => void;
    addSavedPosts: (post: Post) => void;
    selectedItems: Post[];
}

interface Post {
    [x: string]: any;
    uId: number;
    uImg: string;
    uProfileLogo: string
    uName: string;
    id: number;
    uBrand: string;
}
const CommentContext = createContext<CommentContextType | undefined>(undefined);

export const useCommentContext = () => {
    return useContext(CommentContext)!;
};


export const CommentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [comments2, setComments2] = useState<Record<number, Comment[]>>({});
    const [selectedItems, setSelectedItems] = useState<Post[]>([]);



    const addComment = (commentEachId: number, text: string) => {
        if (text.trim() !== '') {
            setComments2((prevComments) => ({
                ...prevComments,
                [commentEachId]: [...(prevComments[commentEachId] || []), { commentEachId, text }],
            }));
        }
    };

    const addSavedPosts = (posts: Post) => {
        // console.log("Clicked matcha", posts)
        setSelectedItems([...selectedItems, posts])
    }

    return (
        <CommentContext.Provider value={{ comments2, addComment, addSavedPosts, selectedItems }}>
            {children}
        </CommentContext.Provider>
    );
};