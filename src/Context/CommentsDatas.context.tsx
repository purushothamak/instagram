import React, { ReactNode, createContext, useContext, useState } from 'react';

interface Comment {
    commentEachId: number;
    text: string;
}

interface CommentContextType {
    comments2: Record<number, Comment[]>;
    addComment: (commentEachId: number, text: string) => void;
    addSavedPosts: (savId: number) => void;
    savedPostId: number;
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

export const useCommentContext = () => {
    return useContext(CommentContext)!;
};



export const CommentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [comments2, setComments2] = useState<Record<number, Comment[]>>({});
    const [savedPostId, setSavedPostId] = useState<number>(0);

    const addComment = (commentEachId: number, text: string) => {
        if (text.trim() !== '') {
            setComments2((prevComments) => ({
                ...prevComments,
                [commentEachId]: [...(prevComments[commentEachId] || []), { commentEachId, text }],
            }));
        }
    };

    const addSavedPosts = (savId: number) => {
        console.log("Clicked matcha", savId)
        setSavedPostId(savId)
    }

    console.log(savedPostId)
    return (
        <CommentContext.Provider value={{ comments2, addComment, addSavedPosts, savedPostId }}>
            {children}
        </CommentContext.Provider>
    );
};