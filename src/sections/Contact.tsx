import { useState } from "react"
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setResult("Sending....");
    const form = document.getElementById("form");
    const formData = new FormData(form as HTMLFormElement);

    formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      setTimeout(() => {
        setResult("")
      }, 5000);
    } else {
      console.log("Error", res);
      setResult(res.message);
      setTimeout(() => {
        setResult("")
      }, 5000);
    }
  };
  return (
    <section id="contact" className="bg-background md:h-full">
      <div className="lg:w-3/4 mx-auto">
        <h1 className="p-12 text-5xl font-bold text-primary-dark">Contact me:</h1>
        <form className="flex flex-col gap-2 w-full bg-transparent" onSubmit={onSubmit}>
        <input className="bg-transparent p-2 border-b-2 placeholder-darkText focus:outline-none" id='name' type="text" name="name" placeholder='Name' required/>
        <input className="bg-transparent p-2 border-b-2 placeholder-darkText focus:outline-none" id='email' type="email" name="email" placeholder='Your e-mail address' required/>
        <textarea className="bg-transparent p-2 border-b-2 placeholder-darkText focus:outline-none" id='message' name="message" placeholder='Type in your message' required></textarea>
        <button className="p-2 mt-2 rounded-lg w-1/4 mx-auto text-lightText" id='submit-button' type="submit">Submit</button>
      </form>
      <span>{result}</span>
      </div>
    </section>
  )
}

export default Contact