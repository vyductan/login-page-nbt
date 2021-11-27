import tawkTo from "tawkto-react";
import { useEffect } from "react";

const getKeyAndId = (directUrl: string) => {
  const x = directUrl.replace('https://tawk.to/chat/', '').split('/')
  return {
    tawkToPropertyId: x[0],
    tawkToKey: x[1]
  }
}


export default function useTawktoConfiged(directUrl: string) {
  const r = getKeyAndId(directUrl)
  useEffect(() => {
    if(r){
    const tawkToPropertyId = r.tawkToPropertyId;
    const tawkToKey = r.tawkToKey;
    tawkTo(tawkToPropertyId, tawkToKey);
    }
  }, [r]);
 return <></> 

}
