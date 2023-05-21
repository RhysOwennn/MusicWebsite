import { Form, useActionData } from "@remix-run/react";
import { AlertComponent } from "./AlertComponent";
import { useEffect, useState } from "react";

interface SubscribeInfo {
  title: string;
  subscribe: string;
}

export const SubscribeForm = ({
  subscribeInfo,
}: {
  subscribeInfo: SubscribeInfo;
}) => {
  let actionData = useActionData();

  const [state, setState] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    actionData?.subscription
      ? setState("success")
      : actionData?.error
      ? setState("error")
      : setState("idle");

    setSubmitting(false);
  }, [actionData]);

  return (
    <div className="hero mt-36">
      {state !== "success" && (
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left p-12">
            <h1 className="text-5xl font-bold">{subscribeInfo.title}</h1>
            <p className="py-6">{subscribeInfo.subscribe}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Form
              method="post"
              className="card-body"
              onSubmit={() => setSubmitting(true)}
            >
              <fieldset className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </fieldset>
              <fieldset className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email_address"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </fieldset>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={isSubmitting}>
                  Subscribe
                </button>
                {isSubmitting && state !== "error" ? (
                  <progress className="progress w-70 mt-2" />
                ) : null}
              </div>
            </Form>
            {state === "error" ? (
              <p>
                <AlertComponent
                  alertType={"Error"}
                  message={actionData.message || "Something went wrong."}
                />
              </p>
            ) : null}
          </div>
        </div>
      )}
      <div hidden={state !== "success"}>
        <AlertComponent
          alertType={"success"}
          message={
            "Congratulations, you've subscribed! 🎉 We'll keep you updated."
          }
        />
      </div>
    </div>
  );
};
