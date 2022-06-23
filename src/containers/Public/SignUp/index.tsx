import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useStore } from 'stores'
import { schema, onSubmit } from 'utils/schema'
import InputField from 'components/InputField'
// style
import styles from './styles.module.scss'
import { useHistory } from 'react-router'

const SingUp: React.FC = () => {
  const history = useHistory()
  const { authorization } = useStore()
  /* const [done, setDone] = useState(false) */

  const {
    register,
    handleSubmit,
	getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSignUp = async () => {
    const values = getValues()

    if (values) {
      const data = {
        email: values.email,
        password: values.password,
      }

      authorization.signUp(data)
    }
    
  }
  const toSignIn = (): void => {
    history.push('/login')
    authorization.resetError()
  }
  return useObserver(() => (
    <div className={styles.container}>
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
        <InputField
          register={register}
          type="password"
          title="Password"
          name="passwordConfirmation"
          errMessage={errors.passwordConfirmation?.message}
          onChange={() => {}}
        />

        <input type="submit" value="Sign up" className={styles.submitButton} />
      </form>

      <a href="/" className={styles.link} onClick={toSignIn}>
        Already have an account? Sign in
      </a>
    </div>
  ))
}

export default SingUp
