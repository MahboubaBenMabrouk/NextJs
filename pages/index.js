import client from "../apollo/client";
import HomePage from "../components/HomeSections/index"
import GET_MENUS  from "../queries/getMenus";
import {useRouter} from "next/router";

export default function Home({layout}) {
  const router = useRouter();
  if (router.isFallback) {
      return <div>Loading...</div>
  }
  return <HomePage/>;
}
 

export const getStaticProps = async () => {
  const dataMenu =await client.query({
    query:GET_MENUS,
});

  return{
    props:{
      layout:{
        menus:{
          headerMenus:dataMenu?.data?.headerMenus?.edges||[],
        }
      }
    }
  }
}