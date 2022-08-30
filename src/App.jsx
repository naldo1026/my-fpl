import useFetch from "use-http"

function App() {
  const options = {}
  const { loading, data } = useFetch(
    "https://fantasy.premierleague.com/api/bootstrap-static/",
    options,
    []
  )

  return (
    <>
      {loading && <h1>Loading</h1>}
      {console.log(data)}
    </>
  )
}

export default App
