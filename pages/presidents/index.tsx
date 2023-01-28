import Link from 'next/link'

function PresidentList({ presidents }) {
  return (
    <>
      <p>List of US presidents</p>
      {presidents.map((president) => (
        <ul key={president.id}>
          <Link href={`presidents/${president.id}`}>
            <li>{president.name}</li>
          </Link>
        </ul>
      ))}
    </>
  )
}

export default PresidentList

export async function getStaticProps(context) {
  const response = await fetch('https://api.sampleapis.com/presidents/presidents', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  return {
    props: {
      // presidents: data.slice(0, 3), //take only 3 names from the list
      presidents: data,
    },
  }
}
