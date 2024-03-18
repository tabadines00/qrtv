import Navbar from "../components/Navbar"
import Headline from "../components/Headline"
import Centered from "../components/Centered"
import List from "../components/List"

function Contact() {
    return (
      <main>
        <section>
          <Navbar />
          <Headline title="Contact" />
          <Centered content= {
            <List className="w-96" />
          } />
          
        </section>
        </main>
    )
  }
  
  export default Contact