import Form from "next/form";

export const SignOutForm = () => {
  return (
    <Form
      action={() => {
        alert("Auth disabled for demo");
      }}
    >
      <button type="submit">Sign out</button>
    </Form>
  );
};

