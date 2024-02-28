import React, { useEffect, useState } from 'react'
import { useRenderSession } from 'vtex.session-client'
import { Button, Input, Checkbox, Modal } from 'vtex.styleguide'
import { useMutation } from 'react-apollo'
import SAVE_NEWSLETTER from "../graphql/saveNewsletter.gql"


const Newsletter: React.FC = () => {
  const { session } = useRenderSession()
  const [email, setEmail] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<string[]>([]);
  const [saveNewsletterMutation, saveNewsletterMutationResponse] = useMutation(SAVE_NEWSLETTER, {
    variables: {
      email: "teste@email.com",
      name: "Marianna",
      age: 20
    }
  })

  useEffect(() => {
    if(saveNewsletterMutationResponse?.data) {
      console.log('resp', saveNewsletterMutationResponse.data)
    }
  }, [saveNewsletterMutationResponse])


  function handleNewsletter(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    //@ts-ignore
    const userEmail: string = session?.namespaces?.profile?.email.value
    setEmail(userEmail)
    setOpenModal(true)
  }

  const handlePreferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const preference = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
        setPreferences([...preferences, preference]);
    } else {
        setPreferences(preferences.filter(item => item !== preference));
    }
};

  const options = [
    { label: 'Tecnologia', value: 'tecnologia' },
    { label: 'Jogos', value: 'jogos' },
    { label: 'Saúde', value: 'saude' },
    { label: 'Esportes', value: 'esportes' },
    { label: 'Finanças', value: 'financas' }
];

const seeOptions = () => {
  saveNewsletterMutation()
}

  return (
    <div>
      <div>
        <h1>Newsletter</h1>
        <p>Gostaria de se cadastrar em nossa newsletter? </p>
        <Button onClick={handleNewsletter}>Cadastrar</Button>
      </div>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div>
          <Input
            type="text"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          >
          </Input>
        </div>
        <div>
                <p>Preferências:</p>
                {options.map(option => (
                    <div className="mb3" key={option.value}>
                        <Checkbox
                            checked={preferences.includes(option.value)}
                            label={option.label}
                            id={`option-${option.value}`}
                            name="preferences"
                            onChange={handlePreferenceChange}
                            value={option.value}
                        />
                    </div>
                ))}
            </div>
            <Button onClick={seeOptions}>Enviar</Button>

      </Modal>

    </div>
  )
}

export default Newsletter
