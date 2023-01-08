import { Formik, FormikHelpers, FormikProps } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { LoginMetadata } from "../metadata/Login";
import { initialValuesFromMetadata } from "../utils/formHandler";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Log In</title>
      </Head>

      <main className="h-screen">
        <header className="p-4">
          <h1 className="text-lg font-semibold">Log In</h1>
        </header>

        <div className="w-full flex justify-center items-center">
          <div className="p-4 shadow-md rounded">
            <Formik
              initialValues={initialValuesFromMetadata(LoginMetadata)}
              onSubmit={(
                values: any,
                { setSubmitting }: FormikHelpers<any>
              ) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
            >
              {({ handleSubmit }: FormikProps<any>) => {
                return (
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    {LoginMetadata.map((metadata) => (
                      <>
                        <label>{metadata.label}</label>
                        <input
                          className="p-2 my-2 border border-blue-600 rounded"
                          id={metadata.name}
                          name={metadata.name}
                          placeholder={metadata.placeholder}
                          type={metadata.type}
                        />
                      </>
                    ))}

                    <button type="submit">Submit</button>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
