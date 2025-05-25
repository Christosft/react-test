

type CardProps = {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    address: string
}

const CardDetails = ({firstname, lastname, email, phone, address} : CardProps) => {
    return (
        <>
            <ul className="list-disc pl-5 text-left text-4xl text-black text-shadow-amber-50 font-medium space-y-2">
                <li>Firstname: {firstname}</li>
                <li>Lastname: {lastname}</li>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
                <li>Address: {address}</li>
            </ul>

        </>
    )
}
export default CardDetails;