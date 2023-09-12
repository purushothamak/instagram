import React, { ReactNode, createContext, useContext, useState } from 'react';

interface Comment {
    commentEachId: number;
    text: string;
}

interface CommentContextType {
    comments2: Record<number, Comment[]>;
    addComment: (commentEachId: number, text: string) => void;
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

export const useCommentContext = () => {
    return useContext(CommentContext)!;
};



export const CommentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [comments2, setComments2] = useState<Record<number, Comment[]>>({});

    const addComment = (commentEachId: number, text: string) => {
        if (text.trim() !== '') {
            setComments2((prevComments) => ({
                ...prevComments,
                [commentEachId]: [...(prevComments[commentEachId] || []), { commentEachId, text }],
            }));
        }
    };
    return (
        <CommentContext.Provider value={{ comments2, addComment }}>
            {children}
        </CommentContext.Provider>
    );
};