import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useCommentContext } from '../../Context/CommentsDatas.context';


interface Post {
    uId: number;
    uImg: string;
    uProfileLogo: string
    uName: string;
    id: number;
    uBrand: string;
}

const SavedPostsUI = () => {

    const { selectedItems } = useCommentContext();

    return (
        <div>
            <ImageList >
                {selectedItems.map((item: Post, i: number) => (
                    <ImageListItem key={i} >
                        <img
                            src={`${item.uImg}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.uImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.uImg}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.uName}
                            subtitle={<span>by: {item.uBrand}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}


export default SavedPostsUI

