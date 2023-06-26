import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Clearance Helper</span></h1>
            </header>
            <main className="public__main">
                <p>We have set this site up to provide the easiest way to manage your clearance document needs.</p>
                <address className="public__addr">
                    William Maroon<br />
                    127 Antigua Dr<br />
                    Cocoa Beach, FL 32931<br />
                    <a href="tel:+2062767327">(206) 276-7327</a>
                </address>
                <br />
                <p>Owner: William Maroon</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public