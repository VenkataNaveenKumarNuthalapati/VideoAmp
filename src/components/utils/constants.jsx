export const categories = [
    "All",
    "Manchu Manoj",
    "Live",
    "JavaScript",
    "News",
    "Java",
    "Music",
    "Gaming",
    "Computer files",
    "Hyderabadi cuisine",
    "Science fiction",
    "Thriller",
    "Martial Arts Movies",
    "Telugu cinema",
    "Masala",
    "Claymation",
    "Functions",
    "Mixes",
    "Recently uploaded",
    "Watched",
    "New to you",
];

export const API_URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
    import.meta.env.VITE_ACCESS_KEY;

export const SEARCH_API_URL =
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHANNEL_API =
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&part=id&" +
    "id=UC_x5XG1OV2P6uZZ5FSM9Ttw" +
    "&key=" +
    import.meta.env.VITE_ACCESS_KEY;
