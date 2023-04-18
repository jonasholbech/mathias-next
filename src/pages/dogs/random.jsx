export default function RandomDog({ data }) {
  return (
    <>
      <h1>Random</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data.message} alt="Some random dog" />
    </>
  );
}

export async function getServerSideProps() {
  // Get data from api
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}
