export default function Index() {
  return (
    <>
      <div className="hero min-h-screen bg-tertiary">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-primary">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary">
              Hello there
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-secondry text-primary border-quaternary hover:bg-primaryHover hover:text-secondry hover:border-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
