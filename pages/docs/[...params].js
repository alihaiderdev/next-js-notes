// this is the example of catch all routes
// another usecase of catch all routes is houses with minimum and maximum budget price

// [...params].js  =>  in this scenario if we got to docs page we see 404 page not found
// [[...params]].js  =>  in this scenario if we got to docs page we see home page

import { useRouter } from 'next/router';

const Docs = () => {
  const router = useRouter();
  //   const { params } = router.query;
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  } else return <h1>Docs Home Page</h1>;
};

export default Docs;
