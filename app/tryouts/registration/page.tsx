"use client"
import { useRouter, useSearchParams} from 'next/navigation';

export default function Registration() {
  const params = useSearchParams();
  const type = params.get('tryout')
 
  console.log(params)
 
  return <>
      <div>
      <h1>Tryout Registration Page</h1>
      <p>Tryout: {type}</p>
    </div>
  </>
}