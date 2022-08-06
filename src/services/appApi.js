import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appApi = createApi({
	reducerPath: "appApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5001",
	}),
	endpoints: (builder) => ({
		// -- Создание пользователя
		signupUser: builder.mutation({
			query: (user) => ({
				url: "/users",
				method: "POST",
				body: user,
			}),
		}),
		// -- Вход пользователя
		loginUser: builder.mutation({
			query: (user) => ({
				url: "/users/login",
				method: "POST",
				body: user,
			}),
		}),
		// -- Вход пользователя
		logoutUser: builder.mutation({
			query: (payload) => ({
				url: "/logout",
				method: "DELETE",
				body: payload,
			}),
		}),
	}),
});

export const {
	useSignupUserMutation,
	useLoginUserMutation,
	useLogoutUserMutation,
} = appApi;

export default appApi;
