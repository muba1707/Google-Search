import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

function Search({ results }) {
  const router = useRouter();

  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "0";

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  //After the server process the request it will send to the clientpass the result to the client
  return {
    props: {
      results: data,
    },
  };
}

export default Search;
