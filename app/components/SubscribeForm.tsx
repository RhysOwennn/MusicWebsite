import { useState } from "react"

export const SubscribeForm = () => {
    const [email, setEmail] = useState<String>("")
    const [name, setName] = useState<String>("")
  
    const handleSubmit = async (event: React.FormEvent) => {
      // TODO
    }
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setEmail(value)
    }
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setName(value)
    }
  
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Subscribe now!</h1>
            <p className="py-6">Leave your name and email if you'd like the latest Sybersyn music releases.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="fields[name]" type="text" onChange={handleEmailChange} placeholder="Name" className="input input-bordered" value={name}/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text">Email</span>
                </label>
                <input name="email_address" type="email" onChange={handleNameChange} placeholder="Email" className="input input-bordered" value={email} required/>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }