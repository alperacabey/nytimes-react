import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import NyTimes from "../services/nytimes.service"

export type SearchRequest = {
    q: string
    page: number
}

type ArticleState = {
    docs: Array<Article>;
    selected: Article | undefined;
    q: string;
    page: number,
    serviceStatus: 'idle' | 'pending' | 'succeeded' | 'failed'
}


class Headline {
    main: string;
    kicker: string;
    constructor(item: Headline) {
        this.main = item.main;
        this.kicker = item.kicker;
    }
};

export class Article {
    _id: string;
    headline: Headline;
    section_name: string;
    pub_date: string;
    uri: string;
    web_url: string;
    constructor(item: Article) {
        this._id = item._id
        this.headline = new Headline(item.headline)
        this.section_name = item.section_name
        this.pub_date = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'full', timeStyle: 'medium' }).format(new Date(item.pub_date))
        this.uri = item.uri
        this.web_url = item.web_url
    }
}

export const search = createAsyncThunk(
    'article/search',
    async (params: SearchRequest) => {
        try {
            let { data: { response: { docs } } } =
                await NyTimes.articleSearch(params)
            return docs
        } catch (error: any) {
            toast.error(error)
        }

    }
)

export const initialState = () => ({
    docs: [],
    selected: undefined,
    q: '',
    page: 0,
    serviceStatus: 'idle',
} as ArticleState)

export const articleSlice = createSlice({
    name: 'organization',
    initialState: initialState(),
    reducers: {
        resetArticles: state => {
            state.docs = []
            state.selected = undefined
            state.serviceStatus = 'idle'
            state.q = ''
            state.page = 0
        },
        selectArticle: (state, action) => {

            state.selected = action.payload
        },
        setQuery: (state, action) => {
            state.q = action.payload
        },
        prevPage: (state) => {
            if (state.page > 0) state.page--
        },
        nextPage: (state) => {
            state.page++
        }
    },
    extraReducers: (builder) => {
        builder
            //search
            .addCase(search.pending, (state) => {
                state.serviceStatus = 'pending';
                console.log('pending')
            })
            .addCase(search.fulfilled, (state, action) => {
                state.serviceStatus = 'idle'
                if (action.payload) state.docs = action.payload.map((item: Article) => (new Article(item)))
            })
            .addCase(search.rejected, (state) => {
                state.serviceStatus = 'failed'
            })
    },
})

// Action creators are generated for each case reducer function
export const { setQuery, resetArticles, selectArticle, prevPage, nextPage } = articleSlice.actions

export default articleSlice.reducer