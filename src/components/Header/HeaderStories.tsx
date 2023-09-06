import { useEffect, useState } from 'react'
import { AppBar, Avatar, ImageList, ImageListItem, Typography } from '@mui/material';

const HeaderStories = () => {

    const [profiles, setProfiles] = useState<{ uName: string; imageUrl: string }[]>([])
    const drawerWidth = 240;
    useEffect(() => {
        const renderUserProfiles = async () => {
            try {
                const userProfiles = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!userProfiles.ok) {
                    throw new Error('Network error.');
                };

                const profileDatas = await userProfiles.json();
                console.log("qUIN dATAS:", profileDatas)

                const profile = profileDatas.map((profile: any) => ({
                    uName: profile.name,
                    imageUrl: `https://i.pravatar.cc/100?u=${profile.id}`
                }));

                setProfiles(profile);

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        renderUserProfiles();
    }, [])


    return (

        <ImageList
            sx={{
                gridAutoFlow: "column",
                gridTemplateColumns: "repeat(auto-fill,minmax(60px,1fr)) !important",
                gridAutoColumns: "minmax(60px, 1fr)",
                mx: 2
            }}
        >
            {profiles.map((profStory, i) => (
                <ImageListItem key={i}>
                    <Avatar alt={profStory.uName} src={profStory.imageUrl} sx={{ border: 1.5, height: 56, width: 56, borderColor: 'error.main' }} />
                    <Typography variant="body2" noWrap gutterBottom sx={{ fontSize: 12, overflow: "hidden", color: 'black', textOverflow: "ellipsis", }}>
                        {profStory.uName}
                    </Typography>
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default HeaderStories
