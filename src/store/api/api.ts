import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRecipe} from "../../types/recipe.types";

const API_URL = 'http://localhost:4200/recipes'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({
        getRecipes: builder.query<IRecipe[], string>({
            query: (queryTerm) => `/?_sort=id&_order=desc&q=${queryTerm}`,
            providesTags: (result, error, queryTerm) => [{
                type: 'Recipe',
                id: queryTerm,
            }]
        }),
    })
})

export const {useGetRecipesQuery} = api
