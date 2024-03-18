import Navbar from "../components/Navbar"
import Headline from "../components/Headline"
import Centered from "../components/Centered"
import List from "../components/List"

function Articles() {
    return (
      <main>
        <section>
          <Navbar />
          <Headline title="Articles" />
          <Centered content= {
            <List className="w-96" />
          } />
          
        </section>
        </main>
    )
  }
  
  export default Articles