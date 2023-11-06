import axios from "axios";
import { useParams } from "react-router-dom";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL
export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/api/v2/surat`)
    return movie.data.data
}
export const getDetail = async(surahNumber) => {
    const movie = await axios.get(`${baseUrl}/api/v2/surat/${surahNumber}`)
    return movie.data.data
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}`)
    return search.data
}