import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import GoogleLogin from 'react-google-login'
import { login } from 'utils/login'
// style
import styles from './styles.module.scss'
import { useStore } from 'stores'
import { schema, onSubmit } from 'utils/schema'
import { useHistory } from 'react-router'
import InputField from 'components/InputField'
import { useObserver } from 'mobx-react-lite'

const SingIn: React.FC = () => {
 
  const history = useHistory()
  const { authorizationStore } = useStore()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const responseGoogle = (response: any) => {
    login(response.access_token)
    authorizationStore.setAccountName(response.profileObj.familyName + '' + response.profileObj.givenName)
    history.push('/')
  }

  const handleSignIn = async () => {
    const values = getValues()

    if (values) {
      const dataFields = {
        email: values.email,
        password: values.password,
      }
      const data = await authorizationStore.signIn(dataFields)

      if (data.token) {
        login(data.token)
        authorizationStore.setAccountName(data.email)
        history.push('/')
      }
    }
  }

  const toSignUp = () => {
    history.push('/register')
  }

  return useObserver(() => (
    <div className={styles.signInContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputField
          register={register}
          type="text"
          title="E-mail"
          name="email"
          errMessage={errors.email?.message}
          onChange={() => {}}
        />
        <InputField
          register={register}
          type="password"
          title="Password"
          name="password"
          errMessage={errors.password?.message}
          onChange={() => {}}
        />

        <input
          type="submit"
          value="Sign in"
          className={styles.submitButton}
          onClick={handleSignIn}
        />
      </form>

 {/*      <div className={styles.googleButton}>
        <GoogleLogin
          clientId="1094878947480-gqprqhjnhbt3m5b5igu5nton88da8gdd.apps.googleusercontent.com"
          buttonText="Sign in with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
      </div> */}

      <a href="" className={styles.link} onClick={toSignUp}>
        Don't have an account yet? Sign up
      </a>
    </div>
  ))
}

export default SingIn
