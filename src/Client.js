import * as contentful from 'contentful';

export const Client = contentful.createClient({
    //I have removed api keys to environemnt variables
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_SPACE_TOKEN
})