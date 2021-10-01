import {ApolloClient,InMemoryCache,createHttpLink} from "@apollo/client";


const defaultOptions = {
    watchQuery:{
        fetchPolicy:"no-cache",
        errorPolicy:"ignore"
    },
    query:{
        fetchPolicy: "no-cache",
        errorPolicy: "all"
    }
};

const cache = new InMemoryCache({
    resultCaching: false
});

const link = createHttpLink({
    uri:`${process.env.NEXT_PUBLIC_ADMIN_SITE}/graphql`,
});


const client = new ApolloClient({
    link,
    cache,
    defaultOptions
});

export default client;