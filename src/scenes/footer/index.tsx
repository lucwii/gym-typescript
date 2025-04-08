import Logo from "../../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-red-200 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="Logo" src={Logo} />
                <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quae nulla repudiandae odio, ex provident ipsum autem temporibus assumenda neque sint voluptas aut rerum nostrum qui, distinctio saepe reiciendis quibusdam.</p>
                <p>Evogym all rights reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Lorem, ipsum dolor.</p>
                <p className="my-5">Lorem ipsum dolor sit amet.</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact us</h4>
                <p className="my-5">Lorem, ipsum dolor.</p>
                <p className="my-5">Lorem ipsum dolor sit amet.</p>
                <p>(333)-425-6825</p>
            </div>
            <div>

            </div>
        </div>
    </footer>
  )
}

export default Footer