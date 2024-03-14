import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Login
                </button>
                <NavLink
                  to="/sign-up"
                  className="text-red-500 mt-5 link link-primary"
                >
                  Create an account
                </NavLink>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Thank You</h3>
                    <p className="py-4">
                      {" "}
                      "Coding is not just about writing lines of code; it's
                      about solving problems, designing solutions, and
                      continuously learning and improving."
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
