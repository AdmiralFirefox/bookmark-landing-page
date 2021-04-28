import React from "react";
import { useForm } from "react-hook-form";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const FormButton = withStyles(() => ({
  root: {
    color: "#fff",
    backgroundColor: "hsl(0, 94%, 66%)",
    border: "3px solid hsl(0, 94%, 66%)",
    "&:hover": {
      backgroundColor: "#fff",
      color: "hsl(0, 94%, 66%)",
    },
  },
}))(Button);

function FormValidation({ login }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    alert("Updates will be sent in your gmail");
    // await login(data.email, data.password);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-validation">
        <section className="form-inputs">
          <TextField
            variant="filled"
            id="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            type="email"
            placeholder="Enter you email address"
            style={{ marginRight: "1em" }}
            InputLabelProps={{
              style: {
                color: "#fff",
                fontWeight: "500",
                transition: "all .3s ease-in-out",
              },
            }}
            InputProps={{
              style: {
                color: "#fff",
                fontWeight: "500",
                transition: "all .3s ease-in-out",
              },
            }}
          />
          {errors.email && (
            <span role="alert" className="warning-message">
              {errors.email.message}
            </span>
          )}
        </section>
        <FormButton variant="contained" type="submit" id="submit-form-button">
          Contact Us
        </FormButton>
      </form>
    </div>
  );
}

export default FormValidation;
