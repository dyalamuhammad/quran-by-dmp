import axios from "axios";
import { useParams } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASEURL
const baseUrl_doa = process.env.REACT_APP_BASEURL_DOA
export const getDoaList = async() => {
    const doa = await axios.get(`${baseUrl_doa}/doa`)
    return doa.data
}
export const getSurahList = async() => {
    const surah = await axios.get(`${baseUrl}/api/v2/surat`)
    return surah.data.data
}
export const getDetail = async(surahNumber) => {
    const surah = await axios.get(`${baseUrl}/api/v2/surat/${surahNumber}`)
    return surah.data.data
}
export const getDetailDoa = async() => {
    const doa = await axios.get(`${baseUrl}/doa/:id`)
    return doa.data
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}`)
    return search.data
}