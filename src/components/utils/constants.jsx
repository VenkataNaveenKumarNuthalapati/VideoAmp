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

export const API_CATEGORIES_URL =
    "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=" +
    import.meta.env.VITE_ACCESS_KEY;

export const API_SEARCH_URL =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
    import.meta.env.VITE_ACCESS_KEY +
    "&q=";

export const API_LIVE_URL =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&type=video&key=" +
    import.meta.env.VITE_ACCESS_KEY +
    "&q=";

export const API_URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    import.meta.env.VITE_ACCESS_KEY;

export const SEARCH_API_URL =
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHANNEL_API =
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&part=id&" +
    "id=UC_x5XG1OV2P6uZZ5FSM9Ttw" +
    "&key=" +
    import.meta.env.VITE_ACCESS_KEY;

export const SPEC_VIDEO_BASE_PATH =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
// Ks-_Mh1QhMc&key="+import.meta.env.VITE_ACCESS_KEY
