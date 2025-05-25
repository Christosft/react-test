const CardLogo = () => {
  return (

      <>
          <div className="flex items-center justify-center p-6 gap-3">
          {/*<img*/}
          {/*    className="my-4 w-30 h-30"*/}
          {/*    src="/gal_logo.png"*/}
          {/*    alt="Card Logo"/>*/}
          <h1 className="font-bold text-5xl text-shadow-amber-50">Πεντε Α.Ε Supermarket Γαλαξιας </h1>
              <div>
                  <ul className="font-bold text-sm text-shadow-amber-50">
                      <li>Τηλ.Επικοινωνιας: 210 9000000</li>
                      <li>Email: www.pente@gmail.gr</li>
                      <li>Διευθυνση: Λενορμαν 129</li>
                  </ul>
              </div>
          </div>
      </>
  )
}
export default CardLogo