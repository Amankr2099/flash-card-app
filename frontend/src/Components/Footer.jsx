
export default function Footer() {
  const date = new Date()
  return (
    <footer className="text-center bg-white mt-3">
  <div className="container pt-4">
    <section className="mb-3 ">
     

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"/></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google" /></a>


      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"/></a>
    </section>
  </div>

  <div className="text-center p-4">
  &copy; {date.getFullYear()} Company, Inc. All rights reserved to
    <a className="text-body" href="#"> FlashCard</a>
  </div>
</footer>
  )
}
