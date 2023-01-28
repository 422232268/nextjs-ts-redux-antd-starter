import { useRouter } from 'next/router'; //add this line
import Image from 'next/image';

function President({ president }) {
  const router = useRouter(); //add this line

  if (router.isFallback) {
    //add this line
    return <h2>The Page is loading...</h2>; //you can add any styles or have a custom page
  }
  console.log('president.photo=>', president.photo);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <h1>President : {president.name}</h1>
      {
        <div>
          <label>Years in office: </label>
          {president.yearsInOffice}
          <br />
          <label>Vice president: </label>
          {president.vicePresidents}
          <br />
          <Image
            loader={myLoader}
            width={250}
            height={300}
            src={president.photo}
            alt='responsive'
          />
          <img src={president.photo} />
        </div>
      }
    </>
  );
}

export default President;

export async function getStaticPaths() {
  const response = await fetch(
    'https://api.sampleapis.com/presidents/presidents',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  //creating an array of objects
  const paths = data.map(president => {
    return {
      params: { presidentId: `${president.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(context);
  const response = await fetch(
    `https://api.sampleapis.com/presidents/presidents/${params.presidentId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();

  return {
    props: {
      president: data,
    },
  };
}
