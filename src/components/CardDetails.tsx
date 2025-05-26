import { useState} from "react";

// type CardProps = {
//     firstname: string,
//     lastname: string,
//     email: string,
//     phone: string,
//     address: string


// const CardDetails = ({firstname, lastname, email, phone, address} : CardProps) => {

    const CardDetails = () => {
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [address, setAddress] = useState("");


        const ResetDetails = () => {
            setFirstname("");
            setLastname("");
            setEmail("");
            setPhone("");
            setAddress("");
            setAddress("");
        }

    return (
        <>


            <ul className="list-disc pl-5 text-left text-4xl text-black text-shadow-amber-50 font-medium space-y-2">
                <li>Firstname: {<input className="text-3xl" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />}</li>
                <li>Lastname: {<input className="text-3xl" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />}</li>
                <li>Email: {<input className="text-3xl w-[500px]" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />}</li>
                <li>Phone: {<input className="text-3xl" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />}</li>
                <li>Address: {<input className="text-3xl" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />}</li>
            </ul>

            <div className="mt-5">
                <button
                    className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={ResetDetails}
                >
                    Reset
                </button>
            </div>

        </>
    )
}
export default CardDetails;