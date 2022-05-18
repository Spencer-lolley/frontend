import React from 'react';
import {useRouter} from 'next/router';
import data from '../../utils/data';

export default function ProcuctScreen() {
    const router = useRouter()
    const {slug} = router.query;
    const product = data.products.find((a) => a.slug === slug);
    if (!product){
        return <div className='flex justify-center w-full mt-10 font-bold text center'>Product Not Found</div>
    }
  return (
    <div>[slug]</div>
  )
}
