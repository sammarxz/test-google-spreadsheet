import Home from '../screens/Home';

export async function getServerSideProps() {
const dataFromAPI = await fetch(`http://localhost:3000/api/books`)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((res) => {
    return res
  });

  return {
    props: {
      title: dataFromAPI.title,
      books: dataFromAPI.books
    }
  }
}

export default Home;
