import { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface ExplorProps {
    url: string;
}
const drawerWidth = 240

const Explore = () => {
    const [explorePosts, setExplorePosts] = useState<ExplorProps[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        try {
            const exploreImages = async () => {
                const exploreDatas = await fetch(`https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100&_page=${page}`)
                if (!exploreDatas.ok) {
                    throw new Error("Network response was not ok");
                }
                const exploreData = await exploreDatas.json();
                console.log("111111", exploreData.photos)

                setExplorePosts((prevPosts) => [...prevPosts, ...exploreData.photos])
            }
            exploreImages();
        } catch (error) {
            console.log("Quinzz", error)
        }
    }, [page])

    const handleInfiniteScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >
                document.documentElement.scrollHeight
            ) {
                setPage((prev) => prev + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => window.removeEventListener('scroll', handleInfiniteScroll)
    }, [])

    return (
        <div>
            <ImageList sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }} cols={3} rowHeight={164}>
                {explorePosts.map((item) => (
                    <ImageListItem key={item.url}>
                        <img
                            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.url}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default Explore;




// https://dummyjson.com/products?_limit=9&_page=${page}

