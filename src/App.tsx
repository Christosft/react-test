import Layout from "./components/Layout";
import CardDetails from "./components/CardDetails.tsx";

function App() {



        return (
            <>
                <Layout>
                <h1 className="font-bold text-4xl text-black mt-4 mb-4">Personal details</h1>
                    <CardDetails  />

                </Layout>
            </>
        )
    }


export default App
