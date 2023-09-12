import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CommentProps {
    map: any;
    id: number;
    text: string;
}

interface CommentsContextType {
    feedsComments: CommentProps[];
    feedCmtId?: number;
    addFeedComments: (todo: CommentProps) => void;
    // getFeedCommentsById: (id?: number) => CommentProps[];
}
interface CommentsProviderProps {
    children: ReactNode;
}
const FeedsCommentsContext = createContext<CommentsContextType | undefined>(undefined);

export const useFeedsContext = () => {
    const fContext = useContext(FeedsCommentsContext);
    if (!fContext) {
        throw new Error('useFeedsContext must be used within a FeedsProvider');
    }
    return fContext;
    // return useContext(FeedsCommentsContext);
}


export const FeedsCommentsProvider: React.FC<CommentsProviderProps> = ({ children }) => {
    const [feedsComments, setFeedsComments] = useState<CommentProps[]>([]);
    const [feedCmtId, setFeedCmtId] = useState<number>();

    console.log("This is the feeds comments::", feedsComments)

    const addFeedComments = (comments: CommentProps) => {
        setFeedsComments([...feedsComments, comments]);
    };



    // const addFeedComments = (commentEachId: number, text: string) => {
    //     const newComment = { commentEachId, text };
    //     setFeedsComments((prevComments: any[]) => ({
    //         ...prevComments,
    //         [commentEachId]: [...(prevComments[commentEachId] || []), newComment],
    //     }));
    // };



    return (
        <FeedsCommentsContext.Provider value={{ feedsComments, addFeedComments, feedCmtId }}>
            {children}
        </FeedsCommentsContext.Provider>
    );
};




















// function setComments(arg0: (prevComments: any) => any) {
//     throw new Error('Function not implemented.');
// }

    // const addFeedComments = (id: number, text: string) => {
    //     const newComment = { id, text };
    //     setFeedsComments((prevComments) => ({
    //         ...prevComments,
    //         [id]: [...(prevComments[id] || []), newComment],
    //     }));
    // };
