import "./Prices.css"

const PriceCard = ({ time, price }) => {
  return (
    <section className='prices__card'>
      <header>
        <h3>{time} Min</h3>
      </header>
      <body>
        <p>Physiotherapie</p>
        <p>{price} €</p>
      </body>
    </section>
  )
}

const Prices = () => {
  return (
    <article className='prices'>
      <header>
        <h1>Preise</h1>
      </header>
      <body>
        <h3>Meine Tarife:</h3>
        <PriceCard 
          time={30}
          price={55}
        />
        <PriceCard 
          time={45}
          price={80}
        />
      </body>
    </article>
  )
}

export default Prices