import React, { useEffect, useState } from 'react'
import Stories from 'react-insta-stories';
import { Box } from '@mui/material';


interface Proprops {
    userIds?: number;
}

type Person = {
    heading: string | undefined;
    subheading: string | undefined;
    profileImage: string;
};


const StoryPreview: React.FC<Proprops> = ({ userIds }) => {
    const [previewProfiles, setPreviewProfiles] = useState({});


    const { name, username }: { name?: string, username?: string } = previewProfiles;


    let storyViewHeading: Person = {
        heading: name,
        subheading: username,
        profileImage: `https://i.pravatar.cc/100?u=${userIds}`,
    }

    const initialStories = [
        {
            url: 'https://img.freepik.com/premium-photo/abstract-background-inspired-by-surreal-beauty-ocean-incorporating-fluid-waves_953733-740.jpg?w=2000',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },
        {
            url: 'https://i.imgur.com/in5Jr1h.jpg',
            type: 'image',
            header: storyViewHeading,

        },
        {
            url: 'https://i.imgur.com/Zo5Kpnd.mp4',
            type: 'video',
            header: storyViewHeading
        },
        {
            url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            type: 'image',
            header: storyViewHeading,
        },
        {
            url: 'https://img.freepik.com/premium-photo/key-visual-colorful-tree-life-front-galaxy-universe-crystals-nebulae-supernova_492154-1452.jpg',
            type: 'image',
            header: storyViewHeading,
        },
    ]
    const initialStories2 = [
        {
            url: 'https://i0.wp.com/i.redd.it/76pc6hhcgvo51.jpg?resize=1200%2C800&ssl=1',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },
        {
            url: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            type: 'image',
            header: storyViewHeading,

        },
    ]
    const initialStories3 = [
        {
            url: 'https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },
        {
            url: 'https://i.imgur.com/in5Jr1h.jpg',
            type: 'image',
            header: storyViewHeading,

        },
    ]
    const initialStories4 = [
        {
            url: 'https://cutewallpaper.org/21/photo/7-Photo-Printing-Apps-to-Preserve-Your-Memories-Time.jpg',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },

    ]
    const initialStories5 = [
        {
            url: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },
        {
            url: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg',
            type: 'image',
            header: storyViewHeading,
        },
        {
            url: 'https://images.pexels.com/photos/355235/pexels-photo-355235.jpeg?cs=srgb&dl=pexels-pixabay-355235.jpg&fm=jpg',
            type: 'image',
            header: storyViewHeading,
        },
    ]
    const initialStories6 = [
        {
            url: 'https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },
        {
            url: 'https://i.imgur.com/in5Jr1h.jpg',
            type: 'image',
            header: storyViewHeading,

        },
    ]
    const initialStories7 = [
        {
            url: 'https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },
        {
            url: 'https://i.imgur.com/in5Jr1h.jpg',
            type: 'image',
            header: storyViewHeading,

        },
    ]
    const initialStories8 = [
        {
            url: 'https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },
        {
            url: 'https://i.imgur.com/in5Jr1h.jpg',
            type: 'image',
            header: storyViewHeading,

        },
    ]
    const initialStories9 = [
        {
            url: 'https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },
        {
            url: 'https://i.imgur.com/in5Jr1h.jpg',
            type: 'image',
            header: storyViewHeading,

        },
    ]
    const initialStories10 = [
        {
            url: 'https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE',
            type: 'image',
            header: storyViewHeading,
            duration: 1500,
        },
        {
            url: 'https://i.imgur.com/in5Jr1h.jpg',
            type: 'image',
            header: storyViewHeading,

        },
    ]


    let selectedObject;

    switch (userIds) {
        case 1:
            selectedObject = initialStories;
            break;
        case 2:
            selectedObject = initialStories2;
            break;
        case 3:
            selectedObject = initialStories3;
            break;
        case 4:
            selectedObject = initialStories4;
            break;
        case 5:
            selectedObject = initialStories5;
            break;
        case 6:
            selectedObject = initialStories6;
            break;
        case 7:
            selectedObject = initialStories7;
            break;
        case 8:
            selectedObject = initialStories8;
            break;
        case 9:
            selectedObject = initialStories9;
            break;
        case 10:
            selectedObject = initialStories10;
            break;

        default:
            selectedObject;
    }



    useEffect(() => {
        const renderUserProfiles = async () => {
            try {
                const userProfiles = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${userIds}`
                );
                if (!userProfiles.ok) {
                    throw new Error("Network error.");
                }

                const profileDatas = await userProfiles.json();

                setPreviewProfiles(profileDatas);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        renderUserProfiles();
    }, [userIds]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stories
                stories={selectedObject}
                defaultInterval={2000}
            />
        </Box>
    )
}

export default StoryPreview;

























