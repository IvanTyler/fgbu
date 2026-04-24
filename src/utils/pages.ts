import {v4 as uuidv4} from "uuid";

export const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages: number) => {
    let result = []
    for (let i = 0; i < totalPages; i++) {
        const page = {
            id: uuidv4(),
            pageNumber: i + 1,
        }
        result.push(page)
    }
    return result
}
